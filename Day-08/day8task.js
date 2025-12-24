//  Task 2.1
// function introduceWizard({ title = "Master", name, wand: { core } }) {
//   return `🪄 ${title} ${name} wields a wand with ${core}.`;
// }

const introduceWizard = ({ title = "Master", name, wand: { core } }) =>
  `🪄 ${title} ${name} wields a wand with ${core}.`;

//  Task 2.2
// function mergeInventory(shelf = [], delivery = []) {
//   return [...shelf, ...delivery];
// }

const mergeInventory = (shelf = [], delivery = []) => [...shelf, ...delivery];
