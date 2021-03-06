import { Request, Response } from "express";
import { CreateCategoriesService } from "../services/CreateCategoriesService";

class CreateCategoriesController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoriesService = new CreateCategoriesService();

    const category = await createCategoriesService.execute({name, description});

    return response.status(200).json(category);
  }
}

export { CreateCategoriesController }