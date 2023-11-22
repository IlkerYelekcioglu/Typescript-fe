let sportsOne: string[] = ["Golf", "Cricker", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
  console.log(sportsOne[i]);
}

//let use the simplied for loop;

// for (let tempSport of sportsOne) {
//   console.log(tempSport);
// }

for (let tempSport of sportsOne) {
  if (tempSport == "Cricket") {
    console.log(tempSport + "<< My Favorite!");
  } else {
    console.log(tempSport);
  }
}
