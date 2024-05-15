/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("btn").onclick = function() {
    let who = [
      "The hulk",
      "My grandma",
      "The mailman",
      "My bird",
      "The dog",
      "The cat"
    ];
    let action = ["ate", "peed", "crushed", "broke", "smashed", "kicked"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    let randomIndex = Math.floor(Math.random() * who.length);
    let whoIndex = who[randomIndex];
    let actionIndex = action[Math.floor(Math.random() * action.length)];
    let whatIndex = what[Math.floor(Math.random() * what.length)];
    let whenIndex = when[Math.floor(Math.random() * when.length)];
    document.getElementById("excuse").innerHTML =
      // best Practice for concatenation
      //whoIndex + " " + actionIndex + " " + whatIndex + " " + whenIndex;
      `${whoIndex} ${actionIndex} ${whatIndex} ${whenIndex}`;
  };
};
