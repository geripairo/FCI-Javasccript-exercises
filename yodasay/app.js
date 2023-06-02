const yodasay = require('yodasay')
const cows = require('./node_modules/yodasay/lib/cows.js')
const stats= require('./vars')
const {dex, ulti, amFreak} = stats


let energy = "100%"
let power = 9000
let int = 95
console.log(yodasay.say({
    text: `Energy is at ${energy}. Power inreased over ${power}. My intelligence it's only ${int} but I don't need it.
    The important stats are that my dextrity increased to ${dex} yesterday so, now
    my ultimate is ${ulti}. Am I a freak? ${amFreak}`,
    e:"pp",
    T: "U",
    f: "luke",
    d: true
  }));