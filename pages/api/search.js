import { dummyData } from "../../response.js";


export default function handler(req, res) {

  const { method } = req;

  switch (method) {
    case "GET":
        res.status(200).json(dummyData);
        break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
