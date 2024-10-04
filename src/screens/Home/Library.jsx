import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, TextInput,KeyboardAvoidingView } from 'react-native'
import React, { useState, useRef } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import themes from '../../themes/themes';
import libraryList from '../../data/librabyList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Library = () => {
  const [typeOfList, setTypeOfList] = useState('all')
  const playlistType = libraryList.filter(item => item.type == 'list')
  const artistType = libraryList.filter(item => item.type == 'artist')
  const albumType = libraryList.filter(item => item.type == 'album')
  const [searchState, setSearchState] = useState(false)
  const bottomTabHeight = useBottomTabBarHeight()

  const renderListItem = (list) => {
    return(
    list.map((item,index)=>{
      return(
      <TouchableOpacity key={item.id} style={styles.btnListItem}>
        <View style={{height:70,width:'20%',overflow:"hidden"}}>
          <Image style={{height:70,width:70}} resizeMode='contain' source={{uri:item.url}}/>
        </View>
        <View style={{height:70,width:'80%',paddingLeft:'3%',paddingRight:'2%'}}>
          <View style={{height:"100%",alignItems:"center",justifyContent:'center',alignItems:"flex-start"}}>
            <Text style={{fontWeight:"500",color:"white", fontSize:15,marginBottom:4}}>{item.name}</Text>
            <Text style={{fontSize:12,color:themes.gray1}}>{item.depcription}</Text>
          </View>
        </View>
      </TouchableOpacity>
      )
    }))
  }

  const handleBackButton = () => {
    setSearchState(false)
  }
  return (
    <View style={[styles.container,{height: windowHeight - bottomTabHeight}]}>
      <View style={styles.header}>
        <View style={styles.topHeader}>
          <View style={{height:"100%",width:'50%',flexDirection:'row',alignItems:"center"}}>
            <TouchableOpacity style={{height:40,width:40,borderRadius:20,overflow:"hidden",justifyContent:"center",alignItems:"center"}}>
              <Image style={{height:"100%",width:"100%"}} resizeMode='contain' source={require('../../assets/avatar/testava.jpg')}/>
            </TouchableOpacity>
            
            <Text style={{fontSize:24,fontWeight:'500',color:'white',marginLeft:"10%"}}>Thư viện</Text>
          </View>
          <View style={{height:"100%",width:'50%',flexDirection:'row',alignItems:"center",justifyContent:"flex-end"}}>
            <TouchableOpacity onPress={()=>setSearchState(true)} style={{height:40,width:40,justifyContent:"center",alignItems:"center"}}>
              <Ionicons name='search-sharp' color={'white'} size={26}/>
            </TouchableOpacity>
            <TouchableOpacity style={{height:40,width:40,justifyContent:"center",alignItems:"center"}}>
              <Ionicons name='add-outline' color={'white'} size={32} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomHeader}>
          <TouchableOpacity onPress={() => setTypeOfList(typeOfList == 'list' ? 'all' : 'list')} style={styles.bottomHeaderBtn}>
            <Text style={styles.bottomHeaderBtnText}>Danh sách phát</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTypeOfList(typeOfList == 'artist' ? 'all' : 'artist')} style={styles.bottomHeaderBtn}>
            <Text style={styles.bottomHeaderBtnText}>Album</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTypeOfList(typeOfList == 'album' ? 'all' : 'album')} style={styles.bottomHeaderBtn}>
            <Text style={styles.bottomHeaderBtnText}>Nghệ sĩ</Text>
          </TouchableOpacity>
        </View>
      </View>

        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <View style={{height:40,width:"100%",flexDirection:"row",paddingLeft:'2%',paddingRight:"2%"}}>
            <View style={{flexDirection:'row',width:"50%",alignItems:"center",justifyContent:'flex-start'}}>
              <Ionicons name='swap-vertical-sharp' color={'white'} size={18}/>
              <Text style={{fontWeight:"500", color:"white",marginLeft:10}}>Gần đây</Text>
            </View>
            <View style={{flexDirection:'row',width:"50%",alignItems:"center",justifyContent:'flex-end'}}>
              <Ionicons name='grid-outline' color={'white'} size={18}/>
            </View>
          </View>
          <View style={styles.listItem}>
              {typeOfList == 'all' && (
                renderListItem(libraryList)
              )}

              {typeOfList == 'list' && (
                renderListItem(playlistType)
              )}

              {typeOfList == 'artist' && (
                renderListItem(artistType)
              )}

              {typeOfList == 'album' && (
                renderListItem(albumType)
              )}

            <TouchableOpacity style={styles.btnListItem}>
                  <View style={{height:'100%',width:'20%',overflow:"hidden",justifyContent:"center",alignItems:"center"}}>
                    <Ionicons size={60} name='add-circle-sharp' color={themes.gray1}/>
                  </View>
                  <View style={{height:70,width:'80%',paddingLeft:'3%',paddingRight:'2%'}}>
                    <View style={{height:"100%",alignItems:"center",justifyContent:'center',alignItems:"flex-start"}}>
                      <Text style={{fontWeight:"500",color:"white", fontSize:15,marginBottom:4}}>Thêm nghệ sĩ</Text>
                    </View>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnListItem}>
                  <View style={{height:'100%',width:'20%',overflow:"hidden",justifyContent:"center",alignItems:"center"}}>
                    <View style={{height:50,width:50,borderRadius:10,backgroundColor:themes.gray1,justifyContent:"center",alignItems:"center"}}>
                      <Ionicons size={40} name='add-sharp'/>
                    </View>
                  </View>
                  <View style={{height:70,width:'80%',paddingLeft:'3%',paddingRight:'2%'}}>
                    <View style={{height:"100%",alignItems:"center",justifyContent:'center',alignItems:"flex-start"}}>
                      <Text style={{fontWeight:"500",color:"white", fontSize:15,marginBottom:4}}>Thêm podcast</Text>
                    </View>
                  </View>
            </TouchableOpacity>
            <View style={{height:100}}></View>
          </View>
        </ScrollView>
      
      {
        searchState == true && (
          <View style={[styles.searchContainer, {height: windowHeight - bottomTabHeight}]}>
            <View style={styles.headerSearch}>
              <TouchableOpacity onPress={()=>handleBackButton()} style={{height:'100%',width:"10%",justifyContent:"center",alignItems:'center'}}>
                <Ionicons name='chevron-back-outline' color={'white'} size={30}/>
              </TouchableOpacity>
              <View style={{height:'100%',width:"90%",borderRadius:6,backgroundColor:themes.gray,paddingLeft:"2%",paddingRight:'2%'}}>
                <TextInput style={{height:"100%",width:"100%"}} placeholder='Tìm kiếm trong thư viện' placeholderTextColor={themes.gray1}/>
              </View>
            </View>
            <View style={{flex:1,width:"100%",justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"white", fontSize:20,fontWeight:"500"}}>Tìm nội dung bạn yêu thích</Text>
              <Text style={{color:themes.gray1, fontSize:12,marginTop:10}}>Tìm mọi nội dung bạn đã lưu, theo dõi hoặc tạo.</Text>
            </View>
          </View>
        )
      }

    </View>
  )
}

export default Library

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
    position:"relative",
    backgroundColor:themes.black1
  },
  header: {
    height: "20%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "black",
    paddingBottom: 10,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
},
    topHeader:{
      height:'50%',
      width:"100%",
      flexDirection:"row",
      paddingLeft: "2%",
      paddingRight: "2%",

    },
    bottomHeader:{
      height:'30%',
      width:"100%",
      flexDirection:"row",
      paddingLeft: "2%",
      paddingRight: "2%",
    },
    bottomHeaderBtn:{
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:themes.black,
      marginRight:10,
      justifyContent:'center',
      alignItems:"center",
      borderRadius:20,
      height:40
    },
    bottomHeaderBtnText:{
      color:'white'
    },
    body:{
      flex:1,
      width:"100%",
    },
    scrollViewStyle:{
      width:"100%",

    },
    listItem:{
      paddingTop:10,
      paddingBottom:10,
      width:"100%",
      paddingLeft:'2%',
      paddingRight:"2%",
      alignItems:"center"
    },
    btnListItem:{
      flexDirection:"row",
      height:70,
      width:"100%",
      overflow:"hidden",
      marginBottom:10
    },
    searchContainer:{
      position:"absolute",
      zIndex:3,
      height:windowHeight,
      width:"100%",
      backgroundColor:themes.black1,
      alignItems:"center",
      paddingLeft:"2%",
      paddingRight:"2%"
    },
    headerSearch:{
      flexDirection:"row",
      width:'100%',
      height:40,
      marginTop:20
    }
})