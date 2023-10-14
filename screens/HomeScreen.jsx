import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => { 
    return (
        <ScrollView>
            <Text>This is the home screen</Text>

        </ScrollView>
    )
}

export default HomeScreen;
/*            <Button 
                title="Profile Screen"
                onPress={() => navigation.navigate('Profile')}
            />*/