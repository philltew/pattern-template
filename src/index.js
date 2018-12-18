import freesewing from "freesewing";
import pluginBundle from "@freesewing/plugin-bundle";
import config from "../config/config";
import { version } from "../package.json";
// Parts
import draftBack from "./back";
import draftFront from "./front";

// Constructor boilerplate
const Template = function(settings = false) {
  freesewing.Pattern.call(this, { version: version, ...config });
  this.with(pluginBundle);
  if (settings !== false) this.mergeSettings(settings);

  return this;
};

// Inheritance boilerplate
Template.prototype = Object.create(freesewing.Pattern.prototype);
Template.prototype.constructor = Template;

// Attach per-part draft methods to prototype
Template.prototype.draftBack = draftBack;
Template.prototype.draftFront = draftFront;

export default Template;
