(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),u=n.n(o),i=n(2),l=function(e){return c.a.createElement("div",null,e.name,": ",e.number," ",c.a.createElement("button",{onClick:e.deleteFun,name:e.name,id:e.id},"Delete"))},r=function(e){var t=e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}));return c.a.createElement("div",null," ",t.map((function(t){return c.a.createElement(l,{key:t.id,id:t.id,name:t.name,number:t.number,deleteFun:e.deleteFun})}))," ")},m=function(e){return c.a.createElement("div",null,"Filter for shown names: ",c.a.createElement("input",{value:e.value,onChange:e.onChange}))},f=function(e){return c.a.createElement("form",{onSubmit:e.addObject},c.a.createElement("div",{className:"myInput"}," Name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})," "),c.a.createElement("div",{className:"myInput"}," Number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})," "),c.a.createElement("div",null," ",c.a.createElement("button",{type:"submit"},"Add")," "))},d=n(3),s=n.n(d),h="http://localhost:3001/api/persons",b=function(){return s.a.get(h)},p=function(e){return s.a.post(h,e)},E=function(e,t){return s.a.put("".concat(h,"/").concat(e),t)},v=function(e){return s.a.delete("".concat(h,"/").concat(e))},g=function(e){return null===e.notification?null:c.a.createElement("div",{className:e.notification.type},e.notification.message)},N=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],s=l[1],h=Object(a.useState)(""),N=Object(i.a)(h,2),w=N[0],O=N[1],j=Object(a.useState)(""),C=Object(i.a)(j,2),y=C[0],k=C[1],S=Object(a.useState)(null),D=Object(i.a)(S,2),F=D[0],T=D[1],A=function(){b().then((function(e){return o(e.data)}))};Object(a.useEffect)(A,[]);var I={type:"errorNotification",message:"Operation failed."},J=function(){T(I),setTimeout((function(){T(null)}),3e3)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(g,{notification:F}),c.a.createElement(m,{value:y,onChange:function(e){k(e.target.value)}}),c.a.createElement("h2",null,"Add new"),c.a.createElement(f,{addObject:function(e){e.preventDefault();var t={name:d,number:w},a=n.filter((function(e){return e.name===d}));if(a.length>0){var c="Contact ".concat(d," is already in the phonebook. Do you want to replace the old contact?");window.confirm(c)&&(console.log(a[0].id),E(a[0].id,t).then(A).then((function(){T({type:"updateNotification",message:"Updated contact ".concat(d,".")}),setTimeout((function(){T(null)}),3e3)})).catch((function(e){J()})))}else p(t).then((function(e){o(n.concat(e.data))})).then((function(){T({type:"addNotification",message:"Added ".concat(d," to contacts!")}),setTimeout((function(){T(null)}),3e3)})).catch((function(e){J()}));s(""),O("")},newName:d,handleNameChange:function(e){s(e.target.value)},newNumber:w,handleNumberChange:function(e){O(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(r,{contacts:n,filter:y,deleteFun:function(e){var t=e.target;window.confirm("Delete ".concat(t.name,"?"))&&v(t.id).then(A).then((function(){var e;e=t.name,T({type:"deleteNotification",message:"Deleted ".concat(e," from contacts.")}),setTimeout((function(){T(null)}),3e3)})).catch((function(e){J()}))}}))};n(36);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cb8206a2.chunk.js.map