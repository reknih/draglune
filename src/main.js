/* draglune main */

// Base function.
var draglune = function () {

};
draglune.prototype.makeFileDrop = function(o, b) {
  if (!(o && o.nodeType && o.nodeType === 1 && b && b instanceof Function)) {
    return false;
  }
  o.addEventListener("dragover", function () {});
  return true;
};

// Version.
draglune.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.draglune = draglune;
