import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts = [
        {
          uid: '1',
          name: 'John Doe',
          status: 'Available',
          imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          uid: '2',
          name: 'Jane Smith',
          status: 'Busy',
          imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          uid: '3',
          name: 'Sam Wilson',
          status: 'Offline',
          imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
        {
          uid: '4',
          name: 'Alice Johnson',
          status: 'Available',
          imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
        },
        {
          uid: '5',
          name: 'Bob Brown',
          status: 'In a meeting',
          imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
           {Contacts.map(({uid,name, status, imageUrl }) => (
             <View key={uid} style={styles.userCard}>
                <Image
                 source={{
                    uri: imageUrl,
                 }}
                 style={styles.userImage}
                />
                <Text style={styles.nameText}>Name: {name}</Text>
                <Text style={styles.statusText}>Status: {status}</Text>

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
        paddingHorizontal: 12,
    },
    container: {
        padding: 8,
    },
    userCard: {
        shadowColor: '#000',
        backgroundColor: '#dbeff0',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        padding:8,
        marginBottom: 4,
        borderRadius: 4,

    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
    },
    nameText: {
        padding:2,
    },
    statusText: {}
});