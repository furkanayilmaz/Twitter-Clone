import { SafeAreaView, StyleSheet, ScrollView, RefreshControl } from "react-native"
import Header from '../components/Home/Header';
import Posts from "../components/Home/Post";
import { POSTS } from "../data/posts";
import CreatePostButton from '../components/Home/CreatePostButton';
import React, { useState } from "react";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomePage = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <Header />

            <ScrollView>
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                {POSTS.map((post, index) => (
                    <Posts post={post} key={index} />
                ))}
            </ScrollView>

            {/* <View style={{ zIndex: 999}}>
                <TouchableOpacity style={{ borderRadius: 50, backgroundColor: "#2c8fee", width: 50, height: 50 }}>
                    <Image source={{ uri: "https://img.icons8.com/material-outlined/60/758490/filled-topic.png"}} style={{ width: 20, height: 20}} />
                </TouchableOpacity>
            </View> */}

            <CreatePostButton />

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
