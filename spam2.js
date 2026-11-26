// 2026-11-25 20:37:54:179
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

let k=0
MC_CHAR_WIDTHS = {
    " ": 4,
    "!": 2, '"': 4, "#": 6, "$": 6, "%": 6, "&": 6, "'": 2,
    "(": 5, ")": 5, "*": 5, "+": 6, ",": 2, "-": 6, ".": 2, "/": 6,
    "0": 6, "1": 6, "2": 6, "3": 6, "4": 6, "5": 6, "6": 6, "7": 6, "8": 6, "9": 6,
    ":": 2, ";": 2, "<": 5, "=": 6, ">": 5, "?": 6, "@": 7,
    "A": 6, "B": 6, "C": 6, "D": 6, "E": 6, "F": 6, "G": 6, "H": 6, "I": 4,
    "J": 6, "K": 6, "L": 6, "M": 6, "N": 6, "O": 6, "P": 6, "Q": 6, "R": 6,
    "S": 6, "T": 6, "U": 6, "V": 6, "W": 6, "X": 6, "Y": 6, "Z": 6,
    "[": 4, "\\": 6, "]": 4, "^": 6, "_": 6, "`": 3,
    "a": 6, "b": 6, "c": 6, "d": 6, "e": 6, "f": 5, "g": 6, "h": 6, "i": 2,
    "j": 6, "k": 5, "l": 3, "m": 6, "n": 6, "o": 6, "p": 6, "q": 6, "r": 6,
    "s": 6, "t": 4, "u": 6, "v": 6, "w": 6, "x": 6, "y": 6, "z": 6,
    "{": 5, "|": 2, "}": 5, "~": 7,
}
// https://gist.githubusercontent.com/cpdean/5bcc526fe7f1e64cf766/raw/fa9f4da6265e644ea1a0e7ee4c72916b0a55aeb4/doge.md
const doge1=[
    "                Y.                      _   ",
    "                YiL                   .```.  ",
    "                Yii;                .; .;;`.    ",
    "                YY;ii._           .;`.;;;; :    ",
    "                iiYYYYYYiiiii;;;;i` ;;::;;;;    ",
    "            _.;YYYYYYiiiiiiYYYii  .;;.   ;;; ",
    "         .YYYYYYYYYYiiYYYYYYYYYYYYii;`  ;;;;    ",
    "       .YYYYYYY$$YYiiYY$$$$iiiYYYYYY;.ii;`..   ",
    "      :YYY$!.  TYiiYY$$$$$YYYYYYYiiYYYYiYYii.    ",
    "      Y$MM$:   :YYYYYY$!\"``\"4YYYYYiiiYYYYiiYY.    ",
    "   `. :MM$$b.,dYY$$Yii\" :'   :YYYYllYiiYYYiYY    ",
    "_.._ :`4MM$!YYYYYYYYYii,.__.diii$$YYYYYYYYYYY",
    ".,._ $b`P`     \"4$$$$$iiiiiiii$$$$YY$$$$$$YiY;",
    "   `,.`$:       :$$$$$$$$$YYYYY$$$$$$$$$YYiiYYL",
    "    \"`;$$.    .;PPb$`.,.``T$$YY$$$$YYYYYYiiiYYU:  ",
    "    ;$P$;;: ;;;;i$y$\"!Y$$$b;$$$Y$YY$$YYYiiiYYiYY ",
    "    $Fi$$ .. ``:iii.`-\":YYYYY$$YY$$$$$YYYiiYiYYY    ",
    "    :Y$$rb ````  `_..;;i;YYY$YY$$$$$$$YYYYYYYiYY:    ",
    "     :$$$$$i;;iiiiidYYYYYYYYYY$$$$$$YYYYYYYiiYYYY. ",
    "      `$$$$$$$YYYYYYYYYYYYY$$$$$$YYYYYYYYiiiYYYYYY    ",
    "      .i!$$$$$$YYYYYYYYY$$$$$$YYY$$YYiiiiiiYYYYYYY    ",
    "     :YYiii$$$$$$$YYYYYYY$$$$YY$$$$YYiiiiiYYYYYYi'    ",
];
// https://cmang.org/ascii/cm-doge2.txt
const doge2=[

"                 ;i.",
"                  M$L                    .;i.",
"                  M$Y;                .;iii;;.",
"                 ;$YY$i._           .iiii;;;;;",
"                .iiiYYYYYYiiiii;;;;i;iii;; ;;;",
"              .;iYYYYYYiiiiiiYYYiiiiiii;;  ;;;",
"           .YYYY$$$$YYYYYYYYYYYYYYYYiii;; ;;;;",
"         .YYY$$$$$$YYYYYY$$$$iiiY$$$$$$$ii;;;;",
"        :YYYF`,  TYYYYY$$$$$YYYYYYYi$$$$$iiiii;",
"        Y$MM: \  :YYYY$$P\"\`\`\`\`\"T$YYMMMMMMMMiiYY.",
"     `.;$$M$$b.,dYY$$Yi; .(     .YYMMM$$$MMMMYY",
"   .._$MMMMM$!YYYYYYYYYi;.`\"  .;iiMMM$MMMMMMMYY",
"    ._$MMMP` ```\"\"4$$$$$iiiiiiii$MMMMMMMMMMMMMY;",
"     MMMM$:       :$$$$$$$MMMMMMMMMMM$$MMMMMMMYYL",
"    :MMMM$$.    .;PPb$$$$MMMMMMMMMM$$$$MMMMMMiYYU:",
"     iMM$$;;: ;;;;i$$$$$$$MMMMM$$$$MMMMMMMMMMYYYYY",
"     `$$$$i .. ``:iiii!*\"\`\`.$$$$$$$$$MMMMMMM$YiYYY",
"      :Y$$iii;;;.. ` ..;;i$$$$$$$$$MMMMMM$$YYYYiYY:",
"       :$$$$$iiiiiii$$$$$$$$$$$MMMMMMMMMMYYYYiiYYYY.",
"        `$$$$$$$$$$$$$$$$$$$$MMMMMMMM$YYYYYiiiYYYYYY",
"         YY$$$$$$$$$$$$$$$$MMMMMMM$$YYYiiiiiiYYYYYYY",
"        :YYYYYY$$$$$$$$$$$$$$$$$$YYYYYYYiiiiYYYYYYi' cmang",
];

// constructing actually sent strings
const chatLengthLimit=320; //default chat window pixel width
themessagetosend=[]
for(let j=0;j<doge2.length;j++){
    const str=doge2[j]
    let width=0
    let i=0
    // accounting for username chat width footprint
    while(i<=chatLengthLimit){ //upper limit in case my math is flawed
        char=("<."+options.username+"> ").slice(i,i+1)
        newWidth=width+MC_CHAR_WIDTHS[char];
        if(newWidth<=chatLengthLimit){
            width=newWidth
        }else{
            break
        }
        i++;
    }
    construction=""
    i=0
    while(width<=chatLengthLimit){
        char=str.slice(i,i+1)
        newWidth=width+MC_CHAR_WIDTHS[char];
        if(newWidth<=chatLengthLimit){
            construction+=char
            width=newWidth
        }else{
            break
        }
        i++;
    }
    themessagetosend.push(construction)
}
        //bot.chat(str.slice(0,30))
        //}
        //bot.chat(i+"Ǆ".repeat(256-i.toString().length))
/*        bot.chat(`
██╗░░██╗███████╗██╗░░░░░██╗░░░░░░█████╗░  ░██╗░░░░░░░██╗░█████╗░██████╗░██╗░░░░░██████╗░
██║░░██║██╔════╝██║░░░░░██║░░░░░██╔══██╗  ░██║░░██╗░░██║██╔══██╗██╔══██╗██║░░░░░██╔══██╗
███████║█████╗░░██║░░░░░██║░░░░░██║░░██║  ░╚██╗████╗██╔╝██║░░██║██████╔╝██║░░░░░██║░░██║
██╔══██║██╔══╝░░██║░░░░░██║░░░░░██║░░██║  ░░████╔═████║░██║░░██║██╔══██╗██║░░░░░██║░░██║
██║░░██║███████╗███████╗███████╗╚█████╔╝  ░░╚██╔╝░╚██╔╝░╚█████╔╝██║░░██║███████╗██████╔╝
╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝░╚════╝░  ░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░`)

    */
        //bot.chat("( ͡° ͜ʖ ͡°)")
        //return "a"

async function spam(activebot,j){
    // get str to send
    const str=themessagetosend[j%themessagetosend.length]
    
    // wait
    const ticks=30 //delay between each message, each tick is .05 seconds
    waiting=activebot.waitForTicks(ticks)
    await waiting;

    // send message
    activebot.chat(str)
}

// bot.one runs a given function on a given event one time
bot.once("spawn",()=>{onspawn(bot)})
async function onspawn(bot){
    console.log("Bot connected as "+options.username+"!")
    console.log("Spamming chat...")
    //bot.once("messagestr",()=>{
    //    process.stdout.write("Disconnecting... ")
    //    //bot.quit()
    //    console.log("Bot disconnect queued!")
    //});
    //bot.on("message",(jsonMsg, position, sender, verified)=>{
    //    console.log(jsonMsg, position, sender, verified)
    //    //console.log(rrrr)
    //    //console.log(s)
    //})
    //let j=k;
    let wait=false;
    bot.on('messagestr', (message) => {
        console.log(message)
        //if (logChat && message.trim()) console.log(`[MC] ${message}`)
        //let l=j+1;
        if(wait==false){
            wait=true
            waiting(k)
            k+=1
        }
    })
    async function waiting(n){
        try{
            await spam(bot,n)
        }catch(e){
            console.log("failed to spam "+k+" :( "+e)
        }
        wait=false
    }
    //bot.on('chat', (username, message) => {
    //    //if (username !== OWNER || !message.startsWith('!')) return
    //    //handleCommand(message.slice(1))
    //    console.log(username,message)
    //})
    console.log("hi")
    bot.chat("hi")
    //for(let i=0;i<1000;i++){
    //    //spam(i)
    //} //https://fsymbols.com/
    
    
}
function comeback(reason){
    console.log("Disconnected! Reason: "+reason)
    const bot2=mineflayer.createBot(options)
    process.stdout.write("Attempting reconnect...")
    bot2.once("spawn",()=>{onspawn(bot2)})
    bot2.on("kicked",(reason)=>console.log("Kicked: ",reason))
    bot2.on("error",(err)=>console.log("Error: ",err))
    bot2.once("end",(reason)=>{comeback(reason)})
}
bot.once("end",(reason)=>{comeback(reason)})

bot.on("kicked",(reason)=>console.log("Kicked: ",reason))
bot.on("error",(err)=>console.log("Error: ",err))
