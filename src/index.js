import freesewing from "freesewing";
import pluginBundle from "@freesewing/plugin-bundle";

import config from "../config/config";
import { version } from "../package.json";

import back from "./back";
import front from "./front";

var pattern = new freesewing.Pattern({ version: version, ...config }).with(
  pluginBundle
);

pattern.draft = function() {
  if(this.needs(['back', 'front'])) this.parts.back = this.draftBack(new pattern.Part());
  if(this.needs(['front'])) this.parts.front = this.draftFront(new pattern.Part().copy(this.parts.back));

  return pattern;
};

pattern.draftBack = part => back.draft(part);
pattern.draftFront = part => front.draft(part);

export default pattern;
