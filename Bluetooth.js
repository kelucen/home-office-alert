import React from 'react';
import { Linking,Text, TouchableOpacity, View, SafeAreaView,ToastAndroid, Switch,  Platform,
    StyleSheet, Button,
    FlatList,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
var _ = require('lodash');
import BluetoothSerial from 'react-native-bluetooth-serial'


export default class Bluetooth extends React.Component {
   
    constructor (props) {
        super(props)
        this.state = {
          isEnabled: false,
          discovering: false,
          devices: [],
          unpairedDevices: [],
          connected: false,
        }
      }
      componentWillMount(){
    
        Promise.all([
          BluetoothSerial.isEnabled(),
          BluetoothSerial.list()
        ])
        .then((values) => {
          const [ isEnabled, devices ] = values
    
          this.setState({ isEnabled, devices })
        })
    
        BluetoothSerial.on('bluetoothEnabled', () => {
    
          Promise.all([
            BluetoothSerial.isEnabled(),
            BluetoothSerial.list()
          ])
          .then((values) => {
            const [ isEnabled, devices ] = values
            this.setState({  devices })
          })
    
          BluetoothSerial.on('bluetoothDisabled', () => {
    
             this.setState({ devices: [] })
    
          })
          BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
    
        })
    
      }
      connect (device) {
        this.setState({ connecting: true })
        BluetoothSerial.connect(device.id)
        .then((res) => {
          console.log(`Connected to device ${device.name}`);
          
          ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
        })
        .catch((err) => console.log((err.message)))
      }
      _renderItem(item){
    
        return(<TouchableOpacity onPress={() => this.connect(item.item)}>
                <View style={styles.deviceNameWrap}>
                  <Text style={styles.deviceName}>{ item.item.name ? item.item.name : item.item.id }</Text>
                </View>
              </TouchableOpacity>)
      }
      enable () {
        BluetoothSerial.enable()
        .then((res) => this.setState({ isEnabled: true }))
        .catch((err) => Toast.showShortBottom(err.message))
      }
    
      disable () {
        BluetoothSerial.disable()
        .then((res) => this.setState({ isEnabled: false }))
        .catch((err) => Toast.showShortBottom(err.message))
      }
    
      toggleBluetooth (value) {
        if (value === true) {
          this.enable()
        } else {
          this.disable()
        }
      }
      discoverAvailableDevices () {
        
        if (this.state.discovering) {
          return false
        } else {
          this.setState({ discovering: true })
          BluetoothSerial.discoverUnpairedDevices()
          .then((unpairedDevices) => {
            const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
            console.log(uniqueDevices);
            this.setState({ unpairedDevices: uniqueDevices, discovering: false })
          })
          .catch((err) => console.log(err.message))
        }
      }
      toggleSwitch(){
        BluetoothSerial.write("T")
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device')
          this.setState({ connected: true })
        })
        .catch((err) => console.log(err.message))
      }
      render() {
    
        return (
          <View style={styles.container}>
            <View style={{backgroundColor: 'black', height: 50}}><Text style={{color:'#5f9ea0', fontSize: 30, marginStart: 15, fontWeight: 'bold'}}>Bluetooth</Text></View>
          <View style={styles.toolbar}>
            
                <Text style={styles.toolbarTitle}>ON/OFF</Text>
                
                <View style={styles.toolbarButton}>
                  <Switch
                    value={this.state.isEnabled}
                    onValueChange={(val) => this.toggleBluetooth(val)}
                  />
                </View>
              
          </View>
          <Text style={{fontSize: 17, marginStart: 20, marginTop: 10, fontWeight: 'bold'}}>Conectar a um Dispositivo: </Text>
            <FlatList
              style={{flex:1}}
              data={this.state.devices}
              keyExtractor={item => item.id}
              renderItem={(item) => this._renderItem(item)}
            />
           
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#5f9ea0',
      },
      toolbar:{
        paddingTop:30,
        paddingBottom:30,
        flexDirection:'row'
      },
      toolbarButton:{
        width: 50,
        marginTop: 8,
        marginEnd: 30
      },
      toolbarTitle:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        flex:1,
        marginTop:6,
        marginEnd: 150
      },
      deviceName: {
        fontSize: 17,
        color: "black"
      },
      deviceNameWrap: {
        margin: 10,
        borderBottomWidth:1
      }
    });