const Discord = require("discord-user-bots");
const fs = require('fs')
const client = new Discord.Client(process.env.token);

client.on.ready = function () {
    console.log("Client online!");
};

 function sendMessage(msg, id, channel) {
    console.log(">>> SEND /" + msg + "/ id /" + id + "/ channel /" + channel + "/ ")
    client.send(
        channel, // Channel to send in
        {
            content: msg, // Content of the message to send (Optional when sending stickers) (Default null)
            reply: id,
            tts: false, // Use text to speech when sending (Only works if you have the permissions to do so) (Optional) (Default false)
            embeds: [], // Embeds to send with your message (Not optional, must be an array, can be unset for default) (Default empty array)
            allowed_mentions: {
                // Allow mentions settings (Not optional, but can be unset for default) (Default all true mentions object)
                allowUsers: true, // Allow message to ping user (Default true)
                allowRoles: true, // Allow message to ping roles (Default true)
                allowEveryone: true, // Allow message to ping @everyone and @here (Default true)
                allowRepliedUser: true, // If the message is a reply, ping the user you are replying to (Default true)
            },
            components: [], // Message components (Not optional, must be an array, can be unset for default) (Default empty array)
            stickers: [], // Stickers to go with your message (Not optional, must be an array, can be unset for default) (Default empty array)
        }
    );
}

 function fetchMessages(channel) {
    console.log("fetching from discord")
    return client.fetch_messages(20, channel)
}

module.exports = {fetchMessages, sendMessage}