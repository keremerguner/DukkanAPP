import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import styles from './button.style';


const Button = ({ text, onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.title} >{text} </Text>
        </TouchableOpacity>
    )
}

export default Button;