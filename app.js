const request = require("request-promise");
const fs = require("fs");
const qs = require('qs');
if (!fs.existsSync("./file"))
fs.mkdirSync("./file");
module.exports = {
    CLIENT_ID : 'KzEZED7aC0vird8jWyHM38mXjNTY',
    CLIENT_SECRET : "W9JZoJe00qPvJsiyCGT3CCtC6ZUtdpKpzMbNlUGP",
    download : function (uri) {
        function getUrl(uri){
            return new Promise((resolve) => {
                let id = uri.slice(uri.indexOf("illust_id=")+10,uri.length);
                request({
                    headers: {
                        Cookie: "PHPSESSID=20496492_520b5dfd42e6fcc7768ad74a91a60bc9; p_ab_id=2; p_ab_id_2=4; yuid=cwYFh5A55; tag_view_ranking=0xsDLqCEW6~RTJMXD26Ak~GX5cZxE2GY~b_G3UDfpN0~zIv0cf5VVk~BU9SQkS-zU~yZf1XmIy-U~iFcW6hPGPU~EGefOqA6KB~Lt-oEicbBr~zyKU3Q5L4C~nriWjM9urd~y8GNntYHsi~KN7uxuR89w~azESOjmQSV~qvqXJkzT2e~NpsIVvS-GF~Fq4K_8PGib~Ie2c51_4Sp~pzzjRSV6ZO~qiO14cZMBI~qtVr8SCFs5~tgP8r-gOe_~Bd2L9ZBE8q~q303ip6Ui5~RcahSSzeRf~xjfPXTyrpQ~FH69TLSzdM~81BOcT1ZAV~y68AFldGp7~65aiw_5Y72~CLR9k9dHAQ~Is0SiXyaWb~udkRh_mjvd~xZ6jtQjaj9~X_1kwTzaXt~YRDwjaiLZn~1HSjrqSB3U~D8cfQCDYAl~e4Va3SNH5h~SJK3YcGD-h~K0LWjp4M-c~VN7cgWyMmg~x_jB0UM4fe~dehCwztzpj~AVEc3LeUs5~IQ7tgDp_ul~fryDCikS2a~nRp2ZLPLbj~pYlUxeIoeg~j3leh4reoN~1F9SMtTyiX~XEuS3TPyCa~gooMLQqB9a~kym2Z4vnZu~JO16HzBgpd~_hSAdpN9rx~BuxH2AvtZ9~XpYOJt3r5W~Ce-EdaHA-3~-L-4bBqjrT~rezgCfkPbs~4OtoweblrI~gVfGX_rH_Y~AaBbSF1H2D~f-c_0dUV8c~aKAp3RlsBg~CrFcrMFJzz~-StjcwdYwv~jH0uD88V6F~Ltq1hgLZe3~LVSDGaCAdn~pnCQRVigpy~RVRPe90CVr~wyZOlBKxtg~uusOs0ipBx~qnO24qbca3~ANkTxNMKP2~CbmkqBJulM~q3eUobDMJW~tTvZK72fmv~EUwzYuPRbU~89uzPVUy9U~wsim4__rTI~KhVXu5CuKx~HZCnKGc7Gi~X1ZSbphPDx~kGYw4gQ11Z~qWFESUmfEs~ay54Q_G6oX~9TPuxVVpm_~5RvyKm3yea~juumLY9DfB~a-IhwNF_3B~WY10GFG4q3~OVcez6CxIO~HrwdVe4iWc~agX61qa9EJ~iOH7DNLGY6~ZeF-yPWEA5; __utma=235335808.224054593.1525685806.1525685806.1525685833.2; __utmz=235335808.1525685833.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=20496492=1^9=p_ab_id=2=1^10=p_ab_id_2=4=1^11=lang=en=1; _ga=GA1.2.224054593.1525685806; c_type=18; a_type=0; b_type=1; module_orders_mypage=%5B%7B%22name%22%3A%22sketch_live%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22tag_follow%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22recommended_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22showcase%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22fanbox%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22user_events%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; login_ever=yes; first_visit_datetime_pc=2018-05-28+16%3A24%3A47; privacy_policy_agreement=1; is_sensei_service_user=1",
                        'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        uri: "https://www.pixiv.net/ajax/illust/"+id,
                        json : true
                }).then(res => {
                    if (!res.error){
                        resolve({
                            img :res.body.urls.regular,
                            id : id
                        });
                    }
                    else resolve(null);
                });
            });
        }
        if (typeof uri == "object"){
            if (typeof uri[0] == "object") {
                Promise.all(uri.map(el => load(el.img,el.id,this.download)))
            }
            else {
                Promise.all(uri.map(getUrl)).then((res) => { res.map((el) => {load(el.img,el.id,this.download)})});
            }
        }
        function load (url,id,func){
            if (url !== undefined){
                return new Promise((reject) => {
                    request({
                        headers : {
                            Referer: "https://www.pixiv.net/ajax/illust/"+id
                        },
                        uri : url
                    })
                        .pipe(fs.createWriteStream(__dirname+"/file/"+id+".png"))
                        .on("close",function(){
                            console.log("save "+id+"."+url.slice(url.length-3,url.length));
                        });
                })
            } else func(["https://www.pixiv.net/member_illust.php?mode=medium&illust_id="+id]);
        }
    },
    getUserWork : function(userID,n = 0,opt){
        return new Promise((resolve)=>{
            let queryString = qs.stringify({ user_id: userID, filter: 'for_ios', offset : n});
            illust_arr = []
            this.getAuthAccessToken(opt,(token) => {
                request({
                    headers : {
                        'App-OS': 'ios',
                        'Accept-Language': 'en-us',
                        'App-OS-Version': '9.3.3',
                        'App-Version': '7.1.11',
                        'User-Agent': 'PixivIOSApp/7.1.11 (iOS 9.0; iPhone8,2)',
                        Authorization: token 
                    },
                    uri : "https://app-api.pixiv.net/v1/user/illusts?"+queryString,
                    json : true
                }).then(json => { //232
                    json.illusts.forEach(el => {
                        illust_arr.push({
                            img : el.meta_single_page.original_image_url,
                            id : el.id
                        });
                        resolve((json.illusts != []) ? illust_arr : "limited");
                    });
                });
            });
        });
    },
    downloadAll : function(userID,n=0,opt){
        pixiv.getUserWork(userID,opt).then(res => {
            pixiv.download(res);
            return res
        }).then(res => {
            if(res != "limited"){
                downloadAll(userID,n+30);
            }
        });
    },
    getAuthAccessToken : function({username,password},callback = ()=>{}){
        request({
            method: "POST",
            body : qs.stringify({
                client_id: this.CLIENT_ID,
                client_secret: this.CLIENT_SECRET,
                get_secure_url: 1,
                grant_type: 'password',
                username: username,
                password: password,
            }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            uri : "https://oauth.secure.pixiv.net/auth/token",
            json : true
        }).then(res => {
            callback("Bearer "+res.response.access_token);
        });
    }
} 


