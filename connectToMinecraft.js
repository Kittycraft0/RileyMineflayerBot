// 2026-11-25 14:38:20:770
// purity 2
// npm install mineflayer@latest

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

// REMEMBER TO CALL WITH CREATED OPTIONS!!!!!
const bot = mineflayer.createBot(options)
//await bot

//console.log("Bot:")
//console.log(bot)

console.log("Bot queued for creation.")


console.log(bot.connect)
bot.connect=()=>{console.log("connected!?")}
console.log(bot.connect)

//}main()

