const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = - 9394

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = -4582.21000111

const divider = '------------'

//Only change below this line

const owed = leoBalance + sarahBalance
const leo =`${leoName}  ${leoSurname} Owed $R{Math.abs(sarahBalance)}`
const sarah = `${sarahName} ${sarahSurname} Owed $R{Math.abs(sarahBalance)}`
const total = `Total amount owed:`
const result = `${leo}\n${sarah}n${divider}/n${divider}/n${total}R${Math.abs(owed)}`

console.log("result");    