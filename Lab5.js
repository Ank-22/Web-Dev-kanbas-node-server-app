const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};

const module ={
  id: "ID000",
  name: "Ankit Sinha",
  description: "This is my name",
  course: "101 of ANk"
}
const Lab5 = (app) => {
    app.get("/a5/welcome", (req, res) => {
      res.send("Welcome to Assignment 5");
    });
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/multiple/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) * parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) / parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
          case "add":
            result = parseInt(a) + parseInt(b);
            break;
          case "subtract":
            result = parseInt(a) - parseInt(b);
            break;
            case "multiple":
            result = parseInt(a) * parseInt(b);
            break;
            case "divide":
            result = parseInt(a) / parseInt(b);
            break;
          default:
            result = "Invalid operation";
        }
        res.send(result.toString());
      });
      app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
      });
      app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });

      app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });
      app.get("/a5/module", (req, res) => {
        res.json(module);
      });
      app.get("/a5/module/name", (req, res) => {
        res.json(module.name);
      });
      app.get("/a5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });
  };
  export default Lab5;
  
  