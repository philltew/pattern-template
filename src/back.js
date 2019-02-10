export default function(part) {
  let { Point, Path, points, paths, final, paperless } = part.shorthand();

  points.start = new Point(0, 0);
  points.end = new Point(75, 0);

  paths.demo = new Path()
    .move(points.start)
    .line(points.end)
    .attr("data-text", "thisIsTheFrontPart")
    .attr("data-text-class", "center");

  // Final?
  if (final) {
  }

  // Paperless?
  if (paperless) {
  }

  return part;
}
