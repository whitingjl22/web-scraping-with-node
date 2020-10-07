const fetch = require("node-fetch");
const JSDOM = require("jsdom").JSDOM;

let selector = "ul > li > a";
let url = "https://en.wikipedia.org/wiki/List_of_baked_goods";

fetch(url)
  .then((resp) => resp.text())
  .then((text) => {
    let dom = new JSDOM(text);
    let { document } = dom.window;
    let list = [...document.querySelectorAll(selector)].map(
      (a) => a.textContent
    );
    console.log(list);
  });
