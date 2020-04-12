(this["webpackJsonpgem-search"]=this["webpackJsonpgem-search"]||[]).push([[0],{47:function(n,e,t){n.exports=t(80)},80:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(20),o=t.n(c),u=t(9),i=t(11),l=t(40),m=t(46),d=t(41),s=t.n(d),f=t(14),p=t(19),b=Object(p.b)({name:"gemSearch",initialState:{currentGems:[],savedGems:[],currentSearch:null},reducers:{setCurrentGems:function(n,e){n.currentGems=e.payload},saveGem:function(n,e){var t=e.payload;n.savedGems.unshift(t)},unsaveGem:function(n,e){var t=e.payload;n.savedGems=n.savedGems.filter((function(n){return n.name!==t.name}))},setCurrentSearch:function(n,e){n.currentSearch=e.payload}}}),g=b.actions,h=b.reducer,v=g.saveGem,E=g.unsaveGem,x=g.setCurrentGems,j=g.setCurrentSearch,O=h,y=t(2),S=t(16),k=t(3);function w(){var n=Object(y.a)(["\n  color: ",";\n"]);return w=function(){return n},n}function G(){var n=Object(y.a)(["\n  float: right;\n  padding: 5px;\n  border-radius: 12px;\n  font-size: 14px;\n"]);return G=function(){return n},n}function z(){var n=Object(y.a)(["\n  position: absolute;\n  left: 470px;\n  font-size: 14px;\n  "," {\n    left: 60%;\n  }\n  "," {\n    left: 63%;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(y.a)(["\n  color: ",";\n  background-color: ",";\n  cursor pointer;\n  border: 0;\n  border-radius: 15px;\n  padding: 8px;\n  :focus {\n    outline: none;\n  }\n"]);return C=function(){return n},n}function D(){var n=Object(y.a)(["\n  padding-bottom: 10px;\n  line-height: 1.5;\n"]);return D=function(){return n},n}function F(){var n=Object(y.a)(["\n  font-size: 1.3em;\n  font-weight: bold;\n  display: inline;\n  color: ",";\n"]);return F=function(){return n},n}function P(){var n=Object(y.a)(["\n  color: ",";\n  font-size: 1.5em;\n"]);return P=function(){return n},n}function _(){var n=Object(y.a)(["\n  font-size: 0.8em;\n"]);return _=function(){return n},n}function N(){var n=Object(y.a)(["\n  font-weight: lighter;\n  border-bottom: 1px solid ",";\n  padding: 20px 0;\n  font-size: 1.3em;\n"]);return N=function(){return n},n}function B(){var n=Object(y.a)(["\n  width: 70%;\n  max-width: 1100px;\n  margin: auto;\n  color: ",";\n  font-size: 11pt;\n  padding: 10px 0 50px;\n  a {\n    text-decoration: none;\n  }\n  "," {\n    width: 80%;\n  }\n  "," {\n    width: 85%;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(y.a)(["\n  display: inline;\n  float: right;\n  padding-top: 10px;\n  a {\n    color: ",";\n    font-weight: 700;\n    background: rgba(255, 255, 255, 0.3);\n    transition: background 0.5s ease-out;\n    padding: 12px;\n    text-decoration: none;\n    border-radius: 20px;\n  }\n  a:hover {\n    background: rgba(255, 255, 255, 0.5);\n  }\n  "," {\n    display: block;\n    float: none;\n    text-align: center;\n    padding-bottom: 30px;\n\n    a {\n      padding: 10px;\n      font-size: 13px;\n      position: relative;\n      right: 0;\n      top: 0;\n      margin-bottom: 20px;\n    }\n  }\n"]);return J=function(){return n},n}function R(){var n=Object(y.a)(["\n  padding: 9px 50px 10px 10px;\n  border: 0;\n  border-radius: 15px;\n  width: 140px;\n  :focus {\n    outline: none;\n  }\n  "," {\n    padding: 9px 65px 10px 10px;\n    width: 26%;\n    margin-right: 1%;\n  }\n  "," {\n    width: 38%;\n  }\n"]);return R=function(){return n},n}function U(){var n=Object(y.a)(["\n  display: inline;\n  vertical-align: super;\n"]);return U=function(){return n},n}function q(){var n=Object(y.a)(["\n  display: inline-block;\n  padding-left: 20px;\n  "," {\n    display: block;\n    padding-bottom: 20px;\n    text-align: center;\n    padding-left: 0;\n  }\n"]);return q=function(){return n},n}function I(){var n=Object(y.a)(["\n  display: inline;\n  vertical-align: super;\n"]);return I=function(){return n},n}function L(){var n=Object(y.a)(["\n  background: ",";\n  background: linear-gradient(\n    90deg,\n    rgba(210,92,113,1) 26%,\n    rgba(255,198,103,1) 79%\n  );\n  padding: 12px;\n  margin: 0;\n"]);return L=function(){return n},n}function Q(){var n=Object(y.a)(["\n  list-style: none;\n  padding: 0;\n  li {\n    border-bottom: 1px solid ",";\n    margin-bottom: 20px;\n\n    :first-of-type {\n      padding-top: 30px;\n    }\n  }\n"]);return Q=function(){return n},n}function T(){var n=Object(y.a)(["\n  display: inline;\n  color: ",";\n  font-weight: 100;\n  "," {\n    display: block;\n    text-align: center;\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n"]);return T=function(){return n},n}function V(){var n=Object(y.a)(["\n      body {\n        font-family: 'Quicksand', sans-serif;\n        margin: 0;\n        padding: 0;\n      }\n    "]);return V=function(){return n},n}var Y=[720,500].map((function(n){return"@media (max-width: ".concat(n,"px)")})),A="#fff",H="#999",K="#b0b0b0",M="#f09722",W="#d25c71",X=function(){return r.a.createElement(S.a,{styles:Object(S.c)(V())})},Z=k.a.h1(T(),A,Y[0],A),$=k.a.ul(Q(),K),nn=k.a.header(L(),W),en=k.a.div(I()),tn=k.a.div(q(),Y[0]),an=k.a.form(U()),rn=k.a.input(R(),Y[0],Y[1]),cn=k.a.div(J(),A,Y[0]),on=k.a.div(B(),H,Y[0],Y[1]),un=k.a.div(N(),K),ln=k.a.div(_()),mn=k.a.span(P(),M),dn=k.a.a(F(),W),sn=k.a.p(D()),fn=k.a.button(C(),A,M),pn=Object(k.a)(fn)(z(),Y[0],Y[1]),bn=Object(k.a)(fn)(G()),gn=Object(k.a)(i.b)(w(),H),hn=function(n){var e=n.gem,t=n.gemNotSaved,a=n.handleSave;return r.a.createElement("li",null,r.a.createElement(dn,{href:e.documentation_uri,target:"_blank"},e.name),r.a.createElement(bn,{onClick:function(){a(e)}},t?"Save":"Unsave"," Gem"),r.a.createElement(sn,null,e.info))},vn=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n})),t=e.savedGems,a=e.currentGems,c=e.currentSearch,o=function(e){return n(E(e))},i=c?"/search?name=".concat(c):"/";return r.a.createElement(r.a.Fragment,null,!t.length&&r.a.createElement("div",null,r.a.createElement("p",null,"You currently have no saved gems.")),!!a.length&&r.a.createElement(gn,{to:i},"<<"," Back To Search Page"),r.a.createElement($,null,t.map((function(n){return r.a.createElement(hn,{key:n.name,gem:n,gemNotSaved:!1,handleSave:o})}))))},En=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n})),t=e.currentGems,a=e.savedGems,c=e.currentSearch,o=function(n){return!a.find((function(e){return e.name===n}))},i=function(e){return o(e.name)?n(v(e)):n(E(e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(un,null,r.a.createElement("div",null,"Search for: ",r.a.createElement(mn,null,c)),r.a.createElement(ln,null,t.length," gems found")),r.a.createElement($,null,t.map((function(n){return r.a.createElement(hn,{key:n.name,gem:n,gemNotSaved:o(n.name),handleSave:i})}))))},xn=function(){return r.a.createElement(cn,null,r.a.createElement(i.b,{to:"/saved_gems"},"View Saved Gems"))},jn=function(n){var e=n.formData,t=n.setFormData,a=n.handleSubmit;return r.a.createElement(nn,null,r.a.createElement(en,null,r.a.createElement(Z,null,r.a.createElement(i.b,{onClick:function(){return t("")},to:"/"},"Search Ruby Gems")),r.a.createElement(tn,null,r.a.createElement(an,{onSubmit:a},r.a.createElement(rn,{type:"text",value:e,onChange:function(n){t(n.target.value)}}),r.a.createElement(pn,{type:"submit"},"Search")))),r.a.createElement(xn,null))},On=function(){return r.a.createElement("div",null,"Oops, something went wrong. Please try again!")},yn=function(){var n=Object(u.b)(),e=Object(f.f)(),t=Object(a.useState)(""),c=Object(m.a)(t,2),o=c[0],i=c[1],l=new URLSearchParams(Object(f.g)().search),d=function(t){s.a.get("/search.json?query=".concat(t)).then((function(e){n(x(e.data))})).catch((function(n){e.push("/error")}))};Object(a.useEffect)((function(){var t=l.get("name");t&&"/search"===e.location.pathname&&(d(t),n(j(t)),i(t))}),[]),Object(a.useEffect)((function(){""===o&&n(x([]))}),[o]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(jn,{formData:o,setFormData:i,handleSubmit:function(t){t.preventDefault(),o?(d(o),n(j(o)),e.push("/search?name=".concat(o))):alert("Please enter a valid search.")}}),r.a.createElement(on,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/search"},r.a.createElement(En,null)),r.a.createElement(f.a,{path:"/saved_gems"},r.a.createElement(vn,null)),r.a.createElement(f.a,{path:"/error"},r.a.createElement(On,null)))))},Sn=t(27),kn=t(45),wn={key:"gemSearch",storage:t.n(kn).a,whitelist:["savedGems"]},Gn=Object(p.a)({reducer:Object(Sn.a)(wn,O),middleware:Object(p.c)({serializableCheck:!1})}),zn=Object(Sn.b)(Gn),Cn=Gn;o.a.render(r.a.createElement(u.a,{store:Cn},r.a.createElement(l.a,{loading:null,persistor:zn},r.a.createElement(i.a,{basename:"/gem-search"},r.a.createElement(yn,null)))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d424b749.chunk.js.map