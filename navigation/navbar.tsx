// import React from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from '@expo/vector-icons';
// import { Home, Wallet, Store, LeaderBoard, Settings } from "../screens"; // Replace these with your actual screen imports
// import { COLORS, icons } from "../constants";

// const Tab = createBottomTabNavigator();

// // Custom button for the tab bar
// const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
//   var isSelected = accessibilityState.selected;

//   if (isSelected) {
//     return (
//       <View style={{ flex: 1, alignItems: "center" }}>
//         <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
//           <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
//           <TouchableOpacity
//             style={{
//               top: -22.5,
//               justifyContent: "center",
//               alignItems: "center",
//               width: 50,
//               height: 50,
//               borderRadius: 25,
//               backgroundColor: COLORS.white,
//             }}
//             onPress={onPress}
//           >
//             {children}
//           </TouchableOpacity>
//           <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
//         </View>
//       </View>
//     );
//   } else {
//     return (
//       <TouchableOpacity
//         style={{
//           flex: 1,
//           height: 60,
//           backgroundColor: COLORS.white,
//         }}
//         activeOpacity={1}
//         onPress={onPress}
//       >
//         {children}
//       </TouchableOpacity>
//     );
//   }
// };

// // Tabs navigator with your previous nav structure integrated
// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         showLabel: false,
//         headerShown: false, // Hides the header on all screens
//         tabBarStyle: {
//           position: "absolute",
//           left: 0,
//           bottom: 0,
//           right: 0,
//           borderTopWidth: 0,
//           backgroundColor: COLORS.transparentWhite,
//           elevation: 0,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <>
//               <Ionicons name="home-outline" size={24} color={focused ? COLORS.primary : COLORS.secondary} />
//               <Text style={{ color: focused ? COLORS.primary : COLORS.secondary }}>Home</Text>
//             </>
//           ),
//           tabBarButton: (props) => <TabBarCustomButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name="Wallet"
//         component={Wallet}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <>
//               <Ionicons name="wallet-outline" size={24} color={focused ? COLORS.primary : COLORS.secondary} />
//               <Text style={{ color: focused ? COLORS.primary : COLORS.secondary }}>Wallet</Text>
//             </>
//           ),
//           tabBarButton: (props) => <TabBarCustomButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name="Store"
//         component={Store}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <>
//               <Ionicons name="storefront-outline" size={24} color={focused ? COLORS.primary : COLORS.secondary} />
//               <Text style={{ color: focused ? COLORS.primary : COLORS.secondary }}>Store</Text>
//             </>
//           ),
//           tabBarButton: (props) => <TabBarCustomButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name="LeaderBoard"
//         component={LeaderBoard}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <>
//               <Ionicons name="trophy-outline" size={24} color={focused ? COLORS.primary : COLORS.secondary} />
//               <Text style={{ color: focused ? COLORS.primary : COLORS.secondary }}>LeaderBoard</Text>
//             </>
//           ),
//           tabBarButton: (props) => <TabBarCustomButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <>
//               <Ionicons name="settings-outline" size={24} color={focused ? COLORS.primary : COLORS.secondary} />
//               <Text style={{ color: focused ? COLORS.primary : COLORS.secondary }}>Settings</Text>
//             </>
//           ),
//           tabBarButton: (props) => <TabBarCustomButton {...props} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Tabs;
