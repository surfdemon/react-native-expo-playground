import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';

const CalculatorScreen = ({navigation}) => { 
    //Setup useStates.
    const [sum, setSum] = useState('0');
    React.useEffect(() => {    
    });
    const [fullSum, setFullSum] = useState('');
    React.useEffect(() => {
    });
    const [lastButton, setLastButton] = useState('');
    React.useEffect(() => {
    });
    const [firstNum, setFirstNum] = useState('');
    React.useEffect(() => {
    });
    const [secondNum, setSecondNum] = useState('');
    React.useEffect(() => {
    });
    const [operatorSymbol, setOperatorSymbol] = useState('');
    React.useEffect(() => {
    });
    const [fullSumView, setFullSumView] = useState(false);
    React.useEffect(() => {
    });

    // Function to toggle short sum / long sum is shown on screen.
    // const toggleView = () => {
    //     setFullSumView(!fullSumView);
    // }

    

    // Function to work out the sum when = button is pressed.
    const workoutSum = () => {
        // Need to split up the string in fullSum, get the numbers from either side 
        // of the operator symbol and the operator itself and then workout the answer. 
    }

    const symbolPress = (sym) => {
        setOperatorSymbol(sym);
    }

    // const toggleSumView = () => {
    //     //Toggle sum view 
    //     toggleView(); 
    //     alert(`Showing full sum ${fullSumView}`);
    // }

    const calculatePress = () => {
        let newSum;
        if (operatorSymbol === '+'){
            newSum = parseInt(firstNum) + parseInt(secondNum);
        } else if (operatorSymbol === '-'){
            newSum = parseInt(firstNum) - parseInt(secondNum);
        } else if (operatorSymbol === '/'){
            newSum = parseInt(firstNum) / parseInt(secondNum);
        } else if (operatorSymbol === '*'){
            newSum = parseInt(firstNum) * parseInt(secondNum);
        } 
        //set first num to be second num to be the first num
        setFirstNum(newSum);
        setSecondNum('');
        setSum(newSum);
    }

    const clearSums = () => {
        setSum('0');
        setOperatorSymbol('');
        setFirstNum('');
        setSecondNum('');
        setLastButton('C');
    }

    const pointPress = () => {
        setSum(sum + num);
        setOperatorSymbol('.');
    }

    const numPress = (num) => {
        //Function for when a number is pressed 

        //Get current values and save in new temp variables
        let tempSum = sum;
        let tempFirstNum = firstNum;
        let tempSecondNum = secondNum;


        //Check if the current sum is 0, if so it should be
        //if (tempSum === '0' && lastButton === ''){
        //    tempSum = '0';
        //}

        //Check to see if an operatorSymbol has been pressed or not, if it has then update second num and update 
        //the current sum with the second num. Otherwise must still be using the first num
        if (operatorSymbol !== '' && operatorSymbol !== undefined){
            tempSecondNum = secondNum + num; 
            tempSum = tempSecondNum; 
        } else { 
            tempFirstNum = firstNum + num;
            tempSum = tempFirstNum;
        }
        setSum(tempSum);
        setFirstNum(tempFirstNum);
        setSecondNum(tempSecondNum);
    }

    return (
        <View style={[styles.mainRow]}>
            <View style={[styles.container]}>
                <View style={[styles.sumArea]}>
                    <Text id='sum' style={[styles.text, styles.sum]}>{sum}</Text>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.button, styles.tripleWidthButton]} onPress={() => clearSums('C')}><Text style={[styles.text]}>C</Text></TouchableOpacity>
                    
                   
                    <TouchableOpacity style={[styles.button]} onPress={() => symbolPress('*')}><Text style={[styles.text]}>*</Text></TouchableOpacity>
                </View>    
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('1')}><Text style={[styles.text]}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('2')}><Text style={[styles.text]}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('3')}><Text style={[styles.text]}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => symbolPress('+')}><Text style={[styles.text]}>+</Text></TouchableOpacity>
                </View>    
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('4')}><Text style={[styles.text]}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('5')}><Text style={[styles.text]}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('6')}><Text style={[styles.text]}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => symbolPress('-')}><Text style={[styles.text]}>-</Text></TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('7')}><Text style={[styles.text]}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('8')}><Text style={[styles.text]}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('9')}><Text style={[styles.text]}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => symbolPress('/')}><Text style={[styles.text]}>/</Text></TouchableOpacity>
                </View> 
                <View style={[styles.row]}>
                    <TouchableOpacity style={[styles.button, styles.doubleWidthButton]} onPress={() => numPress('0')}><Text style={[styles.text]}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => numPress('.')}><Text style={[styles.text]}>.</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => calculatePress('=')}><Text style={[styles.text]}>=</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
// <TouchableOpacity style={[styles.button]} onPress={() => toggleSumView('TV')}><Text style={[styles.text]}>View</Text></TouchableOpacity>

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