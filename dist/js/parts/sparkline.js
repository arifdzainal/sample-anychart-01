if(!_.sparkline){_.sparkline=1;(function($){var Cfa=function(a,b){return $.cj(Bfa,a,b||"line")},SR=function(a){$.V(this);$.X.call(this);this.xa=a;this.ba(!1)},TR=function(a,b){$.lv.call(this);this.Va("sparkline");this.xF=this.JY;this.state=new $.$u(this);this.Ca=this.zc=this.bb=null;this.hj=[];this.kj=[];this.oj=[];this.qf=null;this.Nh={};this.uw=!0;this.Dn=new $.Av;this.Dn.oy($.En);this.Dn.size(10);this.Dn.anchor("center");this.Dn.offsetX(0);this.Dn.offsetY(0);this.Dn.rotation(0);this.Dn.ob(this);this.Dn.qh=Dfa;this.km=new $.Ks;this.km.positionFormatter($.En);
this.km.format($.En);this.km.background(null);this.km.rotation(0);this.km.width(null);this.km.height(null);this.km.fontSize(11);this.km.minFontSize(8);this.km.maxFontSize(72);this.km.ob(this);this.km.qh=Efa;this.km.Ud(!0);this.data(a||null,b);$.ps(this,this,this.Uf,this.Ag,null,this.Uf,null,this.Gi);$.T(this.ya,[["seriesType",8192,1,0,function(){this.Ca&&(this.Ca.Yc(),this.Ca=null)}],["pointWidth",0,0,0,function(){this.Ca&&this.Ca.po()&&this.Ca.o(80,1)}],["connectMissingPoints",0,0,0,function(){this.Ca&&
!this.Ca.po()&&this.Ca.o(80,1)}]])},UR=function(a,b){var c=a.aa().ka();if($.G(b)){var d=$.Ob("diagonal-brick");c={index:c,sourceHatchFill:d,iterator:a.aa()};c=$.Ob(b.call(c))}else c=$.da(b)?b?$.Ob("diagonal-brick"):null:$.Ob(b);return c},Ffa=function(a){var b=a.aa(),c=b.get("value"),d=b.ka(),e;$.n(b.get("hatchFill"))?e=b.get("hatchFill"):e=d==b.Nb()-1&&$.n(a.Gz())?a.Gz():!d&&$.n(a.dz())?a.dz():c==a.eg("max")&&$.n(a.Mz())?a.Mz():c==a.eg("min")&&$.n(a.Pz())?a.Pz():0>c&&$.n(a.Sz())?a.Sz():a.yc();return UR(a,
e)},VR=function(a,b){for(var c={},d=a.length;d--;){var e=a[d];if(e){var f=!$.L(e,$.X);if(f?e.enabled:e.enabled())for(var h=0,k=b.length;h<k;h++){var l=b[h],m=f?e[l]:e[l]();$.n(m)&&(c[l]=$.L(m,$.Hp)?m.F():m)}}}return c},WR=function(a,b){for(var c={},d=a.length;d--;){var e=a[d];if(e)for(var f=!$.L(e,$.X),h=0,k=b.length;h<k;h++){var l=b[h],m=f?e[l]:e[l]();$.n(m)&&(c[l]=$.L(m,$.Hp)?m.F():m)}}return c},XR=function(a){SR.call(this,a);this.path=$.Vi();this.path.zIndex(1);this.b=null;this.f=[this.path]},
YR=function(a){XR.call(this,a);this.g=$.Vi();this.g.zIndex(1.1);this.f.push(this.g)},ZR=function(a){SR.call(this,a)},$R=function(a){XR.call(this,a)},aS=function(a){SR.call(this,a)},bS=function(a,b){var c=new TR(a,b);c.ea(!0,$.Rk("sparkline"));return c},Bfa={LA:"area",ED:"column",ps:"line",Xka:"win-loss"};$.I(SR,$.ts);var cS={};$.g=SR.prototype;$.g.ga=null;$.g.ra=$.ts.prototype.ra|20;$.g.oa=$.ts.prototype.oa|976;$.g.Ww=!1;$.g.Qh=0;$.g.aa=function(){return this.xa.aa()};$.g.uc=function(){return this.xa.uc()};
$.g.nc=function(){return this.xa};$.g.yj=function(){return!1};$.g.XA=function(){if(!this.enabled())return null;var a=this.xa.Za(),b=this.xa.Qa(),c=this.aa(),d=!1,e=c.get("x");c=c.get("value");if(!$.n(e)||!$.n(c))return null;a.xj(c)&&(c=window.NaN);b=b.xj(e)?window.NaN:this.te(b.transform(e,.5),!0);a=this.te(a.transform(c,.5),!1);if((0,window.isNaN)(b)||(0,window.isNaN)(a))d=!0;return d?null:[b,a]};$.g.po=function(){return!1};
$.g.Bm=function(){this.enabled()&&(this.Ww=this.Ww?this.fE():this.zI())&&this.ag();this.enabled()&&this.Ww&&this.$o()};$.g.remove=function(){this.xa.Eb().O(null);this.va&&this.va.remove();this.xa.labels().O(null);SR.B.remove.call(this)};$.g.hd=function(){this.Ww=!1;this.ga=this.qb();this.va||(this.va=$.Ti(),$.M(this,this.va));this.Dc();var a=this.xa.km;$.V(a);a.clear();a.O(this.O());a.ja(this.qb());a=this.xa.Dn;$.V(a);var b=this.Xu();a.vH(b);b=this.ax();a.wH(b);a.clear();a.O(this.O());a.ja(this.ga)};
$.g.cl=function(){var a=this.xa.Dn;a.Y();var b=$.da(this.xa.clip())?this.xa.clip()?this.xa.qb():"none":this.xa.clip();var c=a.be();c&&c.clip(b);a.ba(!1);a.I(4294967295);a=this.xa.km;a.Y();(c=a.be())&&c.clip(b);a.ba(!1);a&&a.I(4294967295);this.J(2)?this.I(0):this.I(4294967295)};
$.g.Hc=function(a){if(!this.Qd||a)this.Qd=new $.xu;a=this.aa();var b={chart:{value:this.nc(),type:""},series:{value:this,type:""},index:{value:a.ka(),type:"number"},value:{value:a.get("value"),type:"number"},x:{value:a.get("x"),type:"string"},seriesName:{value:"Series "+a.ka(),type:"string"}};this.Qd.mg(a).Bi([this,this.nc()]).Pl({"%XValue":"x"});return $.it(this.Qd,b)};$.g.Qj=function(){return this.Hc()};
$.g.Yi=function(a){var b=this.aa(),c=b.j("shape");return c?(b=c.hb(),a=$.gj(a),{value:$.hn(b,a)}):{value:{x:b.j("x"),y:b.j("value")}}};$.g.zI=function(){return this.fE()};$.g.te=function(a,b){if(b){var c=this.ga.left;var d=this.ga.width}else c=this.ga.Na(),d=-this.ga.height;return c+a*d};
$.g.ag=function(){var a=this.xa;var b=a.aa(),c=b.get("value"),d=b.ka();var e=b.get("label");if(d==b.Nb()-1){var f=a.wG();var h=a.Nh.lastLabels}else d||(f=a.mF(),h=a.Nh.firstLabels);if(c==a.eg("max")){var k=a.Bg();var l=a.Nh.maxLabels}else c==a.eg("min")&&(k=a.Cg(),l=a.Nh.minLabels);if(0>c){var m=a.aH();var p=a.Nh.negativeLabels}b=a.labels();h=WR([h,l,p,a.Nh.labels],dS);e=VR([e,f,k,m,b],dS);e=WR([e,h],dS);f=a.km.Vd(d);k=null;e.enabled?(k=e.position||a.km.i("position"),k=a.Ca.Yi(k),m=a.Ca.Hc(),f?(f.Cf(m),
f.wc(k)):f=a.km.add(m,k,d),f.ei(),f.bd(e),k=f):f&&f.clear();(a=k)&&a.Y()};
$.g.$o=function(){var a=this.xa;var b=a.aa(),c=b.get("value"),d=b.ka();var e=b.get("marker");if(d==b.Nb()-1){var f=a.yG();var h=a.Nh.lastMarkers}else d||(f=a.oF(),h=a.Nh.firstMarkers);if(c==a.eg("max")){var k=a.MG();var l=a.Nh.maxMarkers}else c==a.eg("min")&&(k=a.SG(),l=a.Nh.minMarkers);if(0>c){var m=a.cH();var p=a.Nh.negativeMarkers}b=a.Eb();c=a.Nh.markers;var q=a.Wu(!0);q={fill:q,stroke:$.tk(q)};h=WR([h,l,p,c,q],eS);e=VR([e,f,k,m,b],eS);e=WR([e,h],eS);f=a.Dn.rq(d);k=null;e.enabled?(k=e.position||
a.Dn.position(),k=a.Ca.Yi(k),f?f.wc(k):f=a.Dn.add(k,d),f.ei(),$.Gv(f,a.Dn),f.bd(e),k=f):f&&f.clear();(a=k)&&a.Y()};$.g.Xu=function(){return $.Kb(this.xa.Nl(this.xa.fill()))};$.g.ax=function(){return $.tk(this.Xu())};$.g.Br=function(){this.xa.Dn.type("circle").size(1.8).position("center");return{labels:{background:{enabled:!1},position:"center",anchor:"center-bottom"},color:"#4682B4"}};$.I(TR,$.lv);TR.prototype.Ra=function(){return"sparkline"};TR.prototype.oa=$.lv.prototype.oa|28672;var Dfa=40,Efa=40;$.g=TR.prototype;$.g.Nf=function(a){a=TR.B.Nf.call(this,a);var b=this.Ca&&this.Ca.ga||$.Rl(0,0,0,0),c=a.clientX;var d=b.left+$.zi(this.O().Da()).x;b=(c-d)/b.width;b=this.Qa().Xc(b);b=this.data().find("x",b);0>b&&(b=window.NaN);a.pointIndex=b;return a};$.g.xd=function(){};
$.g.Dr=function(a){var b=this.Ca&&this.Ca.ga||$.Rl(0,0,0,0),c=a.clientX;a=a.clientY;var d=$.zi(this.O().Da());c-=d.x;a-=d.y;d=b.left;var e=b.top,f=b.width;b=b.height;if(c<d||c>d+f||a<e||a>e+b)return null;b=[];d=(c-d)/f;d=this.Qa().Xc(d);d=$.bq(this.data(),d,$.L(this.Qa(),$.Or));d=d.length?d[0]:window.NaN;e=this.aa();e.select(d)&&(f=e.j("x"),e=e.j("value"),c=$.Ol(f,e,c,a),(0,window.isNaN)(f)||(0,window.isNaN)(e)||b.push({U:this,ed:[d],Rm:d,Yd:{index:d,Jf:c}}));return b};$.g.Mi=function(){return"none"};
$.g.Hc=function(){this.Qd||(this.Qd=new $.xu);var a=this.aa();this.Qd.mg(a).Bi([this]);a={x:{value:a.get("x"),type:"string"},value:{value:a.get("value"),type:"number"},index:{value:a.ka(),type:"number"},chart:{value:this,type:""}};$.it(this.Qd,a);return this.Qd};$.g.Qj=function(){return this.Hc()};$.g.Wt=function(){return!0};$.g.Rg=function(a){(a=this.gg(a))&&this.dispatchEvent(a)};
$.g.gg=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.R(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().aa();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,pie:this,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a}};$.g.fi=function(){return this};$.g.bi=function(){return this};$.g.Je=function(){return[this]};$.g.Jd=$.ha;$.g.il=function(a){return $.n(a)?(a=$.dj(a),a!=this.ai&&(this.ai=a),this):this.ai};$.g.vd=function(){return null};$.g.pg=function(){return!1};$.g.yj=function(){return!1};$.g.pk=$.ha;$.g.Mj=$.ha;$.g.Fl=$.ha;$.g.hp=$.ha;
$.g.tr=function(a){return $.n(a)?(this.vk=a,this):this.vk||{}};var eS="enabled position anchor offsetX offsetY type size fill stroke".split(" "),dS="enabled background padding position anchor offsetX offsetY rotation width height fontSize fontFamily fontColor fontOpacity fontDecoration fontStyle fontVariant fontWeight letterSpacing textDirection lineHeight textIndent vAlign hAlign wordWrap wordBreak textOverflow selectable disablePointerEvents useHtml".split(" ");$.g=TR.prototype;
$.g.Qa=function(a){if($.n(a)){if(a=$.Cr(this.bb,a,null,15))this.bb=a,this.bb.ba(!1),this.o(4096,1);return this}this.bb||(this.bb=$.Br());return this.bb};$.g.Za=function(a){if($.n(a)){if(a=$.Cr(this.zc,a,null,15))this.zc=a,this.zc.ba(!1),this.o(4096,1);return this}this.zc||(this.zc=$.yr());return this.zc};
$.g.Sm=function(a,b){var c=$.R(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.hj[c];e||(e=new $.xx,this.hj[c]=e,$.M(this,e),$.U(e,this.Cx,this),this.o(16384,1));return $.n(d)?(e.N(d),this):e};$.g.bn=function(a,b){var c=$.R(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.kj[c];e||(e=new $.Ax,this.kj[c]=e,$.M(this,e),$.U(e,this.Cx,this),this.o(16384,1));return $.n(d)?(e.N(d),this):e};
$.g.hn=function(a,b){var c=$.R(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.oj[c];e||(e=new $.Dx,this.oj[c]=e,$.M(this,e),$.U(e,this.Cx,this),this.o(16384,1));return $.n(d)?(e.N(d),this):e};$.g.Cx=function(){this.o(16384,1)};
$.g.data=function(a,b){return $.n(a)?(this.Of!==a&&(this.Of=a,$.$c(this.ze),$.L(a,$.$p)?this.Zm=this.ze=a.Dl():this.Zm=$.L(a,$.jq)?this.ze=a.me():(this.ze=new $.jq($.C(a)||$.z(a)?a:null,b)).me(),$.M(this,this.ze),this.pa=this.Zm,$.U(this.pa,this.Td,this),this.Ca&&this.Ca.o(16,21),this.o(256,1)),this):this.pa};$.g.dR=function(){var a=this.aa(),b=this.Za();a=a.get("value");return b.xj(a)?null:a};$.g.Td=function(a){$.W(a,16)&&(this.Ca&&this.Ca.o(16,21),this.o(256,1))};
$.g.aa=function(){return this.Ye||this.uc()};$.g.uc=function(){return this.Ye=this.data().aa()};$.g.uH=function(a){var b=0;$.W(a,32768)&&(b|=256);$.W(a,2048)&&(b=32);$.W(a,1)&&(b=8192);$.W(a,16)&&(b|=8448,this.nv());$.W(a,4)&&(b|=4096);this.o(b,1)};var fS=function(){var a={};$.Po(a,0,"seriesType",Cfa);$.Po(a,0,"pointWidth",function(a){return $.bn(a,this.i("pointWidth"))});$.Po(a,0,"connectMissingPoints",$.$o);return a}();$.cp(TR,fS);$.g=TR.prototype;
$.g.clip=function(a){return $.n(a)?(null===a&&(a=!1),this.Rf!=a&&(this.Rf=a,this.Ca&&this.Ca.o(4,9)),this):this.Rf};$.g.Nl=function(a,b){if($.G(a)){var c=1<arguments.length?this.Nl.apply(this,$.Ha(arguments,1)):this.Nh.color;c={index:this.aa().ka(),sourceColor:c,iterator:this.aa()};c=a.call(c)}else c=a;return c};$.g.fill=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.G(a)?a:$.Kb.apply(null,arguments);k!=this.Fc&&(this.Fc=k,this.Ca&&this.Ca.o(16,1));return this}return this.Fc||this.Nh.fill};
$.g.Rz=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.G(a)?a:$.Kb.apply(null,arguments);k!=this.K_&&(this.K_=k,this.Ca&&this.Ca.o(16,1));return this}return this.K_||this.Nh.negativeFill};$.g.cz=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.G(a)?a:$.Kb.apply(null,arguments);k!=this.xY&&(this.xY=k,this.Ca&&this.Ca.o(16,1));return this}return this.xY||this.Nh.firstFill};
$.g.Fz=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.G(a)?a:$.Kb.apply(null,arguments);k!=this.f_&&(this.f_=k,this.Ca&&this.Ca.o(16,1));return this}return this.f_||this.Nh.lastFill};$.g.Lz=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.G(a)?a:$.Kb.apply(null,arguments);k!=this.t_&&(this.t_=k,this.Ca&&this.Ca.o(16,1));return this}return this.t_||this.Nh.maxFill};
$.g.Oz=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.G(a)?a:$.Kb.apply(null,arguments);k!=this.A_&&(this.A_=k,this.Ca&&this.Ca.o(16,1));return this}return this.A_||this.Nh.minFill};$.g.Wu=function(a){var b=this.aa(),c=b.get("value"),d=b.ka(),e;a&&$.n(b.get("fill"))?e=b.get("fill"):e=d==b.Nb()-1&&$.n(this.Fz())?this.Fz():!d&&$.n(this.cz())?this.cz():c==this.eg("max")&&$.n(this.Lz())?this.Lz():c==this.eg("min")&&$.n(this.Oz())?this.Oz():0>c&&$.n(this.Rz())?this.Rz():this.fill();a=this.Nl(e);return $.Kb(a)};
$.g.stroke=function(a,b,c,d,e){if($.n(a)){var f=$.G(a)?a:$.Mb.apply(null,arguments);f!=this.lc&&(this.lc=f,this.Ca&&this.Ca.o(16,1));return this}return this.lc||this.Nh.stroke};$.g.pq=function(){return $.Mb(this.Nl(this.stroke()))};$.g.yc=function(a,b,c,d){if($.n(a)){var e=$.G(a)||$.da(a)?a:$.Ob.apply(null,arguments);e!=this.Mm&&(this.Mm=e,this.Ca&&this.Ca.o(64,1));return this}return $.n(this.Mm)?this.Mm:this.Nh.hatchFill};
$.g.Sz=function(a,b,c,d){if($.n(a)){var e=$.G(a)||$.da(a)?a:$.Ob.apply(null,arguments);e!=this.fT&&(this.fT=e,this.Ca&&this.Ca.o(64,1));return this}return $.n(this.fT)?this.fT:this.Nh.negativeHatchFill};$.g.dz=function(a,b,c,d){if($.n(a)){var e=$.G(a)||$.da(a)?a:$.Ob.apply(null,arguments);e!=this.yY&&(this.yY=e,this.Ca&&this.Ca.o(64,1));return this}return this.yY||this.Nh.firstHatchFill};
$.g.Gz=function(a,b,c,d){if($.n(a)){var e=$.G(a)||$.da(a)?a:$.Ob.apply(null,arguments);e!=this.g_&&(this.g_=e,this.Ca&&this.Ca.o(64,1));return this}return this.g_||this.Nh.lastHatchFill};$.g.Mz=function(a,b,c,d){if($.n(a)){var e=$.G(a)||$.da(a)?a:$.Ob.apply(null,arguments);e!=this.u_&&(this.u_=e,this.Ca&&this.Ca.o(64,1));return this}return this.u_||this.Nh.maxHatchFill};
$.g.Pz=function(a,b,c,d){if($.n(a)){var e=$.G(a)||$.da(a)?a:$.Ob.apply(null,arguments);e!=this.B_&&(this.B_=e,this.Ca&&this.Ca.o(64,1));return this}return this.B_||this.Nh.minHatchFill};$.g.Eb=function(a){this.sd||(this.sd=new $.Ev,$.M(this,this.sd),$.U(this.sd,this.so,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.sd.N(a),this):this.sd};
$.g.cH=function(a){this.dH||(this.dH=new $.Ev,$.M(this,this.dH),$.U(this.dH,this.so,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.dH.N(a),this):this.dH};$.g.oF=function(a){this.pF||(this.pF=new $.Ev,$.M(this,this.pF),$.U(this.pF,this.so,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.pF.N(a),this):this.pF};
$.g.yG=function(a){this.zG||(this.zG=new $.Ev,$.M(this,this.zG),$.U(this.zG,this.so,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.zG.N(a),this):this.zG};$.g.MG=function(a){this.NG||(this.NG=new $.Ev,$.M(this,this.NG),$.U(this.NG,this.so,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.NG.N(a),this):this.NG};
$.g.SG=function(a){this.TG||(this.TG=new $.Ev,$.M(this,this.TG),$.U(this.TG,this.so,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.TG.N(a),this):this.TG};$.g.so=function(a){$.W(a,1)&&this.Ca&&this.Ca.o(128,1)};$.g.labels=function(a){this.Ka||(this.Ka=new $.Ps,$.M(this,this.Ka),$.U(this.Ka,this.ce,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.Ka.N(a),this):this.Ka};
$.g.aH=function(a){this.bH||(this.bH=new $.Ps,$.M(this,this.bH),$.U(this.bH,this.ce,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.bH.N(a),this):this.bH};$.g.mF=function(a){this.nF||(this.nF=new $.Ps,$.M(this,this.nF),$.U(this.nF,this.ce,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.nF.N(a),this):this.nF};
$.g.wG=function(a){this.xG||(this.xG=new $.Ps,$.M(this,this.xG),$.U(this.xG,this.ce,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.xG.N(a),this):this.xG};$.g.Bg=function(a){this.Fn||(this.Fn=new $.Ps,$.M(this,this.Fn),$.U(this.Fn,this.ce,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.Fn.N(a),this):this.Fn};
$.g.Cg=function(a){this.Gn||(this.Gn=new $.Ps,$.M(this,this.Gn),$.U(this.Gn,this.ce,this));return $.n(a)?(!$.E(a)||"enabled"in a||(a.enabled=!0),this.Gn.N(a),this):this.Gn};$.g.ce=function(a){$.W(a,1)&&this.Ca&&this.Ca.o(256,1)};
$.g.lb=function(){var a;if(this.J(4096)){this.pH();var b=this.Qa(),c=this.Za();b.uf()&&b.Wf();c.uf()&&c.Wf();for(a=this.uc();a.advance();){var d=a.get("x");var e=a.get("value");$.n(d)&&b.Mc(d);$.n(e)&&c.Mc(e)}a=!1;b.uf()&&(a|=b.cg());c.uf()&&(a|=c.cg());a&&this.nv();b=-window.Infinity;c=window.Infinity;var f=d=0;for(a=this.uc();a.advance();){if(e=this.dR())e=$.R(e),(0,window.isNaN)(e)||(b=Math.max(b,e),c=Math.min(c,e),d+=e);f++}a=d/f;this.za("max",b);this.za("min",c);this.za("sum",d);this.za("average",
a);this.za("pointsCount",f);this.I(4096)}};
$.g.Zi=function(a){if(this.J(8192)&&!this.Ca){var b=this.i("seriesType"),c=cS[b];c?(c=new c(this),$.M(this,c),this.Ca=c,c.qh=30,$.U(c,this.uH,this),this.Nh=this.tr()[$.Tk(b)]||this.Ca.Br(),this.o(12288,1)):($.Pj(4,null,[b+" series"]),c=null);this.Ca=c}this.lb();if(!this.Mf()){$.Vp(this.Ca);this.J(4)&&(this.qf=a.clone().round(),this.Ca.po()&&(c=this.Ca,a=this.qf,b=c.uc().Nb(),c=c.HF(a),b=(a.width-b*c)%(b-1),0!=a.height%2&&--a.height,0!=b&&(a.left+=Math.floor(b/2),a.width-=b)),this.nv(),this.o(24576));
if(this.J(16384)){a=$.Ea(this.hj,this.kj,this.oj);b=0;for(c=a.length;b<c;b++){var d=a[b];d&&($.V(d),d.Db()?d.scale(this.Za()):d.scale(this.Qa()),d.ja(this.qf),d.O(this.Ua),d.Y(),d.ba(!1))}this.I(16384)}if(this.J(8192)){if(a=this.Ca){a.O(this.Ua);a.ja(this.qf);this.Ca.hd();for(a=this.uc();a.advance();)this.Ca.Bm();this.Ca.cl();this.Eb().I(4294967295);this.SG().I(4294967295);this.MG().I(4294967295);this.cH().I(4294967295);this.oF().I(4294967295);this.yG().I(4294967295);this.labels().I(4294967295);this.Cg().I(4294967295);
this.Bg().I(4294967295);this.aH().I(4294967295);this.mF().I(4294967295);this.wG().I(4294967295)}this.I(8192)}$.Xp(this.Ca)}};$.g.nv=function(){this.Ca&&this.Ca.o(80)};$.g.QB=function(){return["x"]};$.g.RB=function(a){return a.get("x")};$.g.PB=function(a){a=a.get("name");return $.z(a)?a:null};$.g.gj=function(){return!this.aa().Nb()||!(this.Ca&&this.Ca.enabled())};
$.g.$=function(a,b){TR.B.$.call(this,a,b);"defaultSeriesSettings"in a&&this.tr(a.defaultSeriesSettings);var c,d=a.lineAxesMarkers,e=a.rangeAxesMarkers,f=a.textAxesMarkers,h=a.scales;this.data(a.data);$.fp(this,fS,a);this.clip(a.clip);this.data(a.data);var k=this.Ra(),l={};if($.C(h))for(c=0;c<h.length;c++){var m=h[c];$.z(m)&&(m={type:m});m=$.Uk(m,c,k);var p=$.wr(m.type,!1);p.N(m);l[c]=p}else if($.E(h))for(c in h)h.hasOwnProperty(c)&&(m=h[c],$.z(m)&&(m={type:m}),m=$.Uk(m,c,k),p=$.wr(m.type,!1),p.N(m),
l[c]=p);m=a.xScale;$.B(m)?p=l[m]:$.z(m)?(p=$.wr(m,null))||(p=l[m]):$.E(m)?(p=$.wr(m.type,!0),p.N(m)):p=null;p&&this.Qa(p);m=a.yScale;$.B(m)?p=l[m]:$.z(m)?(p=$.wr(m,null))||(p=l[m]):$.E(m)?(p=$.wr(m.type,!1),p.N(m)):p=null;p&&this.Za(p);if($.C(d))for(c=0;c<d.length;c++)m=d[c],this.Sm(c,m),$.E(m)&&"scale"in m&&1<m.scale&&this.Sm(c).scale(l[m.scale]);if($.C(e))for(c=0;c<e.length;c++)m=e[c],this.bn(c,m),$.E(m)&&"scale"in m&&1<m.scale&&this.bn(c).scale(l[m.scale]);if($.C(f))for(c=0;c<f.length;c++)m=f[c],
this.hn(c,m),$.E(m)&&"scale"in m&&1<m.scale&&this.hn(c).scale(l[m.scale]);this.stroke(a.stroke);this.Fz(a.lastFill);this.cz(a.firstFill);this.Lz(a.maxFill);this.Oz(a.minFill);this.Rz(a.negativeFill);this.fill(a.fill);this.Gz(a.lastHatchFill);this.dz(a.firstHatchFill);this.Mz(a.maxHatchFill);this.Pz(a.minHatchFill);this.Sz(a.negativeHatchFill);this.yc(a.hatchFill);a.lastMarkers&&this.yG().ea(!!b,a.lastMarkers);a.firstMarkers&&this.oF().ea(!!b,a.firstMarkers);a.maxMarkers&&this.MG().ea(!!b,a.maxMarkers);
a.minMarkers&&this.SG().ea(!!b,a.minMarkers);a.negativeMarkers&&this.cH().ea(!!b,a.negativeMarkers);a.markers&&this.Eb().ea(!!b,a.markers);a.firstLabels&&this.mF().ea(!!b,a.firstLabels);a.lastLabels&&this.wG().ea(!!b,a.lastLabels);a.maxLabels&&this.Bg().ea(!!b,a.maxLabels);a.minLabels&&this.Cg().ea(!!b,a.minLabels);a.negativeLabels&&this.aH().ea(!!b,a.negativeLabels);a.labels&&this.labels().ea(!!b,a.labels)};
$.g.F=function(){var a=TR.B.F.call(this),b,c={},d=[],e;c[$.na(this.Qa())]=this.Qa().F();d.push(c[$.na(this.Qa())]);a.xScale=d.length-1;this.Qa()!=this.Za()&&(c[$.na(this.Za())]=this.Za().F(),d.push(c[$.na(this.Za())]));a.yScale=d.length-1;$.pp(this,fS,a);a.clip=$.L(this.Rf,$.K)?this.Rf.F():this.Rf;a.data=this.data().F();$.G(this.lastFill)&&($.G(this.Fz())?$.Rj(8,null,["Series last fill"]):$.n(this.Fz())&&(a.lastFill=$.uk(this.Fz())));$.G(this.lastHatchFill)&&($.G(this.Gz())?$.Rj(8,null,["Series last hatch fill"]):
$.n(this.Gz())&&(a.lastHatchFill=$.uk(this.Gz())));a.lastMarkers=this.yG().F();a.lastLabels=this.wG().F();$.G(this.firstFill)&&($.G(this.cz())?$.Rj(8,null,["Series first fill"]):$.n(this.cz())&&(a.firstFill=$.uk(this.cz())));$.G(this.firstHatchFill)&&($.G(this.dz())?$.Rj(8,null,["Series first hatch fill"]):$.n(this.dz())&&(a.firstHatchFill=$.uk(this.dz())));a.firstMarkers=this.oF().F();a.firstLabels=this.mF().F();$.G(this.maxFill)&&($.G(this.Lz())?$.Rj(8,null,["Series max fill"]):$.n(this.Lz())&&
(a.maxFill=$.uk(this.Lz())));$.G(this.maxHatchFill)&&($.G(this.Mz())?$.Rj(8,null,["Series max hatch fill"]):$.n(this.Mz())&&(a.maxHatchFill=$.uk(this.Mz())));a.maxMarkers=this.MG().F();a.maxLabels=this.Bg().F();$.G(this.minFill)&&($.G(this.Oz())?$.Rj(8,null,["Series min fill"]):$.n(this.Oz())&&(a.minFill=$.uk(this.Oz())));$.G(this.minHatchFill)&&($.G(this.Pz())?$.Rj(8,null,["Series min hatch fill"]):$.n(this.Pz())&&(a.minHatchFill=$.uk(this.Pz())));a.minMarkers=this.SG().F();a.minLabels=this.Cg().F();
$.G(this.negativeFill)&&($.G(this.Rz())?$.Rj(8,null,["Series negative fill"]):$.n(this.Rz())&&(a.negativeFill=$.uk(this.Rz())));$.G(this.negativeHatchFill)&&($.G(this.Sz())?$.Rj(8,null,["Series negative hatch fill"]):$.n(this.Sz())&&(a.negativeHatchFill=$.uk(this.Sz())));a.negativeMarkers=this.cH().F();a.negativeLabels=this.aH().F();$.G(this.fill)&&($.G(this.fill())?$.Rj(8,null,["Series fill"]):$.n(this.fill())&&(a.fill=$.uk(this.fill())));$.G(this.hatchFill)&&($.G(this.yc())?$.Rj(8,null,["Series hatch fill"]):
$.n(this.yc())&&(a.hatchFill=$.uk(this.yc())));a.markers=this.Eb().F();a.labels=this.labels().F();$.G(this.stroke)&&($.G(this.stroke())?$.Rj(8,null,["Series stroke"]):$.n(this.stroke())&&(a.stroke=$.uk(this.stroke())));var f=[];for(b=0;b<this.hj.length;b++)if(e=this.hj[b]){var h=e.F();if(e=e.scale()){var k=$.na(e);c[k]?h.scale=(0,$.wa)(d,c[k]):(c[k]=e.F(),d.push(c[k]),h.scale=d.length-1)}f.push(h)}f.length&&(a.lineAxesMarkers=f);f=[];for(b=0;b<this.kj.length;b++)if(e=this.kj[b]){h=e.F();if(e=e.scale())k=
$.na(e),c[k]?h.scale=(0,$.wa)(d,c[k]):(c[k]=e.F(),d.push(c[k]),h.scale=d.length-1);f.push(h)}f.length&&(a.rangeAxesMarkers=f);f=[];for(b=0;b<this.oj.length;b++)if(e=this.oj[b]){h=e.F();if(e=e.scale())k=$.na(e),c[k]?h.scale=(0,$.wa)(d,c[k]):(c[k]=e.F(),d.push(c[k]),h.scale=d.length-1);f.push(h)}f.length&&(a.textAxesMarkers=f);a.scales=d;return{chart:a}};$.po.sparkline=bS;var gS=TR.prototype;$.H("anychart.sparkline",bS);gS.xScale=gS.Qa;gS.yScale=gS.Za;gS.lineMarker=gS.Sm;gS.rangeMarker=gS.bn;
gS.textMarker=gS.hn;gS.data=gS.data;gS.clip=gS.clip;gS.lastFill=gS.Fz;gS.lastHatchFill=gS.Gz;gS.lastMarkers=gS.yG;gS.lastLabels=gS.wG;gS.firstFill=gS.cz;gS.firstHatchFill=gS.dz;gS.firstMarkers=gS.oF;gS.firstLabels=gS.mF;gS.maxFill=gS.Lz;gS.maxHatchFill=gS.Mz;gS.maxMarkers=gS.MG;gS.maxLabels=gS.Bg;gS.minFill=gS.Oz;gS.minHatchFill=gS.Pz;gS.minMarkers=gS.SG;gS.minLabels=gS.Cg;gS.negativeFill=gS.Rz;gS.negativeHatchFill=gS.Sz;gS.negativeMarkers=gS.cH;gS.negativeLabels=gS.aH;gS.fill=gS.fill;
gS.hatchFill=gS.yc;gS.markers=gS.Eb;gS.labels=gS.labels;gS.stroke=gS.stroke;gS.getType=gS.Ra;gS.noData=gS.Xm;$.I(XR,SR);$.g=XR.prototype;$.g.Bm=function(){if(this.enabled()){var a;if(a=this.Ww?this.fE():this.zI())this.$o(),this.ag();this.Ww=this.xa.i("connectMissingPoints")&&this.Ww||a}};
$.g.hd=function(){XR.B.hd.call(this);if(!this.Mf()&&this.enabled()){var a=this.xa.Za().transform(0);(0,window.isNaN)(a)&&(a=0);this.Qh=this.te($.Xa(a,0,1),!1);var b;a=this.f.length;this.J(8)&&(this.va.zIndex(this.zIndex()),this.I(8));this.J(4)&&(this.xa.clip()&&($.da(this.xa.clip())?b=this.ga:b=this.xa.clip(),this.va.clip(b)),this.I(4));if(this.J(16)){for(b=0;b<a;b++)this.f[b].clear();this.BW()}if(this.J(2)){b=this.O();this.va.parent(b);for(b=0;b<a;b++)this.f[b].parent(this.va);this.b&&this.b.parent(this.va);
this.I(2)}this.J(64)&&!this.b&&(this.b=$.Vi(),this.b.parent(this.va),this.b.zIndex(2),this.b.pd(!0))}};$.g.cl=function(){this.FO();this.wY();XR.B.cl.call(this)};$.g.Yi=function(){var a=this.aa();return{value:{x:a.j("x"),y:a.j("value")}}};$.g.FO=$.ha;$.g.wY=$.ha;$.g.BW=function(){this.path.stroke(this.xa.pq(),1);this.path.fill(null)};$.g.Br=function(){return XR.B.Br.call(this)};$.I(YR,XR);cS.area=YR;$.g=YR.prototype;$.g.hd=function(){YR.B.hd.call(this);this.u=window.NaN};$.g.BW=function(){var a=$.Kb(this.xa.Nl(this.xa.fill()));this.path.stroke(null);this.path.fill(a);this.g.stroke(this.xa.pq());this.g.fill(null)};$.g.wY=function(){this.J(64)&&this.b&&(this.b.Sd(this.path.F()),this.b&&(this.b.stroke(null),this.b.fill(UR(this.xa,this.xa.yc()))))};
$.g.zI=function(){var a=this.XA();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.FO();this.path.moveTo(b,this.Qh).lineTo(b,a);this.g.moveTo(b,a);this.u=b;this.aa().j("x",b).j("value",a)}return!0};$.g.fE=function(){var a=this.XA();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.path.lineTo(b,a);this.g.lineTo(b,a);this.u=b;this.aa().j("x",b).j("value",a)}return!0};$.g.FO=function(){(0,window.isNaN)(this.u)||this.path.lineTo(this.u,this.Qh).close()};
$.g.Br=function(){var a=YR.B.Br.call(this);a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.5};return a};$.I(ZR,SR);cS.column=ZR;$.g=ZR.prototype;$.g.Ua=null;$.g.et=null;$.g.po=function(){return!0};$.g.N0=function(){return $.Ri()};$.g.HF=function(a){a=a||this.ga;a=Math.floor((this.xa.Qa().jK()||1/this.aa().Nb())*a.width);a=Math.floor($.O(this.xa.i("pointWidth"),a));1>a&&(a=1);return a};
$.g.hd=function(){ZR.B.hd.call(this);var a=this.xa.Za().transform(0);(0,window.isNaN)(a)&&(a=0);this.Qh=this.te($.Xa(a,0,1),!1);!this.Mf()&&this.enabled()&&(this.Ua||(this.Ua=new $.rz(this.N0,$.ha),this.Ua.zIndex(1)),this.J(8)&&(this.va.zIndex(this.zIndex()),this.I(8)),this.J(4)&&(a=$.da(this.xa.clip())?this.xa.clip()?this.ga:"none":this.xa.clip(),this.va.clip(a),this.I(4)),this.J(16)&&this.Ua.clear(),this.J(64)&&(this.et||(this.et=new $.rz(this.N0,$.ha),this.et.parent(this.va),this.et.zIndex(2),
this.et.pd(!0)),this.et.clear()),this.J(2)&&(this.va.parent(this.O()),this.Ua.parent(this.va),this.et&&this.et.parent(this.va),this.I(2)))};
$.g.fE=function(){var a=this.XA();if(!a)return!1;if(this.J(16)){var b=a[0],c=a[1];c=c<this.Qh?Math.ceil(c):Math.floor(c);a=$.sz(this.Ua);var d=this.HF(),e=0==d%2?0:.5;this.aa().j("x",b).j("value",c).j("shape",a);var f=Math.min(this.Qh,c);c=Math.abs(this.Qh-c);a.Jp(Math.ceil(b+e-d/2)).Kp(f).Ip(d).Hp(c);b=this.aa().j("shape");$.n(b)&&(b.fill(this.xa.Wu(!0)),b.stroke(null))}this.J(64)&&(a=this.aa(),b=this.et?$.sz(this.et):null,a.j("hatchFillShape",b),a=a.j("shape"),$.n(a)&&b&&b.Sd(a.F()),b=this.aa().j("hatchFillShape"),
null!=b&&b.stroke(null).fill(Ffa(this.xa)));return!0};
$.g.Br=function(){var a=ZR.B.Br.call(this);a.markers||(a.markers={});a.markers.position="center-top";a.labels||(a.labels={});a.labels.position="center-top";a.labels.anchor="center-bottom";a.negativeMarkers||(a.negativeMarkers={});a.negativeMarkers.position="center-bottom";a.negativeLabels||(a.negativeLabels={});a.negativeLabels.position="center-bottom";a.negativeLabels.anchor="center-top";a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.7};a.negativeFill={color:"#ef6c00",
opacity:.7};return a};$.I($R,XR);cS.line=$R;$.g=$R.prototype;$.g.zI=function(){var a=this.XA();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.path.moveTo(b,a);this.aa().j("x",b).j("value",a)}return!0};$.g.fE=function(){var a=this.XA();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.path.lineTo(b,a);this.aa().j("x",b).j("value",a)}return!0};$.g.Xu=function(){return this.xa.pq()};$.g.ax=function(){return $.tk(this.xa.pq())};
$.g.Br=function(){var a=$R.B.Br.call(this);a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.5};return a};$.I(aS,ZR);cS["win-loss"]=aS;aS.prototype.hd=function(){aS.B.hd.call(this);this.Qh=Math.round(this.te(.5,!1))};aS.prototype.XA=function(){if(!this.enabled())return null;var a=this.xa.Za(),b=this.xa.Qa(),c=this.aa(),d=!1,e=c.get("x");c=c.get("value");c=0<c?a.yf()?0:1:0>c?a.yf()?1:0:.5;if(!$.n(e)||!$.n(c))return null;a.xj(c)&&(c=window.NaN);a=b.xj(e)?window.NaN:this.te(b.transform(e,.5),!0);b=this.te(c,!1);if((0,window.isNaN)(a)||(0,window.isNaN)(b))d=!0;return d?null:[a,b]};
aS.prototype.Br=function(){var a=aS.B.Br.call(this);a.markers||(a.markers={});a.markers.position="center-top";a.markers.anchor="center-top";a.labels||(a.labels={});a.labels.position="center-top";a.labels.anchor="center-top";a.negativeMarkers||(a.negativeMarkers={});a.negativeMarkers.position="center-bottom";a.negativeMarkers.anchor="center-bottom";a.negativeLabels||(a.negativeLabels={});a.negativeLabels.position="center-bottom";a.negativeLabels.anchor="center-bottom";a.stroke={color:"#64b5f6",thickness:1.5};
a.fill={color:"#64b5f6",opacity:.7};a.negativeFill={color:"#ef6c00",opacity:.7};return a};$.po.sparkline=bS;$.H("anychart.sparkline",bS);}).call(this,$)}
