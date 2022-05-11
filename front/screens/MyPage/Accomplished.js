import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SectionGrid } from 'react-native-super-grid';

function Accomplished() {
  const [items, setItems] = React.useState([
    { name: 'Sample01', code: '#1abc9c' },
    { name: 'Sample02', code: '#2ecc71' },
    { name: 'Sample03', code: '#3498db' },
    { name: 'Sample04', code: '#9b59b6' },
    { name: 'Sample05', code: '#34495e' },
    { name: 'Sample06', code: '#16a085' },
    { name: 'Sample07', code: '#27ae60' },
    { name: 'Sample08', code: '#2980b9' },
    { name: 'Sample09', code: '#8e44ad' },
    { name: 'Sample10', code: '#2c3e50' },
    { name: 'Sample11', code: '#f1c40f' },
    { name: 'Sample12', code: '#e67e22' },
    { name: 'Sample13', code: '#e74c3c' },
    { name: 'Sample14', code: '#ecf0f1' },
    { name: 'Sample15', code: '#95a5a6' },
    { name: 'Sample16', code: '#f39c12' },
    { name: 'Sample17', code: '#d35400' },
    { name: 'Sample18', code: '#c0392b' },
    { name: 'Sample19', code: '#bdc3c7' },
    { name: 'Sample20', code: '#7f8c8d' },
  ]);

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: '트로피',
          data: items.slice(0, 6),
        },
        {
          title: '마일스톤',
          data: items.slice(6, 12),
        },
        {
          title: '주간운동',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});

export default Accomplished;