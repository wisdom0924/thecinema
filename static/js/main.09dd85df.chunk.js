(this.webpackJsonpthecinema=this.webpackJsonpthecinema||[]).push([[0],{35:function(e,t,n){},41:function(e,t,n){e.exports=n(70)},46:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),o=n.n(i),c=(n(46),n(2)),l=n(10),s=n(3),p=n(5),u=n.n(p),d=n(15),g=n(11),m=n(12),v=n(14),h=n(13),b=n(16),f=n.n(b);n(35);var E=function(e){var t=e.id,n=e.title,a=e.lang,i=e.overview,o=e.poster,c=e.date,s=e.rating,p=e.genres,u=e.backdrop;return r.a.createElement("li",null,r.a.createElement(l.b,{to:{pathname:"/movie/".concat(t),state:{title:n,overview:i,poster:o,date:c,lang:a,genres:p,backdrop:u}}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:n,title:n}),r.a.createElement("div",{className:"list__text"},r.a.createElement("h5",null,n),r.a.createElement("span",null,"\u2605",s)),r.a.createElement("h4",null,c.slice(0,4))))},x=n(1);n(69);function k(){var e=Object(c.a)(["\n  /* border: 1px solid red; */\n  color: #fff;\n  font-size: 18px;\n  padding: 20px 0 0 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n"]);return k=function(){return e},e}var w=x.c.div(k()),_=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,nowplaying:[],upcoming:[],popular:[]},e.getNowplaying=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"61d6a02f15e10648230ab7c68e113835",t.next=3,f.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("61d6a02f15e10648230ab7c68e113835","&language=ko-KR"));case 3:n=t.sent,a=n.data.results,e.setState({nowplaying:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e.getUpcomming=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"61d6a02f15e10648230ab7c68e113835",t.next=3,f.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("61d6a02f15e10648230ab7c68e113835","&language=ko-KR"));case 3:n=t.sent,a=n.data.results,e.setState({upcoming:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e.getPopular=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"61d6a02f15e10648230ab7c68e113835",t.next=3,f.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("61d6a02f15e10648230ab7c68e113835","&language=ko-KR"));case 3:n=t.sent,a=n.data.results,e.setState({popular:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getNowplaying(),this.getUpcomming(),this.getPopular()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.nowplaying,a=e.upcoming,i=e.popular;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"wrapper"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loading__text"},"LOADING...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"listBlock"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null,"Now playing"),r.a.createElement("ul",{className:"movie__list"},n.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,title:e.title,lang:e.original_language,overview:e.overview,poster:e.poster_path,date:e.release_date,rating:e.vote_average,genres:e.genre_ids,backdrop:e.backdrop_path})}))))),r.a.createElement("div",{className:"listBlock"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null,"Upcomming"),r.a.createElement("ul",{className:"movie__list"},a.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,title:e.title,lang:e.original_language,overview:e.overview,poster:e.poster_path,date:e.release_date,rating:e.vote_average,genres:e.genre_ids,backdrop:e.backdrop_path})}))))),r.a.createElement("div",{className:"listBlock"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null,"Popular"),r.a.createElement("ul",{className:"movie__list"},i.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,title:e.title,lang:e.original_language,overview:e.overview,poster:e.poster_path,date:e.release_date,rating:e.vote_average,genres:e.genre_ids,backdrop:e.backdrop_path})}))))))))}}]),n}(r.a.Component);var y=function(e){var t=e.id,n=e.name,a=e.lang,i=e.overview,o=e.poster,c=e.date,s=e.rating,p=e.genres,u=e.backdrop;return r.a.createElement("li",null,r.a.createElement(l.b,{to:{pathname:"/tv/".concat(t),state:{name:n,overview:i,poster:o,date:c,lang:a,genres:p,backdrop:u}}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:n,title:n}),r.a.createElement("div",{className:"list__text"},r.a.createElement("h5",null,n),r.a.createElement("span",null,"\u2605",s)),r.a.createElement("h4",null,c.slice(0,4))))};function O(){var e=Object(c.a)(["\n  /* border: 1px solid red; */\n  color: #fff;\n  font-size: 18px;\n  padding: 20px 0 0 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n"]);return O=function(){return e},e}var j=x.c.div(O()),N=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,error:null,popular:[],topRated:[],airingToday:[]},e.getTVpopular=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"61d6a02f15e10648230ab7c68e113835",t.next=3,f.a.get("https://api.themoviedb.org/3/tv/popular?api_key=".concat("61d6a02f15e10648230ab7c68e113835","&language=ko-KR")).catch((function(e){console.log(e)}));case 3:n=t.sent,a=n.data.results,console.log(a),e.setState({popular:a,isLoading:!1});case 7:case"end":return t.stop()}}),t)}))),e.getTopRated=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"61d6a02f15e10648230ab7c68e113835",t.next=3,f.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("61d6a02f15e10648230ab7c68e113835","&language=ko-KR"));case 3:n=t.sent,a=n.data.results,e.setState({topRated:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e.getAiringToday=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"61d6a02f15e10648230ab7c68e113835",t.next=3,f.a.get("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat("61d6a02f15e10648230ab7c68e113835","&language=ko-KR"));case 3:n=t.sent,a=n.data.results,console.log(a),e.setState({airingToday:a,isLoading:!1});case 7:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getTVpopular(),this.getTopRated(),this.getAiringToday()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.error,a=e.popular,i=e.topRated,o=e.airingToday;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"wrapper"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loading__text"},"LOADING...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"listBlock"},r.a.createElement("div",{className:"container"},r.a.createElement(j,null,"TV POPULAR program"),r.a.createElement("ul",{className:"movie__list"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,name:e.name,title:e.original_name,overview:e.overview,poster:e.poster_path,lang:e.original_language,date:e.first_air_date,rating:e.vote_average,genres:e.genre_ids,backdrop:e.backdrop_path,error:n})}))))),r.a.createElement("div",{className:"listBlock"},r.a.createElement("div",{className:"container"},r.a.createElement(j,null,"top Rated"),r.a.createElement("ul",{className:"movie__list"},i.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,name:e.name,title:e.original_name,overview:e.overview,poster:e.poster_path,lang:e.original_language,date:e.first_air_date,rating:e.vote_average,genres:e.genre_ids,backdrop:e.backdrop_path})}))))),r.a.createElement("div",{className:"listBlock"},r.a.createElement("div",{className:"container"},r.a.createElement(j,null,"airingToday"),r.a.createElement("ul",{className:"movie__list"},o.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,name:e.name,title:e.original_name,overview:e.overview,poster:e.poster_path,lang:e.original_language,date:e.first_air_date,rating:e.vote_average,genres:e.genre_ids,backdrop:e.backdrop_path})}))))))))}}]),n}(r.a.Component);function z(){var e=Object(c.a)(["\n  margin: 10px;\n  display: inline-block;\n"]);return z=function(){return e},e}function I(){var e=Object(c.a)(["\n  color: rgba(255, 255, 255, 0.9);\n  padding: 50px;\n  font-size: 12px;\n  width: 70%;\n\n  h5 {\n    font-size: 24px;\n    padding-bottom: 20px;\n  }\n\n  div {\n    line-height: 1.8rem;\n    font-size: 1rem;\n  }\n\n  span {\n    text-transform: uppercase;\n  }\n"]);return I=function(){return e},e}function R(){var e=Object(c.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"]);return R=function(){return e},e}function S(){var e=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.2);\n  overflow: auto;\n"]);return S=function(){return e},e}function L(){var e=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(",");\n  background-size: 100%;\n  background-position: center center;\n  position: absolute;\n  filter: blur(5px);\n  top: 0;\n  left: 0;\n  z-index: 0;\n"]);return L=function(){return e},e}function T(){var e=Object(c.a)(["\n  margin-top: 56px;\n  width: 100%;\n  height: 100%;\n  height: calc(100vh - 45px);\n  position: relative;\n  padding: 100px;\n  display: flex;\n"]);return T=function(){return e},e}var B=x.c.div(T()),A=x.c.div(L(),(function(e){return e.bgImage})),M=x.c.div(S()),C=x.c.div(R(),(function(e){return e.bgImage})),D=x.c.div(I()),K=x.c.div(z()),U=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement(B,null,r.a.createElement(A,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.state.backdrop)}),r.a.createElement(M,null,r.a.createElement(C,{bgImage:"https://image.tmdb.org/t/p/w500".concat(e.state.poster)}),r.a.createElement(D,null,r.a.createElement("h5",null,e.state.title),r.a.createElement("span",null,e.state.date.substring(0,4)),r.a.createElement(K,null,"\u2022"),r.a.createElement("span",null,e.state.lang),r.a.createElement("div",null,e.state.overview)))):null}}]),n}(r.a.Component);function V(){var e=Object(c.a)(["\n  margin: 10px;\n  display: inline-block;\n"]);return V=function(){return e},e}function F(){var e=Object(c.a)(["\n  color: rgba(255, 255, 255, 0.9);\n  padding: 50px;\n  font-size: 12px;\n  width: 70%;\n\n  h5 {\n    font-size: 24px;\n    padding-bottom: 20px;\n  }\n\n  div {\n    line-height: 1.8rem;\n    font-size: 1rem;\n  }\n\n  span {\n    text-transform: uppercase;\n  }\n"]);return F=function(){return e},e}function P(){var e=Object(c.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"]);return P=function(){return e},e}function G(){var e=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.2);\n  overflow: auto;\n"]);return G=function(){return e},e}function H(){var e=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(",");\n  background-size: 100%;\n  background-position: center center;\n  position: absolute;\n  filter: blur(5px);\n  top: 0;\n  left: 0;\n  z-index: 0;\n"]);return H=function(){return e},e}function J(){var e=Object(c.a)(["\n  margin-top: 56px;\n  width: 100%;\n  height: 100%;\n  height: calc(100vh - 45px);\n  position: relative;\n  padding: 100px;\n  display: flex;\n"]);return J=function(){return e},e}var W=x.c.div(J()),$=x.c.div(H(),(function(e){return e.bgImage})),q=x.c.div(G()),Q=x.c.div(P(),(function(e){return e.bgImage})),X=x.c.div(F()),Y=x.c.div(V()),Z=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement(W,null,r.a.createElement($,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.state.backdrop)}),r.a.createElement(q,null,r.a.createElement(Q,{bgImage:"https://image.tmdb.org/t/p/w500".concat(e.state.poster)}),r.a.createElement(X,null,r.a.createElement("h5",null,e.state.title),r.a.createElement("span",null,e.state.date.substring(0,4)),r.a.createElement(Y,null,"\u2022"),r.a.createElement("span",null,e.state.lang),r.a.createElement("div",null,e.state.overview)))):null}}]),n}(r.a.Component);function ee(){var e=Object(c.a)(["\n  background: pink;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n  background: rgb(14, 14, 14);\n  padding: 20px 30px;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n  a {\n    text-decoration: none;\n    color: white;\n    text-transform: uppercase;\n    font-size: 12px;\n    text-align: center;\n    font-weight: 600;\n    padding: 0 15px;\n    /* padding-bottom: 20px; */\n    display: block;\n    width: 100px;\n    &::not(:last-child) {\n      margin-bottom: 30px;\n    }\n  }\n  li {\n    list-style: none;\n    padding: 0;\n    flex: none;\n    &.search {\n      /* border: 1px solid red; */\n      margin-left: auto;\n      margin-right: 15px;\n      input {\n        height: 24px;\n      }\n    }\n    &.title a {\n      font-size: 26px;\n      width: auto;\n      padding-bottom: 0;\n      margin-right: 20px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    padding-left: 0;\n    padding-right: 0;\n    .title {\n      display: none;\n    }\n    form {\n      /* border: 1px solid red; */\n      /* width: 100px; */\n    }\n  }\n"]);return ee=function(){return e},e}var te=x.c.ul(ee());var ne=function(){var e={background:"red",color:"white"};return r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement("li",{className:"title"},r.a.createElement(l.b,{to:"/"},"THE MOVIES")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",exact:!0,activeStyle:e,activeClassName:"active"},"MOVIES")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/tv",activeStyle:e},"TV")),r.a.createElement("li",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Search..."})))),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:_}),r.a.createElement(s.a,{path:"/tv",exact:!0,component:N}),r.a.createElement(s.a,{path:"/movie/:id",component:U}),r.a.createElement(s.a,{path:"/tv/:id",component:Z}),r.a.createElement(s.a,{render:function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("h2",null,"\uc774 \ud398\uc774\uc9c0\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),r.a.createElement("p",null,t.pathname))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(40);function re(){var e=Object(c.a)(["\n    ",";\n    *{\n        box-sizing:border-box;\n    }\n    a{\n        color:inherit;\n        text-decoration:none;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;\n        font-size:16px;\n        background-color:rgb(41, 41, 41);\n    }\n"]);return re=function(){return e},e}var ie=Object(x.a)(re(),ae.a);o.a.render(r.a.createElement(l.a,null,r.a.createElement(ie,null),r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.09dd85df.chunk.js.map