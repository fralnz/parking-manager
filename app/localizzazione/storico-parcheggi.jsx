import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const parkingData = [
  { id: '1', address: 'Via Benigno Crespi, 30, 20159 Milan', date: '5/30/2024', time: '13:20 - 15:33', plate: 'ES233FK', price: '€ 6', favorite: false },
  { id: '2', address: 'Corso Buenos Aires, 33, 20124 Milan', date: '5/30/2024', time: '11:30 - 13:00', plate: 'XY987ZT', price: '€ 7', favorite: true },
  { id: '3', address: 'Piazza del Duomo, 12, 20122 Milan', date: '5/29/2024', time: '14:00 - 15:30', plate: 'LM456OP', price: '€ 8', favorite: false },
  { id: '4', address: 'Via Dante, 7, 20121 Milan', date: '5/28/2024', time: '09:00 - 11:00', plate: 'JK321GH', price: '€ 6', favorite: true },
  { id: '5', address: 'Viale Abruzzi, 99, 20131 Milan', date: '5/27/2024', time: '17:00 - 18:30', plate: 'UV654WX', price: '€ 4', favorite: false },
];

const ParkingCard = ({ data, toggleFavorite }) => (
  <View style={styles.card}>
    <Icon name="car" size={40} color="#000" />
    <View style={styles.cardContent}>
      <Text>{data.address}</Text>
      <Text>Payed {data.price}</Text>
      <Text>Plate: {data.plate}</Text>
      <Text>{data.date}</Text>
      <Text>{data.time}</Text>
    </View>
    <TouchableOpacity onPress={() => toggleFavorite(data.id)}>
      <Icon name="bookmark" size={24} color={data.favorite ? "#FFD700" : "#000"} />
    </TouchableOpacity>
  </View>
);

const BottomNavigation = () => (
  <View style={styles.bottomNavigation}>
    <Icon name="user" size={24} color="#000" />
    <Icon name="car" size={24} color="#000" />
    <Icon name="bars" size={24} color="#000" />
  </View>
);

const App = () => {
  const [sortType, setSortType] = useState('none'); // State to manage sort type
  const [showFavorites, setShowFavorites] = useState(false); // State to manage favorites filter
  const [totalExpenses, setTotalExpenses] = useState(0); // State to manage total expenses
  const [data, setData] = useState(parkingData); // State to manage parking data

  useEffect(() => {
    calculateTotalExpenses();
  }, [data]);

  const calculateTotalExpenses = () => {
    const total = data.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);
    setTotalExpenses(total);
  };

  const sortData = (type) => {
    let sortedData = [...data];
    if (type === 'highest') {
      sortedData.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    } else if (type === 'invert') {
      sortedData.reverse();
    }
    return sortedData;
  };

  const toggleFavorite = (id) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
    setData(updatedData);
  };

  const filteredData = showFavorites ? data.filter(item => item.favorite) : data;

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Storico parcheggi</Text>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Inserisci la via del parcheggio..." style={styles.searchInput} />
        <TouchableOpacity>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.subHeader}>Parcheggi recenti</Text>
        <TouchableOpacity onPress={() => setSortType('highest')} style={styles.filterButton}>
          <Icon name="filter" size={20} color="#000" />
          <Text>Highest Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortType('invert')} style={styles.filterButton}>
          <Icon name="exchange" size={20} color="#000" />
          <Text>Invert List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowFavorites(!showFavorites)} style={styles.filterButton}>
          <Icon name="star" size={20} color={showFavorites ? "#FFD700" : "#000"} />
          <Text>Favorites</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortData(sortType)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ParkingCard data={item} toggleFavorite={toggleFavorite} />}
      />
      <View style={styles.footer}>
        <Text>Totale Spese Parcheggi: €{totalExpenses.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>STATISTICHE</Text>
        </TouchableOpacity>
      </View>
      <BottomNavigation />
    </View>
    </>
  );
};

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
    color: '#fff',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
  },
  footer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 8,
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
});

export default App;
