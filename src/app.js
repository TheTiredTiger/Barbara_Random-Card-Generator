/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let who = ["A genie", "A sorcerer", "Zeus", "My cat"];
  let action = ["magicked away", "zapped", "crushed", "exploded"];
  let what = ["my spellbook", "my dragon", "my broom", "my dignity"];
  let when = [
    "before the class.",
    "when I was on stage.",
    "while I was exercising.",
    "during my morning meditation.",
    "while I was exploring Mars."
  ];

  let subject = Math.floor(Math.random() * who.length);
  let verb = Math.floor(Math.random() * action.length);
  let object = Math.floor(Math.random() * what.length);
  let tempClause = Math.floor(Math.random() * when.length);

  return (
    who[subject] +
    " " +
    action[verb] +
    " " +
    what[object] +
    " " +
    when[tempClause]
  );
}
