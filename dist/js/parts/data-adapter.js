if(!_.data_adapter){_.data_adapter=1;(function($){var hR=function(a){try{return a.b?a.b.responseText:""}catch(b){return""}},jR=function(a,b,c,d,e,g,h,k,l){var m=iR("fromXml",c,l);m&&(b=(0,$.ra)(jR.b,void 0,b,c,l,m),$.JQ(a,b,d,e,g,h,k))},iR=function(a,b,c){var d=$.mk.anychart;if(!d)return b&&b.call(c,500,"AnyChart in not present on the page."),null;d=d[a];return d?d:(b&&b.call(c,500,$.ic("anychart.%s is not available.",a)),null)},Afa=function(a){return[$.SQ(a)||null]},Bfa=function(a){try{var b=a.b?a.b.responseXML:null}catch(c){b=null}return[$.mk.anychart.utils.xml2json(b).data]},
Cfa=function(a){a=$.SQ(a);for(var b=a.feed.entry,c={title:a.feed.title.$t,rows:[]},d=0,e=b.length;d<e;d++){var g=b[d],h=g.gs$cell.$t,k=g.gs$cell.col-1;g=g.gs$cell.row-1;c.rows[g]||(c.rows[g]=[]);c.rows[g][k]=h}c.header=c.rows.shift();return[c,a]},Dfa=function(a){return[hR(a)]},kR=function(a,b,c,d,e){e=e.target;if($.PQ(e)){try{var g=a(e)}catch(h){c&&c.call(d,500,h)}b.apply(d,g)}else c&&c.call(d,e.j,$.TQ(e))};$.mk.anychart.exports||$.jk(4,null,["Exporting"]);
jR.b=function(a,b,c,d,e){e=e.target;if($.PQ(e)){try{var g=d(hR(e))}catch(h){b&&b.call(c,500,h)}a?$.y(a)?(g.container(a),g.draw()):$.G(a)&&a.call(c,g):g.container()&&g.draw()}else b&&b.call(c,e.j,$.TQ(e))};$.H("anychart.fromXmlFile",jR);$.H("anychart.fromJsonFile",function(a,b,c,d,e,g,h,k,l){var m=iR("fromJson",c,l);m&&(b=(0,$.ra)(jR.b,void 0,b,c,l,m),$.JQ(a,b,d,e,g,h,k))});
$.H("anychart.data.parseHtmlTable",function(a,b,c,d,e,g){var h=window.document.querySelector(a||"table");a=null;var k;if(h){d=d||"tr:first-child th";c=c||"td, th";b=b||"tr";a={};(e=h.querySelector(e||"caption"))&&(k=g?g.call(void 0,e):e.innerText);k&&(a.title=k);var l=h.querySelectorAll(d),m=[];e=null;d=0;for(k=l.length;d<k;d++){var p=l[d];p&&!e&&(e=$.df(p));m.push(g?g.call(void 0,p):p.innerText)}m.length&&(a.header=m);if((b=h.querySelectorAll(b))&&b.length){h=[];d=0;for(k=b.length;d<k;d++)if(m=b[d],
m!=e){l=[];if((m=m.querySelectorAll(c))&&m.length){p=0;for(var q=m.length;p<q;p++){var r=m[p];g?l.push(g.call(void 0,r)):l.push(r.innerText)}}l.length&&h.push(l)}a.rows=h}}return a});$.H("anychart.data.loadJsonFile",function(a,b,c,d,e,g,h,k,l){b=(0,$.ra)(kR,void 0,Afa,b,c,l);$.JQ(a,b,d,e,g,h,k)});$.H("anychart.data.loadXmlFile",function(a,b,c,d,e,g,h,k,l){b=(0,$.ra)(kR,void 0,Bfa,b,c,l);$.JQ(a,b,d,e,g,h,k)});
$.H("anychart.data.loadCsvFile",function(a,b,c,d,e,g,h,k,l){b=(0,$.ra)(kR,void 0,Dfa,b,c,l);$.JQ(a,b,d,e,g,h,k)});
$.H("anychart.data.loadGoogleSpreadsheet",function(a,b,c,d,e){b=(0,$.ra)(kR,void 0,Cfa,b,c,e);$.y(a)?(c=a,a="od6"):(c=a.key,a=$.n(a.sheet)?a.sheet:"od6");a=new $.aQ("https://spreadsheets.google.com/feeds/cells/"+c+"/"+a+"/public/values");a.j.set("alt","json");c=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,$.sm)()).toString(36);a.j.set("zx",c);$.JQ(a.toString(),b,"GET",null,null,d)});}).call(this,$)}
