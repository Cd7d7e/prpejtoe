import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>MEUS 10 Canais FAVORITOS</Text>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/imgUM.jpg')} style={styles.image} />
        <Image source={require('./assets/imgDois.jpg')} style={styles.image} />
        <Image source={require('./assets/imgTres.jpg')} style={styles.image} />
        <Image source={require('./assets/imgQuatro.jpg')} style={styles.image} />
        <Image source={require('./assets/imgCinco.jpg')} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/imgSeis.jpg')} style={styles.image} />
        <Image source={require('./assets/imgSete.jpg')} style={styles.image} />
        <Image source={require('./assets/imgOito.jpg')} style={styles.image} />
        <Image source={require('./assets/imgNove.jpg')} style={styles.image} />
        <Image source={require('./assets/imgDez.jpg')} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff#00FF00',
    backgroundColor: '#0000FF'
  },

  image: {
    width: 300,
    height: 500,
    border: '3px solid black',
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  H1: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  }
});