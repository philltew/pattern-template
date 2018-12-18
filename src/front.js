export default function(part) {
  /* Building on top of back, just need to change the text */

  part.paths.example.attributes.set("data-text", "This is the back part");
  // Note: We didn't use shorthand here, the result is the same

  return part;
}
