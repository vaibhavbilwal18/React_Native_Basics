import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    if (!websiteLink) {
      console.warn("No URL provided");
      return;
    }
    Linking.openURL(websiteLink).catch((err) => 
      console.error("Failed to open URL:", err)
    );
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        {/* Header */}
        <View style={styles.container}>
          <Text style={styles.headerText}>What's new in JavaScript 21 - ES12</Text>
        </View>
        {/* Image */}
        <Image
         source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2jrmVv98w8Ctbqxh-KWvz4X5BlZfs1yqx0ttEOC2yAkqE6Z1gvTdMpfWtL0jIErxPFY&usqp=CAU'
             }}
              style={styles.cardImage}
             />
        {/* Body */}
        <View style={styles.bodyCard}>
          <Text>Discover the latest updates in JavaScript ES12, including exciting new features and enhancements!</Text>
        </View>
        {/* Footer with Action */}
        <View style={styles.bodyFooter}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://example.com/blog/javascript-es12'); // Replace with your blog's link
            }}
          >
            <Text style={styles.linkText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  elevatedCard: {
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',

  },
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  bodyCard: {
    padding: 10,
  },
  bodyFooter: {
    padding: 10,
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 4,
    backgroundColor: 'black',
    borderRadius:2,
  },
});
