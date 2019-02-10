import freesewing from "freesewing";
import plugins from "@freesewing/plugin-bundle";
import config from "../config";
// Parts
import draftBack from "./back";
import draftFront from "./front";

// Create pattern
const Template = freesewing.create(config, plugins);

// Attach per-part draft methods to prototype
Template.prototype.draftBack = draftBack;
Template.prototype.draftFront = draftFront;

export default Template;
