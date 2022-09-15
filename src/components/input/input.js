import React from "react";
import { SafeAreaView, TextInput, Text, View } from 'react-native'
import styles from './input.style';


const Input = ({ placeholder, onChangeText }) => {

    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} />
        </View>
    )
}

export default Input;