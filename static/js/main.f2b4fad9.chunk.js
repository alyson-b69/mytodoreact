(this.webpackJsonpmytodoreact=this.webpackJsonpmytodoreact||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(13),n(14),n(4)),l=n(7),u=n(2),s=function(e){var t=e.onTodoAdd,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],i=r[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=(new Date).getTime();t({id:n,nom:c,done:!1}),i("")},className:"taskForm"},o.a.createElement("input",{value:c,onChange:function(e){i(e.currentTarget.value)},type:"text",placeholder:"Ajouter une todo",className:"inputAdd"}),o.a.createElement("button",{type:"sumbit",className:"addingBtn"},"Ajouter"))},m=function(e){var t=e.details,n=e.onDelete,a=e.onToggle;return o.a.createElement("li",{className:"".concat(t.done?"done":"")},o.a.createElement("div",{className:"task ".concat(t.done?"done":"")},o.a.createElement("span",{className:"taskCheckbox"},o.a.createElement("input",{type:"checkbox",checked:t.done,onChange:function(){a(t.id)}})),o.a.createElement("span",{className:"taskText"},t.nom),o.a.createElement("button",{className:"deletingBtn",onClick:function(){return n(t.id)}},"X")))},d=function(e){var t=e.filters,n=e.currentFilter,a=e.onFilterChange;return o.a.createElement("div",{className:"filters"},t.map((function(e){return o.a.createElement("button",{key:e,onClick:function(){a(e)},className:"filter ".concat(n===e?"current":"")},e)})))},f=function(e){var t=e.todoCount;return o.a.createElement("span",{className:"taskCount"},0===t?"All tasks are done":1===t?"1 t\xe2che \xe0 faire":"".concat(t," t\xe2ches \xe0 faire"))},p=(n(15),function(){var e=Object(a.useState)([{id:1,nom:"Apprendre React",done:!1},{id:2,nom:"Cr\xe9er TodoApp",done:!0},{id:3,nom:"Prendre un caf\xe9",done:!1}]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("Toutes"),p=Object(u.a)(c,2),E=p[0],h=p[1],v=function(e){r(n.filter((function(t){return t.id!==e})))},b=function(e){r(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t})))};return o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"MA TODOLIST"),o.a.createElement("div",{className:"taskList"},o.a.createElement(s,{onTodoAdd:function(e){r([].concat(Object(l.a)(n),[e]))}}),o.a.createElement("ul",null,("\xe0 faire"===E?n.filter((function(e){return!e.done})):"faites"===E?n.filter((function(e){return e.done})):n).map((function(e){return o.a.createElement(m,{key:e.id,details:e,onDelete:v,onToggle:b})})))),o.a.createElement("div",{className:"footer"},o.a.createElement(f,{todoCount:n.filter((function(e){return!e.done})).length}),o.a.createElement(d,{currentFilter:E,filters:["Toutes","faites","\xe0 faire"],onFilterChange:function(e){h(e)}})))});var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f2b4fad9.chunk.js.map