var discord = require("discord.js");
var bot = new discord.Client();
var token = "Your_Bot_Token_Here_Get_https://discordapp.com/developers/applications/me"
var prefix = "!"
bot.on("message", msg =>{
var input = msg.content.toLowerCase();
if(input.startsWith("slave get me something to eat")){
msg.channel.sendMessage("Ok pizza it is")
}
if(input.startsWith("are you my dad")){
msg.channel.sendMessage("yes")
}
if(input.startsWith("am i retarted")){
msg.channel.sendMessage("yes")
}
if(input.startsWith("chicken")){
msg.channel.sendMessage("yummy https://cdn.discordapp.com/attachments/251785182686871552/254027069904781313/IMG_0649.JPG")
}
if(input.startsWith("can you not beat me with the wooden spoon")){
msg.channel.sendMessage("NO YOU DESRVE IT YOU KNOW WHAT YOU DID YOU SON OF A")
}
if(input.startsWith("poop")){
msg.channel.sendMessage("yes, thats the suff that comes out of your ass")
}
if(input.startsWith("do you like wafflez")){
msg.channel.sendMessage("na he is just kinda, how do i put it in a nice way weird please dont tell him i said that")
}
if(input.startsWith("trump")){
msg.channel.sendMessage("woah http://weknowmemes.com/wp-content/uploads/2015/07/trump-vs-corn-who-wore-it-better-meme.jpg")
}
if(input.startsWith("thebestname21422")){
msg.channel.sendMessage("http://www.steamcommunity.com/id/thebestname21422")
}
if(input.startsWith("how do you feel about need_2_speed")){
msg.channel.sendMessage("I think he should get a life and smash his two thousand dollar pc he is just so weird and his mic is crap I hope @Batlefield_Panda#9457 will ban him then this discord server would be nicer")
}
if(input.startsWith("vac")){
msg.channel.sendMessage("GET VACCED KID LMAO http://i.imgur.com/gwsMjKe.png")
}
if(input.startsWith("what do i look like")){
msg.channel.sendMessage("you look like this LMAO https://cdn.meme.am/cache/instances/folder559/500x/58105559.jpg")
}
if(input.startsWith("youtube")){
msg.channel.sendMessage("https://www.youtube.com/channel/UCfDvD0oREg_OXsTIPNkVuJA")
}
if(input.startsWith("github")){
msg.channel.sendMessage("this is the github repository https://github.com/thebestname21422/Discord-Bots")
if(input.startsWith("spam")){
msg.channel.sendMessage("SPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM SPAMSPAM")
}
});
bot.login(token);
