import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    TextInput
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
export default class FlexDemo extends Component{
    constructor(props){
        super(props);
        //
        this.state={
            animating:false
        }
    }

    render(){
        const animating = this.state.animating;
        return(
      
            <View style={styles.PinContainer}>
                
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                       
                        <FontAwesome.Button onPress={()=>{ 
                            console.log("Ya");
                         }} name="th" style={styles.VButton} backgroundColor="white" color="red"></FontAwesome.Button>
                      
                    </View>
                    <View style={styles.SearchBox}>
                         <TextInput style={{borderWidth:1,borderColor:"gray"}}/>
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <FontAwesome.Button onPress={()=>{
                              console.log("Ya2");
                        }} name="shopping-cart" style={styles.VButton}  backgroundColor="white" color="red"></FontAwesome.Button>
                    </View>
                </View>
            </View>
        );
    }
}