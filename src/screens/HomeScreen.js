import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const HomeScreen =()=>{
    return(
        <View style={{flex:1}}>
               <ScrollView>
            <View style={{paddingTop:60, backgroundColor:"#edadec", height:230}}>
            <TextInput style={{ height:36, width:280, paddingLeft:20, borderRadius:30, marginLeft:40, backgroundColor:"#eae8e8"}}>
                    <Ionicons style={{marginLeft:20}}
                    name="ios-search"
                    size="20"/>
                     <Text style={{display:"flex", justifyContent:"center", alignItems:"center"}}>  search</Text>
                </TextInput>
                <View style={{flexDirection:"row"}}>
                <View style={{paddingLeft:40, paddingTop:20, flex:7}}>
                <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>Men's</Text>
                <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>Clothes</Text>
                <Text style={{color:"white", fontWeight:"bold", fontSize:"15"}}>Shop now>></Text>
                <View style={{flexDirection:"row"}}>
                <View style={{width:10, height:10, borderRadius:20, backgroundColor:"white", marginTop:20}}/>
                <View style={{width:10, height:10, borderRadius:20, backgroundColor:"white", marginTop:20, marginLeft:10}}/>
                <View style={{width:10, height:10, borderRadius:20, backgroundColor:"orange", marginTop:20, marginLeft:10}}/>
                </View>
                </View>
                <View style={{flex:3, padding:20}}>
                <Image source={require('../pictures/shoe2.jpeg')} style={{width:100, height:100, borderRadius:10, resizeMode:"contain"}}/>
                    
                </View>
                   
                </View>
            
               
               
               
                </View>
              
         
        
            <View style={{paddingTop:40, paddingRight:10, paddingLeft:10}}>
                <View style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <View>
                    <Image source={require('../pictures/blouse4.jpeg')} style={{width:55, height:55, borderRadius:30}}/>
                    <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5}}>Wish List</Text>
                    </View>
                   
                   <View>
                   <Image source={require('../pictures/roller2.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Limited Offer</Text>
                   </View>
                  
                   <View>
                   <Image source={require('../pictures/kid4.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:30}}>In Accra</Text>
                   </View>

                     <View>
                   <Image source={require('../pictures/jewel4.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>New Arrival</Text>
                   </View>
                </View>
                  {/* ####################################################################################### */}
                <View style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center", paddingTop:25}}>
                    <View>
                    <Image source={require('../pictures/shoe2.jpeg')} style={{width:55, height:55, borderRadius:30, resizeMode:"contain"}}/>
                    <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5}}>Sneakers</Text>
                    </View>
                   
                   <View>
                   <Image source={require('../pictures/blouse1.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30, resizeMode:"contain"}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Dresses</Text>
                   </View>
                  
                   <View>
                   <Image source={require('../pictures/curl1.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30, resizeMode:"contain"}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:30}}>Tops</Text>
                   </View>

                     <View>
                   <Image source={require('../pictures/found1.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30, resizeMode:"contain"}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Shoulder</Text>
                   </View>
                </View>
     {/* ##################################################################################### */}

            <View style={{paddingTop:20, paddingLeft:10, paddingRight:10}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Flash Sales</Text>
            </View>
            <ScrollView horizontal={true}>
            <View style={{paddingTop:10, paddingLeft:5, flexDirection:"row"}}>
                <Image source={require('../pictures/found2.jpeg')} style={{width:120, height:120, borderRadius:5}}/>
                <Image source={require('../pictures/heel2.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                <Image source={require('../pictures/shoe3.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10, resizeMode:"contain"}}/>
                <Image source={require('../pictures/blouse2.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                <Image source={require('../pictures/jewel1.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/>
                {/* <Image source={require('../pictures/cold4.jpeg')} style={{width:120, height:120, borderRadius:5, marginLeft:10}}/> */}
            </View>
            </ScrollView>

            <View style={{paddingTop:20}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>KiKUU Picks</Text>
            </View>
            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/curl1.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/heel4.jpeg')} style={{width:"68%", height:60, marginLeft:10}}/>
                
               
            </View>

            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/heel3.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"48%", height:60, marginLeft:10}}/>
            </View>
{/* ######################################################################################### */}
            <View>
                <Text style={{fontWeight:"bold", fontSize:20, paddingTop:20}}>Today's Deal</Text>
            </View>
            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
            {/* <View style={{backgroundColor:"red", width:"50%", height:190}}>
            <Image source={require('../pictures/shoe3.jpeg')} style={{width:"70%", height:150, resizeMode:"center"}}/>
            <Text style={{fontSize:20, fontWeight:"bold"}}>GHC25.00</Text>
            </View> */}
              
                <Image source={require('../pictures/roller1.jpeg')} style={{width:"68%", height:60, marginLeft:10}}/>
                
               
            </View>

            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/stra3.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"48%", height:60, marginLeft:10}}/>
            </View>
            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/curl1.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/heel4.jpeg')} style={{width:"68%", height:60, marginLeft:10}}/>
                
               
            </View>

            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/heel3.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/cold4.jpeg')} style={{width:"48%", height:60, marginLeft:10}}/>
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