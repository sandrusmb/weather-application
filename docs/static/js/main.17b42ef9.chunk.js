(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),o=a.n(c),i=(a(16),a(1)),l=a.n(i),u=a(4),s=a(5),m=a(6),p=a(9),d=a(7),y=a(10);a(18);var E=function(e){return console.log(e),n.a.createElement("div",null,e.error&&n.a.createElement("div",{className:"alert alert-danger"},n.a.createElement("p",null,e.error)),e.temperature?n.a.createElement("div",{className:"card card-body"},n.a.createElement("p",null,"Location: ",e.city,", ",e.country),n.a.createElement("p",null,"Temperature: ",e.temperature," \xbaC, ",e.description),n.a.createElement("p",null,"Humidity: ",e.humidity,"%"),n.a.createElement("p",null,"Wind speed: ",e.wind_speed)):n.a.createElement("div",null))};var h=function(e){return n.a.createElement("div",{className:"card card-body"},n.a.createElement("form",{onSubmit:e.getWeather},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"city",placeholder:"Your city name",className:"form-control",autoFocus:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"country",placeholder:"Your country name",className:"form-control",autoFocus:!0})),n.a.createElement("button",{className:"btn btn-success btn-block"},"Search")))},f=a(8),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).getWeather=function(){var t=Object(u.a)(l.a.mark((function t(a){var r,n,c,o,i,u,s,m;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=a.target.elements,n=r.city,c=r.country,o=n.value,i=c.value,!o){t.next=15;break}return u="http://api.openweathermap.org/data/2.5/weather?q=".concat(o,",").concat(i,"&appid=").concat(f.WEATHER_KEY,"&units=metric"),t.next=8,fetch(u);case 8:return s=t.sent,t.next=11,s.json();case 11:m=t.sent,e.setState({temperature:m.main.temp,description:m.weather[0].description,humidity:m.main.humidity,wind_speed:m.wind.speed,city:m.name,country:m.sys.country,error:null}),t.next=16;break;case 15:e.setState({error:"Please enter a city and a country"});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={temperature:"",description:"",humidity:"",wind_speed:"",city:"",country:"",error:null},e}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container p-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 mx-auto center-block"},n.a.createElement(h,{getWeather:this.getWeather}),n.a.createElement(E,this.state))))}}]),t}(n.a.Component);o.a.render(n.a.createElement(v,null),document.getElementById("root"))},8:function(e,t){e.exports={WEATHER_KEY:"b9a89914cfc9a581590f3adee5da3cc0"}}},[[11,1,2]]]);
//# sourceMappingURL=main.17b42ef9.chunk.js.map