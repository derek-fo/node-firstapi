import http from "http";
import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routesHandler } from "./middlewares/routesHandler.js";

const server = http.createServer(async (req, res) => {
  await jsonHandler(req, res);
  routesHandler(req, res);
});

server.listen();
