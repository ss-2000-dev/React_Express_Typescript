"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from "express";
const express_1 = __importDefault(require("express"));
// import だと Express 型
// require だと any 型+
const app = (0, express_1.default)();
const port = 3001;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
