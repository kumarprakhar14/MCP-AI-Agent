import { config } from 'dotenv'
import { TwitterApi } from "twitter-api-v2"
config()

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

// console.log(twitterClient);

// verify client authentication immediately
async function verifyCredentials() {
    try {
        const user = await twitterClient.v2.me();
        console.log("Authentication succcessful: ", user);
        return user;
        
    } catch (error) {
        console.error('Twitter authentication error:', error);
        return false;
    }
}

export async function createPost(status) {
    try {
        // verify credentials before posting
        const isAuthenticated = await verifyCredentials();
        if (!isAuthenticated) {
            throw new Error("Authentication failed. Please check your credentials.");
        }
        
        const newPost = await twitterClient.v2.tweet(status);
        console.log("Tweet posted successfully: ", newPost);
        
        return {
            content: [
                {
                    type: "text", 
                    text: `Tweeted: ${status}`
                }
            ]
        }
    } catch (error) {
        console.error('Error posting tweet:', error);
        console.error('Full error:', JSON.stringify(error, null, 2));
        return {
            content: [
                {
                    type: "text", 
                    text: `Error posting tweet: ${error.message}`
                }
            ]
        }
    }
    

}