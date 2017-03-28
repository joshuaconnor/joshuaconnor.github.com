createGrid = function() {
  for (var x = 0; x <= width; x += gridSize) {
    for (var y = 0; y <= height; y += gridSize) {
      a = createVector(x, y);
      vectors.push(a);
    }
  }
}

randomize = function() {
  for (var i = 0; i < vectors.length; i++) {
    var a = vectors[i];
    var xn = a.x + random(-randomnessFactor*gridSize, randomnessFactor*gridSize);
    var yn = a.y + random(-randomnessFactor*gridSize, randomnessFactor*gridSize);
    var n = createVector(xn, yn);
    vectors[i] = n;
  }
}

moveGrid = function() {
  for (var i = 0; i < vectors.length; i++) {
    var a = vectors[i];
    var xn = a.x + random(-randomMovementFactor, randomMovementFactor);
    var yn = a.y + random(-randomMovementFactor, randomMovementFactor);
    var n = createVector(xn, yn);
    vectors[i] = n;
  }
}

make = function() {
  for (var i = 0; i < vectors.length-1; i++) {
    var vec1 = vectors[i];
    var vec2 = vectors[i+1];
    if (vec1.y < vec2.y) {
      line(vec1.x, vec1.y, vec2.x, vec2.y);
    }
  }
  for (var i = 0; i < vectors.length-numberTall; i++) {
    var vec1 = vectors[i];
    var vec3 = vectors[i+numberTall];
    print(vec1);
    print(vec3);
    line(vec1.x, vec1.y, vec3.x, vec3.y);
  }
}

make2 = function() {
  for (var i = 0; i < vectors.length-numberTall; i++) {
    var vec1 = vectors[i];
    var vec2 = vectors[i+numberTall];
    var vec3 = vectors[i+numberTall+1];
    var vec4 = vectors[i+1];
    var perc = random([1, 2]);

    if (vec1.y < vec4.y) {
      if (perc == 1) {
        var ve1 = vec1;
        var ve2 = vec2;
        var ve3 = vec3;
        var ve4 = vec4;
      } else {
        var ve1 = vec4;
        var ve2 = vec3;
        var ve3 = vec2;
        var ve4 = vec1;
      }
      Polyfill(ve1, ve2, ve3, ve4);
    }
  }
}
