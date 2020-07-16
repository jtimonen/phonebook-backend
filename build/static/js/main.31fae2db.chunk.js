(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),u=n.n(o),r=n(2),i=function(e){return c.a.createElement("div",null,e.name,": ",e.number," ",c.a.createElement("button",{onClick:e.deleteFun,name:e.name,id:e.id},"Delete"))},l=function(e){var t=e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}));return c.a.createElement("div",null," ",t.map((function(t){return c.a.createElement(i,{key:t.id,id:t.id,name:t.name,number:t.number,deleteFun:e.deleteFun})}))," ")},m=function(e){return c.a.createElement("div",null,"Filter for shown names: ",c.a.createElement("input",{value:e.value,onChange:e.onChange}))},d=function(e){return c.a.createElement("form",{onSubmit:e.addObject},c.a.createElement("div",{className:"myInput"}," Name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})," "),c.a.createElement("div",{className:"myInput"}," Number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})," "),c.a.createElement("div",null," ",c.a.createElement("button",{type:"submit"},"Add")," "))},f=n(3),s=n.n(f),h="http://localhost:3001/api/persons",p=function(){return s.a.get(h)},b=function(e){return s.a.post(h,e)},v=function(e,t){return s.a.put("".concat(h,"/").concat(e),t)},E=function(e){return s.a.delete("".concat(h,"/").concat(e))},g=function(e){return null===e.notification?null:c.a.createElement("div",{className:e.notification.type},e.notification.message)},N=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),i=Object(r.a)(u,2),f=i[0],s=i[1],h=Object(a.useState)(""),N=Object(r.a)(h,2),w=N[0],C=N[1],O=Object(a.useState)(""),j=Object(r.a)(O,2),y=j[0],k=j[1],S=Object(a.useState)(null),D=Object(r.a)(S,2),F=D[0],T=D[1],A=function(){p().then((function(e){return o(e.data)}))};Object(a.useEffect)(A,[]);var I={type:"errorNotification",message:"Operation failed."},J=function(e){var t=e.response.data.error;T(t?{type:"errorNotification",message:t}:I),setTimeout((function(){T(null)}),5e3)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(g,{notification:F}),c.a.createElement(m,{value:y,onChange:function(e){k(e.target.value)}}),c.a.createElement("h2",null,"Add new"),c.a.createElement(d,{addObject:function(e){e.preventDefault();var t={name:f,number:w},a=n.filter((function(e){return e.name===f}));if(a.length>0){var c="Contact ".concat(f," is already in the phonebook. Do you want to replace the old contact?");window.confirm(c)&&v(a[0].id,t).then(A).then((function(){T({type:"updateNotification",message:"Updated contact ".concat(f,".")}),setTimeout((function(){T(null)}),5e3)})).catch(J)}else b(t).then((function(e){o(n.concat(e.data))})).then((function(){T({type:"addNotification",message:"Added ".concat(f," to contacts!")}),setTimeout((function(){T(null)}),5e3)})).catch(J);s(""),C("")},newName:f,handleNameChange:function(e){s(e.target.value)},newNumber:w,handleNumberChange:function(e){C(e.target.value)}}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(l,{contacts:n,filter:y,deleteFun:function(e){var t=e.target;window.confirm("Delete ".concat(t.name,"?"))&&E(t.id).then(A).then((function(){var e;e=t.name,T({type:"deleteNotification",message:"Deleted ".concat(e," from contacts.")}),setTimeout((function(){T(null)}),5e3)})).catch(J)}}))};n(36);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.31fae2db.chunk.js.map