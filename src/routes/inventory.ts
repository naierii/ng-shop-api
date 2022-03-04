import { Router } from "express";
import { addItem, getItems } from "../controllers/inventory";

const inventoryRouter = Router();

inventoryRouter.post("/", addItem)

inventoryRouter.get("/", getItems)

inventoryRouter.patch("/", ()=>{})

inventoryRouter.delete("/", ()=>{})

export default inventoryRouter