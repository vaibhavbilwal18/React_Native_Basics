import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style ={styles.headingText}>Treanding Places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        }}
        style={styles.cardImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}> Alone Boy</Text>
            <Text style = {styles.cardLabel}> SunSet Boy</Text>
            <Text style = {styles.cardDescription}> Nothing new here im just try to understand the concept of image and the card developements </Text>
            <Text style = {styles.cardFooter}> 30 Away From Airport</Text>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    card: {
        width:400,
        height:400,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated:{
        backgroundColor:'gray',
        elevation:3,
        shadowOffset:{
            width:1,
            height: 1,
        }
    },
    cardImage: {
        height:200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,

    },
    cardBody: {
     flex: 1,
     flexGrow: 1,
     paddingHorizontal: 12,
     padding: 6,

    },
    cardTitle: {
        color:'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardLabel: {
        color:'white',
        fontSize: 18,
       marginBottom: 6,

    },
    cardDescription: {
        color:'white',
        fontSize:14,
        marginBottom: 6,
    },
    cardFooter: {
        color: 'white',
    },
});

export default FancyCard;