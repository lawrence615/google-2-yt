import response from "../../response";


export default function handler(req, res) {

  const { method } = req;

  switch (method) {
    case "GET":
        res.status(200).json(response);
        break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
