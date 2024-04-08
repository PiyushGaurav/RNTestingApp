import {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';

const Async = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(() => setError('Error'))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <Text style={{textAlign: 'center', marginVertical: 24}}>
        Something went wrong...
      </Text>
    );
  }

  if (loading) {
    return (
      <Text style={{textAlign: 'center', marginVertical: 24}}>Loading...</Text>
    );
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {users.map(user => (
          <View style={styles.listitem} key={user.id}>
            <Text testID="listitem" style={styles.name}>
              {user.name}
            </Text>
            <Text testID="listitem" style={styles.email}>
              {user.email}
            </Text>
          </View>
        ))}
      </ScrollView>
      <SafeAreaView />
    </>
  );
};

export default Async;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  listitem: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    color: 'yellow',
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});
