export function index(req, res, database) {
  const tickets = database.select("tickets");
  res.end(JSON.stringify(tickets));
}
