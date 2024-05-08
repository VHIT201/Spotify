import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Dimensions, TextInput } from 'react-native'
import React from 'react'
import themes from '../../themes/themes'
import Ionicons from '@expo/vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PhoneNumberRegister = ({navigation}) => {
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
                <Text style={{fontWeight:'500', color:"white",fontSize:24,paddingLeft:"5%",paddingRight:'5%'}}>Nhập số điện thoại </Text>
            </View>
            <View style={styles.textInputFrame}>
                <TouchableOpacity style={{height:'50%',width:'100%',flexDirection:"row",justifyContent:'center'}}>
                    <View style={{width:"75%",height:'100%',justifyContent:"center",alignItems:"flex-start"}}>
                        <Text style={{fontSize:16,color:'white'}}>Việt Nam</Text>
                    </View>
                    <View style={{width:"15%",height:"100%",justifyContent:'center',alignItems:"flex-end"}}>
                        <Ionicons name='chevron-forward-outline' color={'white'} size={20}/>
                    </View>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:'gray',width:"100%"}}></View>
                <View style={{height:'50%',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{width:"20%",height:'100%',justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:"gray"}}>
                        <Text style={{fontSize:16,color:"white"}}>+84</Text>
                    </TouchableOpacity>
                    <View style={{width:'80%',height:"100%",justifyContent:"center",alignItems:"center"}}>
                        <TextInput style={{height:'50%',width:'80%',fontSize:16,color:"white"}} 
                                    placeholderTextColor={'gray'} 
                                    placeholder='Số điện thoại'
                                    keyboardType='numeric'>

                        </TextInput>
                    </View>
                </View>

            </View>
            <View style={{paddingTop:20,paddingBottom:10,width:'100%'}}>
                <Text style={{fontWeight:'500', color:"white",fontSize:12,paddingLeft:"5%",paddingRight:'5%',fontWeight:'500',marginBottom:20}}>
                Chúng tôi sẽ gửi cho bạn mã qua SMS để xác nhận số điện thoại.</Text>
                <Text style={{fontWeight:'500', color:"white",fontSize:12,paddingLeft:"5%",paddingRight:'5%',fontWeight:'500'}}>
                Đôi khi chúng tôi có thể gửi cho bạn thông báo dựa trên dịch vụ.</Text>
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

export default PhoneNumberRegister

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
        height:101,
        width:"90%",
        backgroundColor:'rgba(179, 179, 179, 0.3)',
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center",
        overflow:'hidden'
    }
})