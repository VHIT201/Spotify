import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Dimensions, TextInput } from 'react-native'
import React from 'react'
import themes from '../../themes/themes'
import Ionicons from '@expo/vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FreeRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{width:'15%',height:"100%",justifyContent:"center",alignItems:'center'}}>
                <Ionicons name='arrow-back-sharp' color={'white'} size={30}/>
            </TouchableOpacity>
            <View style={{width:'70%',height:"100%",justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:"white", fontSize:18,fontWeight:'500'}}>Tạo tài khoản</Text>
            </View>
            <View style={{width:'15%',height:"100%",justifyContent:"center",alignItems:'center'}}>

            </View>
        </View>

        <View style={styles.body}>
            <View style={{paddingTop:10,paddingBottom:10,width:'100%'}}>
                <Text style={{fontWeight:'500', color:"white",fontSize:24,paddingLeft:"5%",paddingRight:'5%'}}>Email của bạn là gì ?</Text>
            </View>
            <View style={styles.textInputFrame}>
                <TextInput style={{height:'80%',width:'90%',color:themes.gray1}}
                            placeholder='Email'>

                </TextInput>
            </View>
            <View style={{paddingTop:10,paddingBottom:10,width:'100%'}}>
                <Text style={{fontWeight:'500', color:"white",fontSize:12,paddingLeft:"5%",paddingRight:'5%',fontWeight:'500'}}>
                Bạn cần xác nhận email này sau.</Text>
            </View>
            <View style={{paddingTop:30,paddingBottom:30,width:'100%',justifyContent:'center',alignItems:"center"}}>
                <TouchableOpacity style={{paddingTop:12,paddingBottom:12,paddingLeft:40,paddingRight:40,borderRadius:40,backgroundColor:themes.green}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Tiếp</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default FreeRegister

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