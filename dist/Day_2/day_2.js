const day2 = (input2) => {
    // Rock X 1 OR A
    // Paper Y 2  OR B
    // Scissor Z 3 OR C
    // Loss 0
    // Draw 3
    // Win 6
    console.log(input2);
    let sortedInput2 = input2.split(/\r?\n/);
    console.log(sortedInput2);
    // const sortedInput3 = []
    // for (let string of sortedInput2) {
    //     sortedInput3.push(string.split(' '))
    // }
    let res = 0;
    for (const play of sortedInput2) {
        // res = res + play(play)
    }
};
const play = (input) => {
    switch (input) {
        // I choose ROCK
        case 'A X': return 4;
        case 'B X': return 1;
        case 'C X': return 7;
        // I choose PAPER
        case 'A Y': return 2;
        case 'B Y': return 5;
        case 'C Y': return 9;
        // I choose SCISSOR
        case 'A Z': return 3;
        case 'B Z': return 9;
        case 'C Z': return 6;
    }
};
const input2 = `A Y
B X
C Z`;
day2(input2);
//# sourceMappingURL=day_2.js.map