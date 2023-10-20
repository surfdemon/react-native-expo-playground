import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = ({navigation}) => { 
    //Setup useStates.
    const [calculatorState, setCalculatorState] = useState({
        currentValue: '0', 
        operatorSymbol: null,
        previousValue: null,
    });
    React.useEffect(() => {    
    });

    const operatorPress = (sym) => {
        const { currentValue, previousValue, operatorSymbol } = calculatorState;
        setCalculatorState({ previousValue: currentValue, currentValue: '0', operatorSymbol: sym });
    }

    const calculatePress = () => {
        const { currentValue, previousValue, operatorSymbol } = calculatorState;
        let newValue; 
        if (operatorSymbol === '+'){
            newValue = `${parseFloat(previousValue) + parseFloat(currentValue)}`.toString();
            setCalculatorState({ currentValue: newValue, operatorSymbol: null, previousValue: null});
        } else if (operatorSymbol === '-'){
            newValue = `${previousValue - currentValue}`;
            setCalculatorState({ currentValue: newValue, operatorSymbol: null, previousValue: null});
        } else if (operatorSymbol === '/'){
            newValue = `${previousValue / currentValue}`;
            setCalculatorState({ currentValue: newValue, operatorSymbol: null, previousValue: null});
        } else if (operatorSymbol === '*'){
            newValue = `${previousValue * currentValue}`;
            setCalculatorState({ currentValue: newValue, operatorSymbol: null, previousValue: null});
        }
    }

    const clearSums = () => {
       setCalculatorState({ currentValue: '0', operatorSymbol: null, previousValue: null});
    }

    const pointPress = (num) => {
        const { currentValue, previousValue, operatorSymbol } = calculatorState;
        setCalculatorState({ currentValue : currentValue + num, previousValue: previousValue, operatorSymbol: operatorSymbol});
    }

    const numPress = (num) => {
        const { currentValue, previousValue, operatorSymbol } = calculatorState;

        if (num === '.' && !currentValue.includes('.')) {
            //if num === . and currentValue does not include a . then add it to the end.
            return setCalculatorState({ currentValue: currentValue + num, previousValue: previousValue, operatorSymbol: operatorSymbol});
        } else if ( num !== '.') {
            //if num is not a . carry on 
            if (currentValue === '0'){
                //if currentValue is a 0 then replace it with new num
                setCalculatorState({  currentValue: num, previousValue: previousValue, operatorSymbol: operatorSymbol  });   
            } else {
                // if currentValue is not 0 then add new num to the end of currentValue
                setCalculatorState({ currentValue: currentValue + num, previousValue: previousValue, operatorSymbol: operatorSymbol});
            }
        }
    }

    return (
        <View style={[styles.mainRow]}>
            <View style={[styles.container]}>
                <View style={[styles.sumArea]}>
                    <Text id='sum' testID='sum' style={[styles.text, styles.sum]}>{calculatorState.currentValue}</Text>
                </View>
                <View style={[styles.row]}>
                    <CalculatorButton title="C" onPress={() => clearSums('C')} isTripleWidthButton testID='C' />
                    <CalculatorButton title="*" onPress={() => operatorPress('*')} symbol={calculatorState.operatorSymbol} isTripleWidthButton testID='*' />
                </View>    
                <View style={[styles.row]}>
                    <CalculatorButton title="1" onPress={() => numPress('1')} testID='1' />
                    <CalculatorButton title="2" onPress={() => numPress('2')} testID='2' />
                    <CalculatorButton title="3" onPress={() => numPress('3')} testID='3' />
                    <CalculatorButton title="+" onPress={() => operatorPress('+')} symbol={calculatorState.operatorSymbol} testID='+' />
                </View>    
                <View style={[styles.row]}>
                    <CalculatorButton title="4" onPress={() => numPress('4')} testID='4' />
                    <CalculatorButton title="5" onPress={() => numPress('5')} testID='5' />
                    <CalculatorButton title="6" onPress={() => numPress('6')} testID='6' />
                    <CalculatorButton title="-" onPress={() => operatorPress('-')} symbol={calculatorState.operatorSymbol} testID='-' />
                </View>
                <View style={[styles.row]}>
                    <CalculatorButton title="7" onPress={() => numPress('7')} testID='7' />
                    <CalculatorButton title="8" onPress={() => numPress('8')} testID='8' />
                    <CalculatorButton title="9" onPress={() => numPress('9')} testID='9' />
                    <CalculatorButton title="/" onPress={() => operatorPress('/')} symbol={calculatorState.operatorSymbol} testID='/' />
                </View> 
                <View style={[styles.row]}>
                    <CalculatorButton title="0" onPress={() => numPress('0')} isDoubleWidthButton testID='0' />
                    <CalculatorButton title="." onPress={() => numPress('.')} testID='dot' />
                    <CalculatorButton title="=" onPress={() => calculatePress('=')} testID='=' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainRow: {
        backgroundColor: 'darkgrey',
        flex: 1, 
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'space-evenly',
      justifyItems: 'space-evenly',
      justifyContent: 'flex-end',
      rowGap: 20,
    },
    button: {
        backgroundColor: 'cyan',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
    },
    doubleWidthButton: { 
        width: 150, 
    },
    tripleWidthButton: {
        width: 225,
    },   
    text: {
        fontSize: 25,
    },
    row: {
        flex: 1,
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20,
    },
    sumArea: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    sum: {
        fontSize: 60,
    }
  });

export default CalculatorScreen;