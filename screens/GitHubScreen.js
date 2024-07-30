import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, Linking } from 'react-native';
import axios from 'axios';

const GitHubScreen = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/CivitCihan/repos')
      .then(response => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#405D72" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Bir hata oluştu: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Repos</Text>
      <FlatList
        data={repos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.repoContainer}>
            <Text style={styles.repoName}>{item.name}</Text>
            <Text style={styles.repoDescription}>{item.description}</Text>
            <Button
              title="Proje Koduna Git"
              onPress={() => Linking.openURL(item.html_url)}
              color="#758694"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8F3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#405D72',
  },
  repoContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#F7E7DC',
    borderRadius: 8,
    borderColor: '#758694',
    borderWidth: 1,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#405D72',
  },
  repoDescription: {
    fontSize: 14,
    color: '#666',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default GitHubScreen;
