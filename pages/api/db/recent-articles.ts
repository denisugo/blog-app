import type { NextApiRequest, NextApiResponse } from "next";
import { IProps } from "../../../components/Article/Article";

/**
 * @swagger
 *  components:
 *    schemas:
 *      Article_thumb:
 *        type: object
 *        properties:
 *          title:
 *            type: string
 *            description: The title
 *          text:
 *            type: string
 *            description: The text preview
 *          date:
 *            type: string
 *            description: The date
 *          author:
 *            type: string
 *            description: The author
 *          imageSrc:
 *            type: string
 *            description: The image src
 *          numOfComments:
 *            type: integer
 *            description: The number of comments
 *
 *      Article_thumbs:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/Article_thumb'
 */

/**
 * @swagger
 * /api/db/recent-articles:
 *   get:
 *     description: Returns the articles
 *     responses:
 *       200:
 *         description: Articles
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Article_thumbs'

 */

export const getArticles = async (): Promise<IProps[]> => {
  return [
    {
      title: "Why Do Cats Have Whiskers?",
      text: "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
      date: "02/13/17",
      author: "Elisabeth Strain",
      imageSrc: "/thumbs/img0.png",
      numOfComments: 4,
    },
    {
      title: "Wet vs. Dry Cat Food: Which is Better?",
      text: "If you arent sure how much wet food you should feed your cat, Purinas expert nutritionists can help. Plus, they offer guidance on food safety and provide serving ideas your cat will love.",
      date: "02/13/20",
      author: "Elisabeth Strain",
      imageSrc: "/thumbs/img1.png",
      numOfComments: 0,
    },
  ];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProps[]>
) {
  res.status(200).json(await getArticles());
}
