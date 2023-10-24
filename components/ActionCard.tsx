import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websitelink: string) {
        Linking.openURL(websitelink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://thumbs.dreamstime.com/z/blog-magnifying-glass-focused-word-30560783.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>A photoblog (or photolog) is a form of photo sharing and publishing in the format of a blog. It differs from a blog through the predominant use of and focus on photographs rather than text.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.upwork.com/freelancers/rinkupatel')}
                        style={styles.socialLinks}
                    >
                        <Text>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.upwork.com/freelancers/rinkupatel')}
                        style={styles.socialLinks}
                    >
                        <Text>Follw Mme</Text>
                    </TouchableOpacity>
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
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 180
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})