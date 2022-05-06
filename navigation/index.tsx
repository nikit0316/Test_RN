/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RulesSVG from '../assets/images/ic-rules.svg';
import HomeSVG from '../assets/images/ic-home.svg';
import ProfileSVG from '../assets/images/ic-profile.svg';
import NotificationSVG from '../assets/images/ic-notification.svg';
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import TabOneScreen from "../screens/TabOneScreen";
import {
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
      <BottomTabNavigator />
  );
}
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarIcon: ({ focused }) => <HomeSVG opacity={focused ? 1 : 0.32} style={{ height: 28, width: 28 }} />,
        })}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({
          tabBarIcon: ({ focused }) => <NotificationSVG opacity={focused ? 1 : 0.32}  height={28} width={28} />
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabOneScreen}
        options={({
          tabBarIcon: ({ focused }) => <ProfileSVG opacity={focused ? 1 : 0.32} style={{ height: 28, width: 28 }}/>
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabOneScreen}
        options={({
          tabBarIcon: ({ focused }) => <RulesSVG opacity={focused ? 1 : 0.32} style={{ height: 28, width: 28 }}/>
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}