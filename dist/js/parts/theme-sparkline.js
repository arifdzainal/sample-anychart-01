if(!_.theme_sparkline){_.theme_sparkline=1;(function($){$.ra($.ea.anychart.themes.defaultTheme,{sparkline:{background:{enabled:!0},title:{enabled:!1,padding:0,margin:0,orientation:"right",rotation:0},margin:0,padding:0,hatchFill:null,markers:{},interactivity:{hoverMode:"by-x"},firstMarkers:{fill:"#64b5f6"},lastMarkers:{fill:"#64b5f6"},negativeMarkers:{fill:"#ef6c00"},minMarkers:{fill:"#455a64"},maxMarkers:{fill:"#dd2c00"},labels:{},firstLabels:{},lastLabels:{},negativeLabels:{},minLabels:{fontSize:9,padding:{top:3,right:0,bottom:3,left:0},fontColor:"#303f46"},
maxLabels:{fontSize:9,padding:{top:3,right:0,bottom:3,left:0},fontColor:"#9b1f00"},lineAxesMarkers:[],rangeAxesMarkers:[],textAxesMarkers:[],scales:[{type:"ordinal"},{type:"linear"}],xScale:0,yScale:1,clip:!0,seriesType:"line",connectMissingPoints:!1,pointWidth:"95%",tooltip:{title:!1,separator:!1,titleFormat:function(){return this.x},format:function(){return"x: "+this.x+"\ny: "+$.XI(this.value)},allowLeaveChart:!0},defaultSeriesSettings:{base:{markers:{enabled:!1,position:"center",anchor:"center",
type:"circle",size:1.8,stroke:"none"},hoverMarkers:{enabled:!0},labels:{enabled:!1,fontSize:8,background:{enabled:!1},position:"center",anchor:"center-bottom"},minLabels:{position:"center-bottom",anchor:"center-bottom"},maxLabels:{position:"center-top",anchor:"center-top"},color:"#64b5f6"},area:{stroke:"#64b5f6",fill:"#64b5f6 0.5"},column:{markers:{position:"center-top"},labels:{position:"center-top",anchor:"center-bottom"},negativeMarkers:{position:"center-bottom"},negativeLabels:{position:"center-bottom",
anchor:"center-top"},fill:"#64b5f6",negativeFill:"#ef6c00"},line:{stroke:"#64b5f6"},winLoss:{markers:{position:"center-top",anchor:"center-top"},labels:{position:"center-top",anchor:"center-top"},negativeMarkers:{position:"center-bottom",anchor:"center-bottom"},negativeLabels:{position:"center-bottom",anchor:"center-bottom"},fill:"#64b5f6",negativeFill:"#ef6c00"}}}});}).call(this,$)}
