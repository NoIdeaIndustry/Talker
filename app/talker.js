require('dotenv').config();
const complete = require("./openapi.js")
const {fetchMessages, sendMessage} = require("./discordapi.js")
const random = require("./random.js")
const fs = require('fs')

function checkRegex(msg){
    for (let i = 0; i < msg.length; i++) {
        var isEnglish = false;
        var isLong = false;
        var isQuestion = false;
        const english = /^[a-zA-Z0-9?><;,{}[\]\-_+=#$%\^&*|'\s]*$/
        if (english.test(msg[i].content)){
            isEnglish = true;
        }
        if(msg[i].content.length > 5){
            isLong = true;
        }
        if(msg[i].content.includes("?") || msg[i].content.includes("!")){
            isQuestion = true
        }
        if(isEnglish && isLong && isQuestion){
            return msg[i];
        }
    }
    return null;
}

async function spam(channel, min, max) {
    console.log('spam');
    const jsonString = fs.readFileSync(process.env.messages || './answers.json')
    const msg_json = JSON.parse(jsonString);
    const msgs = msg_json['messages'];

    function myLoop() {   
        try {
            setTimeout(function() { 
            if(random(1, 20) > (process.env.freq || 10)) {
                fetchMessages(channel).then(discordMessages => {
                    console.log("trying")
                    var messageToReply;
                    for(const m of discordMessages) {
                        if(m.referenced_message != null) {
                            if(m.referenced_message.author.id == process.env.accountId || m.referenced_message.author.id == "942830466459906100") {
                                messageToReply = m
                            }
                        }
                    }

                    if(messageToReply != null) {
                        console.log(">>>> Reply to MY message" + messageToReply.content)
                    }
                    if(messageToReply == null) { 
                        console.log(">>>> Reply to REGEX message" );
                        messageToReply = checkRegex(discordMessages);
                        
                        if(messageToReply == null) { 
                            console.log(">>>> Reply to RANDOM message")
                            messageToReply = discordMessages[random(1, discordMessages.length)]

                            if(random(1, 20) > 15){
                                messageToReply.id = null
                            }
                        }
                    }

                    complete(messageToReply.content).then( api_response => {
                        var message = api_response.data.choices[0].text.trim();
                        console.log("<<<< " + message + " to "+ messageToReply.id)
                        sendMessage(message , messageToReply.id , channel)
                    });
                });
            }
            else {
                if(random(1, 20) > 0) {
                    console.log(">>>> Send AI message")
                    fetchMessages(channel).then(discordMessages => {
                        var messageToReply = discordMessages[random(1, discordMessages.length)];
                        
                        complete(messageToReply.content).then( api_response => {
                            var message = api_response.data.choices[0].text.trim();
                            console.log("<<<< " + message + " to "+ messageToReply.id)
                            sendMessage(message , null , channel)
                        });
                    });
                }
                else {
                    console.log(">>>> Send listed message")
                    sendMessage(msgs[random(1, msgs.length)], null, channel);
                }
            }
            myLoop();
        }, 
        1000 * random(min , max ))
    }
    catch {
        setTimeout(function() {},1000 * random(1, 5))
        console.log("ERROR!!!")
    }
    }

    myLoop();
}

async function start(){
    console.log("start")
    if(process.env.channel != null){
        spam(process.env.channel , process.env.min|| 60, process.env.max ||80);
    }
    
    setTimeout(function() {
        if(process.env.channelXKY != null){
            spam(process.env.channelXKY, process.env.min2|| 60, process.env.max2||80);
        }
        setTimeout(function() {
            if(process.env.channelZOP != null){
                spam(process.env.channelZOP, process.env.min3|| 60, process.env.max3||80);
            }
            setTimeout(function() {
                if(process.env.channelYER != null){
                    spam(process.env.channelYER, process.env.min4|| 60, process.env.max4||80);
                }
                setTimeout(function() {
                    if(process.env.channelWYN != null){
                        spam(process.env.channelWYN, process.env.min4|| 60, process.env.max4||80);
                    }
                },1000 * random(1, 5))
            },1000 * random(1, 5))
        },1000 * random(1, 5))
    },1000 * random(1, 5))
}

start();