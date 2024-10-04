import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import themes from '../../themes/themes';
import category from '../../data/category';


export default function Search() {

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const usedColors = new Set();

function getUniqueRandomColor() {
    let color;
    do {
        color = getRandomColor();
    } while (usedColors.has(color));
    usedColors.add(color);
    return color;
}

function generateColorsForArray(arr) {
    const colors = [];
    for (let i = 0; i < arr.length; i++) {
        colors.push(getUniqueRandomColor());
    }
    return colors;
}

const colors = generateColorsForArray(category);

  const scrollY = useRef(new Animated.Value(0)).current;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, 110],
    outputRange: [0, -110],
    extrapolate: 'clamp',
  });
  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const translateTitle = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 60],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ backgroundColor: themes.black1 }}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: translateHeader }] },
        ]}>
        <Animated.View
          style={[
            styles.headerContent,
            { opacity: opacityTitle },
            ,
            { transform: [{ translateY: translateTitle }] },
          ]}>
            <View style={{height:40,width:"14%",overflow:"hidden",justifyContent:"flex-end"}}>
              <Image style={{height:30,width:30,borderRadius:15}} resizeMode='contain' source={require('../../assets/avatar/testava.jpg')}/>
            </View>
            <View style={{height:40,width:"66%",justifyContent:"flex-end"}}>
              <Text style={{fontSize:20,fontWeight:"600",color:"white"}}>Tìm kiếm</Text>
            </View>
            <View style={{height:40,width:"20%",justifyContent:"flex-end",alignItems:"flex-end"}}>
              <FontAwesome name='camera' size={24} color={'white'}/>
            </View>
        </Animated.View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Bạn muốn nghe gì ?"
            placeholderTextColor="#05141c"
            style={styles.input} />

          <View style={styles.inputIcon}>
            <FeatherIcon
              color="#05141c"
              name="search"
              size={16} />
          </View>
        </View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={1}>
        <View style={styles.topBodyContent}>
          <Text style={{fontSize:14,fontWeight:"700",color:"white"}}>Khám phá các thể loại của bạn</Text>
          <View style={{height:160,width:"100%",marginTop:10, flexDirection:"row",justifyContent:"space-evenly"}}>
            <TouchableOpacity style={styles.verticalCard}>
              <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri:"https://i.scdn.co/image/ab6761610000f178a385bd3e0f67945f277792c2"}}/>
              <View style={{position:"absolute",bottom:"10%",left:'10%'}}>
                <Text style={{color:"white",fontSize:13,fontWeight:"600", }}>#rap Việt</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.verticalCard}>
              <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri:"https://i.scdn.co/image/ab67656300005f1feb5b14182d1f591c2df02a7d"}}/>
              <View style={{position:"absolute",bottom:"10%",left:'10%'}}>
                <Text style={{color:"white",fontSize:13,fontWeight:"600", }}>#podcast</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.verticalCard}>
              <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri:"https://i.scdn.co/image/ab67656300005f1fe93e4f1320626d204b25892a"}}/>
              <View style={{position:"absolute",bottom:"10%",left:'10%'}}>
                <Text style={{color:"white",fontSize:13,fontWeight:"600", }}>#thư giãn</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={{fontSize:14,fontWeight:"700",color:"white",marginBottom:10}}>Duyệt tìm tất cả</Text>
            <View style={styles.categoryItemContainer}>
              <View style={styles.leftContainer}>
                {
                  // Filter to keep only odd-indexed items
                  category.filter((_, index) => index % 2 !== 0).map((item, index) => (
                    <TouchableOpacity key={item.id} style={[styles.btnItemCategory,{backgroundColor:colors[index]}]}>
                      <Text style={{color:"white",fontSize:14,fontWeight:"600",marginRight:"40%"}}>{item.name}</Text>
                      <View style={styles.imageInBtn}>
                        <Image
                        resizeMode='contain'
                        style={{height:"100%",width:"100%"}} 
                        source={{ uri: item.icons[0].url }}
                        />
                      </View>

                    </TouchableOpacity>
                  ))
                }
              </View>
              <View style={styles.rightContainer}>
              {
                  // Filter to keep only odd-indexed items
                  category.filter((_, index) => index % 2 == 0).map((item, index) => (
                    <TouchableOpacity key={item.id} style={[styles.btnItemCategory,{ backgroundColor: colors[Math.floor((colors.length / 2) + index)] }]}>
                      <Text style={{color:"white",fontSize:14,fontWeight:"600",marginRight:"40%"}}>{item.name}</Text>
                      <View style={styles.imageInBtn}>
                        <Image
                        
                        resizeMode='contain'
                        style={{height:"100%",width:"100%"}} 
                        source={{ uri: item.icons[0].url }}
                        />
                      </View>

                    </TouchableOpacity>
                  ))
                }
              </View>
            </View>


          
        </View>

      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: '2%',
    paddingTop: 212,
    backgroundColor: themes.black1,
  },
  /** Header */
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    paddingHorizontal: '2%',
    paddingVertical: 12,
    height: 180,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: themes.black1,
  },
  headerContent: {
    height:40,
    marginBottom: 20,
    width:"100%",
    flexDirection:'row',  

  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBodyContent:{
    width:"100%"
  },
  verticalCard:{
    height:"100%",
    width:"30%",
    backgroundColor:"pink",
    borderRadius:10,
    overflow:'hidden',
    position:"relative"
  },
  categoryContainer:{
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
  },
  categoryItemContainer:{
    paddingBottom:10,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%"
  },
  btnItemCategory:{
    height:100,
    width:"96%",
    borderRadius:10,
    backgroundColor:"blue",
    marginBottom:20,
    position:"relative",
    justifyContent:"center",
    alignItems:"center"
  },
  leftContainer:{
    width:"50%",
    alignItems:"flex-start"
  },
  rightContainer:{
    width:"50%",
    alignItems:"flex-end"
  },
  imageInBtn:{
    position:"absolute",
    height:'60%',
    width:'30%',
    right:20,
    transform: [{rotate: '15deg'}],
    borderRadius:10,
    overflow:"hidden"
  }



});