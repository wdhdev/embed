import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    const embed = {
        title: req.query.title,
        description: req.query.description,
        image: req.query.image
    }

    if(!embed.title && !embed.description && !embed.image) return res.status(400).redirect("/");

    res.render("embed", { embed: embed });
}
