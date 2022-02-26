var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameInUppercase(name) {
    return name.toUpperCase()
}

function shoutyGreeting(name) {
    const shoutedName = nameInUppercase(name);
    return `HELLO ${shoutedName}`;
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));
