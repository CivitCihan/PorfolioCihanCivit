import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.image} />
        <Text style={styles.title}>Cihan Çivit</Text>
      </View>
      <Text style={styles.description}>
        Memleketlerim Gaziantep ve Sinop. 02/Ocak/2001 Gaziantep doğumluyum.
      </Text>
      <Text style={styles.description}>
        Yazılım Mühendisiyim, Yapay Zeka ve Full-Stack ile ilgileniyorum.
      </Text>
      <Text style={styles.description}>
        Bildiğim yazılım dilleri: JavaScript, C, C++, Python, HTML ve CSS.
      </Text>
      <Text style={styles.description}>
        Aynı anda YouTube ve Instagram'da içerik üretiyorum.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="GitHub"
          onPress={() => navigation.navigate('GitHub')}
          color="#405D72"
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/duzenlicalisiyorum/')}>
            <Icon name="instagram" size={30} color="#405D72" />
          </TouchableOpacity>
          <Text style={styles.socialMediaText}>Content Instagram</Text>
        </View>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCxrmapzuhYOUMDpoHqLCuVg')}>
            <Icon name="youtube-play" size={30} color="#405D72" />
          </TouchableOpacity>
          <Text style={styles.socialMediaText}>YouTube</Text>
        </View>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/cihan-civit-56b182246/')}>
            <Icon name="linkedin" size={30} color="#405D72" />
          </TouchableOpacity>
          <Text style={styles.socialMediaText}>LinkedIn</Text>
        </View>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh')}>
            <Icon name="instagram" size={30} color="#405D72" />
          </TouchableOpacity>
          <Text style={styles.socialMediaText}>Personal Instagram</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF8F3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
    borderColor: '#758694',
    borderWidth: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#405D72',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
    color: '#405D72',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#F7E7DC',
    borderRadius: 8,
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialMediaContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  socialMediaText: {
    marginTop: 4,
    color: '#405D72',
  },
});

export default HomeScreen;
