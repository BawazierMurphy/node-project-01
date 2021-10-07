var fs = require("fs");

fs.readFile("menu.json", "utf8", function (err, data) {
  if (err) throw err; // we'll not consider error handling for now
  var obj = JSON.parse(data);
  var menu = obj.menu;
  for (var i in menu) {
    console.log("KATEGORI" + ": " + menu[i].kategori);
    console.log("MENUS" + ": " + menu[i].nama);
    console.log("HARGA" + ": " + menu[i].harga);
    console.log("________________");
  }
});
