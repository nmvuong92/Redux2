import React, { Component } from 'react'
import {Text,View} from 'react-native';
import {connect} from 'react-redux';

import ComB from './ComB';
class ComA extends Component {
   
    render() {
        return (
            <View style={{alignContent:"center",alignItems:"center",marginTop:100}}>
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