import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const exercises = {
    "가슴": [{ id: 1, name: "벤치프레스" }, { id: 2, name: "인클라인 벤치프레스" }, { id: 3, name: "케이블 크로스 오버" }, { id: 4, name: "딥스" }, { id: 5, name: "풀오버" }],
    "등": [{ id: 1, name: "데드리프트" }, { id: 2, name: "바벨로우" }, { id: 3, name: "풀업" }, { id: 4, name: "시티드 로우" }, { id: 5, name: "렛풀 다운" }],
    "하체": [{ id: 1, name: "스쿼트" }, { id: 2, name: "레그 프레스" }, { id: 3, name: "런지" }, { id: 4, name: "레그 익스텐션" }, { id: 5, name: "레그 컬" }],
    "어깨": [{ id: 1, name: "덤벨 레터럴 레이즈" }, { id: 2, name: "덤벨 프론트 레이즈" }, { id: 3, name: "벤트오버 레터렐 레이즈" }, { id: 4, name: "숄더 프레스" }],
}

const StrengthMain = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            {Object.keys(exercises).map((key, index) =>
                <View key={index} style={styles.Category}>
                    <Text style={styles.Part}>{key}</Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        activit>
                        {exercises[key].map((exercise, index) =>
                            <View key={exercise.id} style={styles.comp}>
                                <TouchableOpacity style={styles.each} onPress={() => navigation.navigate("StrengthDetail", { exerciseName: exercise.name })}>
                                    <Text>{exercise.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Category: {
        flex: 1,
    },
    Part: {
        fontSize: 30,
        fontWeight: "600",
        marginHorizontal: 20,
    },
    comp: {
        width: SCREEN_WIDTH,
    },
    each: {
        backgroundColor: "lightgrey",
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginHorizontal: 40,
        marginTop: 10,
        borderRadius: 20,
        alignItems: "center"
    },
})

export default StrengthMain;