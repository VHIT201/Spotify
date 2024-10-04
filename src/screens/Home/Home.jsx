import { StyleSheet, Text, View, Animated, StatusBar, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import themes from '../../themes/themes';
import foryou from '../../data/foryou';
import suggest from '../../data/suggest';
import artist from '../../data/artist';
const Home = () => {
    const [content, setContent] = useState('all');

    const data = [
        { id: 1, name: 'Andree Right Hand', img :'https://i.scdn.co/image/ab6761610000e5eb3dea3ddb7a950a6df930f5dc' },
        { id: 2, name: '24k.Right', img :'https://i.scdn.co/image/ab6761610000e5ebbf6cd3f77b89f431cc4b02b7' },
        { id: 3, name: 'Tlinh' , img :"https://i.scdn.co/image/ab676161000051742bcb72091c46d935e195aa87"},
        { id: 4, name: 'Sơn Tùng M-TP', img :"https://i.scdn.co/image/ab6761610000e5eb7afc6ecdb9102abd1e10d338" },
        { id: 5, name: 'Obito' , img :'https://i.scdn.co/image/ab6761610000e5eba385bd3e0f67945f277792c2'},
        { id: 6, name: 'SOOBIN', img :'https://i.scdn.co/image/ab6761610000e5eb6dee578b2f0daf30864a7591' },
        { id: 7, name: 'Phan Mạnh Quỳnh', img :'https://i.scdn.co/image/ab67616100005174f3ac22c53b34150b407c3410' },
        { id: 8, name: 'Hiếu Thứ Hai', img :"https://i.scdn.co/image/ab67616100005174e1cbc9e7ba8fbc5d7738ea51" },
    ];


    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: "blue", overflow: 'hidden' }}>
                    <Image style={{ height: "100%", width: "100%" }} resizeMode='contain' source={require('../../assets/avatar/testava.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setContent('all')} style={content == 'all' ? styles.headerBtnAct : styles.headerBtn}>
                    <Text style={content == 'all' ? styles.textHeaderBtnAct : styles.textHeaderBtn}>Tất cả</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setContent('music')} style={content == 'music' ? styles.headerBtnAct : styles.headerBtn}>
                    <Text style={content == 'music' ? styles.textHeaderBtnAct : styles.textHeaderBtn}>Nhạc</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setContent('podcasts')} style={content == 'podcasts' ? styles.headerBtnAct : styles.headerBtn}>
                    <Text style={content == 'podcasts' ? styles.textHeaderBtnAct : styles.textHeaderBtn}>Podcasts</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
                {/* //SECTION - Artist */}
                <View style={styles.contentContainer}>
                    <View style={[styles.columnContainer]}>
                        {/* Dòng 1 */}
                        {data.slice(0, Math.ceil(data.length / 2)).map(item => (
                            <TouchableOpacity key={item.id} style={styles.item}>
                                <Image 
                                    source={{ uri: item.img }} 
                                    style={{height:"100%",width:"30%"}} 
                                    resizeMode='cover' 
                                />
                                <View style={{width:'3%'}}></View>
                                <View style={{height:"100%",width:"72%",justifyContent:"center",alignItems:"flex-start",paddingLeft:"2%"}}>
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.columnContainer}>
                        {/* Dòng 2 */}
                        {data.slice(Math.ceil(data.length / 2)).map(item => (
                            <TouchableOpacity key={item.id} style={styles.item}>
                                <Image 
                                        source={{ uri: item.img }} 
                                        style={{height:"100%",width:"30%"}} 
                                        resizeMode='cover' 
                                    />
                                <View style={{width:'3%'}}></View>
                                    <View style={{height:"100%",width:"72%",justifyContent:"center",alignItems:"flex-start",paddingLeft:"2%"}}>
                                        <Text style={styles.title}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                {/* //!SECTION */}
                {/* //SECTION - For you */}
                    
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,fontWeight:"500",color:"white",marginTop:10}}>Dành cho bạn</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:12,fontWeight:"500",color:"white",marginTop:10,color:themes.gray1}}>Hiện tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{width:"100%",paddingTop:10,paddingBottom:10}}>
                        {
                            foryou.map((item, index) => (
                                <TouchableOpacity key={item.id} style={{height:240,width:160,borderRadius:10,marginRight:30,overflow:"hidden",paddingBottom:10}}>
                                    <View style={styles.imgItem}>
                                        <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri : item.img}}/>
                                    </View>
                                    <View style={styles.containerText}>
                                        <Text style={{color:"white",fontSize:12}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }


                    </ScrollView>
                {/* //!SECTION */}
                {/* //SECTION - Popular artist */}
                    
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,fontWeight:"500",color:"white",marginTop:10}}>Dành cho bạn</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:12,fontWeight:"500",color:"white",marginTop:10,color:themes.gray1}}>Hiện tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{width:"100%",paddingTop:10,paddingBottom:10}}>
                        {
                            artist.map((item, index) => (
                                <TouchableOpacity key={item.id} style={{height:240,width:160,borderRadius:10,marginRight:30,overflow:"hidden",paddingBottom:10}}>
                                    <View style={styles.imgItem}>
                                        <Image style={{height:160,width:160,borderRadius:80,}} resizeMode='cover' source={{uri : item.img}}/>
                                    </View>
                                    <View style={styles.containerText}>
                                        <Text style={{color:"white",fontSize:14,fontWeight:'500'}}>{item.title}.</Text>
                                        <Text style={{color:"white",fontSize:12}}>Nghệ sĩ</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }


                    </ScrollView>
                {/* //!SECTION */}
                {/* //SECTION - Suggestion */}
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,fontWeight:"500",color:"white",marginTop:10}}>Đài phát gợi ý</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:12,fontWeight:"500",color:"white",marginTop:10,color:themes.gray1}}>Hiện tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{width:"100%",paddingTop:10,paddingBottom:10}}>
                        {
                            suggest.map((item, index) => (
                                <TouchableOpacity key={item.id} style={{height:240,width:160,borderRadius:10,marginRight:30,overflow:"hidden",paddingBottom:10}}>
                                    <View style={styles.imgItem}>
                                        <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri : item.img}}/>
                                    </View>
                                    <View style={styles.containerText}>
                                        <Text style={{color:"white",fontSize:12}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }


                    </ScrollView>
                {/* //!SECTION */}
                {/* //SECTION - Recently */}
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,fontWeight:"500",color:"white",marginTop:10}}>Mới phát gần đây</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:12,fontWeight:"500",color:"white",marginTop:10,color:themes.gray1}}>Hiện tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{width:"100%",paddingTop:10,paddingBottom:10}}>
                        {
                            suggest.map((item, index) => (
                                <TouchableOpacity key={item.id} style={{height:240,width:160,borderRadius:10,marginRight:30,overflow:"hidden",paddingBottom:10}}>
                                    <View style={styles.imgItem}>
                                        <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri : item.img}}/>
                                    </View>
                                    <View style={styles.containerText}>
                                        <Text style={{color:"white",fontSize:12}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                {/* //!SECTION */}
                {/* //SECTION - Worth a try */}
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,fontWeight:"500",color:"white",marginTop:10}}>Đáng để thử</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:12,fontWeight:"500",color:"white",marginTop:10,color:themes.gray1}}>Hiện tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{width:"100%",paddingTop:10,paddingBottom:10}}>
                        {
                            suggest.map((item, index) => (
                                <TouchableOpacity key={item.id} style={{height:240,width:160,borderRadius:10,marginRight:30,overflow:"hidden",paddingBottom:10}}>
                                    <View style={styles.imgItem}>
                                        <Image style={{height:"100%",width:"100%"}} resizeMode='cover' source={{uri : item.img}}/>
                                    </View>
                                    <View style={styles.containerText}>
                                        <Text style={{color:"white",fontSize:12}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                {/* //!SECTION */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: 'black',
        position: "relative"
    },
    header: {
        flexDirection: "row",
        height: "6%",
        width: "100%",
        position: "absolute",
        zIndex:2,
        top: 0,
        left: 0,
        alignItems: "flex-end",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingBottom: "2%"
    },
    headerBtn: {
        height: 30,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(83, 83, 83, 0.6)',
        borderRadius: 30,
        marginLeft: 10
    },
    headerBtnAct: {
        height: 30,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(30, 215, 96, 0.6)',
        borderRadius: 30,
        marginLeft: 10
    },
    textHeaderBtn: {
        color: 'white',
        fontWeight: "500"
    },
    textHeaderBtnAct: {
        color: 'black',
        fontWeight: "500"
    },
    body: {
        flex: 1,
        width: "100%",
        paddingLeft:"2%",
        paddingRight:"2%"
    },
    item: {
        backgroundColor: 'rgba(180, 180, 180, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: "96%", 
        height: 50,
        borderRadius:6,
        flexDirection:'row',
        overflow:'hidden'
    },
    title: {
        fontSize: 12,
        fontWeight:"600",
        color: 'white',
    },
    contentContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingTop:60,
        alignItems:"center",


    },
    columnContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width:"50%",
    },
    imgItem:{
        width:"100%",
        height:"75%",
        overflow:"hidden",
        borderRadius:10,
        overflow:"hidden"
    },
    containerText:{
        height:"25%",
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginTop:10
    }

});

export default Home;
