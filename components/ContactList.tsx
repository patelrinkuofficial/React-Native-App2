import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Patel Rinku',
            status: 'I am 💕💕full stack developer',
            imageUrl: 'https://www.upwork.com/profile-portraits/c1BsOP2fj6tGFGAEfPAM8BpBVe_WfR3nX_JaWI9BRS6s0GBlIDjh5C7GdTlHIekcAF'
        },
        {
            uid: 2,
            name: 'Patel Abhay',
            status: 'I am accountent',
            imageUrl: 'https://www.upwork.com/profile-portraits/c1BsOP2fj6tGFGAEfPAM8BpBVe_WfR3nX_JaWI9BRS6s0GBlIDjh5C7GdTlHIekcAF'
        },
        {
            uid: 3,
            name: 'Patel Roshani',
            status: 'I am 💕💕fashion designer',
            imageUrl: 'https://www.upwork.com/profile-portraits/c1BsOP2fj6tGFGAEfPAM8BpBVe_WfR3nX_JaWI9BRS6s0GBlIDjh5C7GdTlHIekcAF'
        },
        {
            uid: 4,
            name: 'Patel Soni',
            status: 'I am 💕💕beuti expert',
            imageUrl: 'https://www.upwork.com/profile-portraits/c1BsOP2fj6tGFGAEfPAM8BpBVe_WfR3nX_JaWI9BRS6s0GBlIDjh5C7GdTlHIekcAF'
        }
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
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
        paddingHorizontal: 16
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12,
        color: '#FFF'
    }
})