import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import themes from '../../themes/themes'
import Ionicons from '@expo/vector-icons/Ionicons';
import LoginWithOutPassword from './LoginWithOutPassword';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginWithAccount = ({navigation}) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };


  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{width:'15%',height:"100%",justifyContent:"center",alignItems:'center'}}>
                <Ionicons name='arrow-back-sharp' color={'white'} size={30}/>
            </TouchableOpacity>
            <View style={{width:'70%',height:"100%",justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:"white", fontSize:18,fontWeight:'500'}}>Đăng nhập</Text>
            </View>
            <View style={{width:'15%',height:"100%",justifyContent:"center",alignItems:'center'}}>

            </View>
        </View>

        <View style={styles.body}>
            <View style={{paddingTop:10,paddingBottom:10,width:'100%'}}>
                <Text style={{fontWeight:'500', color:"white",fontSize:24,paddingLeft:"5%",paddingRight:'5%'}}>Email hoặc tên người dùng</Text>
            </View>
            <View style={styles.textInputFrame}>
                <TextInput style={{height:'80%',width:'90%',color:themes.gray1}}
                            placeholder='Email hoặc tên người dùng'>

                </TextInput>
            </View>
            <View style={{paddingTop:10,paddingBottom:10,width:'100%'}}>
                <Text style={{fontWeight:'500', color:"white",fontSize:24,paddingLeft:"5%",paddingRight:'5%'}}>Mật khẩu</Text>
            </View>
            <View style={styles.textInputFrame}>
                <TextInput secureTextEntry={!passwordVisible} style={{height:'80%',width:'90%',color:themes.gray1}}
                            placeholder='Mật khẩu'>

                </TextInput>
            </View>

            <View style={{paddingTop:30,paddingBottom:10,width:'100%',justifyContent:'center',alignItems:"center"}}>
                <TouchableOpacity onPress={()=> navigation.navigate("TabHome")} style={{paddingTop:12,paddingBottom:12,paddingLeft:40,paddingRight:40,borderRadius:40,backgroundColor:themes.green}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Tiếp</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop:10,paddingBottom:30,width:'100%',justifyContent:'center',alignItems:"center"}}>
                <TouchableOpacity onPress={()=>navigation.navigate(LoginWithOutPassword)} style={{paddingTop:12,paddingBottom:12,paddingLeft:40,paddingRight:40}}>
                    <Text style={{color:'white',fontSize:14,fontWeight:'600'}}>Đăng nhập không cần mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginWithAccount

const styles = StyleSheet.create({
    container:{
        height:windowHeight,
        width:"100%",
        alignItems:'center',
        backgroundColor:themes.black1
    },
    header:{
        height:'7%',
        width:'100%',
        flexDirection:"row",
    },
    body:{
        flex:1,
        width:'100%',
        alignItems:"center",
        paddingTop:'10%'
    },
    textInputFrame:{
        height:50,
        width:"90%",
        backgroundColor:'rgba(179, 179, 179, 0.3)',
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center"
    }
})