import ValuesController from "./Controllers/ValuesController.js";
import CharactersController from "./Controllers/CharactersController.js";

class App {
  valuesController = new ValuesController();
  charactersController = new CharactersController()
}

window["app"] = new App();
