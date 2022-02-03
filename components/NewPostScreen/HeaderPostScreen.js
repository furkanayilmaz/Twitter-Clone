import { View, StyleSheet, TouchableOpacity, Text, Button, Alert } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { tweetContext, Attachment } from './TweetInput';
import { auth, getDatabase, ref, set, push } from '../../firebase';


const HeaderPostScreen = ({ navigation }) => {

    const tweetContextConst = useContext(tweetContext);
    const AttachmentConxt = useContext(Attachment)

    const [incomingTweet, setIncomingTweet] = useState('');
    const [AttachmentUrl, setAttachmentUrl] = useState('');

    useEffect(() => {
        setIncomingTweet(tweetContextConst);
        // Alert.alert(incomingTweet);

        setAttachmentUrl(AttachmentConxt);
    }, [tweetContextConst, AttachmentConxt]);

    function handlePostSubmission(tweetInfo, attachmentInfo) {
        const db = getDatabase();
        set(ref(db, "posts/" + push()), {
            tweet: tweetInfo,
            attachment: attachmentInfo,
            postFrom: auth().currentUser.uid,
        });
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "white", fontSize: 17 }}>Cancel</Text>
            </TouchableOpacity>


            <View style={{ bottom: 10, backgroundColor: "#2c8eef", borderRadius: 50, width: 80, }}>
                <Button title='Tweet' color="#fff" disabled={false} onPress={() => handlePostSubmission(incomingTweet, AttachmentUrl)} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    button: {
        backgroundColor: "#2c8eef"
    }
})

export default HeaderPostScreen;
