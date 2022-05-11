import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




const MyProfile = () => {

  var state = {
    tableHead: ['회원이름'],
    tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
    tableData: [
      ['나이', '2'],
      ['머시기', 'b'],
      ['몸무게', '2'],
      ['키', 'b']
    ]
  }
  return (
    <View style={styles.container}>
      <Text> 유저 프로필 화면 입니다.</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  wrapper: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    backgroundColor: '#f6f8fa'
  },
  row: {
    height: 28
  },
  text: {
    textAlign: 'center'
  }
});

export default MyProfile;