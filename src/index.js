import playGame from './monty-hall-problem.js'

const args = process.argv.slice(2).map((arg) => arg.split("=")[1])
const option = args[0] === 'true' ? true : false
const attempts = args[1] || 100000

playGame(option, attempts)