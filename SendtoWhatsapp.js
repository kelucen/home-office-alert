
import React from 'react';
import { Linking,Text, TouchableOpacity, View, SafeAreaView,Button, TextInput, StyleSheet} from 'react-native';











export default class SendToWpp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
          msg: '',
          toggle: true
        };
      }
    shareToWhatsApp = () => {
       
        Linking.openURL(`whatsapp://send?text=${'A reunião começará agora. Por favor, preste atenção ao painel na frente do quarto! '}`);
    
    }
    shareToWhatsApp1 = (msg) => {
       
        Linking.openURL(`whatsapp://send?text=${msg}`);
    
    }
    learnMore=()=>{
        const newState = !this.state.toggle;
        this.setState({toggle: newState})
       
       
       
    }
   render(){
        const {toggle} = this.state;
        const text = toggle? "Saiba mais":'Será enviada essa mensagem: \n "A reunião começará agora. Por favor, preste atenção ao painel na frente do quarto!"'
        return(
            <SafeAreaView style={{backgroundColor: '#5f9ea0', flex: 1}}>
                 <View style={{backgroundColor: 'black', height: 50}}><Text style={{color:'#5f9ea0', fontSize: 30, marginStart: 15, fontWeight: 'bold'}}>Enviar Mensagem</Text></View>
                <Text style={{fontSize:25, fontWeight: 'bold', marginStart: 25, marginBottom: 10, marginTop: 50}}>Digite sua prória mensagem</Text>
                <TextInput
                    value={this.state.msg}
                    onChangeText={msg => this.setState({ msg })}
                    placeholder={'Enter message'}
                    style={styles.input}
                    />
                <View style={{marginTop:20, marginStart: 25, marginEnd: 25}}>
                    <Button
                        onPress={()=>this.shareToWhatsApp1(this.state.msg)}
                        title= 'Enviar Mensagem'
                        color='black'
                        />
                 </View>
                 <Text style={{fontSize:25, fontWeight: 'bold', marginStart: 150, marginTop:50}}>Ou</Text>
                 <View style={{marginTop:30, marginStart: 25, marginEnd: 25}}>
                    <Button
                        onPress={()=>this.shareToWhatsApp()}
                        title= ' enviar mensagem automatica'
                        color='black'
                        />
                 </View>
                <TouchableOpacity onPress={()=>this.learnMore()} >
                    <Text style={{marginTop:10, marginStart: 25,fontSize:15 , color: 'black'}}>{text}</Text>
                </TouchableOpacity>
            
                      
            </SafeAreaView>
            
          
                     
                   
           
            
        );
   }
   
    
}

const styles = StyleSheet.create({
    
   input: {
     width:300,
     height: 50,
     marginStart:30,
     marginEnd:10,
     backgroundColor: '#D3D3D3',
   },
  });
