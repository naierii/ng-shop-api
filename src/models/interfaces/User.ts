import Address from "./Address";

export default interface User{
  fname: string;
  lname: string;
  email: string;
  hashedAndSaltedPassword: string;
  image: string;
  address: Address;
}