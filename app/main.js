import VendingsController from "./Controllers/VendingController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  vendingsController = new VendingsController();
}

window["app"] = new App();
