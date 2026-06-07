import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
    {
        method: "POST",
        path: "/users",
        handler: ({req, res, db}) => {
            const { name, email } = req.body;

            db.insert("users", { name, email })
            return res.writeHead(201).end()
        }
    },
    {
        method: "GET",
        path: "/users",
        handler: ({req, res, db}) => {
            const users = db.select("users")
            return res.writeHead(200).end(JSON.stringify(users))
        }
    },
    {
        method: "DELETE",
        path: "/users/:id",
        handler: ({req, res, db}) => {
            return res.writeHead(200).end("User " + req.params.id + " deleted!")
        }
    },
    {
        method: "PUT",
        path: "/users/:id",
        handler: ({req, res, db}) => {
            return res.writeHead(200).end("User " + req.params.id + " updated")
        }
    },
].map((route) => ({
   ...route,
    path: parseRoutePath(route.path),
}))