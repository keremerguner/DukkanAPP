import React from "react";
import { SafeAreaView, View, Image, Text, Alert } from 'react-native'
import Input from "../../components/input";
import Button from "../../components/Button";
import styles from './login.style'
import { Formik } from "formik";
import usePost from "../../hooks/usePost";
import Config from "react-native-config";

const Login = ({navigation}) => {

    const { data, loading, error, post } = usePost();


    function handleLogin(values) {
        console.log('values: ', values)
        post(Config.API_AUTH_URL + '/login', values)

    }

    if (error) {
        Alert.alert('Dükkan', 'Bir hatayla karşılaşıldı.')
        console.log('error: ', error)

    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Dükkan', 'Kullanıcı Bulunamadı')
        }
        console.log('data: ', data)
        navigation.navigate('ProductPage')
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
                        <Input
                            iconName='account'
                            placeholder="Kullanıcı adı giriniz..."
                            value={values.username}
                            onChangeText={handleChange('username')}
                        />
                        <Input
                            iconName='key'
                            placeholder="Şifre giriniz..."
                            isSecure={false}
                            value={values.password}
                            onChangeText={handleChange('password')}
                        />
                        <Button text='Giriş Yap' onPress={handleSubmit} loading={loading}
                        />
                    </View>)}
            </Formik>

        </SafeAreaView>
    )
}

export default Login;