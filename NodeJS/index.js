// Exercise 1
// import { writeFile, readFile } from "fs";
// const fs = require("fs"); use this syntax if you are using common js module system

// writeFile("welcome.txt", "Hello Node", (err) => {
//   if (err) throw err;
//   console.log("Saved!");
// });

// readFile("welcome.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// Exercise 2

// import generateName from "sillyname";

// let sillyname = generateName();
// console.log(`My name is ${sillyname}.`);

// Exercise 3
// import { randomSuperhero } from "superheroes";

// let secretIdentity = randomSuperhero();

// console.log(`I am ${secretIdentity}!`);

// Final Exercise
// Step 1 get user input
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    { message: "Enter a URL you want to convert to QR code: ", name: "URL" },
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
