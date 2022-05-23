import { StyleSheet, Text, View, TextInput, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import BookItem  from './components/BookItem';

export default function App() {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState('');
  
  const handleSearche = () => {
      fetch(`https://hn.algolia.com/api/v1/search?query=${input}`)
     .then(response => response.json())
     .then(data =>setBooks(data.hits))
     .catch((err)=> console.log("Oops!" + err))

  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Searche for books</Text>
      <TextInput
        style={styles.input}
        placeholder="Books"
        placeholderTextColor="#555"
        onChangeText={setInput}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleSearche}
       >
        <Text style={styles.buttonText}>Searche</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {books && books.map((book) => {
          return <BookItem  key={book.objectID} book={book}/>
        })}
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 60,
    paddingHorizontal: 40,
    fontWeight: 'bold'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#1f1e25',
    fontSize: 18,
    borderRadius: 6,
    padding: Platform.OS == 'ios' ? 12 : 10,
    color: '#FFF'
  },
  button: {
    backgroundColor: '#A379F7',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center', //React native: todos os elementos tem flex como default 
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
