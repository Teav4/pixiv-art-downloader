const pixiv = require("./app");
const fs = require("fs");


pixiv.downloadAll(512849,JSON.parse(fs.readFileSync("./account.json","utf-8")));
