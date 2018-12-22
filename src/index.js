import freesewing from "freesewing";
import plugins from "@freesewing/plugin-bundle";
import config from "../config/config";
// Parts
import draftBack from "./back";
import draftFront from "./front";

// Constructor
const Template = function(settings) {
  freesewing.Pattern.call(this, config);
  this.use(plugins).apply(settings);

  return this;
};

// Set up inheritance
Template.prototype = Object.create(freesewing.Pattern.prototype);
Template.prototype.constructor = Template;

// Attach per-part draft methods to prototype
Template.prototype.draftBack = draftBack;
Template.prototype.draftFront = draftFront;

export default Template;
