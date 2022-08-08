import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

const ping = (_req: Request, res: Response) => {
  res.status(200).json("Ping successful");
};

export default ping;
