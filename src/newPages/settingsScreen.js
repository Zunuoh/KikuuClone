import React from 'react';
import {View, Text, Image} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingsScreen=()=>{
    return(
        <View style={{flex:1, backgroundColor:"#ececec"}}> 
        <View style={{height:"12%", backgroundColor:"red",  display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:30, paddingTop:30}}>Settings</Text>
        </View>

        <View style={{paddingTop:5, paddingBottom:5, paddingLeft:10, borderColor:"#ececec", borderWidth:1, marginTop:10, backgroundColor:"white", flexDirection:"row"}}>
           <View>
               <Image source={require('../pictures/bag1.jpeg')} style={{width:40, height:40, borderWidth:1, borderRadius:30}}/>
           </View>
           <View style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
               <Text style={{paddingLeft:10, fontSize:20, fontWeight:"bold"}}>Audrey Ponu</Text>
           </View>
           <View style={{paddingLeft:110, display:"flex", alignItems:"center", justifyContent:"center"}}>
               <Text style={{fontSize:15}}>Profile</Text>
           </View>
           <View style={{paddingLeft:40, display:"flex", alignItems:"center", justifyContent:"center"}}>
               <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
           </View>
        </View>
        {/* end */}
        <View>
            <View style={{flexDirection:"row", paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"#ececec", borderBottomWidth:1, marginTop:10, backgroundColor:"white"}}>
                <Text style={{fontSize:18}}>Address Management</Text>
                <View style={{paddingLeft:170}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white",paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"#ececec", borderBottomWidth:1}}>
            <Text style={{fontSize:18}}>Reset Password</Text>
                <View style={{paddingLeft:210}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white",paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"#ececec", borderBottomWidth:1}}>
            <Text style={{fontSize:18}}>My preferences</Text>
                <View style={{paddingLeft:210}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>
        </View>
        {/* end */}
        <View >
            <View style={{flexDirection:"row", paddingTop:14, paddingBottom:5,paddingLeft:20, borderColor:"#ececec", borderWidth:1, marginTop:10, backgroundColor:"white"}}>
                <Text style={{fontSize:18}}>Language</Text>
                <View style={{paddingLeft:250}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white",paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"#ececec", borderBottomWidth:1}}>
            <Text style={{fontSize:18}}>Notification Settings</Text>
                <View style={{paddingLeft:180}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white",paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"#ececec"}}>
            <Text style={{fontSize:18}}>Wipe Dalvik Cache</Text>
                <View style={{paddingLeft:190}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>
        </View>
        {/* end */}
        <View >
            <View style={{flexDirection:"row", paddingTop:14, paddingBottom:5,paddingLeft:20, borderColor:"#ececec", borderWidth:1, marginTop:10, backgroundColor:"white"}}>
                <Text style={{fontSize:18}}>User's Guide</Text>
                <View style={{paddingLeft:230}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white",paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"#ececec", borderBottomWidth:1}}>
            <Text style={{fontSize:18}}>Return Policy</Text>
                <View style={{paddingLeft:230}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>
        </View>
        {/* end */}
        <View >
            <View style={{flexDirection:"row", paddingLeft:20, paddingTop:14, paddingBottom:5, borderColor:"#ececec", borderWidth:1, marginTop:10, backgroundColor:"white"}}>
                <Text style={{fontSize:18}}>App Suggestion</Text>
                <View style={{paddingLeft:210}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white",paddingTop:14, paddingBottom:5,paddingLeft:20, borderBottomColor:"black"}}>
            <Text style={{fontSize:18}}>About Us</Text>
                <View style={{paddingLeft:260}}>
                <FontAwesome
               name="angle-right"
               size={24}
               color="#cecece"
               />
                </View>
            </View>
        </View>

        <TouchableOpacity style={{height:40, width:390, backgroundColor:"black", color:"white", display:"flex", justifyContent:"center", alignItems:"center", marginTop:10}}>
            <Text style={{color:"white"}}>LOG OUT</Text>
        </TouchableOpacity>














          
        </View>
    );

}
export default SettingsScreen;