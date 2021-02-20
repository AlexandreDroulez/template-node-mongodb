import express from "express";
import  cors from'cors';
import  api from "../api";

export default (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors())
    app.use(api);
}
