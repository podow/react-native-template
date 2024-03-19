import React from "react";
import { Provider as StoreProvider } from "react-redux";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { StatusBar } from "react-native";

import store from "./store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Open up App/index.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </Layout>
        </ApplicationProvider>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
