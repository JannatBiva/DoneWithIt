import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

const categoriesData = [
  { id: '0', title: 'All' },
  { id: '1', title: 'Dress' },
  { id: '2', title: 'Accessories' },
  { id: '3', title: 'Shoes' },
  // Add more categories as needed
];

const itemsData = [
  // Sample data for items in the selected category
  {
    id: '1',
    title: 'Blue Sneakers',
    seller: 'Jane Doe',
    place: 'New York',
    price: '$50',
    category: '3', // Assign category ID to items
    image: require('./assets/blue-sneakers.jpg'), // Require local image
  },
  {
    id: '2',
    title: 'Red Dress',
    seller: 'John Smith',
    place: 'Los Angeles',
    price: '$80',
    category: '1', // Assign category ID to items
    image: require('./assets/red-dress.jpg'),
  },
  {
    id: '3',
    title: 'Earings',
    seller: 'Alis',
    place: 'Los Angeles',
    price: '$10',
    category: '2', // Assign category ID to items
    image: require('./assets/earings.jpg'),
  },
  // Add more items as needed
];

const featuredProductsData = [
  // Sample data for featured products
  {
    id: '1',
    title: 'Cool Sunglasses',
    price: '$25',
    image: require('./assets/Ray-Ban_sunglasses.jpg'), // Require local image
  },
  {
    id: '2',
    title: 'Stylish Watch',
    price: '$120',
    image: require('./assets/watch.jpg'), // Require local image
  },
  // Add more featured products as needed
];

const MainPage = () => {
  const username = 'JohnDoe'; // Replace with the actual username
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('0'); // Default to 'All'

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.id && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderSelectedItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>Seller: {item.seller}</Text>
        <Text style={styles.itemSubtitle}>Place: {item.place}</Text>
        <Text style={styles.itemPrice}>Price: {item.price}</Text>
      </View>
    </View>
  );

  const renderFeaturedProduct = ({ item }) => (
    <View style={styles.featuredItem}>
      <Image source={item.image} style={styles.featuredItemImage} />
      <Text style={styles.featuredItemTitle}>{item.title}</Text>
      <Text style={styles.featuredItemPrice}>{item.price}</Text>
    </View>
  );

  const filteredItems =
    selectedCategory === '0'
      ? itemsData
      : itemsData.filter((item) => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.sidebarIcon}>
          {/* Custom sidebar icon image */}
          <Image
            source={require('./assets/sidebar.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>

        <View style={styles.middleText}>
          {/* DoneWithIt text */}
          <Text style={styles.doneWithItText}>DoneWithIt</Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={require('./assets/profile-image.jpg')} // Replace with the path to your profile picture
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.userInfo}>
          <Text style={styles.greetingText}>Hi, {username}</Text>
          <Text style={styles.searchPrompt}>
            What do you want to buy today?
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <View style={styles.categories}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <View style={styles.itemsGrid}>
          <FlatList
            data={filteredItems}
            renderItem={renderSelectedItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // Display items in 2 columns
          />
        </View>
        <View style={styles.featuredProductsContainer}>
          <Text style={styles.featuredText}>Featured Products</Text>
          <View style={styles.featuredProductsList}>
          <FlatList
            data={featuredProductsData}
            renderItem={renderFeaturedProduct}
            keyExtractor={(item) => item.id}
            horizontal
          />
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
    paddingTop: 60,
    paddingBottom: 30,
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
  userInfo: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchPrompt: {
    marginTop: 10,
    fontSize: 20,
  },
  searchInput: {
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  categories: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 22,

  },
  categoryItem: {
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategoryItem: {
    backgroundColor: 'blue', // Change the color for selected category
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedCategory: {
    marginTop: 20,
  },
  itemContainer: {
    width: '48%', // Adjust the width as needed
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 150, // Adjust the height as needed
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 14,
    marginBottom: 2,
  },
  itemPrice: {
    fontSize: 14,
    color: 'green',
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  featuredProductsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  featuredProductsList: {
    marginTop: 10, // Adjust as needed to control gap
  },
  featuredText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
  },
  featuredItem: {
    width: 150, // Adjust the width as needed
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 10,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  featuredItemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 5,
  },
  featuredItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredItemPrice: {
    fontSize: 14,
    color: 'green',
  },
      // ... Other styles for your main page content
    });
export default MainPage;
