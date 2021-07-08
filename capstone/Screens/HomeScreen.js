import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';


export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      cityName : "",
    }
  }
  goToWeatherScreen=()=>{
    if(this.state.cityName != ""){
      this.props.navigation.navigate('WeatherScreen', {cityName: this.state.cityName});
    }
    else{
      alert("City Name cant be blank");
    }
    
  }
  
  render(){
    return (
      <View style = {styles.parentContainer}>
      
        <AppHeader/>
        
        <View style={styles.inputContainer}>
          <TextInput 
              placeholder="Enter city name" 
              onChangeText={(text)=>this.setState({cityName:text})} 
              value = {this.state.cityName}
              style= {styles.textInputStyle}/>
        </View>
        <View style={styles.buttonConatiner}>
          <TouchableOpacity 
              onPress={this.goToWeatherScreen}
              style= {styles.buttonStyle}>
            <Text style= {styles.textStyle}>
              Show Weather
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  parentContainer:{
    margin : '20px',
    flex: 1
  },
  inputContainer:{
    marginTop: '40px',
    borderWidth: '2px',
    height: '30px'
  },
  buttonConatiner: {
    margin:'100px',
    borderWidth: '1px',
    width: '80px',
    borderRadius: '40px',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'lightgreen',
  },
  buttonStyle : {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle:{
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textInputStyle: {
    height: '30px',
  }
})