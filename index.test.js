const { forEach } = require('./index');

let sum = 0;
forEach([1, 2, 3], value => {
    sum += value;
});

if (sum !== 6) {
    throw Error('Expected summing array to equal 6');
}