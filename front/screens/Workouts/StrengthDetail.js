import React from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'

const StrengthDetail = ({ route }) => {
    const { exercises } = route.params;
    console.log(exercises)
    return (
        <View style={styles.Container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                activit>
                {exercises.map((exercise, index) => {
                    <View key={index} style={styles.eachContainer}>
                        <TouchableOpacity>
                            <Text>{exercise.name}</Text>
                        </TouchableOpacity>
                    </View>
                })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    eachContainer: {
        flex: 1,
    }
})

export default StrengthDetail;