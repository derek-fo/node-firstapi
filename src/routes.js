import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
    {
        method: "POST",
        path: "/users",
        handler: (req, res) => {
            return res.writeHead(201).end(JSON.stringify(req.body))
        }
    },
    {
        method: "GET",
        path: "/users",
        handler: (req, res) => {
            return res.writeHead(200).end(JSON.stringify(req.query))
        }
    },
    {
        method: "DELETE",
        path: "/users/:id",
        handler: (req, res) => {
            return res.writeHead(200).end("User " + req.params.id + " deleted!")
        }
    },
    {
        method: "PUT",
        path: "/users/:id",
        handler: (req, res) => {
            return res.writeHead(200).end("User " + req.params.id + " updated")
        }
    },
].map((route) => ({
   ...route,
    path: parseRoutePath(route.path),
}))