// App.js

import React from "react";
import { View } from "react-native";
import Counter from "./components/Counter";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Counter />
    </View>
  );
};

export default App;
