import React, { useState, useEffect, Children } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const BottomNavigation = () => (
    <View style={styles.bottomNavigation}>
      <Icon name="user" size={24} color="#000" />
      <Icon name="car" size={24} color="#000" />
      <Icon name="bars" size={24} color="#000" />
    </View>
  );

export const StatisticaParcheggi = () => {

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>La tua statica della città</Text>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Inserisci la città..." style={styles.searchInput} />
        <TouchableOpacity>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeader}>Grafica</Text>
      <View style={styles.filterContainer}>
       <Text style={styles.context}>Tempo totale: </Text>
      <Text style={styles.context}>Costo totale parcheggi: </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>STATISTICHE GENERALI</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096FF',
    padding: 16,
    paddingTop: getStatusBarHeight(),
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFBF00',
    textAlign: 'center',
    padding:15,

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  filterContainer: {
    padding: 10,
    backgroundColor: '#87CEFA',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: { width: 50, height: 2},
  },
  footer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    
  },
  buttonText: {
    color: '#fff',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 8,
  },
  context: {
      fontSize: 16,
  }


});

