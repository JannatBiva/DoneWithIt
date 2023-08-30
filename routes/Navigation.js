// NavigationStack.js (Create a separate navigation stack file)
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import MainPage from '../screens/MainPage';
import ItemDetails from '../screens/ItemDetails';


const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn}
      options={{ headerShown: false }} // Hide the header for the "Sign In" screen
/>
<Stack.Screen
  name="Home"
  component={MainPage}
  options={{ headerShown: false }} // Customize the header title for the "Home" screen
/>
<Stack.Screen
  name="Details"
  component={ItemDetails}
  options={{ title: 'Details' }} // Customize the details title for the "Deatils" screen
/>

    </Stack.Navigator>
  );
};

export default NavigationStack;
