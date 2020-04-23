import React from 'react';
import { Linking,Text, TouchableOpacity, View, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';









export default class App extends React.Component {
    shareToWhatsApp = () => {
       
        Linking.openURL(`whatsapp://send?text=${'olá'}`);
    
    }
   render(){
        return(
            <SafeAreaView style={{backgroundColor: '#5f9ea0', flex: 1}}>
                        <View style={{backgroundColor: 'black', height: 50}}><Text style={{color:'#5f9ea0', fontSize: 30, marginStart: 15, fontWeight: 'bold'}}>Home Office Alert!</Text></View>
                      <View style={{marginStart:30, marginEnd:30, justifyContent: "space-between",flexDirection: 'row',marginBottom: 10, marginTop:200}}>
                     <Icon.Button
                        name="bluetooth-b"
                        backgroundColor="#20b2aa"
                        onPress={()=>this.props.navigation.navigate("Bluetooth")}
                        size={150}
                        color= 'black'
                    />
                   
                     <Icon.Button
                        name="warning"
                        backgroundColor="#20b2aa"
                        onPress={()=>this.props.navigation.navigate("Warning")}
                        size={150}
                        color= 'black'
                    >
                        
                    </Icon.Button>
                 </View>
                 <View style={{marginStart:30,  marginEnd:30}}>
                     <Icon.Button
                        name="whatsapp"
                        backgroundColor="#20b2aa"
                        onPress={()=>this.props.navigation.navigate("SendToWpp")}
                        size={100}
                        color= 'black'
                    >
                         <Text style={{ fontFamily: 'Arial', fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                            Mandar Mensagem 
                            </Text>
                    </Icon.Button>

                 </View>
            </SafeAreaView>
          
                     
                   
           
            
        );
   }
   
    
}


