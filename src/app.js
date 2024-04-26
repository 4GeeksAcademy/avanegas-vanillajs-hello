/* eslint-disable */
import "bootstrap";
import "./style.css";

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

window.onload = function() {
  //write your code here

  function whoPhrase() {
    const who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
    const whoRandom = getRandom(who.length);
    return who[whoRandom];
  }

  function actionPhrase() {
    const action = ["ate ", "peed ", "crushed ", "broke "];
    const actionRandom = getRandom(action.length);
    return action[actionRandom];
  }

  function whatPhrase() {
    const what = ["my homework ", "my phone ", "the car "];
    const whatRandom = getRandom(what.length);
    return what[whatRandom];
  }

  function whenPhrase() {
    const when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      " while I was praying"
    ];
    const whenRandom = getRandom(when.length);
    return when[whenRandom];
  }

  let excuse = whoPhrase() + actionPhrase() + whatPhrase() + whenPhrase();

  let element = document.getElementById("excuse");
  element.innerHTML = excuse;
};
