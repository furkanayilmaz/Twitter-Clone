import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/758490/like--v1.png',
    likedImageUrl: 'https://img.icons8.com/fluency-systems-regular/60/fa314a/like--v1.png',
  },
  {
    name: 'Comment',
    imageUrl: 'https://img.icons8.com/material-outlined/60/758490/filled-topic.png'
  },
  {
    name: 'ReTweet',
    imageUrl: 'https://img.icons8.com/fluency-systems-filled/344/758490/retweet.png'
  },
  {
    name: 'Share',
    imageUrl: 'https://img.icons8.com/external-bearicons-glyph-bearicons/344/758490/external-Share-social-media-bearicons-glyph-bearicons.png'
  },
  {
    name: 'More',
    imageUrl: 'https://img.icons8.com/material-outlined/344/758490/more.png',
  },
  {
    name: "verified",
    imageUrl: "https://img.icons8.com/ios-glyphs/344/ffffff/verified-account.png"
  }
]

const Posts = ({ post }) => {

  return (
    <View style={styles.container}>

      <View style={styles.profilePictureContainer}>
        <Image style={styles.profileImage} source={{ uri: post.profile_picture }} />
      </View>

      <View style={styles.profileNameContainer}>
        <Text style={styles.profileName}>{post.name} {post.isVerified === false ? console.log("not verified") : <Image source={{ uri: postFooterIcons[5].imageUrl }} style={{ width: 15, height: 15 }} />} <Text style={styles.username}>@{post.user} · 22h</Text>     </Text>
        <Text numberOfLines={10} style={styles.content}>{post.caption}</Text>

        {post.imageUrl === null ? console.log("empty image") : <Image source={{ uri: post.imageUrl }} style={{ width: 250, height: 250, borderRadius: 10, marginTop: 10 }} />}

        <View style={styles.postBottomIcons}>

          <TouchableOpacity>
            <View>
                <Image style={{ width: 20, height: 20, }} source={{ uri: postFooterIcons[1].imageUrl }} /><Text style={{ color: 'gray', bottom: 19, left: 25}}>{post.comments}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ width: 20, height: 20, }} source={{ uri: postFooterIcons[2].imageUrl }} /><Text style={{ color: "gray", bottom: 19, left: 25}}>{post.retweet}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ width: 20, height: 20, }} source={{ uri: postFooterIcons[0].imageUrl }} /><Text style={{ color: "gray", bottom: 19, left: 25}}>{post.likes}</Text>
          </TouchableOpacity>

          <View style={{ marginRight: 50, marginLeft: 0 }}>
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20, }} source={{ uri: postFooterIcons[3].imageUrl }} />
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <View>
        <TouchableOpacity>
          <View style={styles.moreButtonContainer}>
            <Image style={styles.moreButton} source={{ uri: postFooterIcons[4].imageUrl }} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profilePictureContainer: {
    margin: 10,
    marginLeft: 15,
  },
  profileNameContainer: {
    marginTop: 10,
  },
  profileName: {
    color: "white",
    fontSize: 15,
    fontWeight: "700"
  },
  content: {
    color: "white",
    marginTop: 5,
    fontWeight: "400",
    width: 290,
  },
  moreButton: {
    width: 20,
    height: 20,
  },
  moreButtonContainer: {
    marginTop: 10,
    right: 10,
  },
  username: {
    fontWeight: "300",
    color: "grey",
    fontSize: 15
  },
  postBottomIcons: {
    flexDirection: "row",
    marginTop: 7,
    justifyContent: "space-between",
    marginTop: 10,
  },

})


export default Posts;
