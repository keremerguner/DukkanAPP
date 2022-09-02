import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, ActivityIndicator } from 'react-native'
import Config from "react-native-config";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../Loading";
import Error from "../../Error";


const Products = (props) => {

    const { loading, data, error } = useFetch(Config.API_URL)

    const handleProductSelect = id => {
        props.navigation.navigate('DetailPage',{id})
    }    
    const renderProduct = ({item}) =>
    (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView>

            <FlatList data={data} renderItem={renderProduct} />

        </SafeAreaView>

    )
}

export default Products;