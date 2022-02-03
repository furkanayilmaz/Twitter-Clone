import { SafeAreaView, StyleSheet, ScrollView, RefreshControl } from "react-native"
import Header from '../components/Home/Header';
import Posts from "../components/Home/Post";
import { POSTS } from "../data/posts";
import CreatePostButton from '../components/Home/CreatePostButton';
import React, { useState, useEffect } from "react";
import BottomNavigation from "../components/Home/BottomNavigation";
import { getDatabase, ref, onValue } from "firebase/database";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomePage = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        const db = getDatabase();
        const query = ref(db, 'posts');
        onValue(query, (snapshot) => {
            let data = [];
            snapshot.forEach((child) => {
                data.push(child.val());
            })
            setPosts(data);
            // console.log(data)
        })
    }, []) 

    return (
        <SafeAreaView style={style.container}>
            <Header />

            <ScrollView>
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
                {posts.map((post, index) => (
                    <Posts post={post} key={index} />
                ))}
            </ScrollView>

            <CreatePostButton navigation={navigation}/>

            <BottomNavigation />

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
