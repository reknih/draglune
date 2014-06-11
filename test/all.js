test("the base function exists", function() {
  ok(draglune);
});
test("draglune.makeFileDrop() exists", function() {
	ok(draglune.makeFileDrop);
});
test("Arguments return false 1", function() {
	ok(!draglune.makeFileDrop(true));
});
test("Arguments return false 2", function() {
	ok(!draglune.makeFileDrop(document.getElementById("qunit"), true));
});
test("Arguments return false 3", function() {
	ok(!draglune.makeFileDrop(true, function(){;}));
});
test("Arguments return true", function() {
	draglune.makeFileDrop(document.getElementById("qunit"), function(){;});
	ok(true);
});
test("draglune.readFromDrop() exists", function() {
	ok(draglune.readFromDrop);
});
