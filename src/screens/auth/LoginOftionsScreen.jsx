import { StyleSheet, Text, View, StatusBar, Image, FlatList, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import themes from '../../themes/themes'
import { LinearGradient } from 'expo-linear-gradient';
import FreeRegister from './FreeRegister';
import PhoneNumberRegister from './PhoneNumberRegister';
import LoginWithAccount from './LoginWithAccount';

const LoginOptionsScreen = ({navigation}) => {
  const animatedValue = useRef(new Animated.ValueXY({
    x: 0,
    y: 0
  })).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: {
        x: 0,
        y: 180
      },
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const menu = [
    {id: 1, name : 'free', title : 'Đăng ký miễn phí'},
    {id: 2, name : 'phoneNumber', title : 'Tiếp tục bằng số điện thoại'},
    {id: 3, name : 'google', title : 'Tiếp tục bằng Google'},
    {id: 4, name : 'facebook', title : 'Tiếp tục bằng Facebook'},
    {id: 5, name : 'login', title : 'Đăng nhập'},
  ];
  const handleNavigate = (nameOfItem) => {
    if(nameOfItem == 'free' ) {
      navigation.navigate(FreeRegister)
    }
    else if (nameOfItem == 'phoneNumber'){
      navigation.navigate(PhoneNumberRegister)
    }
    else if (nameOfItem == 'login') {
      navigation.navigate(LoginWithAccount)
    }
  }
  return (
    <LinearGradient
      colors={['#040306', '#131624']}
      style={styles.gradient}
    >
      <Animated.View style={[styles.container, { marginBottom: animatedValue.y }]}>
        <View style={{ height: "20%" }}></View>
        <View style={{ height: 70, width: "100%", alignItems: 'center', justifyContent: "center" }}>
          <Image style={{ height: "100%", width: '100%' }} resizeMode='contain' source={require('../../assets/icon/spotify.png')} />
        </View>
        <View style={{ height: "10%" }}></View>
        <View style={{ width: "100%", paddingTop: 20, paddingBottom: 20, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: '600' }}>Hàng triệu bài hát.</Text>
          <Text style={{ color: "white", fontSize: 24, fontWeight: '600' }}>Miễn phí trên Spotify.</Text>
        </View>
        <View style={{ height: "2%" }}></View>
        <View style={{ flex: 1, width: "80%", justifyContent: "flex-end" }}>
          <FlatList
            data={menu}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={()=> handleNavigate(item.name)} style={[styles.btn,{backgroundColor: item.name == 'free' ? themes.green : null}]}>
                <View style={{ width: "10%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                  {item.name === 'phoneNumber' ? 
                    <Image style={{ height: '50%' }} resizeMode='contain' source={require('../../assets/icon/phone.png')} /> 
                    : 
                    item.name === 'google' 
                    ? 
                    <Image style={{ height: '50%', width: "100%" }} resizeMode='contain' source={require('../../assets/icon/google.png')} /> 
                    :
                    item.name === 'facebook' 
                    ?
                    <Image style={{ height: '50%' }} resizeMode='contain' source={require('../../assets/icon/facebook.png')} /> 
                    : null}
                </View>
                <View style={{ width: "80%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: "white",fontWeight:"500" }}>{item.title}</Text>
                </View>
                <View style={{ width: "10%", height: "100%" }}></View>
              </TouchableOpacity>
            }
          />
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

export default LoginOptionsScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: "100%",
    position: "relative"
  },
  container: {
    flex: 1,
    width: '100%',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  btn: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
  },
});
