const minions = [
	'bob',
	'kevin',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl'
];
// console.log(minions.length)

for (let i=0; i<minions.length; i++){
    console.log(`${minions[i]} - here`)
}



function myFunction(name){
    if(name !=="kevin"){
        let first = name.charAt(0).toUpperCase()
        let rest = name.substr(1).toLowerCase()
        console.log(first,rest)
        return first+rest
    }
    return name.toLowerCase()

}
let capitalizedMinions = minions.map(myFunction)
console.log(capitalizedMinions)