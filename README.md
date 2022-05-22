# <center>The Monty Hall problem</center>

![alt text](./thumb.png "Thumb for problem")

### <strong>What is?</strong>

```shell
The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall.
```

### <strong>Change or not change?</strong>

```shell
Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?
```

### <strong>The problem answer?</strong>
```js
Vos Savants response was that the contestant should switch to the other door. Under the standard assumptions, the switching strategy has a 2/3 probability of winning the car, while the strategy that remains with the initial choice has only a 1/3probability.
```

### <strong>The code :D</strong>
```js
In order to understand the correct solution, i maked a simple code that accept two arguments the quantity attempts and the choice to the answer (change or not change the door), let's see the results

RUN EXAMPLE => yarn && node index.js option=(true/false) attemps=(number)
```

### <strong>10 attempts</strong>
```js
Run: node index.js option=false attemps=10
-> Wow, you got it right 3 times (30%)

Run: node index.js option=true attemps=10
-> Wow, you got it right 7 times (70%)
```

### <strong>100 attempts</strong>
```js
Run: node index.js option=false attemps=100
-> Wow, you got it right 39 times (39%)

Run: node index.js option=true attemps=100
-> Wow, you got it right 75 times (75%)
```

### <strong>1000 attempts</strong>
```js
Run: node index.js option=false attemps=1000
-> Wow, you got it right 327 times (32.7%)

Run: node index.js option=true attemps=1000
-> Wow, you got it right 661 times (66.1%)
```

### <strong>10000 attempts</strong>
```js
Run: node index.js option=false attemps=10000
-> Wow, you got it right 3346 times (33.46%)

Run: node index.js option=true attemps=10000
-> Wow, you got it right 6672 times (66.72%)
```

### <strong>100000 attempts</strong>
```js
Run: node index.js option=false attemps=100000
-> Wow, you got it right 33344 times (33.344%)

Run: node index.js option=true attemps=100000
-> Wow, you got it right 66664 times (66.664%)
```

### <strong>1000000 attempts</strong>
```js
Run: node index.js option=false attemps=1000000
-> Wow, you got it right 333217 times (33.3217%)

Run: node index.js option=true attemps=1000000
-> Wow, you got it right 666060 times (66.606%)
```


<center>like it or not, switch ports xD</center>