// import * as express from "express";
import express from "express";
// const express = require("express");
import type { Express, Request, Response } from "express";

// import だと Express 型
// require だと any 型+
const app: Express = express();
const port = 3001;

app.get("/", (req: Request, res: Response) =>
  res.send("Hello World! by Shota")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
