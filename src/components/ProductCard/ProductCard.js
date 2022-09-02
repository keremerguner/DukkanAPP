import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

const ProductCard = ({product, onSelect}) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>

            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image }} />

                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title} </Text>
                    <Text style={styles.price}>{product.price} TL </Text>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaeaea',
        flexDirection: 'row',
        borderWidth: 1,
        margin: 10,
        borderColor: 'gray',
        borderRadius: 10

    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10

    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between'

    },
    title: {
        fontWeight: 'bold'

    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic'

    }

})

export default ProductCard;

