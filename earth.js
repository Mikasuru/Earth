
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var earth = "land"
var tree = "wood"
var water = "ocean"
var rain = "water"
var person = "human"

tree = false

if (tree == false) {
  tree = true
  console.log("Created tree.")
  sleep(3000)
  console.clear()
}

var fortess = "animals"
fortess = false
if (tree == true) {
  console.log("Generating animal")
  sleep(1000)
  console.clear()
  fortess = true
  console.log("animals spawned")
  sleep(1000)
  console.clear()
}

  var perfect = "10%"
water = false
rain = false
if (water == false) {
  fortess = false
  console.log("animals die because there no water")
  var perfect = "0%"
  sleep(1000)
  console.clear()
  rain = true
  if (rain == true) 
  {
    console.log("There heavy rain. flower, tree start growing and animal is back and ocean filled with water.")
    fortess = true;
    var perfect = "20%"
    sleep(3000)
    console.clear()
  }
}
human = false
if (perfect == "20%") {
  human = true;
  console.log("2 human spawned")
  sleep(1000)
  console.clear()
  var perfect = "40%"
}
var human_name = false
if (human_name == false)
{
  human_name = true
  var male = "boy"
  var female = "girl"
  var human_name1 = "Jack"
  human_name1 = male;
  var human_name2 = "Rose"
  human_name2 = female;

  var love = "sex"
 love = false;

  love = true
  if (love == true)
  human_name1 + human_name2
  var family = true
  let kid = "Meow ku"
console.log("Jack and Rose make baby")
  
}
if (family == true) {
  var city = true
  console.log("Jack, Rose, Meow ku made city and they are now find more people")
  sleep(4000)
  console.clear()
  var find_people = true
}

if (find_people == true) {
console.log("Jack, Rose, Meow ku found more 10 people")
  sleep(2000)
  console.clear()
}
var sick = "virus"
var city = "13 people"

sick = true
if (sick == true) {
  var Jack = "Jack"
  Jack = false
  console.log("Jack infected virus and now jack is dead. 12 people in city remaining.")
  sleep(4000)
  console.clear()
  console.log("Thanks for wasted your time. Make sure you follow this repo\nGod Open source")
}