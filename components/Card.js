import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

function Card() {
    const styles = StyleSheet.create({
        card: {
          flex: 1,
          alignItems: 'center'
        },
        card_text: {
          fontSize: 50,
          fontWeight: 'bold'
        }
    });

    return (
        <View style={styles.card}>
            <TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"#f1f1f1"}>
                Hola
            </TouchableHighlight>
        </View>
    )
}

export default Card
