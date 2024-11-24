<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            background-color: #f4f4f4;
        }
        h1, h2 {
            color: #333;
        }
        p {
            font-size: 1.1em;
            margin-bottom: 20px;
        }
        code {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 0.5em;
            font-family: monospace;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 1em;
            font-family: monospace;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h1>Twitch Twitter Bot</h1>
    <p>
        A simple bot that tweets about active Twitch streamers every 24 hours, using the 
        <a href="https://developer.twitter.com/en/docs" target="_blank">Twitter API</a> and the 
        <a href="https://dev.twitch.tv/docs" target="_blank">Twitch API</a>.
    </p>
    <h2>Features</h2>
    <ul>
        <li>Tweets about active streamers on Twitch.</li>
        <li>Supports up to 50 tweets per day.</li>
        <li>Allows easy configuration of specific streamers to tweet about.</li>
        <li>Runs every hour using a cron job to fetch active streamers and post tweets.</li>
    </ul>
    <h2>Prerequisites</h2>
    <p>Before running the bot, you'll need to set up a few things:</p>
    <h3>1. Twitter Developer Account</h3>
    <p>You’ll need a Twitter Developer account and create an application to get the following API keys:</p>
    <ul>
        <li><strong>API Key</strong> (consumer key)</li>
        <li><strong>API Secret Key</strong> (consumer secret)</li>
        <li><strong>Access Token</strong></li>
        <li><strong>Access Token Secret</strong></li>
    </ul>
    <p>For more details, refer to the <a href="https://developer.twitter.com/en/docs" target="_blank">Twitter Developer Documentation</a>.</p>
    <h3>2. Twitch Developer Account</h3>
    <p>Create a Twitch Developer account to get the following:</p>
    <ul>
        <li><strong>Client ID</strong></li>
        <li><strong>OAuth Token</strong></li>
    </ul>
    <p>For more details, refer to the <a href="https://dev.twitch.tv/docs" target="_blank">Twitch Developer Documentation</a>.</p>
    <h2>Installation</h2>
    <p>To get started, follow these steps:</p>
    <ol>
        <li>Clone the repository: <code>git clone https://github.com/Riotcoke123/twitterbottweettwitch.git</code></li>
        <li>Navigate into the project directory: <code>cd twitterbottweettwitch</code></li>
        <li>Install the dependencies: <code>npm install</code></li>
        <li>Set up your <strong>Twitter API</strong> and <strong>Twitch API</strong> credentials in the <code>tweetStreamers.js</code> file.</li>
    </ol>
    <h2>Running the Bot</h2>
    <p>Once you’ve set up the credentials, you can run the bot with the following command:</p>
    <pre><code>npm start</code></pre>
    <p>This will start the bot and it will tweet about active Twitch streamers based on the schedule you’ve set up.</p>
    <h2>License</h2>
    <p>This project is licensed under the <strong>The GNU General Public License v3.0</strong>.</p>
    <h2>Links</h2>
    <ul>
        <li><a href="https://github.com/Riotcoke123/twitterbottweettwitch" target="_blank">GitHub Repository</a></li>
        <li><a href="https://github.com/Riotcoke123/twitterbottweettwitch/issues" target="_blank">Report Bugs</a></li>
    </ul>

</body>
</html>
