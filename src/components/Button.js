import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = ({onPress,children}) => {
    const {buttontyle,textStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttontyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#00faff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttontyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }
};

export default Button;