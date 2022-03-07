import type { NextApiRequest, NextApiResponse } from "next";
import { IProps } from "../../../components/Article/Article";

/**
 * @swagger
 *  components:
 *    schemas:
 *      Credentials:
 *        type: object
 *        required:
 *          - username
 *          - password
 *        properties:
 *          username:
 *            type: string
 *            description: The username
 *          password:
 *            type: string
 *            description: The password
 */

/**
 * @swagger
 * /api/db/login:
 *   post:
 *     description: Returns the user's credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Credentials'
 *     responses:
 *       200:
 *         description: Credentials
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Credentials'
 *       401:
 *         description: Unauthorized
 *
 */

export const checkUserExistence = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<boolean> => {
  if (username && password) return true;
  return false;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Here should be some check if the user exists in a db
  const doesUserExistInDb = await checkUserExistence(req.body);
  if (doesUserExistInDb) return res.status(200).json(req.body);
  res.status(401).json({ error: "Unauthorized" });
}
