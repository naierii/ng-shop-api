import { RequestHandler } from "express";
import Customer from "../models/customers";

export const addCustomer: RequestHandler = async (req, res, next) => {
  const fname = req.body.item
  const lname = req.body.lname
  const hashedAndSaltedPassword = "TEST_PASSWORD"
  const emailVerified = false
  const address = {
    country: "philippines",
    street1: "#1 in Bikini Bottom",
    street2: null,
    city: "Quezon City",
    state: "Metro Manila",
    zip: "1116"
  }

  const newCustomer = new Customer({
    fname, lname, hashedAndSaltedPassword, emailVerified, address
  })
}