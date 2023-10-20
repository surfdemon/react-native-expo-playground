import * as React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';

const CalculatorButton = ( props ) => {
    const title = props.title;
    const isTripleWidthButton = props.tripleWidthButton;
    const isDoubleWidthButton = props.doubleWidthButton;
    const onPress = props.onPress;
    const testID = props.testID;
    const symbol = props.symbol;
    let pressed = false; 

    if ( symbol === title ){
        pressed = true;
    }
    
    if(isTripleWidthButton){
        if(pressed){
            return ( 
                <TouchableOpacity 
                    style={[ styles.button, styles.tripleWidthButton, styles.pressed ]}         
                    onPress={onPress} testID={testID}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            )
        } else { 
            return ( 
                <TouchableOpacity 
                    style={[ styles.button, styles.tripleWidthButton ]}         
                    onPress={onPress} testID={testID}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            )
        }
    } else if (isDoubleWidthButton){ 
        if(pressed){
            return ( 
                <TouchableOpacity 
                    style={[ styles.button, styles.doubleWidthButton, styles.pressed ]}         
                    onPress={onPress} testID={testID}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            )
        } else { 
            return ( 
                <TouchableOpacity 
                    style={[ styles.button, styles.doubleWidthButton ]}         
                    onPress={onPress} testID={testID}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            )
        }
    } else {
        if (pressed){
            return ( 
                <TouchableOpacity 
                    style={[ styles.button, styles.pressed]}         
                    onPress={onPress} testID={testID}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            )            
        } else {
            return ( 
                <TouchableOpacity 
                    style={[ styles.button]}         
                    onPress={onPress} testID={testID}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            )
        }
    }
}
  
const styles = StyleSheet.create({
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
        width: 170,
    },   
    text: {
        fontSize: 25,
    },
    pressed: {
        backgroundColor: 'blue',
    }
});

export default CalculatorButton;