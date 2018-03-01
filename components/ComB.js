import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class ComB  extends Component {
    render() {
        return (
            <View>
                <Text>Calc</Text>
                <View>

                    <TouchableOpacity onPress={()=>{
                        this.props.dispatch({type: 'UP'});
                    }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.dispatch({type: 'DOWN'});
                    }}>
                        <Text>-</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
//khong can chia se nen connect rong
//khi ma exprt connect ==> co 1 bien dispatch
export default connect()(ComB);