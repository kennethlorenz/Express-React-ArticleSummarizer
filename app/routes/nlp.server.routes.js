module.exports = function (app) {
  var nlp = require("../controllers/nlp.server.controller");

  app.route("/").get(nlp.renderURLForm);

  app
    .route("/processNLP")
    .get(nlp.scrapeURL, nlp.processText, nlp.renderResult);

  app
    .route("/api/run")
    .get(nlp.run, nlp.processText, nlp.renderResultJson)
    .post(nlp.run, nlp.processText, nlp.renderResultJson);
};
