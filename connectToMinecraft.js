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

const bot = mineflayer.createBot(options)
console.log("Bot queued for creation.")

// bot.one runs a given function on a given event one time
bot.once("spawn",()=>{onspawn(bot)})
async function onspawn(bot){


//bot.once("spawn",()=>{
    console.log("Bot connected as "+options.username+"!")
    
    // i guess you can change physics here? yet hit knockback seems disabled by default?
    //console.log(bot.physicsEnabled);
    //console.log(bot.physics)
    //bot.physics.playerHeight=1.2
    //console.log(bot.physics)
    //console.log(bot.player)
    //console.log(bot.players)

    //this works and doesn't kick you if anticheat is fully off
    //bot.player.entity.position.y+=50 
    // you can set the position to whatever you want i guess
    // i guess being able to teleport anywhere is kinda cheating though. 
    // but it's good to have as an option
    // so then there can be a config setting for movement type, 
    // with options of teleport and normal and conformant
    // where conformant tries to avoid getting kicked by the best anticheat and antibot ever
    // and teleport just teleports everywhere
    // and normal uses the normal pathfinding things
    // i'll be primarily implementing normal

    //console.log(bot.rawListeners()) //???

    // chat
    process.stdout.write("Chatting... ")
    const message="2"
    // chats do not return promises
    bot.chat("1")
    bot.chat(message)
    bot.chat("3") 
    // not all messages go through before the bot leaves;
    // occasionally 1 goes through, even rarer two go through,
    // but they all arrive in the order they were sent
    console.log("Queued message send!")

    //const bot = mineflayer.createBot(options)
    bot.once("messagestr",()=>{
        process.stdout.write("Disconnecting... ")
        bot.quit()
        console.log("Bot disconnect queued!")
    });
    // attempt disconnect
    //bot.quit()
    //console.log(bot.players) //disconnect is not instant as this logs fine
    process.stdout.write("Attempting reconnect...")
    bot.once("end",(reason)=>{
        console.log("disconnected because "+reason)
        const bot2=mineflayer.createBot(options)
        bot2.once("spawn",()=>{onspawn(bot2)})
    })
    
}//)
console.log("Bot events:")
console.log(mineflayer.BotEvents)
//bot.once()





//}main()

