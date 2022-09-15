import React from "react";
import { SafeAreaView, View, Image, Text } from 'react-native'
import Input from "../../components/input/input";
import Button from "../../components/Button/button";
import styles from './login.style'
import { Formik } from "formik";

const Login = () => {

    function handleLogin(values) {
        console.log(values)

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input iconName='account' placeholder="Kullanıcı adı giriniz..." value={values.username} onChangeText={handleChange('username')} />

                        <Input iconName='key' placeholder="Şifre giriniz..." isSecure={true} value={values.password} onChangeText={handleChange('password')} />
                        <Button text='Giriş Yap' onPress={handleSubmit} />
                    </View>)}
            </Formik>

        </SafeAreaView>
    )
}

export default Login;