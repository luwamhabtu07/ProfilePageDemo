import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile Page</Text>
      </View>

      <Image
        style={styles.image}
        source={{ uri: 'https://placekitten.com/400/300' }}
        resizeMode="cover"
      />

      <ScrollView style={styles.scroll}>
        <Text style={styles.scrollText}>👋 Hi! I'm a developer.</Text>
        <Text style={styles.scrollText}>💼 I love building mobile apps.</Text>
        <Text style={styles.scrollText}>🎨 I enjoy design and UI/UX.</Text>
        <Text style={styles.scrollText}>📚 I read tech blogs.</Text>
        <Text style={styles.scrollText}>🌍 I want to make a global impact.</Text>
      </ScrollView>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Enter your name" />
        <TextInput style={styles.input} placeholder="Leave a comment" multiline />
        <Text style={styles.button}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#fff' },
  header: { backgroundColor: '#6200ee', padding: 20 },
  headerText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  image: { width: '100%', height: 200, marginTop: 10 },
  scroll: { margin: 10, maxHeight: 150 },
  scrollText: { fontSize: 16, marginBottom: 10 },
  form: { padding: 20 },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  button: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#6200ee',
    color: '#fff',
    borderRadius: 5
  }
});
