test("the base function exists", function() {
  ok(draglune);
});
test("draglune.makeFileDrop() exists", function() {
	ok(draglune.prototype.makeFileDrop);
});
test("Arguments return false 1", function() {
	ok(!draglune.prototype.makeFileDrop(true));
});
test("Arguments return false 2", function() {
	ok(!draglune.prototype.makeFileDrop(document.getElementById("qunit"), true));
});
test("Arguments return false 3", function() {
	ok(!draglune.prototype.makeFileDrop(true, function(){;}));
});
test("Arguments return true", function() {
	ok(draglune.prototype.makeFileDrop(document.getElementById("qunit"), function(){;}));
});