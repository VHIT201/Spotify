import { StyleSheet, Text, View,Animated } from 'react-native'
import React, { useEffect, useRef } from 'react';

const Home = () => {

    const animatedValue = useRef(new Animated.ValueXY({
        x:0,
        y:0,
    })).current

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue:{
                x:200,
                y:300
            },
            duration:2000,
            useNativeDriver:false
        }).start();
    },[animatedValue]);

  return (
    <View style={styles.container}>
      <Animated.View style={{height:"10%",width:"20%",backgroundColor:"orange",marginTop:100,marginLeft:animatedValue.x, marginTop:animatedValue.y}}></Animated.View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",

    }
})