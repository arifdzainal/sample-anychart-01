if(!_.cartesian){_.cartesian=1;(function($){var eJ=function(a,b,c){var d=["whiskerWidth","hoverWhiskerWidth","selectWhiskerWidth"];if(2==c){var e=a.Oa;var g="selected"}else 1==c?(e=a.Ja,g="hovered"):(e=a.ma,g="normal");g=b.get(g);b=$.Fn($.n(g)?g[d[0]]:void 0,b.get(d[c]),e.I(d[0]));null!=b||(b=a.ma.I(d[0]));return $.P(b,a.Yr)},fJ=function(a){$.Hx.call(this,a)},gJ=function(){$.Ey.call(this);this.Jd="cartesian"},hJ=function(){var a=new gJ;a.ia(!0,$.kl("cartesian"));return a},iJ=function(a){var b=new gJ;b.ja.defaultSeriesType="area";b.Jd="area";
b.ia(!0,$.kl("area"));for(var c=0,d=arguments.length;c<d;c++)b.area(arguments[c]);return b},jJ=function(a){var b=new gJ;b.ja.defaultSeriesType="bar";b.Jd="bar";b.ia(!0,$.kl("bar"));for(var c=0,d=arguments.length;c<d;c++)b.bar(arguments[c]);return b},kJ=function(a){var b=new gJ;b.ja.defaultSeriesType="box";b.Jd="box";b.ia(!0,$.kl("box"));for(var c=0,d=arguments.length;c<d;c++)b.box(arguments[c]);return b},lJ=function(a){var b=new gJ;b.ja.defaultSeriesType="column";b.Jd="column";b.ia(!0,$.kl("column"));
for(var c=0,d=arguments.length;c<d;c++)b.column(arguments[c]);return b},mJ=function(a){var b=new gJ;b.ja.defaultSeriesType="hilo";b.Jd="hilo";b.ia(!0,$.kl("column"));for(var c=0,d=arguments.length;c<d;c++)b.hilo(arguments[c]);return b},nJ=function(a){var b=new gJ;b.ja.defaultSeriesType="candlestick";b.Jd="financial";b.ia(!0,$.kl("financial"));for(var c=0,d=arguments.length;c<d;c++)b.candlestick(arguments[c]);return b},oJ=function(a){var b=new gJ;b.ja.defaultSeriesType="line";b.Jd="line";b.ia(!0,$.kl("line"));
for(var c=0,d=arguments.length;c<d;c++)b.line(arguments[c]);return b},pJ=function(a){var b=new gJ;b.ja.defaultSeriesType="area";b.Jd="vertical-area";b.ia(!0,$.kl("verticalArea"));for(var c=0,d=arguments.length;c<d;c++)b.area(arguments[c]);return b},qJ=function(a){var b=new gJ;b.ja.defaultSeriesType="line";b.Jd="vertical-line";b.ia(!0,$.kl("verticalLine"));for(var c=0,d=arguments.length;c<d;c++)b.line(arguments[c]);return b};$.xx.prototype.FB=$.ca(15,function(){return this.sf.length});
$.xx.prototype.DB=$.ca(14,function(){return this.b.length});$.rJ={name:"median",Mc:"path",dd:null,jd:"medianStroke",Zc:!0,Kc:!1,zIndex:2E-6};$.sJ={name:"stem",Mc:"path",dd:null,jd:"stemStroke",Zc:!0,Kc:!1,zIndex:2E-6};$.tJ={name:"whisker",Mc:"path",dd:null,jd:"whiskerStroke",Zc:!0,Kc:!1,zIndex:2E-6};$.I(fJ,$.Hx);$.uC[3]=fJ;$.f=fJ.prototype;$.f.type=3;$.f.flags=263936;$.f.Gg={path:"path",hatchFill:"path",median:"path",stem:"path",whisker:"path"};$.f.Po=["lowest","q1","median","q3","highest"];
$.f.Sf=function(a,b){var c=this.Sc.Qc(b),d=a.o("x"),e=a.o("lowest"),g=a.o("q1"),h=a.o("median"),k=a.o("q3"),l=a.o("highest"),m=eJ(this.ca,a,b)/2,p=this.j/2,q=c.path;$.Fx(q,this.ua,d-p,g);$.Gx(q,this.ua,d+p,g,d+p,k,d-p,k);q.close();q=c.hatchFill;$.Fx(q,this.ua,d-p,g);$.Gx(q,this.ua,d+p,g,d+p,k,d-p,k);q.close();q=c.median;$.Fx(q,this.ua,d-p,h);$.Gx(q,this.ua,d+p,h);q=c.stem;$.Fx(q,this.ua,d,e);$.Gx(q,this.ua,d,g);$.Fx(q,this.ua,d,k);$.Gx(q,this.ua,d,l);q=c.whisker;$.Fx(q,this.ua,d-m,e);$.Gx(q,this.ua,
d+m,e);$.Fx(q,this.ua,d-m,l);$.Gx(q,this.ua,d+m,l)};$.f.QC=function(a,b){var c=a.o("shapes");if(c){var d=a.o("x"),e=a.o("lowest"),g=a.o("highest"),h=eJ(this.ca,a,b)/2;c=c.whisker;c.clear();$.Fx(c,this.ua,d-h,e);$.Gx(c,this.ua,d+h,e);$.Fx(c,this.ua,d-h,g);$.Gx(c,this.ua,d+h,g)}};$.I(gJ,$.Ey);var uJ={},vJ=$.jy|7864320;uJ.area={xb:1,Eb:1,Fb:[$.SC,$.TC,$.UC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"zero"};uJ.bar={xb:6,Eb:2,Fb:[$.gD,$.UC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"zero"};uJ.box={xb:3,Eb:2,Fb:[$.gD,$.UC,$.rJ,$.sJ,$.tJ],Cb:null,yb:null,wb:vJ,ub:"highest",tb:"lowest"};uJ.bubble={xb:4,Eb:2,Fb:[$.VC,$.WC,$.XC,$.YC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"value"};uJ.candlestick={xb:5,Eb:2,Fb:[$.ZC,$.aD,$.bD,$.dD],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};
uJ.column={xb:6,Eb:2,Fb:[$.gD,$.UC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"zero"};uJ["jump-line"]={xb:19,Eb:2,Fb:[$.TC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"value"};uJ.line={xb:8,Eb:1,Fb:[$.TC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"value"};uJ.marker={xb:9,Eb:2,Fb:[$.gD,$.UC],Cb:null,yb:null,wb:$.jy|3670016,ub:"value",tb:"value"};uJ.ohlc={xb:10,Eb:2,Fb:[$.$C,$.cD],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};uJ["range-area"]={xb:11,Eb:1,Fb:[$.SC,$.fD,$.eD,$.UC],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};
uJ["range-bar"]={xb:12,Eb:2,Fb:[$.gD,$.UC],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};uJ["range-column"]={xb:12,Eb:2,Fb:[$.gD,$.UC],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};uJ["range-spline-area"]={xb:13,Eb:1,Fb:[$.SC,$.eD,$.fD,$.UC],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};uJ["range-step-area"]={xb:14,Eb:1,Fb:[$.SC,$.eD,$.fD,$.UC],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};uJ.spline={xb:15,Eb:1,Fb:[$.TC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"value"};
uJ["spline-area"]={xb:16,Eb:1,Fb:[$.SC,$.TC,$.UC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"zero"};uJ["step-area"]={xb:17,Eb:1,Fb:[$.SC,$.TC,$.UC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"zero"};uJ["step-line"]={xb:18,Eb:1,Fb:[$.TC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"value"};uJ.stick={xb:20,Eb:2,Fb:[$.TC],Cb:null,yb:null,wb:vJ,ub:"value",tb:"zero"};uJ.hilo={xb:31,Eb:2,Fb:[$.TC],Cb:null,yb:null,wb:vJ,ub:"high",tb:"low"};gJ.prototype.Mi=uJ;$.Hw(gJ,gJ.prototype.Mi);
gJ.prototype.dL=function(a){var b=a.enabled(),c=a.Wl||[],d=!0;(a=a.data()?a.data().Nb():0)&&a!=c.length||(d=!1);return b&&d};$.so.cartesian=hJ;var wJ=gJ.prototype;$.H("anychart.cartesian",hJ);wJ.xScale=wJ.Wa;wJ.yScale=wJ.bb;wJ.crosshair=wJ.cg;wJ.maxBubbleSize=wJ.cC;wJ.minBubbleSize=wJ.fC;wJ.xGrid=wJ.Lo;wJ.yGrid=wJ.No;wJ.xMinorGrid=wJ.cq;wJ.yMinorGrid=wJ.fq;wJ.xAxis=wJ.gi;wJ.getXAxesCount=wJ.DB;wJ.yAxis=wJ.Gj;wJ.getYAxesCount=wJ.FB;wJ.getSeries=wJ.We;wJ.lineMarker=wJ.uo;wJ.rangeMarker=wJ.Co;
wJ.textMarker=wJ.Ko;wJ.palette=wJ.ec;wJ.markerPalette=wJ.kf;wJ.hatchFillPalette=wJ.Vd;wJ.getType=wJ.Ta;wJ.addSeries=wJ.Kk;wJ.getSeriesAt=wJ.Vh;wJ.getSeriesCount=wJ.am;wJ.removeSeries=wJ.Do;wJ.removeSeriesAt=wJ.An;wJ.removeAllSeries=wJ.Mp;wJ.getPlotBounds=wJ.Pf;wJ.xZoom=wJ.ql;wJ.xScroller=wJ.Mo;wJ.getStat=wJ.yg;wJ.annotations=wJ.Jj;wJ.getXScales=wJ.Jw;wJ.getYScales=wJ.Kw;$.so.area=iJ;$.so.bar=jJ;$.so.box=kJ;$.so.column=lJ;$.so.hilo=mJ;$.so.financial=nJ;$.so.line=oJ;$.so["vertical-area"]=pJ;$.so["vertical-line"]=qJ;$.H("anychart.area",iJ);$.H("anychart.bar",jJ);$.H("anychart.vertical",jJ);$.H("anychart.box",kJ);$.H("anychart.column",lJ);$.H("anychart.hilo",mJ);$.H("anychart.financial",nJ);$.H("anychart.line",oJ);$.H("anychart.verticalArea",pJ);$.H("anychart.verticalLine",qJ);}).call(this,$)}
