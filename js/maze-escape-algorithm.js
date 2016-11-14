// Laufe rechts entlang.
while (!turtle.istAmAusgang()) {
  if (turtle.rechtsFrei()) {
    turtle.dreheRechts();
  } else if (turtle.vorneFrei()) {
    // do nothing
  } else if (turtle.linksFrei()) {
    turtle.dreheLinks();
  } else {
    // We have to go back
    turtle.dreheRechts();
    turtle.dreheRechts();
  }
  turtle.laufe();
}

// Laufe links entlang.
while (!turtle.istAmAusgang()) {
  if (turtle.linksFrei()) {
    turtle.dreheLinks();
  } else if (turtle.vorneFrei()) {
    // do nothing
  } else if (turtle.rechtsFrei()) {
    turtle.dreheRechts();
  } else {
    // We have to go back
    turtle.dreheLinks();
    turtle.dreheLinks();
  }
  turtle.laufe();
}
