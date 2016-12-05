//Before we begin make sure you have The Cleverbot Node in node type "npm install cleverbot-node"
const Discord = require('discord.js');
const bot = new Discord.Client();
var Cleverbot = require("cleverbot-node");
var cbot = new Cleverbot;
var Token = "Your_Bot_Token_Here_Get_https://discordapp.com/developers/applications/me";
var prefix = ""; //make sure to fill in prefix 
var commands = require('../Commands/General.js');
var cleverbot = require("cleverbot-node");

Cleverbot.prepare(function(){


bot.on("message", msg =>{
        var mention = "<@" + bot.user.id + ">";

        var mentionNick = "<@!" + bot.user.id + ">";

        if(msg.content.substring(0,mention.length) === mention){
            var chat = msg.content.substring(mention.length, 99999);
            cbot.write(chat, function (response) {
                msg.reply(response.message);
            });
        }
        if(msg.content.substring(0,mentionNick.length) === mentionNick){
            var chat = msg.content.substring(mentionNick.length, 99999);
            cbot.write(chat, function (response) {
                msg.reply(response.message);
            });
        }
    });
});

bot.on("message", function(msg){
  var input = msg.content.toLowerCase();
  if (!input.startsWith(prefix))return;
  var input = msg.content.toLowerCase().replace(prefix, "");
  for(var x of Object.keys(commands)){
    if(input.startsWith(x)){
      commands[x].process(bot,msg);
      break;
    }
  }
});

bot.login(Token);
bot.on('ready', () =>{
  console.log(`Logged in as ${bot.user.username} and ready in ${bot.guilds.size} servers`);
});
edited get hacked m8
