import React from "react";
import { SafeAreaView, View, Text, TextInput, Image } from 'react-native'
import Input from "../../components/input/input";
import Button from "../../components/Button/button";
import styles from './login.style'

const Login = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı adı giriniz..." />
                <Input placeholder="Şifre giriniz..." />
                <Button text='Giriş Yap' />
            </View>
        </SafeAreaView>
    )
}

export default Login;