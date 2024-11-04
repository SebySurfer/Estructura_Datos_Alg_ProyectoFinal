import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InputChecker = ( input, setInput, setDisplay, setErrorHandler, needsNumber, isDecimal) => {
    
        if(input === ""){
            setErrorHandler("Please input something");
    
        }  else if(needsNumber === true && isDecimal === false){
            let condition = false;
    
            for (let i = 0; i < input.length; i++){
    
                let toNumber = Number(input.slice(i, i+1)); // Slices each part of the string indiv, and converts it to a numner
                //If there's a conversion of a char, it will give out NaN (Not a Number)
                if(isNaN(toNumber)){ // Checks if its NOT a Number
                    condition = true;
                }
            }
            if(condition){
                setErrorHandler("You need to send a whole number")
            } else {
                setErrorHandler("")
                setDisplay(input);
                setInput("");
            }
    
        } else if (needsNumber === true && isDecimal === true){
            
            const decimalPattern = /^\d*\.?\d*$/;
            
            if (decimalPattern.test(input)) {
                setErrorHandler("");
                setDisplay(input);
                setInput("");
            } else {
                setErrorHandler("Please enter a valid decimal number.");
            }
    
        } else {
            setErrorHandler("")
            setDisplay(input);
            setInput("");
    
        }
    
        }


const styles = StyleSheet.create({})

export default InputChecker;