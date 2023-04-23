/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/screens/Login/Login";
// import Contact from './src/screens/Home/Contact/Contact';
// import Recent from './src/screens/Home/Recent/Recent';
// import Scan from './src/screens/Home/Scan';
// import NewContact from './src/screens/Home/NewContact/NewContact';
// import Information from './src/screens/Information/Information/Information';
// import Collection from './src/screens/Collection/Collection/Collection';
// import ChildCollection from './src/screens/Collection/ChildCollection/ChildCollection';
// import EditInformation from './src/screens/Information/EditInformation/Edit_Information';
// import AddContact from './src/screens/Collection/AddContact/AddContact';
// import {useDispatch, useSelector} from 'react-redux';
// import {collectionListSelector} from './src/Redux/Selectors';
// import {collectionSlide} from './src/screens/Collection/Collection/CollectionSlide';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

{/*function BottomTab({navigation}) {*/
}
{/*  return (*/
}
//     <Tab.Navigator
//       screenOptions={{
//         headerTitleAlign: 'center',
//         tabBarStyle: {backgroundColor: '#1E62BE', height: 58},
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: '#65A3F8',
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         name="All contacts"
//         component={Contact}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({focused}) => {
//             return (
//               <WrapFlex>
//                 <Image
//                   style={{tintColor: focused ? 'white' : '#65A3F8'}}
//                   source={require('./src/assets/icons/iconTabBar3.png')}
//                 />
//                 <TabBarLabel style={{color: focused ? 'white' : '#65A3F8'}}>
//                   Contact
//                 </TabBarLabel>
//               </WrapFlex>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Recents"
//         component={Recent}
//         options={{
//           headerLeft: () => {
//             return (
//               <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//                 <Draw source={require('./src/assets/icons/iconMore.png')} />
//               </TouchableOpacity>
//             );
//           },
//           tabBarIcon: ({focused}) => {
//             return (
//               <WrapFlex>
//                 <Image
//                   style={{tintColor: focused ? 'white' : '#65A3F8'}}
//                   source={require('./src/assets/icons/iconTabBar4.png')}
//                 />
//                 <TabBarLabel style={{color: focused ? 'white' : '#65A3F8'}}>
//                   Recent
//                 </TabBarLabel>
//               </WrapFlex>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Scan card"
//         component={Scan}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <WrapFlex>
//                 <Image
//                   style={{tintColor: focused ? 'white' : '#65A3F8'}}
//                   source={require('./src/assets/icons/iconTabBar1.png')}
//                 />
//                 <TabBarLabel style={{color: focused ? 'white' : '#65A3F8'}}>
//                   Scan card
//                 </TabBarLabel>
//               </WrapFlex>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="New contact"
//         component={NewContact}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({focused}) => {
//             return (
//               <WrapFlex>
//                 <Image
//                   style={{tintColor: focused ? 'white' : '#65A3F8'}}
//                   source={require('./src/assets/icons/iconTabBar2.png')}
//                 />
//                 <TabBarLabel style={{color: focused ? 'white' : '#65A3F8'}}>
//                   New contact
//                 </TabBarLabel>
//               </WrapFlex>
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
{/*function MyDrawer({navigation}) {*/
}
{/*  const collectionList = useSelector(collectionListSelector);*/
}
{/*  const dispatch = useDispatch();*/
}
{/*  const navigateTitle = value => {*/
}
{/*    dispatch(collectionSlide.actions.navigateTitleName(value));*/
}
{/*  };*/
}
{/*  const Item = ({item}) => {*/
}
{/*    return (*/
}
{/*      <Indexing*/
}
//         onPress={() => {
//           navigation.navigate('ChildCollection');
//           navigateTitle(item.name);
//         }}>
//         <Image
//           source={require('./src/assets/icons/iconFolder.png')}
{/*        />*/
}
{/*        <GroupName>{item.name}</GroupName>*/
}
//       </Indexing>
//     );
{/*  };*/
}
{/*  const renderItem = item => {*/
}
{/*    return <Item item={item.item} />;*/
}
{/*  };*/
}
//   return (
{/*    <Drawer.Navigator*/
}
//       screenOptions={{headerShown: false}}
//       drawerContent={() => (
{/*        <BackgroundDrawer>*/
}
{/*          <HeaderDrawer>*/
}
//             <HeaderContent>
{/*              <Image source={require('./src/assets/images/avataDrawer.png')} />*/
}
{/*              <View>*/
}
{/*                <TextName1>Nguyễn Tiến Nam</TextName1>*/
}
{/*                <TextName2>Admin Admin</TextName2>*/
}
//               </View>
//             </HeaderContent>
//           </HeaderDrawer>
//           <Content>
//             <IconPlay>
//               <Image source={require('./src/assets/icons/Play.png')} />
{/*            </IconPlay>*/
}
//             <Collections>Collection</Collections>
//             <WrapEdit onPress={() => navigation.navigate('Collection')}>
//               <Edit>Edit</Edit>
//             </WrapEdit>
//           </Content>
{/*          <FlatList*/
}
{/*            data={collectionList}*/
}
{/*            renderItem={renderItem}*/
}
{/*            keyExtractor={item => item.id}*/
}
{/*          />*/
}
{/*        </BackgroundDrawer>*/
}
{/*      )}>*/
}
//       <Drawer.Screen name="BottomTab" component={BottomTab} />
//       <Drawer.Screen name="Information" component={Information} />
//       <Drawer.Screen name="EditInformation" component={EditInformation} />
//       <Drawer.Screen
//         options={{headerShown: false}}
//         name="Collection"
//         component={Collection}
//       />
//       <Drawer.Screen name={'ChildCollection'} component={ChildCollection} />
//       <Drawer.Screen name={'AddContact'} component={AddContact} />
//     </Drawer.Navigator>
//   );
// }
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        {/*<Stack.Screen name="MyDrawer" component={MyDrawer} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// const Draw = styled.Image`
//   margin-top: 10px;
// `;
// const BackgroundDrawer = styled.View`
//   flex: 1;
// `;
// const HeaderDrawer = styled.View`
//   height: 12%;
//   flex-direction: column-reverse;
//   background-color: #1e62be;
// `;
// const HeaderContent = styled.View`
//   margin-top: 14px;
//   margin-left: 18px;
//   flex-direction: row;
// `;
// const TextName1 = styled.Text`
//   margin-left: 10px;
//   font-family: roboto;
//   font-style: normal;
//   font-size: 16px;
//   color: white;
// `;
// const TextName2 = styled.Text`
//   margin-left: 10px;
//   font-family: roboto;
//   font-style: normal;
//   font-size: 12px;
//   color: white;
// `;
// const Content = styled.View`
//   flex-direction: row;
//   align-items: center;
//   height: 45px;
//   width: 100%;
//   background-color: #f9f0f9;
// `;
// const IconPlay = styled.TouchableOpacity`
//   margin-left: 10px;
// `;
// const Collections = styled.Text`
//   margin-left: 10px;
//   font-family: roboto;
//   font-style: normal;
//   font-size: 20px;
//   color: #000;
// `;
// const WrapEdit = styled.TouchableOpacity`
//   margin-left: auto;
//   margin-right: 12px;
// `;
// const Edit = styled.Text`
//   font-family: roboto;
//   font-style: normal;
//   font-size: 16px;
//   color: #1e62be;
// `;
// const Indexing = styled.TouchableOpacity`
//   flex-direction: row;
//   margin-left: 15px;
//   height: 45px;
//   align-items: center;
// `;
// const GroupName = styled.Text`
//   margin-left: 15px;
//   font-family: roboto;
//   font-style: normal;
//   font-size: 18px;
//   color: #000;
// `;
// const TabBarLabel = styled.Text`
//   font-family: roboto;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 12px;
//   color: #000;
// `;
// const WrapFlex = styled.View`
//   align-items: center;
// `;
