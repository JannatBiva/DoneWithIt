import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const images = require('../assets/image1.jpg');
    // Add more image paths as needed

const ItemDetails = () => {
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.sidebarIcon}>
          <Image
            source={require('../assets/sidebar.png')}
            style={styles.iconImage}
          />
          
        </TouchableOpacity>
        <View style={styles.middleText}>
          <Text style={styles.doneWithItText}>DoneWithIt</Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={require('../assets/profile-image.jpg')}
            style={styles.profileImage}
          />
          </TouchableOpacity>    
          </View>
          
      <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={images} style={styles.images} />
      </View>
                 
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Red Dress</Text>
          <Text style={styles.itemPrice}>$50</Text>
          <Text style={styles.itemSubtitle}>Seller: Jane Doe</Text>
          <Text style={styles.itemSubtitle}>Place: New York</Text>
          <Text style={styles.itemSubtitle}>Used for: 6 months</Text>
          <Text style={styles.itemDescription}>
            This elegant red dress is perfect for any special occasion. It has been lovingly worn for only 6 months and is in excellent condition. The dress features a flattering silhouette, a comfortable fit, and a timeless design that will make you stand out at parties, weddings, or romantic dinners.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Seller</Text>
          </TouchableOpacity>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825, // Replace with your desired latitude
                longitude: -122.4324, // Replace with your desired longitude
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 37.78825, // Replace with the same latitude as above
                  longitude: -122.4324, // Replace with the same longitude as above
                }}
                title="Item Location"
                description="Location of the item"
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </View>
    
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sidebarIcon: {
    flex: 1,
    alignItems: 'flex-start',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  middleText: {
    flex: 1,
    alignItems: 'center',
  },
  doneWithItText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profileIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageContainer: {
    width: windowWidth,
    height: windowHeight * 0.4,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  
  itemDetails: {
    paddingHorizontal: 20,
    marginTop: 255,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 24,
    color: 'green',
  },
  itemSubtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  contactButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  contactButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  mapContainer: {
    height: 300, // Adjust the height as needed
    marginTop: 20,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  map: {
    flex: 1,
  },
});

export default ItemDetails;

