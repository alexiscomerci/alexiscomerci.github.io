(this.webpackJsonpalexiscomerci=this.webpackJsonpalexiscomerci||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cco.6e30d1e2.png"},101:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/pagosSuc.fd931075.png"},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(21),c=n(22),i=n(25),o=n(24),s=n(71),u=n(126),l=n(128),g=n(130),j=n(131),d=n(138),p=n(139),h=n(68),f=n.n(h),O=n(67),b=n.n(O),x=n(0),m=n.n(x),v=n(50),L=n(30),A=n(61),y=n(62),S=n.n(y),_=n(95),C={};_.keys().forEach((function(e){if(e.endsWith(".json")){var t=A.basename(e,".json"),n=_(e);C[t]=n}}));var N=new S.a(C),k=Object(u.a)((function(e){return{root:{flexGrow:1},separator:{flexGrow:1},langButton:{paddingLeft:5}}}));function w(e){var t=k(),n=m.a.useState(null),r=Object(s.a)(n,2),c=r[0],i=r[1],o=function(t){"A"===t.currentTarget.nodeName&&e.onChangeLanguage(t.currentTarget.lang),i(null)};return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(l.a,{position:"fixed",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(v.Link,{to:"intro",spy:!0,smooth:!0,children:Object(a.jsx)(j.a,{color:"inherit",children:N.intro_title})}),Object(a.jsx)(v.Link,{to:"projects",spy:!0,smooth:!0,children:Object(a.jsx)(j.a,{color:"inherit",children:N.projects_title})}),Object(a.jsx)("div",{className:t.separator}),Object(a.jsxs)(j.a,{color:"inherit","aria-owns":c?"language-menu":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},"data-ga-event-category":"header","data-ga-event-action":"language",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)("span",{className:t.langButton,children:L.LANGUAGES_LABEL.filter((function(t){return t.code===e.userLanguage}))[0].text}),Object(a.jsx)(f.a,{fontSize:"small"})]}),Object(a.jsx)(d.a,{id:"language-menu",anchorEl:c,open:Boolean(c),onClose:o,children:L.LANGUAGES_LABEL.map((function(t){return Object(a.jsx)(p.a,{component:"a","data-no-link":"true",selected:e.language===t.code,onClick:o,lang:t.code,hrefLang:t.code,children:t.text},t.code)}))})]})})})}var E=n(132),G=n(69),B=n.n(G),I=Object(u.a)((function(e){return{desc:{whiteSpace:"pre-line"}}}));function P(e){var t=I();return Object(a.jsxs)(E.a,{id:"intro",children:[Object(a.jsx)("h1",{children:N.intro_title}),Object(a.jsx)("p",{className:t.desc,children:N.formatString(N.intro_description,{expYears:B()().diff("20110815","years")})})]})}var U=n(133),F=n(70),J=n(134),T=n(135),D=n(136),M=n(137),Y=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).proj=e.props.project,e}return Object(c.a)(s,[{key:"render",value:function(){var e=n(99)("./".concat(this.proj.img)).default;return Object(a.jsx)(U.a,{item:!0,xs:12,md:4,children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(T.a,{children:Object(a.jsx)(D.a,{component:"img",className:"projectImg",image:e})}),Object(a.jsx)(M.a,{children:this.proj.title})]})})}}]),s}(x.Component),H=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(E.a,{id:"projects",children:[Object(a.jsx)("h1",{children:N.projects_title}),Object(a.jsx)("p",{children:N.projects_description}),Object(a.jsx)(U.a,{container:!0,spacing:5,children:F.map((function(e,t){return Object(a.jsx)(Y,{project:e},t)}))})]})}}]),n}(x.Component),R=(n(102),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).getLanguage=function(){var e=(localStorage.getItem("userLanguage")||navigator.language||"es").substring(0,2);return L.LANGUAGES_LABEL.find((function(t){return t.code===e}))?e:"es"},a.handleLanguageChange=function(e){localStorage.setItem("userLanguage",e),a.setState({userLanguage:e})},a.getLanguage(),a.state={userLanguage:a.getLanguage()},a}return Object(c.a)(n,[{key:"render",value:function(){return N.setLanguage(this.state.userLanguage),Object(a.jsxs)(x.Fragment,{children:[Object(a.jsx)(w,{userLanguage:this.state.userLanguage,onChangeLanguage:this.handleLanguageChange}),Object(a.jsx)(P,{}),Object(a.jsx)(H,{})]})}}]),n}(x.Component)),z=n(7),V=n.n(z),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(103);V.a.render(Object(a.jsx)(m.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),W()},30:function(e,t){e.exports={LANGUAGES_LABEL:[{code:"en",text:"English"},{code:"es",text:"Espa\xf1ol"}]}},56:function(e){e.exports=JSON.parse('{"intro_title":"Introduction","intro_description":"Hi, my name is Alexis, I live in Autonomous City of Buenos Aires, Argentina.\\nI am a fullstack developer with {expYears} years experience making web applications, mainly with Java and Angular with PrimeNG.","projects_title":"Projects","projects_description":"I participated in these projects."}')},57:function(e){e.exports=JSON.parse('{"intro_title":"Presentaci\xf3n","intro_description":"Hola, me llamo Alexis, vivo en Ciudad Aut\xf3noma de Buenos Aires, Argentina.\\nSoy desarrollador fullstack con {expYears} a\xf1os de experiencia haciendo aplicaciones web, principalmente con Java y Angular con PrimeNG.","projects_title":"Projectos","projects_description":"Particip\xe9 en estos proyectos."}')},70:function(e){e.exports=JSON.parse('[{"title":"Valija digital","img":"pagosSuc.png"},{"title":"Pagos en sucursal","img":"pagosSuc.png"},{"title":"CCO","img":"cco.png"},{"title":"Rendici\xf3n de gastos","img":"pagosSuc.png"},{"title":"Remote deposit","img":"pagosSuc.png"}]')},95:function(e,t,n){var a={"./en":56,"./en.json":56,"./es":57,"./es.json":57};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=95},99:function(e,t,n){var a={"./cco.png":100,"./pagosSuc.png":101};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=99}},[[104,1,2]]]);
//# sourceMappingURL=main.4a3d40cc.chunk.js.map