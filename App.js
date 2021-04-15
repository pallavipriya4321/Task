import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import Header from "./components/Header.js";
import SearchBox from "./components/SearchBox.js";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
      <Header />
      <SearchBox />
      {/* <Features /> */}
      <h1 style={{ fontFamily: "sans-serif" }}>Our popular services</h1>
      {/* <Services /> */}
      <Footer />
    </SafeAreaView>
  );
};

export default App;
