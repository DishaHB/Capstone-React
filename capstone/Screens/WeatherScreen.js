import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { APIKEY } from '../assets/ApiKey';
import weatherInfoJSON from '../assets/weatherInfoJSON';
import AppHeader from '../components/AppHeader'; 
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default class WeatherScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      temp: 0,
      feelsLike : 0,
      tempMin : 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      description: '',
      iconName: '',
      color: ''
    }
  }
  componentDidMount(){
    this.getWeatherInfo();
  }
  
  getWeatherInfo=async()=>{
    var cityName = this.props.navigation.getParam('cityName')
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid='+APIKEY;

    const response = await fetch(url)
    .then(response =>response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          temp: responseJson.main.temp,
          feelsLike: responseJson.main.feels_like,
          tempMin : responseJson.main.temp_min,
          tempMax: responseJson.main.temp_max,
          humidity:responseJson.main.humidity,
          description : responseJson.weather[0].description,
        })
        
        this.setState({
          iconName: weatherInfoJSON[this.state.description].icon,
          color : weatherInfoJSON[this.state.description].color
        })
      })
      .catch(error => {
        console.error(error);
      });
  }
  render(){
    return (
      <View style = {styles.container}>
        <AppHeader/>
        <View style = {styles.displayContainer}>
            <Icon name = {this.state.iconName} size={48} color = {this.state.color} type ={"material-community"}/>
            <Text>Temp : {this.state.temp}&deg;C</Text>
            <Text>Feels Like : {this.state.feelsLike}&deg;C</Text>
            <Text>Minimum Temp : {this.state.tempMin}&deg;C</Text>
            <Text>Maximum Temp : {this.state.tempMax}&deg;C</Text>
            <Text>Humidity: {this.state.humidity}%</Text>    
                 
        </View>
      

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {

  }, 
  displayContainer: {
    borderWidth : '2.5px',
  },
})