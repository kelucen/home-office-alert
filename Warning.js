import React from 'react';
import { Linking,Text, TouchableOpacity, View, SafeAreaView,StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import BluetoothSerial from 'react-native-bluetooth-serial'





export default class Warning extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = { toggle:true,
            toggle2:true,
            toggle3:true,};  

    }  
    information=()=>{
        alert('MENSAGENS ENVIADAS PELOS BOTÕES AO PAINEL: \n\n Botão Vermelho: "NÃO ENTRE E NÃO FAÇA BARULHO!" \n\n Botão Amarelo: "PODE ENTRAR, MAS AINDA EM REUNIÃO!" \n\n Botão Verde: "ESTOU LIVRE :)" ')

    }
    _onPress(){
       if(this.state.toggle2==true && this.state.toggle3==true){
        const newState = !this.state.toggle;
        this.setState({toggle: newState})
        this.toggleSwitch("S")
       }else{
           alert('Não pode ter 2 ou mais botões ligados')
       }
       
     }
    _onPress1(){
        if(this.state.toggle==true && this.state.toggle3==true){
        const newState = !this.state.toggle2;
        this.setState({toggle2: newState})
        this.toggleSwitch("K")
        }else{
            alert('Não pode ter 2 ou mais botões ligados')
        }
       

    }
    _onPress2(){
        if(this.state.toggle==true && this.state.toggle2==true){
            const newState = !this.state.toggle3;
              this.setState({toggle3: newState})
              this.toggleSwitch("F")
            }
        else{
           alert('Não pode ter 2 ou mais botões ligados')
        }
        
    }
    toggleSwitch(msg){
        BluetoothSerial.write(msg)
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device')
          this.setState({ connected: true })
        })
        .catch((err) => console.log(err.message))
      }
    
   render(){
    const {toggle} = this.state;
    const {toggle2} = this.state;
    const {toggle3} = this.state;
    const borderC = toggle? "black":"white"
       
    const textColor = toggle? "OFF":"ON"
    const borderC2 = toggle2? "black":"white"
    
    const textColor2 = toggle2? "OFF":"ON"
    const borderC3 = toggle3? "black":"white"
    
    const textColor3 = toggle3? "OFF":"ON"
        return(
            <SafeAreaView style={{backgroundColor: '#5f9ea0', flex: 1}}>
                 <View style={{backgroundColor: 'black', height: 50}}><Text style={{color:'#5f9ea0', fontSize: 30, marginStart: 15, fontWeight: 'bold'}}>Alerta</Text></View>
                    
                    <View style={{flexDirection: 'row', marginTop: 40}}>
                    <Text style={{fontSize:25, fontWeight: 'bold', marginStart: 20, marginBottom: 10,marginHorizontal: 35}}>Envie sua mensagem </Text>
                    <Icon.Button
                        name="info-circle"
                        backgroundColor="#5f9ea0"
                        onPress={()=>this.information()}
                        size={25}
                        color= 'black'
                    />  
                    </View>
                    <View style={styles.fixToText2}>
           
                   
                        <TouchableOpacity
                            
                                onPress= {()=>this._onPress()}
                            style={{width:300,height:50, backgroundColor:'red', justifyContent:'center',borderColor:borderC,borderWidth:2, marginStart: 30, marginBottom:10, marginTop: 170}}>
                            <Text style={{color:"black",textAlign:'center',fontSize:16}}>{textColor}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                                onPress= {()=>this._onPress1()}
                            style={{width:300, height:50, backgroundColor:'yellow', justifyContent:'center',borderColor:borderC2,borderWidth:2, marginStart: 30, marginBottom: 10}}>
                            <Text style={{color:'black',textAlign:'center',fontSize:16}}>{textColor2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                                onPress= {()=>this._onPress2()}
                            style={{width:300,height:50, backgroundColor:'green', justifyContent:'center',borderColor:borderC3,borderWidth:2, marginStart:30}}>
                            <Text style={{color:'black',textAlign:'center',fontSize:16}}>{textColor3}</Text>
                        </TouchableOpacity>
                    
       
                     </View>
                     
            </SafeAreaView>
          
                     
                   
           
            
        );
   }
   
    
}


const styles = StyleSheet.create({
    fixToText: {
     
        marginLeft: 15,
        marginRight: 15,
        marginTop:10,
       
      
     
        },
        
  });