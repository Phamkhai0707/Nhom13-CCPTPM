/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  // DrawerContentScrollView,
  // DrawerItemList,
  // DrawerItem,
} from '@react-navigation/drawer';
import Login from './src/screens/Login/Login';
import Contact from './src/screens/Home/Contact';
import Recent from './src/screens/Home/Recent';
import Scan from './src/screens/Home/Scan';
import NewContact from './src/screens/Home/NewContact';
import Information from './src/screens/Information/Information';
import Collection from './src/screens/Collection/Collection';
import ChildCollection from './src/screens/Collection/ChildCollection';
import EditInformation from './src/screens/Information/Edit_Information';
import AddContact from './src/screens/Collection/AddContact';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTab({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: {backgroundColor: '#1E62BE'},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#65A3F8',
      }}>
      <Tab.Screen
        name="All contacts"
        component={Contact}
        options={{
          title: 'All contacts',
          headerShown: false,
          // headerLeft: () => {
          //   return (
          //     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          //       <Image
          //         style={styles.drawer}
          //         source={require('./src/assets/icons/iconMore.png')}
          //       />
          //     </TouchableOpacity>
          //   );
          // },
          // headerRight: () => {
          //   return (
          //     <View style={styles.view}>
          //       <TouchableOpacity>
          //         <Image
          //           style={{tintColor: '#1E62BE'}}
          //           source={require('./src/assets/icons/viewModul.png')}
          //         />
          //       </TouchableOpacity>
          //       <TouchableOpacity>
          //         <Image source={require('./src/assets/icons/viewList.png')} />
          //       </TouchableOpacity>
          //     </View>
          //   );
          // },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'white' : '#65A3F8'}}
                source={require('../SampleApp/src/assets/icons/iconTabBar3.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Recents"
        component={Recent}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  style={styles.drawer}
                  source={require('./src/assets/icons/iconMore.png')}
                />
              </TouchableOpacity>
            );
          },
          title: 'Recents',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'white' : '#65A3F8'}}
                source={require('../SampleApp/src/assets/icons/iconTabBar4.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Scan card"
        component={Scan}
        options={{
          title: 'Scan card',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'white' : '#65A3F8'}}
                source={require('./src/assets/icons/iconTabBar1.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="New contact"
        component={NewContact}
        options={{
          title: 'New contact',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'white' : '#65A3F8'}}
                source={require('../SampleApp/src/assets/icons/iconTabBar2.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
// function DrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }
function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={() => (
        <View style={styles.backgroundDrawer}>
          <View style={styles.headerDrawer}>
            <View style={styles.headerContent}>
              <Image source={require('./src/assets/images/avataDrawer.png')} />
              <View>
                <Text style={styles.textname1}>Nguyễn Tiến Nam</Text>
                <Text style={styles.textname2}>Admin Admin</Text>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.iconPlay}>
              <Image source={require('./src/assets/icons/Play.png')} />
            </TouchableOpacity>
            <Text style={styles.collection}>Collection</Text>
            <TouchableOpacity
              style={styles.warpEdit}
              onPress={() => navigation.navigate('Collection')}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.indexing}
            onPress={() => navigation.navigate('ChildCollection')}>
            <Image
              source={require('../SampleApp/src/assets/icons/iconFolder.png')}
            />
            <Text style={styles.groupName}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.indexing}
            onPress={() => navigation.navigate('ChildCollection')}>
            <Image
              source={require('../SampleApp/src/assets/icons/iconFolder.png')}
            />
            <Text style={styles.groupName}>General</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.indexing}
            onPress={() => navigation.navigate('ChildCollection')}>
            <Image
              source={require('../SampleApp/src/assets/icons/iconFolder.png')}
            />
            <Text style={styles.groupName}>Investors</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.indexing}
            onPress={() => navigation.navigate('ChildCollection')}>
            <Image
              source={require('../SampleApp/src/assets/icons/iconFolder.png')}
            />
            <Text style={styles.groupName}>Lead</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.indexing}
            onPress={() => navigation.navigate('ChildCollection')}>
            <Image
              source={require('../SampleApp/src/assets/icons/iconFolder.png')}
            />
            <Text style={styles.groupName}>VIP</Text>
          </TouchableOpacity>
        </View>
      )}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Information" component={Information} />
      <Drawer.Screen name="EditInformation" component={EditInformation} />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Collection"
        component={Collection}
      />
      <Drawer.Screen name={'ChildCollection'} component={ChildCollection} />
      <Drawer.Screen name={'AddContact'} component={AddContact} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  drawer: {
    marginLeft: 10,
  },
  view: {
    flexDirection: 'row',
    marginRight: 10,
  },
  backgroundDrawer: {
    flex: 1,
  },
  headerDrawer: {
    height: '12%',
    flexDirection: 'column-reverse',
    backgroundColor: '#1E62BE',
  },
  headerContent: {
    marginBottom: 14,
    marginLeft: 18,
    flexDirection: 'row',
  },
  textname1: {
    marginLeft: 10,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 16,
    color: 'white',
  },
  textname2: {
    marginLeft: 10,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 12,
    color: 'white',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    width: '100%',
    backgroundColor: '#f9f0f9',
  },
  iconPlay: {
    marginLeft: 10,
  },
  collection: {
    marginLeft: 12,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#000',
  },
  warpEdit: {
    marginLeft: 'auto',
    marginRight: 12,
  },
  edit: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#1e62be',
  },
  indexing: {
    flexDirection: 'row',
    marginLeft: 15,
    height: 45,
    alignItems: 'center',
  },
  groupName: {
    marginLeft: 15,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 18,
    color: '#000',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
