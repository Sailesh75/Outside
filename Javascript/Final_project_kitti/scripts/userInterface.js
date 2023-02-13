export class Gameplay {
  constructor() {
    this.gameplay = () => {
      const domFunction = (elementName, className, text, targetId, src) => {
        let element = document.createElement(elementName);
        element.className = className;
        element.src = src;
        element.appendChild(document.createTextNode(text));
        document.querySelector(targetId).appendChild(element);
      };

      domFunction("div", "gameplay-UI", "", ".body");

      domFunction("div", "gameplay-container", "", ".gameplay-UI");
      domFunction("div", "result-button", "", ".gameplay-UI");

      domFunction("div", "dealer", "", ".gameplay-container");
      domFunction("div", "player", "", ".gameplay-container");

      domFunction("div", "dealer-info", "Dealer:", ".dealer");
      domFunction("div", "dealer-cards", "", ".dealer");
      domFunction("img", "dealer-card dealer-card--1", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--2", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--3", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--4", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--5", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--6", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--7", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--8", "", ".dealer-cards");
      domFunction("img", "dealer-card dealer-card--9", "", ".dealer-cards");
      domFunction("div", "dealer-result", "", ".dealer");


      domFunction("div", "result-indicator result-indicator--dealerfirstset", "", ".dealer-result");
      domFunction("div", "result-indicator result-indicator--dealersecondset", "", ".dealer-result");
      domFunction("div", "result-indicator result-indicator--dealerthirdset", "", ".dealer-result");

      domFunction("div", "player-info", "Player:", ".player");
      domFunction("div", "player-cards", "", ".player");
      domFunction("div", "box box-1", "", ".player-cards");
      domFunction("div", "box box-2", "", ".player-cards");
      domFunction("div", "box box-3", "", ".player-cards");
      domFunction("div", "box box-4", "", ".player-cards");
      domFunction("div", "box box-5", "", ".player-cards");
      domFunction("div", "box box-6", "", ".player-cards");
      domFunction("div", "box box-7", "", ".player-cards");
      domFunction("div", "box box-8", "", ".player-cards");
      domFunction("div", "box box-9", "", ".player-cards");
      domFunction("div", "player-result", "", ".player");


      domFunction("div", "result-indicator result-indicator--playerfirstset", "", ".player-result");
      domFunction("div", "result-indicator result-indicator--playersecondset", "", ".player-result");
      domFunction("div", "result-indicator result-indicator--playerthirdset", "", ".player-result");

      domFunction("img", "img img1", "", ".box-1");
      domFunction("img", "img img2", "", ".box-2");
      domFunction("img", "img img3", "", ".box-3");
      domFunction("img", "img img4", "", ".box-4");
      domFunction("img", "img img5", "", ".box-5");
      domFunction("img", "img img6", "", ".box-6");
      domFunction("img", "img img7", "", ".box-7");
      domFunction("img", "img img8", "", ".box-8");
      domFunction("img", "img img9", "", ".box-9");

      domFunction("button", "buttons showbutton", "Show 1st set", ".result-button");
      domFunction("button", "buttons savebutton", "Save", ".result-button");
    };
  }
}

export class LandingPage {
  constructor() {
    this.landingPageUI = () => {
      const domFunction = (elementName, className, text, targetId, src) => {
        let element = document.createElement(elementName);
        element.className = className;
        element.src = src;
        element.appendChild(document.createTextNode(text));
        document.querySelector(targetId).appendChild(element);
      };

      domFunction("div", "container", "", ".body");
      domFunction("figure", "img-container", "", ".container");
      domFunction("img","leadspace","",".img-container","assets/images/kitti_hero.png"
      );
      domFunction("button", "buttons play-button", "Play", ".container");
      domFunction("button", "buttons rule-button", "Rules", ".container");
    };
  }
}
