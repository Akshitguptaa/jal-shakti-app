import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_of_MyGov_%28India%29.svg/512px-Logo_of_MyGov_%28India%29.svg.png' }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Empowering every citizen to be a Catalyst for Change</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Click Here</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView horizontal style={styles.mainContent}>
        <View style={styles.contentBox}>
          <Text style={styles.boxText}>Join MyGov on WhatsApp</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.boxText}>MyGov Pulse</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.boxText}>MyGov Saathi</Text>
        </View>
      </ScrollView>

      {/* COVID-19 Stats Section */}
      <View style={styles.covidSection}>
        <Text style={styles.covidHeader}>India Covid-19</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Total Cases</Text>
            <Text style={styles.statNumber}>4,50,29,455</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Active Cases</Text>
            <Text style={styles.statNumber}>20</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Recovered</Text>
            <Text style={styles.statNumber}>4,44,95,056</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  headerButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  headerButtonText: {
    color: '#000',
  },
  mainContent: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  contentBox: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  boxText: {
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
  },
  covidSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  covidHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statText: {
    color: '#555',
    fontSize: 12,
  },
  statNumber: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#007bff',
  },
});

export default App;
