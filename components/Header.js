import React from 'react'
import {Stylesheet, Text, View} from 'react-native'

function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>Memory Game</Text>
        </View>
    )
}
export default Header


const styles = Stylesheet.create({
    header: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: '#f3f3f3'
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center'
    }
})
