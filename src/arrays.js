import React from 'react';
import {View, Image, Text} from 'react-native';
const productList=[{"id":"0", "price":"GHC221", "orders":"211", "image":require('../pictures/bag1.jpeg')}, {"id":"1", "price":"GHC221", "orders":"211", "image":require('../pictures/blouse1.jpeg')},
{"id":"2", "price":"GHC221", "orders":"211", "image":require('../pictures/curl1.jpeg')}, {"id":"3", "price":"GHC221", "orders":"211", "image":require('../pictures/dress1.jpeg')}, 
{"id":"4", "price":"GHC221", "orders":"211", "image":require('../pictures/ear1.jpeg')}, {"id":"5", "price":"GHC221", "orders":"211", "image":require('../pictures/found1.jpeg')} ]


const ArrayScreen=()=>{
    const [products, setProducts]=useState(productList);
    return(
<Text>hi</Text>
    );
}
export default ArrayScreen;