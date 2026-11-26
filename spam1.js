// 2026-11-25 20:32:31:116
// purity 2

console.log("Running connectToMinecraft.js...")

// get mineflayer
process.stdout.write("Getting mineflayer... ")
const mineflayer = require("mineflayer")
console.log("success!")

//const main=()=>{
//async function main(){

// create bot
process.stdout.write("Creating bot... ")
const options={
    host: "play.kittycraft0.online",
    port: 25565,
    username: 'bottymcbotface',
}

const bot = mineflayer.createBot(options)
console.log("Bot queued for creation.")

// bot.one runs a given function on a given event one time
bot.once("spawn",()=>{onspawn(bot)})
async function onspawn(bot){
    console.log("Bot connected as "+options.username+"! Quitting...")
    //bot.chat("hi")
    bot.quit()
    bot.once("end",(reason)=>{
        console.log("Disconnected! Reason: "+reason)
        const bot2=mineflayer.createBot(options)
        process.stdout.write("Attempting reconnect...")
        bot2.once("spawn",()=>{onspawn(bot2)})
    })
    
}//)
console.log("Bot events:")
console.log(mineflayer.BotEvents)
//bot.once()





//}main()

