import React from "react";
import { useState, useEffect, useCallback } from "react";
import AppLoading from "expo-app-loading";
import Entypo from "@expo/vector-icons/Entypo";
import { useFonts, Lemonada_400Regular } from "@expo-google-fonts/lemonada";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/modules/HomeScreen";
import { QuickGenerator } from "./src/modules/QuickGenerator";
import { AdvancedGenerator } from "./src/modules/AdvancedGenerator";
import LogoTitle from "./src/components/LogoTitle";
import { StatusBar, View } from "react-native";
import IconBar from "./src/components/IconBar";
import { GeneratorA } from "./src/modules/GeneratorA";
import { GeneratorQ } from "./src/modules/GeneratorQ";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Lemonada_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
      console.log("boom");
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  console.log("app started");

  return (
    <>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar type="light" />
        <LogoTitle />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "#1b411f",
              headerTitleStyle: {
                fontFamily: "Lemonada_400Regular",
                fontSize: 18,
              },
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerTitle: "Home" }}
            />
            <Stack.Screen
              name="QuickGenerator"
              component={QuickGenerator}
              options={{ headerTitle: "Player selection" }}
            />
            <Stack.Screen
              name="AdvancedGenerator"
              component={AdvancedGenerator}
              options={{ headerTitle: "Player selection" }}
            />
            <Stack.Screen
              name="GeneratorA"
              component={GeneratorA}
              options={{ headerTitle: "Generated teams" }}
            />
            <Stack.Screen
              name="GeneratorQ"
              component={GeneratorQ}
              options={{ headerTitle: "Generated teams" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <IconBar />
      </View>
    </>
  );
}
