import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../Header";
import OrderCard from "../OrderCard";

export default function Orders() {

  const handleOnPress = () =>{
    
  }

  return (
    <>
      <Header />
      <ScrollView >
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
