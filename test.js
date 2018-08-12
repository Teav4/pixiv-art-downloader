const pixiv = require("./app");
const fs = require("fs");
let userid = 2345928

function downloadAll(userid,n){
    pixiv.getUserWork(userid,n,JSON.parse(fs.readFileSync("account.json","utf-8"))).then(res => {
        pixiv.download(res);
        return res
    }).then(res => {
        if(res != "limited"){
            downloadAll(userid,n+30);
        }
    });
}
downloadAll(userid,0);
//pixiv.getUserWork(userid,0).then(console.log);