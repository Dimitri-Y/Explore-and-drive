"use strict";(self.webpackChunkexplore_and_drive=self.webpackChunkexplore_and_drive||[]).push([[837],{1906:function(n,e,r){r.d(e,{Z:function(){return pn}});var t,o,i,a,l,s,c,p,d,f,u,x,g,h,m,b,v,w,j,y,k=r(9434),z=r(168),M=r(9256),C=M.zo.ul(t||(t=(0,z.Z)(["\n  background-color: #fff;\n  gap: 50px 29px;\n  margin-top: 32px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  height: auto;\n  /* justify-content: space-between; */\n  padding-left: 18px;\n  padding-right: 18px;\n  max-width: 1184px;\n"]))),O=r(2791),Z=r(1126),E=r(9439),P=M.zo.li(o||(o=(0,z.Z)(["\n  // background-color: #000;\n  border-radius: 16px;\n  width: 274px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),I=M.zo.a(i||(i=(0,z.Z)(["\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  cursor: pointer;\n"]))),S=M.zo.img(a||(a=(0,z.Z)(["\n  /* width: 100%; */\n  border-radius: 16px;\n  height: 268px;\n  /* background-size: contain; */\n  object-fit: cover;\n"]))),N=M.zo.div(l||(l=(0,z.Z)(["\n  display: flex;\n  padding-top: 14px;\n"]))),L=M.zo.p(s||(s=(0,z.Z)(["\n  font-family: 'Manrope-500';\n  margin-right: auto;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0em;\n  max-width: 150px;\n"]))),A=M.zo.span(c||(c=(0,z.Z)(["\n  color: #3470ff;\n"]))),F=M.zo.p(p||(p=(0,z.Z)(["\n  font-family: 'Manrope-500';\n  margin-right: 10px;\n"]))),T=M.zo.p(d||(d=(0,z.Z)(["\n  font-family: 'Manrope-400';\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 8px;\n"]))),R=M.zo.button(f||(f=(0,z.Z)(["\n  padding: 12px;\n  width: 100%;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(52, 112, 255, 1);\n  border: 0px;\n  font-family: 'Manrope-600';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  cursor: pointer;\n  color: white;\n  margin-top: 28px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),_=r(2134),B=r(1253),W=r(885),D=r(2185),V=r(4164),G=r(184),H=function(n){if("xClose"===n.id)return(0,G.jsx)("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,G.jsx)("g",{stroke:"#111",children:(0,G.jsx)("path",{d:"M18 6 6 18M6 6l12 12"})})})},U=M.ZP.div(u||(u=(0,z.Z)(["\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n\n  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .modal_content {\n    position: relative;\n    /* min-width: 280px; */\n    max-height: 100vh;\n    max-width: 100vh;\n    overflow: hidden;\n    border-radius: 8px;\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    background: #fff;\n    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n\n    @media screen and (min-width: 768px) {\n      /* height: 50%; */\n    }\n  }\n  .modal_tittle {\n    position: absolute;\n    width: 100%;\n    height: 50px;\n    top: 0;\n    left: 0;\n  }\n\n  .xCloseBtn {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    width: 24px;\n    height: 24px;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    cursor: pointer;\n  }\n  .iconWrapper {\n    position: absolute;\n    top: 50;\n    right: 14;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    background-color: transparent;\n  }\n"]))),$=document.getElementById("portal"),q=function(n){var e=n.isModalActive,r=n.onClose,t=n.children;return(0,V.createPortal)((0,G.jsx)(D.V,{open:e,onClose:r,children:(0,G.jsx)(U,{children:(0,G.jsxs)(D.V.Panel,{className:"modal_content",children:[(0,G.jsx)(D.V.Title,{className:"modal_tittle",children:(0,G.jsx)("button",{type:"button",className:"xCloseBtn",onClick:r,children:(0,G.jsx)(H,{id:"xClose",className:"iconWrapper"})})}),(0,G.jsx)("div",{className:"modal_body",children:t})]})})}),$)},K=M.zo.div(x||(x=(0,z.Z)(["\n  padding: 40px;\n  overflow: auto;\n  .inline-block {\n    /* max-height: calc(80vh); */\n    display: flex;\n    flex-direction: column;\n  }\n  /* @media screen and (min-width: 768px) {\n    height: 100%;\n  } */\n"]))),Y=M.zo.img(g||(g=(0,z.Z)(["\n  width: 461px;\n  object-fit: cover;\n  height: 248px;\n  border-radius: 16px;\n"]))),J=M.zo.p(h||(h=(0,z.Z)(["\n  font-family: 'Manrope-500';\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0em;\n  margin-top: 14px;\n"]))),Q=M.zo.span(m||(m=(0,z.Z)(["\n  color: #3470ff;\n"]))),X=M.zo.p(b||(b=(0,z.Z)(["\n  font-family: 'Manrope-400';\n  width: calc(100% -80px);\n  max-width: 461px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 8px;\n"]))),nn=M.zo.div(v||(v=(0,z.Z)(["\n  font-family: 'Manrope-400';\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0em;\n  max-width: 461px;\n  margin-top: 14px;\n  display: flex;\n  flex-direction: column;\n  .accessories {\n    margin-top: 24px;\n  }\n"]))),en=M.zo.ul(w||(w=(0,z.Z)(["\n  display: flex;\n  width: 300px;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),rn=M.zo.li(j||(j=(0,z.Z)(["\n  padding: 7px 14px 7px 14px;\n  border-radius: 35px;\n  font-family: 'Montserrat-400';\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  background-color: #f9f9f9;\n  color: rgba(54, 53, 53, 1);\n  display: flex;\n  .value {\n    font-family: 'Montserrat-600';\n    font-weight: 600;\n    color: rgba(52, 112, 255, 1);\n  }\n"]))),tn=M.zo.button(y||(y=(0,z.Z)(["\n  padding: 12px;\n  width: 168px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(52, 112, 255, 1);\n  border: 0px;\n  font-family: 'Manrope-600';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  color: white;\n  margin-top: 28px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),on=function(n){var e,r,t=n.advert,o=t.make||" ",i=t.model||" ",a=t.year||" ",l=t.id,s=t.address&&t.address,c=t.address&&s.slice(s.indexOf(",")+2),p=t.address&&c.slice(0,c.indexOf(",")),d=t.address&&c.slice(c.indexOf(",")+2),f=t.rentalCompany,u=t.type,x=t.fuelConsumption,g=t.engineSize,h=t.description,m=t.rentalConditions&&parseInt(t.rentalConditions.slice(t.rentalConditions.indexOf("Minimum age:")+"Minimum age:".length+1,t.rentalConditions.indexOf("\n")))||null,b=t.rentalPrice&&parseInt(t.rentalPrice.slice(t.rentalPrice.indexOf("$")+1)),v=t.mileage,w=t.rentalConditions?t.rentalConditions.slice(t.rentalConditions.indexOf(m.toString())+3).split("\n"):[],j=t.rentalConditions?w.map((function(n){return{condition:n,value:""}})):[];return m&&j.unshift({condition:"Minimum age: ",value:m}),v&&j.push({condition:"Mileage: ",value:v}),b&&j.push({condition:"Price: ",value:b}),(0,G.jsxs)(K,{className:"form",children:[(0,G.jsx)(Y,{src:t.img?t.img:"https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg"}),(0,G.jsxs)("div",{className:"inline-block",children:[(0,G.jsxs)(J,{children:[o,(0,G.jsxs)(Q,{children:[" ",i,", "]}),a]}),(0,G.jsxs)(X,{children:[p&&" ".concat(p," |")," ",d&&" ".concat(d," |")," Id: ",l," |",f&&" ".concat(f," |")," ",a&&" Year:".concat(a," |"),u&&" Type: ".concat(u," |"),x&&" Fuel Consumption: ".concat(x," |"),g&&" Engine Size: ".concat(g," |")]}),(0,G.jsxs)(nn,{children:[h,t.functionalities&&t.accessories&&(0,G.jsx)("p",{className:"accessories",children:"Accessories and functionalities:"})]}),(0,G.jsxs)(X,{children:[null===(e=t.accessories)||void 0===e?void 0:e.join(" | "),t.functionalities&&"| ",null===(r=t.functionalities)||void 0===r?void 0:r.join(" | ")]}),(0,G.jsx)(nn,{children:"Rental Conditions:"}),(0,G.jsx)(en,{children:j.map((function(n,e){return(0,G.jsxs)(rn,{children:[n.condition+" ",(0,G.jsx)("p",{className:"value",children:n.value})]},e)}))}),(0,G.jsx)(tn,{children:"Rental car"})]})]})},an=function(n){var e=n.advert,r=n.onModalClose;return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(q,{isModalActive:!0,onClose:r,children:(0,G.jsx)(on,{advert:e})})})},ln=function(n){var e,r,t=n.advert,o=(0,k.I0)(),i=(0,k.v9)(W.Tc),a=(0,O.useState)(i.find((function(n){return n.id===t.id}))),l=(0,E.Z)(a,2),s=l[0],c=l[1],p=(0,O.useState)(!1),d=(0,E.Z)(p,2),f=d[0],u=d[1],x=(e=t,r=["id","type","fuelConsumption","engineSize","accessories","functionalities","rentalCompany","address"],Object.fromEntries(r.map((function(n){return[n,e[n]]})))),g=t.address&&t.address,h=t.address&&g.slice(g.indexOf(",")+2),m=t.address&&h.slice(0,h.indexOf(",")),b=t.address&&h.slice(h.indexOf(",")+2),v=t.rentalCompany,w=t.type,j=x.id;return(0,G.jsxs)(G.Fragment,{children:[" ",(0,G.jsxs)(P,{children:[(0,G.jsx)(I,{onClick:function(){o((0,B.d)(t)),c(!s)},children:s?(0,G.jsx)(_.M_L,{fill:"rgba(52, 112, 255, 1)",size:18}):(0,G.jsx)(_.lo,{fill:"rgba(255, 255, 255, 0.8)",size:18})}),(0,G.jsx)(S,{src:t.img?t.img:"https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg"}),(0,G.jsxs)(N,{children:[(0,G.jsxs)(L,{children:[t.make,(0,G.jsxs)(A,{children:[" ",t.model,", "]}),t.year]}),(0,G.jsx)(F,{children:t.rentalPrice})]}),(0,G.jsxs)(T,{children:[m&&" ".concat(m," |")," ",b&&" ".concat(b," |")," Id: ",j," |",v&&" ".concat(v," |"),w&&" Type: ".concat(w," |")]}),(0,G.jsx)(R,{type:"button",onClick:function(){u(!0)},children:"Learn More"})]},t.id),f&&(0,G.jsx)(an,{advert:t,onModalClose:function(){u(!1)}})]})},sn=r(861),cn=r(9085),pn=(r(5462),function(n){var e=n.option,r=(0,k.I0)(),t=(0,k.v9)(W.rE),o=(0,k.v9)(W.Tc),i=(0,k.v9)(W.xU);return(0,O.useEffect)((function(){r((0,Z.G)()).then((function(n){"Request failed with status code 404"===n.payload&&cn.Am.error("Request failed with status code 404")})).catch((function(n){cn.Am.error("".concat(n))}))}),[r]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(C,{children:i?(0,G.jsx)(sn.Z,{}):"favorites"===e?o.map((function(n){return(0,G.jsx)(ln,{advert:n},n.id)})):t.map((function(n){return(0,G.jsx)(ln,{advert:n},n.id)}))}),(0,G.jsx)(cn.Ix,{})]})})},866:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,o,i,a,l,s,c=r(1906),p=r(4165),d=r(5861),f=r(3433),u=r(9434),x=r(168),g=r(9256),h=g.zo.form(t||(t=(0,x.Z)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  padding-bottom: 18px;\n  padding-left: 18px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 18px;\n  justify-content: center;\n  gap: 18px;\n\n  .select {\n  }\n  .selectControl {\n    display: flex;\n    font-family: 'Manrope-500';\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 20px;\n    border: 0;\n    background-color: rgba(247, 247, 251, 1);\n    color: rgba(18, 20, 23, 1);\n    padding: 14px 0px 14px 18px;\n    border-radius: 14px;\n    gap: 32px;\n  }\n  .selectMenu {\n    font-family: 'Manrope-500';\n    text-align: left;\n    border-radius: 14px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px;\n    color: rgba(18, 20, 23, 0.2);\n    height: 272px;\n    border: 1px solid rgba(18, 20, 23, 0.05);\n    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);\n  }\n  .selectMenu::-webkit-scrollbar {\n    width: 8px;\n  }\n  .selectMenu::-webkit-scrollbar-track {\n  }\n  .selectMenu::-webkit-scrollbar-thumb {\n    height: 130px;\n    background-color: rgba(18, 20, 23, 0.05);\n    border-radius: 10px;\n  }\n"]))),m=g.zo.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  .span-text {\n    position: absolute;\n    top: 14px;\n    left: 14px;\n    font-family: 'Manrope-500';\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 20px;\n    color: rgba(18, 20, 23, 1);\n  }\n  .errorField {\n    font-family: 'Manrope-500';\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 14px;\n    color: #ff0000;\n  }\n  input::placeholder {\n    font-family: 'Manrope-500';\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 20px;\n    color: rgba(18, 20, 23, 1);\n  }\n"]))),b=g.zo.input(i||(i=(0,x.Z)(["\n  width: 160px;\n  padding: 14px 0px 14px 24px;\n  border: none;\n  background: linear-gradient(\n      0deg,\n      rgba(138, 138, 137, 0.2),\n      rgba(138, 138, 137, 0.2)\n    ),\n    linear-gradient(0deg, #f7f7fb, #f7f7fb);\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  font-family: 'Manrope-500';\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: rgba(18, 20, 23, 1);\n  border-radius: 14px 0px 0px 14px;\n  outline: none;\n  ","\n\n  input::placeholder {\n    font-family: 'Manrope-500';\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 20px;\n    color: rgba(18, 20, 23, 1);\n  }\n"])),(function(n){return n.hasError&&"\n      border: 2px solid red; \n    "})),v=g.zo.input(a||(a=(0,x.Z)(["\n  width: 160px;\n  padding: 14px 0px 14px 24px;\n  border-radius: 0px 14px 14px 0px;\n  border: none;\n  background: linear-gradient(\n      0deg,\n      rgba(138, 138, 137, 0.2),\n      rgba(138, 138, 137, 0.2)\n    ),\n    linear-gradient(0deg, #f7f7fb, #f7f7fb);\n  font-family: 'Manrope-500';\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: rgba(18, 20, 23, 1);\n  outline: none;\n\n  ","\n\n  input::placeholder {\n    font-family: 'Manrope-500';\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 20px;\n    color: rgba(18, 20, 23, 1);\n  }\n"])),(function(n){return n.hasError&&"\n      border: 2px solid red; \n    "})),w=g.zo.label(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-family: 'Manrope-500';\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  color: rgba(138, 138, 137, 1);\n  gap: 8px;\n"])));w.shouldForwardProp=function(n){return"hasError"!==n};var j,y=g.zo.button(s||(s=(0,x.Z)(["\n  padding: 14px 44px 14px 44px;\n  width: 136px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(52, 112, 255, 1);\n  border: 0px;\n  font-family: 'Manrope-600';\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  cursor: pointer;\n  color: white;\n  margin-top: 28px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),k=r(5705),z=r(885),M=r(2250),C=r(2791),O=["title","titleId"];function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},Z.apply(this,arguments)}function E(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function P(n,e){var r=n.title,t=n.titleId,o=E(n,O);return C.createElement("svg",Z({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},o),r?C.createElement("title",{id:t},r):null,j||(j=C.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#121417",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var I,S=C.forwardRef(P),N=(r.p,["title","titleId"]);function L(){return L=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},L.apply(this,arguments)}function A(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function F(n,e){var r=n.title,t=n.titleId,o=A(n,N);return C.createElement("svg",L({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},o),r?C.createElement("title",{id:t},r):null,I||(I=C.createElement("path",{d:"M5 12.5L10 7.5L15 12.5",stroke:"#121417",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var T=C.forwardRef(F),R=(r.p,r(1315)),_=(r(209),r(6727)),B=r(9085),W=(r(5462),r(184)),D=_.Ry().shape({from:_.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 >= 0").typeError("\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0447\u0438\u0441\u043b\u0430").max(_.iH("to"),"\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f 'From' \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043c\u0435\u043d\u0448\u0435 \u043d\u0456\u0436 'To'"),to:_.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 >= 0").typeError("\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0447\u0438\u0441\u043b\u0430").min(_.iH("from"))}),V=function(){for(var n=(0,u.v9)(z.AD),e=(0,u.v9)(z.OG),r=Array.from(new Set(e.filter((function(n){return void 0!==n.rentalPrice})).map((function(n){return void 0!==n.rentalPrice&&n.rentalPrice})))).map((function(n){return n&&parseInt(n.slice(1))})).sort((function(n,e){return n-e})),t=Math.max.apply(Math,(0,f.Z)(r)),o=[],i=0;i<=t;i+=10)o.push(i);var a=(0,u.I0)(),l=function(){var n=(0,d.Z)((0,p.Z)().mark((function n(e){var r,t,o,i,l;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),r=s.values,t=r.make,o=r.price,i=r.from,l=r.to,s.errors.from&&s.errors.to?(s.errors.from&&B.Am.error("".concat(s.errors.from)),s.errors.to&&B.Am.error("".concat(s.errors.to))):(a((0,M.M)({make:t,price:o,from:i,to:l})),s.resetForm());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=(0,k.TA)({initialValues:{make:n.make||"",price:n.price||"",from:n.from||0,to:n.to||0},onSubmit:l,validationSchema:D});console.log(n);var c=function(n){var e=n.replace(/[^0-9]/g,"");if(e.length>3){for(var r=[],t=e.length;t>0;t-=3)r.unshift(e.slice(Math.max(t-3,0),t));return r.join(",")}return e};return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(h,{onSubmit:l,children:[(0,W.jsxs)(w,{children:["Car brand",(0,W.jsx)(R.Z,{type:"text",name:"make",options:z.dW,onChange:function(n){s.handleChange({target:{name:"make",value:n.value}})},value:s.values.make,placeholder:"Enter the text",className:"select",controlClassName:"selectControl",menuClassName:"selectMenu",arrowOpen:(0,W.jsx)(T,{}),arrowClosed:(0,W.jsx)(S,{})})]}),(0,W.jsxs)(w,{children:["Price/ 1 hour",(0,W.jsx)(R.Z,{type:"text",name:"price",options:o,onChange:function(n){s.handleChange({target:{name:"price",value:"To $".concat(n.value)}})},value:s.values.price,placeholder:"To $",className:"select",controlClassName:"selectControl",menuClassName:"selectMenu",arrowOpen:(0,W.jsx)(T,{}),arrowClosed:(0,W.jsx)(S,{})})]}),(0,W.jsxs)(w,{children:["\u0421ar mileage / km",(0,W.jsxs)(m,{children:[(0,W.jsx)(b,{type:"text",name:"from",placeholder:"From",onChange:function(n){var e=n.target.value.replace(/\D/g,"");s.handleChange({target:{name:"from",value:e}})},value:"From ".concat(s.values.from?c(s.values.from.toString()):" "),hasError:s.errors.from}),(0,W.jsx)(v,{type:"text",name:"to",placeholder:"To",onChange:function(n){var e=n.target.value.replace(/\D/g,"");s.handleChange({target:{name:"to",value:e}})},value:"To ".concat(s.values.to?c(s.values.to.toString()):" "),hasError:s.errors.to})]})]}),(0,W.jsx)(y,{type:"submit",children:"Search"}),(0,W.jsx)(B.Ix,{})]})})};function G(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(V,{}),(0,W.jsx)(c.Z,{})]})}},885:function(n,e,r){r.d(e,{AD:function(){return i},OG:function(){return o},Tc:function(){return l},dW:function(){return c},rE:function(){return s},xU:function(){return a}});var t=r(6916),o=function(n){return n.adverts.items},i=function(n){return n.filter.filter},a=function(n){return n.adverts.isLoading},l=function(n){return n.adverts.favorites},s=(0,t.P1)([o,i],(function(n,e){return null===n||void 0===n?void 0:n.filter((function(n){var r=parseInt(e.price.replace(/[^0-9]/g,"")),t=n.rentalPrice&&parseInt(n.rentalPrice.replace(/[^0-9]/g,""));return console.log(t),(""===e.make||n.make===e.make)&&(!(""!==e.price&&t>r)&&(!(e.from>=0&&0!==e.to)||e.from<=n.mileage&&e.to>=n.mileage))}))})),c=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]}}]);
//# sourceMappingURL=837.d0eb0881.chunk.js.map