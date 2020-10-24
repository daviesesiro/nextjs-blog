const fs = require("fs");
const matter = require("gray-matter");

const activities = [
  { title: "Hiking", date: new Date("2019-06-28") },
  { title: "Shopping", date: new Date("2019-06-10") },
  { title: "Trekking", date: new Date("2019-06-22") },
];

console.log(activities.sort((a, b) => b.date - a.date));
