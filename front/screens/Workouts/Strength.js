import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const parts = ["Triceps", "Chest", "Shulders", "Biceps", "Core", "Back", "Forearms", "Upper Legs", "Calves"]
const exercises = [
    { name: "트라이셉스익스텐션", part: "Triceps" },
    { name: "딥스", part: "Chest" },
    { name: "킥백 덤벨", part: "Triceps" },
    { name: "트라이셉스 프레스 다운", part: "Triceps" },
    { name: "케이블 오버헤드 익스텐션", part: "Triceps" },
    { name: "벤치프레스", part: "Chest" },
    { name: "인클라인 벤치프레스", part: "Chest" },
    { name: "케이블 크로스 오버", part: "Chest" },
    { name: "풀오버", part: "Chest" },
    { name: "덤벨 레터럴 레이즈", part: "Shulders" },
    { name: "덤벨 프론트 레이즈", part: "Shulders" },
    { name: "벤트오버 레터렐 레이즈", part: "Shulders" },
    { name: "숄더 프레스", part: "Shulders" },
    { name: "바벨컬", part: "Biceps" },
    { name: "EZ바 컬", part: "Biceps" },
    { name: "덤벨컬", part: "Biceps" },
    { name: "해머컬", part: "Biceps" },
    { name: "컨센트레이션 컬", part: "Biceps" },
    { name: "데드리프트", part: "Back" },
    { name: "바벨로우", part: "Back" },
    { name: "풀업", part: "Back" },
    { name: "시티드 로우", part: "Back" },
    { name: "렛풀 다운", part: "Back" },
    { name: "업다운 플랭크", part: "Core" },
    { name: "브릿지", part: "Core" },
    { name: "슈퍼맨", part: "Core" },
    { name: "사이드 힙 레이즈", part: "Core" },
    { name: "사이드 플랭크 원레그 니업", part: "Core" },
    { name: "리스트 컬", part: "Forearms" },
    { name: "리스트 익스텐션", part: "Forearms" },
    { name: "스쿼트", part: "Upper Legs" },
    { name: "레그 프레스", part: "Upper Legs" },
    { name: "런지", part: "Upper Legs" },
    { name: "레그 익스텐션", part: "Upper Legs" },
    { name: "레그 컬", part: "Upper Legs" },
    { name: "카프 레이즈", part: "Calves" },
]


const Strength = ({ navigation }) => {
    const press = (part) => {
        const data = []
        exercises.map((exercise, index) => {
            console.log(exercise.part)
            console.log(part)
            if (exercise.part === part)
                // console.log(exercise.part)
                // console.log(part)
                data.push(exercise)
                console.log(data)
        })
        navigation.navigate("StrengthNav", { screen: "StrengthDetail", params: {"exercises": data }})
    }

    return (
        <View style={styles.Container}>
            {parts.map((part, index) =>
                <View key={index} style={styles.each}>
                    <TouchableOpacity onPress={(part) => press(part)}>
                        <MaterialIcons name="fitness-center" size={40} color="black" />
                        <Text style={styles.eachText}>{part}</Text>
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
        alignContent: "space-around",
        alignItems: "center",
    },
    each: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
    },
    eachText: {
        fontSize: 10,
    },
})

export default Strength;

