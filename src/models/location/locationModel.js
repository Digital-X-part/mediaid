import { Schema, model, models } from "mongoose";
const districtSchema = new Schema(
  {
    id: {
      type: String,
    },
    division_id: {
      type: String,
    },
    name: {
      type: String,
    },
    bn_name: {
      type: String,
    },
    lat: {
      type: String,
    },
    lon: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { versionKey: false }
);

districtSchema.pre("save", function (document, next) {
  delete document.__v;
  next();
});

export const District = models?.District || model("District", districtSchema);

// --------------------------------
const divisionSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    bn_name: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { versionKey: false }
);

export const Division = models?.Division || model("Division", divisionSchema);

// --------------------------------
const upazillaSchema = new Schema({
  id: {
    type: String,
  },
  district_id: {
    type: String,
  },
  name: {
    type: String,
  },
  bn_name: {
    type: String,
  },
  url: {
    type: String,
  },
});

export const Upazilla = models?.Upazilla || model("Upazilla", upazillaSchema);



// --------------------------------
const unionSchema = new Schema({
  id: {
    type: String,
  },
  upazilla_id: {
    type: String,
  },
  name: {
    type: String,
  },
  bn_name: {
    type: String,
  },
  url: {
    type: String,
  },
});

export const Union = models?.Union || model("Union", unionSchema);
