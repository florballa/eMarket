import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles'

const Container = ({children}) => {
    return(
        <ScrollView>
            <View style={styles.wrapper}>{children}</View>
        </ScrollView>
    )
}

export default Container;