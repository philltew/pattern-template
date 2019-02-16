import freesewing from "freesewing";
import plugins from "@freesewing/plugin-bundle";
import config from "../config";
// Parts
import draftBack from "./back";
import draftFront from "./front";

// Create new design
const Template = new freesewing.Design(config, plugins);

// Attach draft methods to prototype
Template.prototype.draftBack = draftBack;
Template.prototype.draftFront = draftFront;

export default Template;
