// 2026-11-25 22:46:45:579
// purity 2

const mineflayer=require("mineflayer")
const {pathfinder,Movements,goals}=require("mineflayer-pathfinder")

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m"
}

const options={
    username:"bottymcbotface",
    host:"play.kittycraft0.online"
}

let bot=mineflayer.createBot(options)

bot.on("kicked",(reason)=>console.log("Bot kicked! ",reason))
bot.on("error",(reason)=>console.log("Bot errored! ",reason))



// purity 3
const originalEmit = bot.emit.bind(bot)
const ignoredEvents = new Set([
    "physicTick", //+100
    "physicsTick", //+100
    "time", //+206
    "entityMoved", //+2558
    //"chunkColumnLoad", //+349
    "entitySpawn", //+151
    "entityAttributes", //+220
    "entityUpdate", //+283
    "entityEquip", //+20
    "entityGone", //+6
    // what the hell is "breath"
    "particle", //+1
    "breath", //+53 sometimes!?
    "blockUpdate", //+4 useful? but noisy? 
    // i think block updates are mostly only relevant if you heard it though, 
    // as it's closer to you?
    "soundEffectHeard", //+4 useful for an LLM to have recent context? lol
    //"playerLeft", //useful to see players leaving
    //"message" on every chat? including /say
    //"messagestr" on every chat? including /say
    //"chat" on every chat? including /say, discordsrv does not trigger though
    //"playerJoined", //on player join!
    "move" //what does this do it seems to be firing often
    // on teleport you see chunkColumUnload and forcedMove

])

// Maps eventName -> { count, timer } over a 5-second window from the first hit
const pendingEvents = new Map()

bot.emit = function (eventName, ...args) {
  if (ignoredEvents.has(eventName)) {
    return originalEmit(eventName, ...args)
  }

  const entry = pendingEvents.get(eventName)

  if (!entry) {
    // First hit in this 5s window: log right away and start a 5s timer
    console.log(`${colors.gray}[EVENT] ${eventName}${colors.reset}`)

    const timer = setTimeout(() => {
      const current = pendingEvents.get(eventName)
      pendingEvents.delete(eventName)

      // Only print a summary if it repeated after the initial log
      if (current && current.count > 1) {
        console.log(`${colors.gray}[EVENT] ${eventName} (+${current.count - 1} more in last 5s)${colors.reset}`)
      }
    }, 5000)

    pendingEvents.set(eventName, { count: 1, timer })
  } else {
    entry.count += 1
  }

  return originalEmit(eventName, ...args)
}

bot.once("end", () => {
  for (const { timer } of pendingEvents.values()) {
    clearTimeout(timer)
  }
  pendingEvents.clear()
})

// sees if a block is wood
const isWoodBlock=(block)=>{
    if(!block||!block.name)return false;
    return(
        block.name.endsWith("_log")||
        block.name.endsWith("_wood")||
        block.name.endsWith("_setm")||
        block.name.endsWith("_hyphae")
    );
};

bot.loadPlugin(pathfinder)
// purity 2
bot.on("spawn",()=>{
    /*while(true){
        if(!block){
            try{
                //'await' expressions are only allowed within async functions and at the top levels of modules.ts(1308)
                //pathfind.js(90, 16): Did you mean to mark this function as 'async'?
                await bot.pathfinder.goto(goal)
            }catch(err){

            }
        }
    }*/
    starterstrats(bot)
});


// heads southeast until it finds wood
async function spawnToOakWood(bot){
    while(true){
        await enoughChunksLoaded; //gotta make sure they're finable!!!
        const block=bot.findBlock({
            //matching:(b)=>b.name==="oak_log"
            matching:isWoodBlock
        })
        console.log("is there wood nearby!?");
        console.log(block);
        if(!block){
            console.log("no there's no wood nearby")
            const pos=bot.entity.position;
            const goal=new goals.GoalXZ(pos.x+10,pos.z+10)
            if(bot.entity.isInWater){
                console.log(colors.blue+"bot is in the water oh no"+colors.reset)
            }else{
                console.log(colors.green+"bot is on land!"+colors.clear)
            }
            console.log("moving southeast!?")
            const greenardshippingtoday=bot.pathfinder.goto(goal)
            console.log(greenardshippingtoday)
            await greenardshippingtoday
            console.log(greenardshippingtoday)
            console.log("moved!?")
            continue;
        }else{
            // holy shit a block
            console.log("WOOOOD");
            break;
        }
    }
    //const whatthedigging=bot.dig(block);
}
bot.on("health",()=>{
    console.log(colors.red+"ow"+colors.reset);
})
bot.on("respawn",()=>{
    console.log(colors.red+"oof maybe i died idk"+colors.reset);
})

let totalChunksLoaded=0
const numChunksForOk=4
const enoughChunksLoaded=new Promise((resolve)=>{
    // gotta await some chunks loaded before trying to find blocks!!!
    function onChunkLoad(){
    //bot.on(chunkColumnLoad,()=>{
        totalChunksLoaded+=1;
        if(totalChunksLoaded>=numChunksForOk){
            bot.off("chunkColumnLoad",onChunkLoad)
            console.log("enough chunks have loaded!")
            //enoughChunksLoaded=true
            resolve() //whaat
        }
    }
    bot.on("chunkColumnLoad", onChunkLoad)
})

async function starterstrats(bot){
    await spawnToOakWood(bot);
    console.log("found wood, mining it...")
    await minewood(bot);
}
let numWoodHas=0
async function minewood(bot){
    
    console.log("mining wood?")
    const woodblock=bot.findBlock({matching:isWoodBlock});
    if(!woodblock){
        console.log("there's no wood ya dingus");
        return 1;
    }
    console.log("it exists! going to it now!");
    
    await bot.pathfinder.goto(woodblock); //do i need to specify liek within a specific range or something? or is this fine?
    console.log("arrived! mining it now!")
    digging=bot.dig(woodblock)
    console.log(digging)
    // save pre dig bot pos, if the block starts mining fine then the item should be within that range upon spawn.
    botpos=bot.entity.position;
    bot.on("itemDrop",(egg)=>{ // egg is item entity ig???
        console.log(typeof egg)
        itempos=egg.position;
        dist=Math.sqrt((botpos.x-itempos.x)**2+(botpos.y-itempos.y)**2+(botpos.z-itempos.z)**2);
        if(dist<=5){
            console.log("ITEM WITHIN RANGE, MOVING TO PICK IT UP NOW!!!");
            bot.pathfinder.goto(itempos)
        }
    })
    await digging
    console.log("dug!") //yay!

    // now it needs to pick it up though...
    // 4.5 blocks away in survival is apparently how far away you can hit blocks
    // event itemDrop!?
}