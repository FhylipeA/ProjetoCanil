import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("home no controlles");
  // res.render('pages/page')
};

export const dogs = (req: Request, res: Response) => {
  res.send("dogs no controlles");
  // res.render('pages/page')
};

export const cats = (req: Request, res: Response) => {
  res.send("cats no controlles");
  // res.render('pages/page')
};

export const fishes = (req: Request, res: Response) => {
  res.send("fishes no controlles");
  // res.render('pages/page')
};
