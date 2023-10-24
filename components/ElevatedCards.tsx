import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cartElevated]}>
                    <Text>Top</Text>
                </View>
                <View style={[styles.card, styles.cartElevated]}>
                    <Text>Me</Text>
                </View>
                <View style={[styles.card, styles.cartElevated]}>
                    <Text>To</Text>
                </View>
                <View style={[styles.card, styles.cartElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cartElevated]}>
                    <Text>More...</Text>
                </View>
                <View style={[styles.card, styles.cartElevated]}>
                    <Text>😊</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: '#000000'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: 100,
        height: 100,
        margin: 8
    },
    cartElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
})