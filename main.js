console.log ("hello main.js");

let lostColors = {
    yellow: ["dandelion", "mac and cheese"],
    blue: "blues",
    add: function (a,b){
        return a + b;
    }
};
console.log (lostColors.yellow.length);
console.log("add colors", lostColors.add(3, 12));

let crayonBox = ["yellow", "blue", "lemon", lostColors];
console.log ("crayonBox", crayonBox);
let junkDrawer = ["tape", "sticky","fishing wire", 2,crayonBox];
console.log ("junkDrawer", junkDrawer);

let myCost = 3/1.5
console.log ("myCost is", myCost);

let snow = true;
let ice = true;
if (snow === true && ice === true){
    console.log("school is cancelled");
} else{ console.log ("learn more cool stuff");
}

let phrase = "the quick brown fox";
console.log ("phrase length", phrase.length);
console.log ("where is the w", phrase.indexOf("w"));

let newStuff = `<h2>My Favorite Poems of Ice Cream</h2>
                 <p>${phrase}</p>
                 <h3>by brenda Long<h3>`;
let addToDom = document.querySelector (".demo");
addToDom.innerHTML = newStuff;

console.log ("newStuff", newStuff);

for (let 1 = 0; i < domItems.length; i++){
    domItems[i].style.backgroundcolor = "red";
}

