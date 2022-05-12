import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

const Category = ["Triceps", "Chest", "Shulders", "Biceps", "Core", "Back", "Forearms", "Upper Legs", "Glutes", "Calves"]

const Strength = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            {Category.map((part, index) =>
                <View key={index} style={styles.each}>
                    <TouchableOpacity style={styles.eachText}>
                        <FontAwesomeIcon icon="fa-solid fa-dumbbell" />
                        <Text>{part}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    each: {
        flex:2e,
        backgroundColor: "lightgrey",
        marginTop: 40,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    eachText: {
        fontSize:20,
    },
})

export default Strength;