import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import ComB from './../ComB/ComB';
import styles from './styles';
class ComA extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.myValue}</Text>
                <ComB/>
            </View>    
        );
    }
}
function mapStateToProps(state){
    //nhan state nao tu product roi lay thanh props
    return {myValue:state.value};
}
export default connect(mapStateToProps)(ComA);