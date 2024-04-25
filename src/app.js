/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];

  function whoPhrase() {
    let whoRandom = Math.floor(Math.random() * 4);
    return who[whoRandom];
  }

  // console.log(whoPhrase(who))

  let action = ["ate ", "peed ", "crushed ", "broke "];

  function actionPhrase() {
    let actionRandom = Math.floor(Math.random() * 4);
    return action[actionRandom];
  }

  // console.log(actionPhrase(action))

  let what = ["my homework ", "my phone ", "the car "];

  function whatPhrase() {
    let whatRandom = Math.floor(Math.random() * 3);
    return what[whatRandom];
  }

  // console.log(whatPhrase(what))

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    " while I was praying"
  ];

  function whenPhrase() {
    let whenRandom = Math.floor(Math.random() * 5);
    return when[whenRandom];
  }

  let excuse = whoPhrase() + actionPhrase() + whatPhrase() + whenPhrase();
  // console.log(excuse);

  let element = document.getElementById("excuse");
  element.innerHTML = excuse;
};

// console.log(whenPhrase(when))
