import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../Loading";
import Error from "../../Error";

const Detail = ({ route }) => {

    const { id } = route.params;
    const { loading, data, error } = useFetch(`${Config.API_PRODUCT_URL}/${id}`)


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text> 
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body_container: {
        padding: 10

    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    description: { fontStyle: 'italic' },
    price: { fontWeight: 'bold', fontSize: 25, textAlign: 'right', paddingRight: 10 }
})

export default Detail;

