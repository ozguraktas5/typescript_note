// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth;
;
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var point = { x: 5, y: 10 };
logPoint(point);
var point3 = { x: 7, y: 12, z: 54 };
logPoint(point3);
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
var color = { hex: "#187ABF" };
logPoint(color);
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(12, 54);
logPoint(newVPoint);
