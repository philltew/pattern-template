import { version } from "../package.json";

// See config syntax documentation at:
// https://developer.freesewing.org/config/
export default {
  name: "template",
  version,
  measurements: ["chestCircumference", "wristCircumference"],
  dependencies: {
    front: "back"
  },
  inject: {
    front: "back"
  },
  options: {
    // Constants
    foo: 4,
    bar: 8,

    // Percentages
    chestEase: { pct: 8, min: -4, max: 20 },
    cuffEase: { pct: 20, min: 0, max: 200 }
  }
};
