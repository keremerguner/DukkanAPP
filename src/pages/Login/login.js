import React from "react";
import { SafeAreaView, View, Image, Alert } from 'react-native'
import Input from "../../components/input";
import Button from "../../components/Button";
import styles from './login.style'
import { Formik } from "formik";
import usePost from "../../hooks/usePost";
import Config from "react-native-config";
import { useDispatch } from "react-redux";

const Login = () => {

    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();


    function handleLogin(values) {
        console.log('values: ', values)
        post('https://fakestoreapi.com/auth/login', values)

    }

    if (error) {
        Alert.alert('Dükkan', 'Bir hatayla karşılaşıldı.')
        console.log('error: ', error)

    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Dükkan', 'Kullanıcı Bulunamadı')
        }
        else {
            dispatch({type: 'SET_USER', payload: {user}})
            console.log('data: ', data)
        }
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

const user = {
    
        "address": {
        "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
        "firstname": "john",
        "lastname": "doe"
        },
        "phone": "1-570-236-7033",
        "__v": 0
        
}