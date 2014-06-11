/* draglune main */

var callback;

// Base function.
var draglune = function () {

};
draglune.makeFileDrop = function(o, b) {
  if (!(o && o.nodeType && o.nodeType === 1 && b && b instanceof Function)) {
    return false;
}
o.addEventListener("dragover", function (e) {
    e.preventDefault();
});
o.addEventListener("dragenter", function (e) {
    e.preventDefault();
});
o.addEventListener("drop", function (e) {
    b(e.dataTransfer.files);
    e.preventDefault();
});
return true;
};
draglune.readFromDrop = function(o, b) {
    callback = b;
    var r = draglune.makeFileDrop(o, reader);
    if (!r || !FileReader) {
        return false;
    }
};
var reader = function(fileList) {
  var textArray = [];
  fileList.foreach(function (file, index, array) {
    if(file.type === 'text/plain'){
      var reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener('load', function(){
        textArray.push(reader.result);
        if (index == array.length) {
            callback(textArray);
        }
    }, false);
  }
});
};
// Version.
draglune.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.draglune = draglune;