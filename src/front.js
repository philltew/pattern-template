export default function(part) {
  /* Building on top of back, just need to change the text */

  let { paths } = part.shorthand();
  paths.demo.attributes.set("data-text", "thisIsTheBackPart");

  return part;
}
