(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2Ddhl",card:"Cards_card__5GXQy",infected:"Cards_infected__1Mt-M",recovered:"Cards_recovered__1RfQM",deaths:"Cards_deaths__33NLd"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(5),l=a.n(u),s=a(10),i=a(71),d=a(72),m=a(81),f=a(80),p=a(225),v=a(230),h=a(226),b=a(227),E=a(13),g=a.n(E),y=a(30),C=a.n(y),_=a(29),k=a(229),x=a(228),w=a(73),O=a.n(w),j=a(31),D=a.n(j),N="https://covid19.mathdro.id/api",S=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,u,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(_.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),console.log(o),r.a.createElement(k.a,{className:O.a.FormControl},r.a.createElement("h3",null," ",r.a.createElement("u",null," Search By Country ")),r.a.createElement(x.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},style:{backgroundColor:"white"}},r.a.createElement("option",{value:"",style:{backgroundColor:"white",color:"black"}}," Search Country..."),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("br",null))},A=a(32),F=a.n(A),L=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:g.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:F()(g.a.card,g.a.infected)},r.a.createElement(h.a,{style:{backgroundColor:"#ffd800"}},r.a.createElement(b.a,{gutterBottom:!0}," ",r.a.createElement("b",null," ",r.a.createElement("h1",null,"Infected ")," ")),r.a.createElement(b.a,{variant:"h5",gutterBottom:!0},r.a.createElement(C.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,null,new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of Covid-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:F()(g.a.card,g.a.recovered)},r.a.createElement(h.a,{style:{backgroundColor:"#00CD00"}},r.a.createElement(b.a,{gutterBottom:!0},r.a.createElement("b",null," ",r.a.createElement("h1",null,"Recovered ")," ")),r.a.createElement(b.a,{variant:"h5",gutterBottom:!0},r.a.createElement(C.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,null,new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from Covid-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:F()(g.a.card,g.a.deaths)},r.a.createElement(h.a,{style:{backgroundColor:"#FF0000"}},r.a.createElement(b.a,{gutterBottom:!0},r.a.createElement("b",null," ",r.a.createElement("h1",null,"Deaths ")," ")),r.a.createElement(b.a,{variant:"h5",gutterBottom:!0},r.a.createElement(C.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,null,new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by Covid-19"))))):"Loading..."},R=a(43),U=a(78),J=a.n(U),Q=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,i=Object(n.useState)([]),d=Object(_.a)(i,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=m.length?r.a.createElement(R.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,.5)",fill:!0}]}}):null,v=a?r.a.createElement(R.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,255,.5)","rgba(0,255,0,.5)","rgba(255,0,0,.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:J.a.container},u?v:p)},V=a(44),G=a.n(V),P=a(79),T=a.n(P),X=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement("img",{src:T.a,className:G.a.image,alt:"COVID-19"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,r.a.createElement("u",null,"Current Stats")),r.a.createElement(L,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(Q,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__2hIgc",image:"App_image__2OywS"}},73:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2k9lr"}},78:function(e,t,a){e.exports={container:"Chart_container__3BT3m"}},79:function(e,t,a){e.exports=a.p+"static/media/Covid19_3.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.d74c362f.chunk.js.map