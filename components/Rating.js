import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

import { 
  StyleSheet, 
  TouchableOpacity,
  View,
 } from 'react-native';

export default function Rating(){
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1,2,3,4,5]);
  return(
    <View style={styles.wraper}> 
      {maxRating.map((item) => { 
          return ( 
            <TouchableOpacity 
              activeOpacity={0.7} 
              key={item} 
              onPress={() => setDefaultRating(item)}> 
              { 
                item <= defaultRating 
                  ? <AntDesign name="star" size={14} color="yellow" />
                  : <AntDesign name="staro" size={14} color="yellow" />
              } 
            </TouchableOpacity>
          );
        })
      } 
    </View> 
  );
};

const styles = StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    marginTop: 4
  },
});
