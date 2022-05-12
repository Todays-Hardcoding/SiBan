import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Browse = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <TouchableOpacity
                style={styles.Strength}
                onPress={() => navigation.navigate("BrowseDetail", {screen: "StrengthMain"})}>
                <Text style={styles.Text}>근력</Text>
                <Text>숨은 근육 강화 & 탄력 높이기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Endurance}
                onPress={() => navigation.navigate("BrowseDetail", {screen: "Endurance"})}>
                <Text style={styles.Text}>지구력</Text>
                <Text>심폐 기능 & 체력 단련</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Mobility}
                onPress={() => navigation.navigate("BrowseDetail", {screen: "Mobility"})}>
                <Text style={styles.Text}>활동성</Text>
                <Text>유연성 기르기</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Strength: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1
    },
    Endurance: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1
    },
    Mobility: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1
    },
    Text: {
        fontSize: 30,
        fontWeight: "600"
    }
})

export default Browse;
