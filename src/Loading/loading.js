import React from "react";
import Lottie from 'lottie-react-native';

function Loading() {
    return (
        <Lottie source={require('../assets/loadingAnimation.json')} autoPlay loop />
      ); 
}

export default Loading;