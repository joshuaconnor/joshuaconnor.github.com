function Polyfill(v1, v2, v3, v4) {
  var pointsPoly = [];

  pointsPoly.push(v1);
  pointsPoly.push(v2);
  pointsPoly.push(v3);
  pointsPoly.push(v4);


  var poly = quad(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, v4.x, v4.y);

  for (i = 0; i < 45; i++) {
    var p1 = p5.Vector.sub(pointsPoly[i+1], pointsPoly[i]);
    p1.mult(.12+.01*i);
    p1 = p5.Vector.add(p1, pointsPoly[i]);
    pointsPoly.push(p1);
  }
  for (i = 0; i < pointsPoly.length-1; i++) {
   
    var p1 = pointsPoly[i];
    var p2 = pointsPoly[i+1];
  
    line(p1.x, p1.y, p2.x, p2.y);
  }
}
