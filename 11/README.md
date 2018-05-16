## Dojo 1: Moving Zeros To The End (Facile: Niveau 6)

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements and remove boolean.

```
    moveZeros([false,1,0,1,2,0,1,true,0,3,"a"]) // returns[1,1,2,1,3,"a",0,0,0]
```

## Dojo 2: Composing functions (Moyen: Niveau 5)

This time we want to write calculations using functions and get the results.
Let's have a look at some examples:

* seven(times(five())); // must return 35
* four(plus(nine())); // must return 13
* eight(minus(three())); // must return 5
* six(dividedBy(two())); // must return 3

_Requirements:_

* There must be a function for each number from 0 ("zero") to 9 ("nine")

* There must be a function for each of the following mathematical operations:
  plus, minus, times, dividedBy

Each calculation consist of exactly one operation and two numbers.
The most outer function represents the left operand, the most inner function represents the right operand.
