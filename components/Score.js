import React from 'react'
import {Stylesheet, Text, View} from 'react-native'

function Score() {
    const styles = Stylesheet.create({
        score_container: {
            flex: 1,
            alignItems: 'center',
            padding: 10
        },
        score: {
            fontSize: 40,
            fontWeight: 'bold'
        }        
    })

    return (
        <View style={styles.score_container}>
            <Text style={styles.score}>Un score</Text>
        </View>
    )
}

export default Score
