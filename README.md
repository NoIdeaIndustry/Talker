<div align="center">

# Talker
</div>

**Talker is very simple user bot made to automatically answer and talk by itself on any discord servers (mainly NFT related).** <br/>

**This project was made during the NFT boom and the need of leveling accounts to certain levels which was really time consuming.**<br/>

# Installation
First of all you need to install npm.<br/>
Then you need install all of the dependencies using the packages files.<br/>
Finally you can must fill the **".env"** file inside the folder with all the informations required.<br/>

# Run
```
node app/talker.js
```
You can also use a session manager to make the bot run 24h/24.<br/>
A good tool called tmux (only working on linux OS) -> https://tmuxcheatsheet.com/.<br/>

# Configuration
This is how the configuration looks like.<br/>

![](screenshots/config_default_exemple.png?raw=true "Default Config Exemple")
![](screenshots/config_custom_exemple.png?raw=true "Custom Config Exemple")

You have two exemples:
- on the left, the default configuration that you will have to fill up with your informations.<br/>
- on the right, a custom configuration (without bot token for security reasons).<br/>

The configuration is pretty self-explanatory:
* `channel`: the channel you want the bot to send messages to.<br/> 
* `token`: your client/user token.<br/>
* `min`: minimum amount of time before sending a new message.<br/> 
* `max`: maximum amount of time before sending a new message<br/> 
* `key`: OpenAI api key<br/> 

# Other information
Looking to get more details? Please refer to
* OpenAI on (https://openai.com/).<br/>
* NPM on (https://www.npmjs.com/).<br/>

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.<br/>
Please make sure to update tests as appropriate.<br/>