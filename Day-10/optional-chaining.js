const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

console.log(csk1.stats.win);

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    // win: 5,
    loss: 11,
  },
};

console.log(csk2.stats.win); // undefined

const x = {};
console.log(x.a); // undefined

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

// console.log(csk3.stats.win); // Cannot read properties of undefined (reading 'win')

const csk4 = null;

// console.log(csk4.stats.win);
// Cannot read properties of null

// All cases we want the win
// Case 1: 5   Case 2,3 & 4 : 'Data not found'

// function getWinStat() {
//   const caseCheck = [csk1, csk2, csk3, csk4];
//   if (caseCheck === csk1.win) {
//     console.log(`${csk1.win}`);
//   } else {
//     console.log("Data Not Found");
//   }
// }

//method 1
function getWinStat(team) {
  if (team && team.stats && team.stats.win) {
    return team.stats.win;
  } else {
    return "Data not found";
  }
}

//method 2

function getWinStat(team, stats) {
  if (!team || !team.stats || !team.stats.win) {
    return "Data Not Found";
  } else {
    return team.stats.win;
  }
}

//method 3

console.log(getWinStat(csk1)); // 5
console.log(getWinStat(csk2)); // 'Data not found'
console.log(getWinStat(csk3)); // 'Data not found'
console.log(getWinStat(csk4)); // 'Data not found'
