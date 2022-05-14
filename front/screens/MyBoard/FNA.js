import React, { useEffect, useState } from "react";
import { Image, Text, ActivityIndicator, Dimensions, RefreshControl, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const FNA = () => {
  return (
      <View style={styles.text}>
        <Text>자주 묻는 질문</Text>

            {/* 자주 묻는 질문1 */}
            <Collapse>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
            </Collapse>
            {/* 자주하는 질문2 */}
            <Collapse>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
            </Collapse>
            {/* 자주하는 질문1 */}
            <Collapse>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
            </Collapse>
            {/* 자주하는 질문1 */}
            <Collapse>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
                <CollapseHeader>
                    <View style={styles.accodionHeader}>
                        <Text>Test1</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodionBody}>
                        <Text>Test1</Text>
                    </View>
                </CollapseBody>
            </Collapse>
        
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"tomato"
    },
    accodionHeader: {
        backgroundColor: 'tomato',
        marginTop: 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    accodionBody: {
        backgroundColor: 'gray',
        marginTop: 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text : {
        justifyContent: 'center'
    }
})


export default FNA;