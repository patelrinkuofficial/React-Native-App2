import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCard</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://thumbs.dreamstime.com/z/blog-magnifying-glass-focused-word-30560783.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, Jaiput</Text>
                    <Text style={styles.cardDescription}>A photoblog (or photolog) is a form of photo sharing and publishing in the format of a blog. It differs from a blog through the predominant use of and focus on photographs rather than text.</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
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
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 20
    },
    cardElevated: {
        backgroundColor: '#FFFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242b2e',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6
    },
    cardFooter: {
        color: '#000000'
    }
})