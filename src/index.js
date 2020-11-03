import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native';

import api from './services/api';

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, [])

  return(
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({ item }) => (
        <Text style={styles.title}>{item.title}</Text>
      )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  title: {
    fontSize: 20,
    color: '#fff'
  }
});