import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Type here..." />
        </View>
        <View style={styles.headerIcons}>
          <Icon name="person-outline" size={24} color="#666" />
          <Icon name="notifications-outline" size={24} color="#666" style={{ marginLeft: 15 }} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
      
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <Text style={styles.cardAmount}>$103,430 <Text style={styles.cardPercentage}>+5%</Text></Text>
          <View style={styles.cardIconContainer}>
            <Icon name="cart-outline" size={30} color="#fff" />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f1f3f5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
  },
  cardAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPercentage: {
    fontSize: 16,
    color: 'green',
  },
  negativePercentage: {
    color: 'red',
  },
  cardIconContainer: {
    backgroundColor: '#2fbce6',
    padding: 10,
    borderRadius: 10,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2fbce6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
});
