import React from "react";
import Lottie from 'lottie-react-native';

function Error() {
    return (
        <Lottie source={require('../assets/errorAnimation.json')} autoPlay loop />
      );
}

export default Error;