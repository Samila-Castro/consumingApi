import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Rating from './Rating';

export default function BookItem({ book }){
  return(
    <View style={styles.content}>
      <View style={styles.wraper}>
        <AntDesign name="user" size={20} color="white" />
        <Text style={styles.item}>
          {book.author}
        </Text>
      </View>
      <View style={styles.wraper}>
        <MaterialIcons name="title" size={20} color="white" />
        <Text style={styles.item}>
          {book.title}
        </Text>
      </View>
      <View style={styles.wraper}>
        <EvilIcons name="link" size={20} color="blue" />
        <Text style={styles.item}>{book.url}</Text>
      </View>
      <Rating/>
    </View> 
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#1f1e25',
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
  },
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  item: {
    color: '#fff',
  },
});