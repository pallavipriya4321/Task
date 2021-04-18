import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import Header from "./components/Header.js";
import SearchBox from "./components/SearchBox.js";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Menu from "./components/HamMenu/Menu";
import Person from "./components/HamMenu/Person";
import Contents from "./components/HamMenu/Contents.js";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header />
      <SearchBox />
      <Features />

      <Services />
      <Footer />
      {/* <Menu />
      <Person />
      <Contents /> */}
    </SafeAreaView>
  );
};

export default App;
