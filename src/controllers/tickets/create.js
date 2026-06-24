import { randomUUID } from "crypto";

export function createTicket(req, res) {
  const { equipmente, description, username } = req.body;

  const ticker = {
    id: randomUUID(),
    equipmente,
    description,
    username,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

return res.end(JSON.stringify({ message: "Ticket criado com sucesso", ticket }));