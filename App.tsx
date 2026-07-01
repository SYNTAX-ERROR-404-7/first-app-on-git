import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is my first app with Git on it!</Text>
      <Text style={styles.normalText}>My name is Chris. What I learned from this is that some elements in typescript must be imported from other documents within the app in order to function properly, such as the Themed varients of text and view.</Text>
      <Text style={styles.title}>My favorite character:</Text>
      <Image source={{ uri: 'https://images.alphacoders.com/843/thumb-1920-843257.png' }} 
  style={{ width: 400, height: 200 }}/>
      <Text style={styles.normalText}>This is a picture of Joker from Persona 5. I like the character thanks to its design, along with the genuinely shocking things you can do as this character in the game. I like it because you can rob the same dude like 12 times and they'll still have money.... So I just appreciate that lack of realism.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58f7d2',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: 50,
  },
  normalText: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    paddingTop: 20,
    textAlign: 'center',
  },
});
