import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e35/c0.169.1349.1349a/s320x320/272243655_653682909110768_2226617368810023750_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=108&_nc_ohc=m7PzRmEJ5D4AX_v663q&tn=ZDXZYvA4nR-aDW5Q&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83HR-_JsW3vsro00QWaUCQpK8nEndL_0xTwpwQGELvjQ&oe=61F53542&_nc_sid=7bff83',
        user: USERS[3].user,
        name: USERS[3].name,
        isVerified: USERS[3].isVerified,
        likes: 7870,
        caption: 'Let photography trigger your imagination',
        profile_picture: USERS[3].image,
        comments: 50,
        retweet: 5,
    },
    {
        imageUrl: null,
        user: USERS[5].user,
        name: USERS[5].name,
        likes: 7870,
        caption: "Pixel 6 & Pixel 6 Pro are here! Super excited and can't wait to see how people use them:) @madebygoogle",
        isVerified: USERS[5].isVerified,
        profile_picture: USERS[5].image,
        comments: 2,
        retweet: 20,
    },
    {
        imageUrl: "https://pbs.twimg.com/media/FJbrSbnWQAEMb4Y?format=jpg&name=small",
        user: USERS[4].user,
        name: USERS[4].name,
        likes: 10000,
        caption: "Back to the moon soon",
        profile_picture: USERS[4].image,
        isVerified: USERS[4].isVerified,
        comments: 10,
        retweet: 1000
    },
]