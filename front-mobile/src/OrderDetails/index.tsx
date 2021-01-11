import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Header";
import { Order } from "../types";
import OrderCard from "../OrderCard";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}

export function OrderDetails({route}: Props) {
  const navigation = useNavigation();
  const order = route?.params?.order ;
  console.log(order);
  
  const handleOnPress = () => {
    navigation.navigate("Orders");
  }

  return (
    <>
      <Header />
      <View style ={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles= StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
})
