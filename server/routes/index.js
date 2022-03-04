var express = require("express");
var router = express.Router();
const conn = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "express", name: "vue" });
});

router.get("/todo", function (req, res, next) {
  const { name } = req.query;

  const query = `SELECT * FROM todo WHERE name="${name}";`;
  conn.query(query, (error, results) => {
    if (error) throw error;

    res.render("todo", { name, todoList: results });
  });
});

router.post("/todo", function (req, res, next) {
  const { name, text } = req.body;

  const query = `
    INSERT INTO todo(name, text) VALUES("${name}", "${text}");
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    res.send({ id: results.insertId });
  });
});

// dynamic route
router.put("/todo/:id", function (req, res, next) {
  const { id } = req.params;
  const { text } = req.body;

  const query = `
    UPDATE todo SET text = "${text}" WHERE id = ${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.delete("/todo", (req, res) => {
  const { name } = req.body;
  const query = `
    DELETE FROM todo WHERE name="${name}";
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const query = `
    DELETE FROM todo WHERE id=${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.patch("/todo/all", (req, res) => {
  const { name, isDone } = req.body;

  const query = `
    UPDATE todo SET isDone=${isDone} WHERE name='${name}';
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

router.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;

  const query = `
    UPDATE todo SET isDone = ${isDone} WHERE id=${id};
  `;
  conn.query(query, (error, results) => {
    if (error) throw error;
    res.send("success");
  });
});

module.exports = router;
