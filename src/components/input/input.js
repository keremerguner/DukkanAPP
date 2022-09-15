import React from "react";
import { SafeAreaView, TextInput, Text, View } from 'react-native'
import styles from './input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Input = ({ placeholder, onChangeText, value, iconName, isSecure }) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={isSecure} />
            <Icon style={styles.icon} name={iconName} size={20} color='gray' />
        </View>
    )
}

export default Input;