export default function(part) {
  /* The part.shorthand() method can save us a bunch of typing */

  // prettier-ignore
  let {
    options,      // Pattern options
    measurements, // Model measurements
    Point,        // Point constructor
    Path,         // Path constructor
    Snippet,      // Snippet constructor
    points,       // Holds part points
    paths,        // Holds part paths
    snippets,     // Holds part snippets
    store,        // The store allows you to share data between parts
    macro,        // Method to call a macro
    sa,           // Requested seam allowance
    final,        // Whether to draft a complete pattern or not
    paperless,    // Whether to draft a paperless pattern or not
  } = part.shorthand();

  /* Do your work here */

  points.start = new Point(0, 0);
  points.end = new Point(75, 0);

  paths.example = new Path()
    .move(points.start)
    .line(points.end)
    .attr("data-text", "This is the front part")
    .attr("data-text-class", "center");

  /* Final? */

  if (final) {
  }

  /* Paperless? */

  if (paperless) {
  }

  return part;
}
