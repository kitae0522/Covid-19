const request = require('request');
const cheerio = require('cheerio');
var express = require("express");
var app = express();
app.get("/",function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    request('http://ncov.mohw.go.kr', function (error, response, body) {
        if(error) throw error
        var col = body.split('<ul class="liveNum">')[1]
        var c1 = col.split('<span class="num">')[1].split('</span>')[1].split('</span>')[0]
        var c1_y = col.split('<span class="before">')[1].split('전일대비 ')[1].split(')')[0] + ")"
        var c2 = col.split('<span class="num">')[2].split('</span>')[0]
        var c2_y = col.split('<span class="before">')[2].split(')')[0] + ")"
        var c3 = col.split('<span class="num">')[3].split('</span>')[0]
        var c3_y = col.split('<span class="before">')[3].split(')')[0] + ")"
        var c4 = col.split('<span class="num">')[4].split('</span>')[0]
        var c4_y = col.split('<span class="before">')[4].split(')')[0] + ")"
        var c5 = body.split('검사중</span>')[1].split('<span class="num_rnum">')[1].split('<em class="mini">')[0].trim()
        var ct = body.split('환자 현황<span class="livedate">(')[1].split(',')[0]
        res.json({ type: "CoronaApi", status: "success", today:{update:ct, confirmation:c1, cured:c2, isolation:c3, dead:c4, suspicion:c5}, yesterday:{confirmation:c1_y, cured:c2_y, isolation:c3_y, dead:c4_y}});
    });

});
app.listen(30000, function(){
});