const Twit = require('twit');
const axios = require('axios');
const cron = require('node-cron');

// Twitter API credentials
const T = new Twit({
  consumer_key: 'YOUR_TWITTER_CONSUMER_KEY',
  consumer_secret: 'YOUR_TWITTER_CONSUMER_SECRET',
  access_token: 'YOUR_TWITTER_ACCESS_TOKEN',
  access_token_secret: 'YOUR_TWITTER_ACCESS_TOKEN_SECRET',
});

// Twitch API credentials
const twitchClientId = 'YOUR_TWITCH_CLIENT_ID';
const twitchOAuthToken = 'YOUR_TWITCH_OAUTH_TOKEN';
const twitchApiUrl = 'https://api.twitch.tv/helix/streams';

// List of specific Twitch usernames to tweet about
const twitchUsernames = [
  'streamer1', 
  'streamer2', 
  'streamer3', 
  'streamer4', 
  'streamer5'
];

// Function to get active streamer details from Twitch
async function getTwitchStreamerInfo(username) {
  try {
    const response = await axios.get(twitchApiUrl, {
      headers: {
        'Client-ID': twitchClientId,
        'Authorization': `Bearer ${twitchOAuthToken}`,
      },
      params: {
        user_login: username, // Get information about the specific streamer
      },
    });
    
    // Return the first streamer's data (if available)
    return response.data.data.length > 0 ? response.data.data[0] : null;
  } catch (error) {
    console.error('Error fetching Twitch streamer info:', error);
    return null;
  }
}

// Function to send a tweet
async function sendTweet(content) {
  try {
    await T.post('statuses/update', { status: content });
    console.log('Tweet sent:', content);
  } catch (error) {
    console.error('Error sending tweet:', error);
  }
}

// Function to tweet about specific streamers
async function tweetStreamerInfo() {
  let tweetCount = 0;

  // Loop through the list of Twitch usernames
  for (const username of twitchUsernames) {
    if (tweetCount >= 50) break;  // Stop after sending 50 tweets

    const streamerInfo = await getTwitchStreamerInfo(username);
    
    if (streamerInfo) {
      const tweetContent = `🎮 Check out ${streamerInfo.user_name} streaming on Twitch! Watch here: https://www.twitch.tv/${streamerInfo.user_name}`;
      await sendTweet(tweetContent);
      tweetCount++;
    } else {
      console.log(`No active stream found for ${username}`);
    }
  }
}

// Set up a cron job to run every hour
cron.schedule('0 * * * *', async () => {
  console.log('Fetching and tweeting streamers...');
  await tweetStreamerInfo();
});

// Start the cron job immediately when the script is run
tweetStreamerInfo().then(() => {
  console.log('Initial batch of tweets sent.');
});
