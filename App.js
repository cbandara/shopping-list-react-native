import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    //uuid does not work with react native as far as I can tell.
    //Need to figure out a workaround or alternative module for this
    { id: "fd3fj4", text: 'Milk' },
    { id: "ddzr38", text: 'Bread' },
    { id: "ddzr39", text: 'Cheese' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' })
    }
    else {
      setItems(prevItems => {
        return [{ id: '3eddkdffkd', text }, ...prevItems];
      })
    }

  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'></Header>
      <AddItem addItem={addItem} />
      <FlatList
        data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default App;