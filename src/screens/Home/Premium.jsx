import { StyleSheet, Text, View,ScrollView,Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import themes from '../../themes/themes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


const Premium = () => {
  const listItemBottomContent = [
    {
      icon : 'volume-mute',
      content : 'Nghe nhạc không quảng cáo'
    },
    {
      icon : 'download',
      content : 'Tải xuống để nghe offline'
    },
    {
      icon : 'random',
      content : 'Phát nhạc theo thứ tự bất kỳ'
    },
    {
      icon : 'headphones',
      content : 'Chất lượng âm thanh cao'
    },
    {
      icon : 'users',
      content : 'Nghe cùng bạn bè theo thời gian thực'
    },
    {
      icon : 'tasks',
      content : 'Sắp xếp danh sách chờ nghe'
    },
  ]
  return (
    <ScrollView style={styles.container}>
      <View style={{height:windowHeight*0.4,width:"100%",overflow:"hidden",position:"relative"}}>
        <Image  style={{height:"100%",width:"100%", position:"absolute", zIndex:1}} 
                resizeMode='cover' 
                source={{uri:"https://i.scdn.co/image/ab671c3d0000f4305fcd2acc2bd27caad81c71ff"}}/>
        <View style={{paddingTop:10,paddingBottom:10, position:"absolute", zIndex:2, bottom:10,paddingLeft:'2%',paddingRight:"2%"}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <FontAwesome name='spotify' size={24} color={'white'}/>
            <Text style={{fontSize:20,color:"white",fontWeight:"bold",marginLeft:6}}>Premium</Text>
          </View>
          <Text style={{fontSize:24,color:"white",fontWeight:"bold",marginBottom:20}}>29,500đ cho 3 tháng dùng gói Premium</Text>
          <TouchableOpacity style={{ width: 140, height: 30, backgroundColor: 'rgba(185, 181, 183, 0.4)', borderRadius: 4, overflow: "hidden", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons name='bell-badge-outline' size={22} color={'#4B70F5'} />
              <Text style={{ color: "white", marginLeft: 4, fontSize: 13 }}>Ưu đãi có hạn</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width:"100%",paddingTop:20,alignItems:"center",paddingLeft:'2%', paddingRight:"2%"}}>
        <TouchableOpacity style={{height:50, width:"90%",backgroundColor:"white",borderRadius:40,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:14,fontWeight:"600"}}>Mua Premium Individual</Text>
        </TouchableOpacity>
        <Text style={{color:themes.gray1,fontSize:12, marginTop:20}}>Chỉ áp dụng cho gói Premium Individual 29.5000 đ cho 3 tháng, sau đó là 59.000 đ/tháng. 
        Chỉ áp dụng ưu đãi nếu bạn chưa từng dùng gói Premium. <Text style={{textDecorationLine:'underline'}}>Có áp dụng điều khoản.</Text>
        {'\n'}Ưu đãi kết thúc vào ngày 4 tháng 7, 2024.
        </Text>
      </View>

      <View style={{paddingTop:10,paddingBottom:10, width:"100%",alignItems:"center"}}>
        <View style={styles.contentContainer}>
          <View style={styles.topContentContainer}>
            <Text style={{fontSize:16,fontWeight:"600",color:"white",marginBottom:10}}>Lý do nên dùng gói Premium</Text>
          </View>
          <View style={styles.bottomContentContainer}>
          {
            listItemBottomContent.map((item)=>(
              <View key={item.index} style={styles.itemBottomContent}>
              <View style={{width:30,height:'100%'}}>
                <FontAwesome5 name={item.icon} size={24} color={'white'}/>
              </View>
                <Text style={{color:"white",fontSize:13,fontWeight:"500",marginLeft:10}}>{item.content}</Text>
            </View>
            ))
          }

          </View>
        </View>
        
        <View style={{width:"100%",paddingLeft:"2%",marginTop:20, marginBottom:10}}>
          <Text style={{fontSize:16,fontWeight:"600",color:"white"}}>Các gói có sẵn</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={[styles.topContentContainer,{}]}>
            <View style={{flexDirection:"row", alignItems:"center",marginBottom:10}}>
              <FontAwesome name='spotify' size={16} color={'white'}/>
              <Text style={{fontSize:14,color:"white",fontWeight:"bold",marginLeft:6}}>Premium</Text>
            </View>
            <Text style={{fontSize:16, fontWeight:"500", color:'#9BEC00',marginBottom:10}}>Mini</Text>
            <Text style={{color:"white",fontWeight:"600"}}>2.300 đ cho 1 ngày</Text>
            <Text style={{color:"white",fontWeight:"600",marginBottom:10}}>8.800 đ cho 1 tuần</Text>
          </View>
          <View style={[styles.bottomContentContainer,{paddingLeft:"8%",paddingRight:"8%"}]}>
            <Text style={{color:"white",fontWeight:"500"}}>• 1 tài khoản Premium chỉ dành cho thiết bị di động</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Nghe tối đa 30 bài hát trên 1 thiết bị khi không có kết nối mạng</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Thanh toán một lần</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Chất lượng âm thanh cơ bản</Text>
          </View>
          <Text style={{width:"100%",textAlign:"center", color:"#686D76",fontSize:11,fontWeight:"500",marginBottom:10}}>Có áp dụng điều khoản.</Text>
        </View>
        
        <View style={[styles.contentContainer,{paddingTop:0}]}>
          <View style={[styles.topContentContainer,{paddingTop:0,paddingLeft:0}]}>
            <View style={{width:"40%",paddingTop:4,paddingBottom:4,justifyContent:"center",alignItems:'center',backgroundColor:'#FFD0D0',borderBottomRightRadius:10}}>
              <Text style={{fontSize:12,fontWeight:"600"}}>29.500 đ cho 3 tháng</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center",marginBottom:10,paddingLeft:"4%",marginTop:10}}>
              <FontAwesome name='spotify' size={16} color={'white'}/>
              <Text style={{fontSize:14,color:"white",fontWeight:"bold",marginLeft:6}}>Premium</Text>
            </View>
            <Text style={{fontSize:16, fontWeight:"500", color:'#FFD0D0',marginBottom:10,paddingLeft:"4%"}}>Mini</Text>
            <Text style={{color:"white",fontWeight:"600",paddingLeft:"4%"}}>2.300 đ cho 1 ngày</Text>
            <Text style={{color:"white",fontWeight:"600",marginBottom:10,paddingLeft:"4%"}}>8.800 đ cho 1 tuần</Text>
          </View>
          <View style={[styles.bottomContentContainer,{paddingLeft:"8%",paddingRight:"8%"}]}>
            <Text style={{color:"white",fontWeight:"500"}}>• 1 tài khoản Premium</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Hủy bất cứ lúc nào</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Đăng ký hoặc thanh toán một lần</Text>
          </View>

          <TouchableOpacity style={{height:50,width:"90%",backgroundColor:"#FFD0D0",marginLeft:"5%",marginTop:10, borderRadius:40, justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:14,fontWeight:"600"}}>Mua Premium Individual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:50,width:"90%",borderWidth:1,borderColor:'white',backgroundColor:"transparent",marginLeft:"5%",marginTop:10, borderRadius:40, justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:14,fontWeight:"600",color:"white"}}>Thanh toán một lần</Text>
          </TouchableOpacity>

          <Text style={{width:"100%",textAlign:"center", color:"#686D76",fontSize:11,fontWeight:"500",marginTop:10,paddingLeft:"4%",paddingRight:"4%"}}>
            Chỉ áp dụng cho gói Premium Individual. 29.500 đ cho 3 tháng, sau đó là 59.000 đ/tháng. Chỉ áp dụng ưu đãi nếu bạn chưa từng dùng gói Premium
          </Text>
          <Text style={{width:"100%",textAlign:"center", color:"#686D76",fontSize:11,fontWeight:"500",paddingLeft:"4%",paddingRight:"4%",textDecorationLine:"underline"}}>
           Có áp dụng điều khoản
          </Text>
          <Text style={{width:"100%",textAlign:"center", color:"#686D76",fontSize:11,fontWeight:"500",marginBottom:10,paddingLeft:"4%",paddingRight:"4%"}}>
           Ưu đãi kết thúc vào ngày 4 tháng 7, 2024
          </Text>
        </View>
        
        <View style={[styles.contentContainer,{paddingTop:0}]}>
          <View style={[styles.topContentContainer,{paddingTop:0,paddingLeft:0}]}>
            <View style={{width:"40%",paddingTop:4,paddingBottom:4,justifyContent:"center",alignItems:'center',backgroundColor:'#AD88C6',borderBottomRightRadius:10}}>
              <Text style={{fontSize:12,fontWeight:"600"}}>29.500 đ cho 2 tháng</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center",marginBottom:10,paddingLeft:"4%",marginTop:10}}>
              <FontAwesome name='spotify' size={16} color={'white'}/>
              <Text style={{fontSize:14,color:"white",fontWeight:"bold",marginLeft:6}}>Premium</Text>
            </View>
            <Text style={{fontSize:16, fontWeight:"500", color:'#AD88C6',marginBottom:10,paddingLeft:"4%"}}>Mini</Text>
            <Text style={{color:"white",fontWeight:"600",paddingLeft:"4%"}}>2.300 đ cho 1 ngày</Text>
            <Text style={{color:"white",marginBottom:10,paddingLeft:"4%",fontWeight:"300",fontSize:12}}>Sau đó là 29.500 đ/tháng</Text>
          </View>
          <View style={[styles.bottomContentContainer,{paddingLeft:"8%",paddingRight:"8%"}]}>
            <Text style={{color:"white",fontWeight:"500"}}>• 1 tài khoản Premium</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Hủy bất cứ lúc nào</Text>
            <Text style={{color:"white",fontWeight:"500"}}>• Đăng ký hoặc thanh toán một lần</Text>
          </View>

          <TouchableOpacity style={{height:50,width:"90%",backgroundColor:"#AD88C6",marginLeft:"5%",marginTop:10, borderRadius:40, justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:14,fontWeight:"600"}}>Mua Premium Student</Text>
          </TouchableOpacity>
          <Text style={{width:"100%",textAlign:"center", color:"#686D76",fontSize:11,fontWeight:"500",marginTop:10,paddingLeft:"4%",paddingRight:"4%"}}>
            Chỉ áp dụng cho gói Premium Individual. 29.500 đ cho 2 tháng, sau đó là 29.500 đ/tháng. Ưu đại chỉ dành cho sinh viên tại
            các trường đại học và cao đẳng được công nhận và nếu bạn chưa từng dùng gói Premium. 
            <Text style={{textDecorationLine:'underline'}}>{"\n"}Có áp dụng điều khoản</Text>
          </Text>

        </View>

        <View style={{height:100}}></View>
      </View>
    </ScrollView>
  )
}

export default Premium

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
    backgroundColor:themes.black1
  },
  contentContainer:{
    width:"96%",
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:themes.black,
    borderRadius:6,
    overflow:'hidden',
    marginTop:20
  },
  topContentContainer:{
    paddingTop:10,
    width:"100%",
    borderBottomWidth:1,
    borderBottomColor:'rgba(255,255,255,0.3)',
    paddingLeft:"4%",
    paddingRight:"4%"
  },
  bottomContentContainer:{
    paddingTop:20,
    paddingBottom:10,
    width:"100%",
    paddingLeft:"4%",
    paddingRight:"4%"
  },
  itemBottomContent:{
    flexDirection:"row",
    width:"100%",
    alignItems:"center",
    justifyContent:"flex-start",
    marginBottom:10
  }
})