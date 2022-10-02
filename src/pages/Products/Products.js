import React from "react";
import { SafeAreaView, FlatList } from 'react-native'
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../Loading";
import Error from "../../Error";
import { useDispatch } from "react-redux";


const Products = (props) => {

    const dispatch = useDispatch();

    const { loading, data, error } = useFetch(Config.API_PRODUCT_URL)

    const handleProductSelect = id => {
        props.navigation.navigate('DetailPage', { id })
    }
    const renderProduct = ({ item }) =>
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