import { ProxyState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";


//Private
function _draw() {
  let characters = ProxyState.characters;
  let template = ''
  characters.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div className="card-columns characters">
      ${template}
  </div>
  <button class="btn btn-primary" onclick="app.charactersController.next()">Next</button>
  `
}

//Public
export default class CharactersController {
  constructor() {
    ProxyState.on("characters", _draw);
    _draw()
  }

  next() {
    charactersService.next()
  }

}
