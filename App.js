import React, {useEffect, useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';



function App() {
  
  const [desc, setDesc] = useState();
  const [city, setCity] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [tempAct, setTempAct] = useState();
  const [tempMin, setTempMin] = useState();
  const [tempMax, setTempMax] = useState();
  const [tempRes, setTempRes] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDir, setWindDir] = useState();
  const [humidity, setHumidity] = useState()
  
  const getMeteo = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&appid=80a5822fa4ea8332c131e2c4dada342a&units=metric')
    .then((response) => response.json())
    .then((data) => {
      
       console.log(data)
       return(
        setDesc(data.weather[0].description),
        setCity(data.name),
        setSunrise(data.sys.sunrise),
        setSunset(data.sys.sunset),
        setWindSpeed(data.wind.speed),
        setWindDir(data.wind.deg),
        setTempAct(data.main.temp),
        setTempMin(data.main.temp_min),
        setTempMax(data.main.temp_max),
        setTempRes(data.main.feels_like),
        setHumidity(data.main.humidity)
       );
    })
    .catch((error) => {
      console.error(error);
    });
};

useEffect(()=>{
  getMeteo();
  
},[])
  
   
  
  
  
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/fond.jpg')}style={styles.fond}>
      <View style={styles.firstContainer}> 
      <ImageBackground source={require('./assets/meteo.png')} style={styles.image} resizeMode="cover" >
        
        </ImageBackground>
      </View>
      <View style={styles.firstGroup}>
            <View style={styles.secondContainer}>
              <Text style={styles.descText}>Bonjour, aujourd'hui le temps sera {desc} à {city}, le soleil se lèvera à {sunrise} et se couchera à {sunset} </Text>
            </View>
            </View>
      <View style={styles.secondGroup}>
            <View style={styles.thirdContainer}>
            <ImageBackground source={require('./assets/wind.png')} style={styles.image} resizeMode="cover" >
              <Text style={styles.windText}>Vitesse du vent: {windSpeed} m/s </Text>
              <Text style={styles.windText}>Direction du vent: {windDir} </Text>
              <Text style={styles.humText}>Taux d'humidité : {humidity}%</Text>
              </ImageBackground>
            </View>
            <View style={styles.tempContainer}>
            <ImageBackground source={require('./assets/wind.png')} style={styles.image} resizeMode="cover" >
            <Text style={styles.tempText}>Température actuelle : {tempAct}°</Text>
            <Text style={styles.tempText}>Température minimum : {tempMin}°</Text>
            <Text style={styles.tempText}>Température maximum : {tempMax}°</Text>
            <Text style={styles.tempText}>Température ressenti : {tempRes}°</Text> 
            </ImageBackground> 
            </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const opacité = 0.8;

const styles = StyleSheet.create({
                                  container: {
                                    flex:1,
                                  },
                                  firstGroup: {
                                    flex:1,
                                    flexDirection:'row',
                                    Content:'space-between',
                                    
                                  },
                                  firstContainer: {
                                  flex: 1,
                                  
                                },

                                image: {
                                  flex: 1,
                                  overflow:'hidden',
                                },

                                fond: {
                                  flex:1,
                                  justifyContent:'center',
                                  opacity:opacité
                                },

                                  secondGroup: {
                                  flex:1,
                                  flexDirection:'row',
                                  justifyContent:'space-between',
                                  marginBottom:25
                                },
                                secondContainer: {
                                  flex: 1,
                                  marginBottom:50,
                                  marginRight:10,
                                  marginLeft:10,
                                  borderWidth:5,
                                  borderRadius:15,
                                  borderColor: '#887EA8',
                                  
                                  // flexDirection:'column',
                                  // justifyContent:'flex-end',
                                  // alignItems:'flex-end',
                                  
                                },
                                descText: {
                                  color: "white",
                                  fontSize: 22,
                                  lineHeight: 44,
                                  fontWeight: "bold",
                                  textAlign: "center",
                                 
                                },
                                  thirdContainer: {
                                  flex: 2,
                                  marginRight:10,
                                  borderWidth:5,
                                  borderRadius:15,
                                  borderColor: '#BDB8A4',
                                  
                                },
                                  
                                windText: {
                                  color: "gray",
                                  fontSize: 22,
                                  lineHeight: 44,
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  
                                },
                                humText: {
                                  color: "gray",
                                  fontSize: 18,
                                  lineHeight: 22,
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  
                                },
                                tempContainer: {
                                  flex: 2,
                                  marginRight:10,
                                  borderWidth:5,
                                  borderRadius:15,
                                  borderColor: '#BDB8A4',
                                  
                                },
                                tempText: {
                                  color: "black",
                                  fontSize: 18,
                                  lineHeight: 26,
                                  fontWeight: "bold",
                                  textAlign: "center",
                                },
                                  
});

export default App;