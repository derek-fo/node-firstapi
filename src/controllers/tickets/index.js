export function index(req, res, database) {

  const  { status } = req;

  const filters = status ? { status } : null

  const tickets = database.select("tickets", filters);
  
  res.end(JSON.stringify(tickets));
}
