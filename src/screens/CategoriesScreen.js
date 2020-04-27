import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const CategoriesScreen =()=>{
    return(
        <View style={{flex:1}}>
            <View style={{paddingTop:60, height:100, borderWidth:1, borderBottomColor:"black"}}>
            <TextInput style={{borderWidth:1, height:36, width:280, paddingLeft:20, borderRadius:30, marginLeft:20}}
                placeholder="search"
                />
         </View>

         <ScrollView>
             <View style={{flexDirection:"row"}}>
             <View style={{flex:3}}> 

              <View style={{padding:15}}>
              <Text style={{fontSize:15}}>Recommend</Text>
              </View>
             
               <TouchableOpacity style={{backgroundColor:"red", height:52}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>
             </View>

             <View style={{flex:8}}>
              <View style={{padding:15}}>
              <Text style={{fontSize:15, fontWeight:"bold"}}>Recommend</Text>
              </View>

              <View style={{padding:15, flexDirection:"row"}}>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70}}/>
                  <Text style={{paddingLeft:10}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
              </View>

              <View style={{padding:15, flexDirection:"row"}}>
              <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70}}/>
                  <Text style={{paddingLeft:10}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
              </View>

              <View style={{padding:15, flexDirection:"row"}}>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70}}/>
                  <Text style={{paddingLeft:10}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
              </View>

              <View style={{padding:15, flexDirection:"row"}}>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70}}/>
                  <Text style={{paddingLeft:10}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/pic1.png')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>hi</Text>
                  </View>
              </View>
               

             </View>
             </View>
         </ScrollView>
          

        </View>
    );
}

export default CategoriesScreen;