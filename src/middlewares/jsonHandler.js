export async function jsonHandler(req, res) {
    const buffers = []; // Array para armazenar os pedaços de dados recebidos

    for await (const chunk of req) { // coleta os chunks de dados do request
      buffers.push(chunk);
    }

    try { // concatena os chunks e converte para string, depois parseia o JSON
        req.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch (error) {
        req.body = null;
    }

    res.setHeader("Content-Type", "application/json"); // define o header para JSON

}