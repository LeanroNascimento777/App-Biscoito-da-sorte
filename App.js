import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { Component } from 'react';

export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        textoFrase: '',
        img: require('./src/biscoito.png')

      };
      this.quebrabiscoito = this.quebrabiscoito.bind(this)
      this.frases = [
        ' Tenha como exemplo pessoas que dão exemplo',
        ' Ao cair, não se acostume com o chão, Levante-se!',
        'Quanto menos as pessoas souberem de voce, mais feliz voce sera',
        ' Faça planos como se fosse viver 100 anos, viva como se fosse morrer amanha'
      ];
    }

    quebrabiscoito(){
          let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
          this.setState({
            textoFrase:'"' +  this.frases[numeroAleatorio] + ' "' ,
            img: require('./src/biscoitoAberto.png'),
          });
    }
        
    
    render(){
      return (
        <View style={styles.container}>
          <Image
          source={this.state.img}
          style = {styles.image}/>
          <Text style = {styles.text}> {this.state.textoFrase}</Text>
          <TouchableOpacity onPress={this.quebrabiscoito} style = {styles.botao}>
            <View style = {styles.viewOpacity}>
              <Text style = {styles.textOpacity}> 

                Quebrar biscoito

              </Text>
            </View>
          </TouchableOpacity>
          
        
        </View>
      );
    }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250
  },
  text:{
    fontSize: 20,
    color:'orange',
    fontStyle: 'bold',
    margin: 35,
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 80,
    borderWidth: 2,
    borderRadius: 45,
    borderColor: 'orange',
  },
  viewOpacity:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  textOpacity:{
    fontSize: 18,
    fontWeight:'bold',
    color:'orange',
    fontStyle: 'italic',
  }
});

