import React from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen =()=>{
    return(
        <View style={{flex:1}}>
            <View style={{paddingTop:60 }}>
                <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:130}}>Details</Text>
                <ScrollView horizontal={true} style={{flexDirection:"row", paddingTop:10}}>
               <View style={{marginLeft:20}}>
                   <Text style={{fontSize:20}}>Overview</Text>
               </View>

               <View style={{marginLeft:20}}>
                   <Text style={{fontSize:20}}>Feedback</Text>
               </View>
            
               <View style={{marginLeft:20}}>
                   <Text style={{fontSize:20}}>Description</Text>
               </View>
               <View style={{marginLeft:20}}>
                   <Text style={{fontSize:20}}>Recommended items</Text>
               </View>
              
               </ScrollView>
            </View>
            
              <ScrollView>
                  <View></View>
               <View style={{width:"110%", height:"80%",marginTop:"9%"}}>
                   <Image source={require("../pictures/bag1.jpeg")} style={{width:"90%", height:"90%"}}/>
               </View>
               <View style={{backgroundColor:"white"}}>
               <View style={{marginTop:5, padding:20}}>
                   <Text style={{fontSize:25, fontWeight:"bold"}}>GHC9.31~17.01</Text>
               </View>
               <View style={{paddingTop:10, padding:20}}>
                   <Text style={{fontSize:20, fontWeight:"bold"}}>GHC 10.64 >=30 pcs</Text>
                   <Text style={{fontSize:20, fontWeight:"bold", paddingTop:5}}>GHC 11.34 >=20 pcs</Text>
                   <Text style={{fontSize:20, fontWeight:"bold", paddingTop:5}}>GHC 12.74 >=10 pcs</Text>
                   <Text style={{fontSize:20, fontWeight:"bold", paddingTop:5}}>GHC 14.14 >=5 pcs</Text>
                   <Text style={{fontSize:20, fontWeight:"bold", paddingTop:5}}>GHC 15.54 >=3 pcs</Text>
                   <Text style={{paddingTop:2}}>11pcs/Set Boho Vintage Punk Antidue Flower Carved</Text>
                   <Text style={{paddingTop:2}}>Midi Finger Rings For Women Bohemian Knucle</Text>
                   <Text style={{paddingTop:2}}>Ring Set Jewellery</Text>
               </View>
               </View>

               <View style={{marginTop:10, backgroundColor:"white", padding:20, borderBottomWidth:0.5, borderBottomColor:"black"}}>
                   <Text style={{fontWeight:"bold", fontSize:20}}>Free Shipping</Text>
                   <Text style={{paddingTop:10}}>Estimated time of arrival: 20th Jul-23rd Jul</Text>
               </View>
               <View style={{marginTop:10, backgroundColor:"white", padding:20, borderBottomWidth:0.5, borderBottomColor:"black"}}>
                   <Text style={{fontWeight:"bold", fontSize:20}}>Free Shipping</Text>
                   <Text style={{paddingTop:10}}>Estimated time of arrival: 20th Jul-23rd Jul</Text>
               </View>
               <View style={{marginTop:10, backgroundColor:"white", padding:20, borderBottomWidth:0.5, borderBottomColor:"black"}}>
                   <Text style={{fontWeight:"bold", fontSize:20}}>Free Shipping</Text>
                   <Text style={{paddingTop:10}}>Estimated time of arrival: 20th Jul-23rd Jul</Text>
               </View>
               



               </ScrollView>
        </View>
    );
}

export default DetailsScreen; 