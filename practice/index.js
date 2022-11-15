// destructer the object to its name,  *require* imports the information form the path in the parentheses
const { singer } = require(`./classes`)

// we are assigning a new child class *kimbra_Lee* that will inherent the properties of the parent class *singer*
const kimbra_Lee = new singer("Kimbra Lee Johnson", 32, "Hi Def Distance Romance (Reimagined)", "Kimbra")
//console.log(kimbra)


// kimbra is the class object which has the instance method *info* which takes in the object *kimbra*
console.log(kimbra_Lee.info(kimbra_Lee))
//-----------------------------------------------------------------------------
const Amelia_Murray = new singer("Amelia Murray", 29, "Break!", "Fazerdaze")
console.log(Amelia_Murray.info(Amelia_Murray))
//console.log(Amelia_Murray)
