export function update(req, res, database) {
  const { id } = req.params;
  return res.end(id);
}
