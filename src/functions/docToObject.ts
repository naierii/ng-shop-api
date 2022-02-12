import { Document } from "mongoose";

const docToObject = <D extends Document<any>>(doc: D) => 
doc.toObject() as D extends Document<infer Model>
  ? Model & {_id:string} // not sure if _id is always there - please modify to your needs / real runtime value
  : never;

export default docToObject;