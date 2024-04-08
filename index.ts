#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to Currency Converter\n"));

//Define the list of currencies and their exchange rates
const currency:any = {
    "USD": 1, // Base Currency
    "EUR": 0.92, //European Currecy(Euro)
    "GBP": 0.79, //British Pound(Pound)
    "CAD": 1.36, //Canadian Dollar(Dollar)
    "JPY": 151.74, //Japanese Yen(Yen)
    "AUD": 1.52, //Australian Dollar(Dollar)
    "PKR": 277.70, //Pakistani Rupee(Rupee)
}
// Prompt the user to select currencies from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","GBP","CAD","JPY","AUD","PKR"]
},
{
    name: "to_currency",
    type: "list",
    message: "Select the currency to convert in to:",
    choices: ["USD","EUR","GBP","CAD","JPY","AUD","PKR"]

},
{
    name: "amount",
    type:"input",
    message: "Enter the amount to convert:"

}
]);
// Perform currency conversion by using formula
let from_amount = currency[user_answer.from_currency];
let to_amount = currency[user_answer.to_currency];
let amount = user_answer.amount;

let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
 
//Display the converted amount
console.log(`Converted amount: ${chalk.green(converted_amount.toFixed(2))}`);

