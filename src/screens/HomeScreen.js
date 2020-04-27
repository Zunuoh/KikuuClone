import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen =()=>{
    return(
        <View style={{flex:1}}>
               <ScrollView>
            <View style={{paddingTop:60, backgroundColor:"red", height:200}}>
            <TextInput style={{borderWidth:1, height:36, width:280, paddingLeft:20, borderRadius:30, marginLeft:20}}
                placeholder="search"
                />
            </View>
        
            <View style={{paddingTop:40, paddingRight:10, paddingLeft:10}}>
                <View style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <View>
                    <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30}}/>
                    <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5}}>Wish List</Text>
                    </View>
                   
                   <View>
                   <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Limited Offer</Text>
                   </View>
                  
                   <View>
                   <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:30}}>In Accra</Text>
                   </View>

                     <View>
                   <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>New Arrival</Text>
                   </View>
                </View>
                  {/* ####################################################################################### */}
                <View style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center", paddingTop:25}}>
                    <View>
                    <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30}}/>
                    <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5}}>Sneakers</Text>
                    </View>
                   
                   <View>
                   <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Dresses</Text>
                   </View>
                  
                   <View>
                   <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:30}}>Tops</Text>
                   </View>

                     <View>
                   <Image source={require('../pictures/pic1.png')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Shoulder</Text>
                   </View>
                </View>
     {/* ##################################################################################### */}

            <View style={{paddingTop:20, paddingLeft:10, paddingRight:10}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Flash Sales</Text>
            </View>
            <ScrollView horizontal={true}>
            <View style={{paddingTop:10, paddingLeft:5, flexDirection:"row"}}>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                {/* <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/> */}
            </View>
            </ScrollView>

            <View style={{paddingTop:20}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>KiKUU Picks</Text>
            </View>
            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"68%", height:60, marginLeft:10}}/>
                
               
            </View>

            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"48%", height:60, marginLeft:10}}/>
            </View>
{/* ######################################################################################### */}
            <View>
                <Text style={{fontWeight:"bold", fontSize:20, paddingTop:20}}>Today's Deal</Text>
            </View>
            {/* <View>
            <Image source={require('../pictures/cold4.jpeg')} style={{width:"55%", height:"55%"}}/>
            
            </View> */}


           
            
   



















            </View>






            </ScrollView>

















        </View>
    );
}

export default HomeScreen;