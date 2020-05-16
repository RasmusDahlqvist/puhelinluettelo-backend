(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(13),l=t.n(r),o=(t(20),t(14)),u=t(2),i=t(3),m=t.n(i),s="api/persons",d=function(e){return m.a.post(s,e)},f=function(){return m.a.get(s)},h=function(e){return m.a.delete("".concat(s,"/").concat(e))},b=function(e,n){return m.a.put("".concat(s,"/").concat(e),n)},v=function(e){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:e.checkName(e.persons,e.newName)?e.rePlacePerson:e.addPerson},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},p=function(e){return c.a.createElement("div",null,"filter shown with",c.a.createElement("input",{type:"text",onChange:e.handleFilterChange}))},g=function(e){return c.a.createElement("div",null,c.a.createElement("p",null,e.name," ",e.number,"   ",c.a.createElement("button",{onClick:e.remove},"Delete")))},E=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{className:"added"},n)},w=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{className:"deleted"},n)},j=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{className:"error"},n)},O=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{className:"replaced"},n)},N=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),m=i[0],s=i[1],N=Object(a.useState)(""),C=Object(u.a)(N,2),S=C[0],k=C[1],P=Object(a.useState)([{name:"",number:""}]),y=Object(u.a)(P,2),D=y[0],T=y[1],I=Object(a.useState)(!0),x=Object(u.a)(I,2),A=x[0],B=x[1],F=Object(a.useState)(null),J=Object(u.a)(F,2),U=J[0],W=J[1],M=Object(a.useState)(null),R=Object(u.a)(M,2),$=R[0],q=R[1],z=Object(a.useState)(null),G=Object(u.a)(z,2),H=G[0],K=G[1],L=Object(a.useState)(null),Q=Object(u.a)(L,2),V=Q[0],X=Q[1];Object(a.useEffect)((function(){console.log("effect"),f().then((function(e){console.log("promise fulfilled"),r(e.data)}))}),[]);var Y="",Z=A?t:D;return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(E,{message:U}),c.a.createElement(w,{message:$}),c.a.createElement(O,{message:H}),c.a.createElement(j,{message:V}),c.a.createElement(p,{handleFilterChange:function(e){B(!1),Y=t.filter((function(n){return n.name.toUpperCase().includes(e.target.value.toUpperCase())})),T(Y)}}),c.a.createElement("h2",null,"Add new"),c.a.createElement(v,{checkName:function(e,n){return e.some((function(e){return e.name===n}))},persons:t,newName:m,rePlacePerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===m}));console.log("ID",n.id);var a=Object(o.a)({},n,{number:S});console.log("changedPersons ",a),window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,a).then((function(e){r(t.map((function(n){return n.id!==a.id?n:e.data}))),K("Replaced ".concat(m)),setTimeout((function(){K(null)}),4e3)})).catch((function(e){X("Information of ".concat(m," has already deleted  from server")),setTimeout((function(){X(null)}),4e3)}))},addPerson:function(e){e.preventDefault();var n={name:m,number:S};r(t.concat(n)),d(n).then((function(e){W("Added ".concat(m)),setTimeout((function(){W(null)}),4e3),s(""),k("")})).catch((function(e){var n=e.response.data.error;console.log(n),X("".concat(n)),setTimeout((function(){X(null)}),4e3)}))},handleNameChange:function(e){B(!0),s(e.target.value)},handleNumberChange:function(e){k(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),Z.map((function(e){return c.a.createElement(g,{key:e.name,name:e.name,number:e.number,remove:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&(h(e).then((function(n){console.log(n),r(t.filter((function(n){return n.id!==e})))})),q("Deleted ".concat(n.name)),setTimeout((function(){q(null)}),4e3))}(e.id)}})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a77cf716.chunk.js.map