import { Schema, Types, model, models } from "mongoose";


const controllerSchema = new Schema(
  {
    pointConvert: { type: Number},
    offerCardDiscount: { type: Number},
  },
  { versionKey: false }
);

const Controller = models?.Control || model("Control", controllerSchema);

export default Controller;
