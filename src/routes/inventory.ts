import { Router } from "express";
import { addItem } from "../controllers/inventory";

const inventoryRouter = Router();

inventoryRouter.post("/", addItem)

inventoryRouter.get("/", ()=>{})

inventoryRouter.patch("/", ()=>{})

inventoryRouter.delete("/", ()=>{})

export default inventoryRouter