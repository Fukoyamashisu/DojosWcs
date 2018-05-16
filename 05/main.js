const temperatureZero = temperatures => {
    if (temperatures.length <= 0) {
        return 0;
    }

    let result = -Infinity;

    const filterArray = temperatures.filter(temp => Math.abs(temp) < 100);

    const workingArray = filterArray.map(temp => {
        if (Math.abs(temp) < Math.abs(result)) {
            result = temp;
        }
    });

    const average = filterArray.reduce(
        (a, b) => (a + b) / filterArray.length,
        0
    );
    return result;
};

const test1 = temperatureZero([15.5, 6, -2, 1, 39.5, -6]);
const test2 = temperatureZero([-2.5, -15.5, -40, -7.5, -1]);
const test3 = temperatureZero([42, -28, 7, 9, -15.5, -7]);
const test4 = temperatureZero([]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
