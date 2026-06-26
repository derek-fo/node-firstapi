import Tickets from "./tickets.js";
import Create from "..controllers/tickets/create.js";
import parseRoutePath from "../utils/parse-route-path.js";

export const routes = [
    ...Tickets
]
.map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))