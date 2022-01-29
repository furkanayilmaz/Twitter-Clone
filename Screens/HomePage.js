import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import Header from '../components/Home/Header';
import Posts from "../components/Home/Post";
import { POSTS } from "../data/posts";

const HomePage = () => {
    return (
        <SafeAreaView style={style.container}>
            <Header />

            <ScrollView>
                {POSTS.map((post, index) => (
                    <Posts post={post} key={index} />
                ))}
            </ScrollView>

        </SafeAreaView>

    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#15212c",
        flex: 1
    }
})

export default HomePage;
