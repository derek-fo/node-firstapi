import { randomUUID } from "crypto";

export function createTicket(req, res, database) {
  const { equipmente, description, username } = req.body;

  const ticket = {
    id: randomUUID(),
    equipmente,
    description,
    username,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  database.insert("tickets", ticket);
}

return res.end(JSON.stringify({ message: "Ticket criado com sucesso", ticket }));