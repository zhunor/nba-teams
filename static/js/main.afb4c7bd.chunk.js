(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/tenor.3a5bccb6.gif"},2:function(e,a,t){a.chunk=function(e,a){for(var t=[],n=0,c=e.length;n<c;)t.push(e.slice(n,n+=a));return t};a.API_URL="https://nba-proxy-api.herokuapp.com";a.TEAM_LOGO_URL="https://s3.amazonaws.com/nba8bit/logo/"},27:function(e,a,t){e.exports=t(61)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),s=t.n(r),l=t(64),i=(t(33),t(63)),m=(t(34),t(35),function(e){var a=e.title,t=e.subtitle;return c.a.createElement("section",{className:"hero"},c.a.createElement("div",{className:"hero-body inner-hero-body"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement("h1",{className:"title hero-title"},a),c.a.createElement("h2",{className:"subtitle"},t)))))}),o=t(4),u=t(5),d=t(7),p=t(6),v=t(8),b=t(2),E=t(62),h=(t(36),function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,a=e.abbreviation,t=e.fullName,n=e.conference;return c.a.createElement("div",{className:"column is-half"},c.a.createElement("div",{className:"card card-8bit"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:"".concat(b.TEAM_LOGO_URL).concat(a,"-min.jpg"),alt:""}))),c.a.createElement("div",{className:"card-content team-card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-6"},t),c.a.createElement("p",{className:"subtitle is-8"},a))),c.a.createElement("div",{className:"content"},c.a.createElement("p",null,"Conference:",n),c.a.createElement("br",null),c.a.createElement("p",null,c.a.createElement(E.a,{to:"/teams/".concat(a),className:"btn-8bit"},"Go "))))))}}]),a}(n.Component)),f=t(12),g=t.n(f),N=c.a.createContext(),O=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).renderTeams=function(e){var a=e.teams,t=Object(b.chunk)(a,2);return a.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{title:"NBA Teams",subtitle:"Click to see details"}),c.a.createElement("div",{className:""},t.map(function(e){return c.a.createElement("div",{className:"columns"},e.map(function(e){return c.a.createElement(h,{abbreviation:e.abbreviation,conference:e.conference,fullName:e.full_name,key:e.abbreviation})}))}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"center-children"},c.a.createElement("img",{src:g.a,alt:""})))},e.state={teams:[]},e}return Object(v.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(N.Consumer,null,function(a){return e.renderTeams(a)})}}]),a}(n.Component),y=t(16),j=t.n(y);j.a.accessToken="pk.eyJ1Ijoib3plcm9yaHVuIiwiYSI6ImNqYmF4NHh2dTEwbTAycHAzbnd4azhwcGEifQ.LsST6QrnJ0XEar6wgnnfSg";var k=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={markers:[]},e.map={},e}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.teams;this.initMap(e)}},{key:"componentWillReceiveProps",value:function(e){this.props.teams.length===e.teams.length&&this.drawMarkers(e.teams)}},{key:"componentDidUpdate",value:function(e){var a=this.props.teams;a.length!==e.teams.length&&this.drawMarkers(a)}},{key:"initMap",value:function(e){this.map=new j.a.Map({container:this.mapContainer,style:"mapbox://styles/ozerorhun/cjtgaw1z9533w1flx27dmc595",center:[-101.92426,40.70048],zoom:3,pitch:50,bearing:27}),this.drawMarkers(e)}},{key:"drawMarkers",value:function(e){var a=this;console.log(e);var t=[];!function(){var e=a.state.markers;e.forEach(function(e){return e.remove()}),e=[]}(),e.forEach(function(e,n){!function(e){if(e.location){var n=document.createElement("div");n.className="marker",n.style.background="url(".concat(b.TEAM_LOGO_URL).concat(e.abbreviation,"-min.jpg)"),n.style.width="32px",n.style.height="32px",n.style.backgroundSize="32px 32px",n.style.backgroundRepeat="no-repeat";try{var c=new j.a.Marker(n).setLngLat([e.location[1],e.location[0]]).addTo(a.map);t.push(c)}catch(r){console.log(r)}}}(e)}),this.map.resize(),this.setState({markers:t})}},{key:"render",value:function(){var e=this;return c.a.createElement(N.Consumer,null,function(a){return c.a.createElement("div",{ref:function(a){e.mapContainer=a},className:"map-container"})})}}]),a}(n.Component),w=t(13),_=t.n(w),L=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={teams:[]},t}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="".concat(b.API_URL,"/api/teams");_.a.get(a).then(function(a){var t={};200===a.status&&(t=a.data.data),e.setState({teams:t.teams})})}},{key:"render",value:function(){return c.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),M=(t(58),function(){return c.a.createElement(L,null,c.a.createElement(N.Consumer,null,function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(k,{teams:e.teams})),c.a.createElement("div",{className:"side-menu"},c.a.createElement(O,null)))}))}),x=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).toggleMenu=function(){var a=e.state,t=a.isNavbarOpen,n=a.navbarToggleClass;n=(t=!t)?"navbar-menu is-active":"navbar-menu",e.setState({isNavbarOpen:t,navbarToggleClass:n})},e.state={navbarToggleClass:"navbar-menu",isNavbarOpen:!1},e}return Object(v.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state.navbarToggleClass;return c.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{className:"navbar-item",href:"/"},c.a.createElement("img",{src:g.a,className:"logo",alt:""}),"HOOPRZ"),c.a.createElement("a",{role:"button",className:"navbar-burger",onClick:this.toggleMenu,"aria-label":"menu","aria-expanded":"false"},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:e},c.a.createElement("div",{className:"navbar-start"},c.a.createElement(E.a,{to:"/teams",className:"navbar-item"},"Teams"),c.a.createElement(E.a,{to:"/games",className:"navbar-item"},"Games"),c.a.createElement(E.a,{to:"/players",className:"navbar-item"},"Players"))))}}]),a}(n.Component),C=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={games:[]},e}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="".concat(b.API_URL,"/api/games");_.a.get(a).then(function(a){var t={};200===a.status&&(t=JSON.parse(a.data.data)),e.setState({games:t.data})})}},{key:"render",value:function(){var e=this.state.games,a=Object(b.chunk)(e,2);return e.length?c.a.createElement("div",{className:"container padding-top-100"},a.map(function(e){return c.a.createElement("div",{className:"columns"},e.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-24x24"},c.a.createElement("img",{src:"".concat(b.TEAM_LOGO_URL).concat(e.home_team.abbreviation,"-min.jpg"),alt:""}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-6"}," ",e.home_team.full_name," - ",e.home_team_score))),c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-24x24"},c.a.createElement("img",{src:"".concat(b.TEAM_LOGO_URL).concat(e.visitor_team.abbreviation,"-min.jpg"),alt:""}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-6"}," ",e.visitor_team.full_name," - ",e.visitor_team_score),c.a.createElement("nav",{className:"level is-mobile"},c.a.createElement("div",{className:"level-left"},c.a.createElement("small",null,new Date(e.date).toLocaleDateString("tr-TR")," - ",e.status)))))))))}))})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"center-children"},c.a.createElement("img",{src:g.a,alt:""})))}}]),a}(n.Component),T=t(18),S=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,a=e.firstName,t=e.lastName,n=e.position,r=e.team,s=e.imgSrc;return c.a.createElement("div",{className:"column is-3"},c.a.createElement("div",{className:"card card-8bit"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:s,alt:""}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"".concat(b.TEAM_LOGO_URL).concat(r.abbreviation,"-min.jpg"),alt:""}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-6"},a),c.a.createElement("p",{className:"subtitle is-8"},t),c.a.createElement("p",null,"Pos: ",n))))))}}]),a}(n.Component),A=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).loadMore=function(){var a=e.state.page;a+=1,e.setState({page:a});var t="".concat("https://nba-proxy-api.herokuapp.com","/api/players?page=").concat(a);e.loadPlayers(t)},e.loadPlayers=function(a){var t=e.state.isLoading,n=e.state.players;t=!0,e.setState({isLoading:t}),_.a.get(a).then(function(a){var c={};200===a.status&&(c=JSON.parse(a.data.data)),t=!1,c=[].concat(Object(T.a)(n),Object(T.a)(c)),e.setState({players:c,isLoading:t})})},e.state={players:[],page:2,isLoading:!1},e}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e="".concat(b.API_URL,"/api/players");this.loadPlayers(e)}},{key:"render",value:function(){var e=this.state,a=e.players,t=e.isLoading,n=Object(b.chunk)(a,4);return a.length?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"padding-vertical-50"},c.a.createElement(m,{title:"NBA players",subtitle:"Chaoticaly ordered basketball monsters, press load more to see more"})),n.map(function(e){return c.a.createElement("div",{className:"columns"},e.map(function(e){return c.a.createElement(S,{firstName:e.first_name,lastName:e.last_name,position:e.position,imgSrc:e.img_src,team:e.team})}))}),c.a.createElement("div",{className:"column is-4 is-offset-4 padding-vertical-50"},c.a.createElement("p",{className:"has-text-centered"},c.a.createElement("button",{type:"button",className:t?"button btn-8bit is-centered  is-loading":"button btn-8bit is-centered",onClick:this.loadMore}," Load more ")))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"center-children"},c.a.createElement("img",{src:g.a,alt:""})))}}]),a}(n.Component),R=(t(59),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",{className:"font-press-start"},"Powered by ",c.a.createElement("a",{href:"https://bulma.io"},"bulma")," and ",c.a.createElement("a",{href:"https://www.balldontlie.io/#introduction"},"balldontlie"),". The source code is licensed",c.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"}," MIT"),".")))}),P=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"dotted"}),c.a.createElement(i.a,{path:"/",component:x}),c.a.createElement(i.a,{exact:!0,path:"/",component:M}),c.a.createElement(i.a,{exact:!0,path:"/teams",component:M}),c.a.createElement(i.a,{exact:!0,path:"/teams/:abbr",component:M}),c.a.createElement(i.a,{exact:!0,path:"/nba-teams",component:M}),c.a.createElement(i.a,{exact:!0,path:"/games",component:C}),c.a.createElement(i.a,{exact:!0,path:"/players",component:A}),c.a.createElement(i.a,{path:"/",component:R}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(l.a,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.afb4c7bd.chunk.js.map