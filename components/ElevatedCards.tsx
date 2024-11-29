import { View, Text , StyleSheet, ScrollView } from 'react-native'
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style={styles.container}>
          <View style = {[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
         </View>

         <View style = {[styles.card , styles.cardElevated]}>
            <Text>
                me
            </Text>
         </View>

         <View style = {[styles.card , styles.cardElevated]}>
            <Text>
                for
            </Text>
         </View>

         <View style = {[styles.card , styles.cardElevated]}>
         <Text>
             scrolling
         </Text>
      </View>

      <View style = {[styles.card , styles.cardElevated]}>
            <Text>
                just
            </Text>
         </View>

      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 12,
    }, 
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,


    },
    cardElevated: {
       backgroundColor: '#CAD5E2',
       shadowOffset: {
          width:1,
          height:1
       },
       shadowColor: '#333',
       shadowOpacity:0.4,
       shadowRadius: 2.0,

    },

});

export default ElevatedCards;