import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const NumberInputChecker = ( input, setInput, setAction, setErrorHandler, isDecimal) => {

    if(input === ""){
        setErrorHandler("Por favor hacer un input");

    }  else if(isDecimal === false){
        let condition = false;

        for (let i = 0; i < input.length; i++){

            let toNumber = Number(input.slice(i, i+1)); // Slices each part of the string indiv, and converts it to a numner
            //If there's a conversion of a char, it will give out NaN (Not a Number)
            if(isNaN(toNumber)){ // Checks if its NOT a Number
                condition = true;
            }
        }
        if(condition){
            setErrorHandler("Necesitas un numero entero")
        } else {
            setErrorHandler("")
            setAction(input);
            setInput("");
        }

    } else if (isDecimal === true){
        
        const decimalPattern = /^\d*\.?\d*$/;
        
        if (decimalPattern.test(input)) {
            setErrorHandler("");
            setAction(input);
            setInput("");
        } else {
            setErrorHandler("Dame un numero decimal por favor");
        }
    }
}


const StringInputChecker = ( input, setInput, setAction, setErrorHandler) => {
    if(input === ""){
        setErrorHandler("Por favor hacer un input");
    } else {
        setErrorHandler("")
        setAction(input);
        setInput("");
    }

}



export {NumberInputChecker, StringInputChecker};