(this["webpackJsonppost-crud"]=this["webpackJsonppost-crud"]||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/down-chevron.2febd8c3.svg"},27:function(e,t,a){e.exports=a.p+"static/media/tick.8b4d6e74.svg"},29:function(e,t,a){e.exports=a(44)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(15),r=a.n(o),l=(a(34),a(10)),s=a(1),i=(a(35),a(36),a(37),function(e){var t=Object(s.g)();return n.a.createElement("div",{className:"navigation"},n.a.createElement(l.b,{to:"".concat(t.pathname),className:"site-header"},"Post",n.a.createElement("span",null,"CRUD")),n.a.createElement("ul",{className:"nav-links"},n.a.createElement(l.b,{to:"#create-post",exact:!0},"Create Post")))}),m=a(11),d=(a(20),a(26)),u=a.n(d),p=a(27),E=a.n(p),y=a(9),g=Object(y.b)((function(e){return{catagory:e.catagory,selectedCatagory:e.selectedCatagory}}),(function(e){return{selectCatagory:function(t){e({type:"SELECT_CATAGORY",payload:{catagoryName:t}})}}}))((function(e){var t=Object(s.g)(),a=Object(c.useState)(!1),o=Object(m.a)(a,2),r=o[0],i=o[1],d=Object(c.useState)(""),p=Object(m.a)(d,2),y=p[0],g=p[1];Object(c.useEffect)((function(){var t="";e.selectedCatagory.forEach((function(e){""!==t&&(t+=" , "),t+=e})),g(t)}),[e.selectedCatagory]);return n.a.createElement("div",null,n.a.createElement("div",{className:"post-catagory",onClick:function(){i(!r)}},n.a.createElement("div",{className:"post-catagory-select"},n.a.createElement("span",null,y.length?y:"Post Catagory")),n.a.createElement("img",{src:u.a,height:"15px",alt:"down-chevron"})),r?n.a.createElement("div",{className:"post-catagory-option"},n.a.createElement(l.b,{to:"".concat(t.pathname).concat(t.hash,"#create-catagory")},"Create New Catagory"),e.catagory.map((function(t,a){return n.a.createElement("li",{id:t,onClick:function(t){return e.selectCatagory(t.target.id)},key:a},t,e.selectedCatagory.filter((function(e){return e===t})).length?n.a.createElement("span",null,n.a.createElement("img",{src:E.a,height:"15px",alt:"tick"})):null)}))):null)})),f=Object(y.b)((function(e){return{posts:e.posts}}),(function(e){return{clearSelectedCatagory:function(){e({type:"CLEAR_SELECTED_CATAGORY"})},createNewPost:function(t){e({type:"CREATE_POST",payload:{feed:t}})},setSelectedCatagory:function(t){e({type:"SET_SELECTED_CATAGORY",payload:{id:t}})},editPost:function(t,a){e({type:"EDIT_POST",payload:{id:t,feed:a}})}}}))((function(e){var t=Object(s.g)(),a=Object(s.f)(),o=Object(s.h)(),r=Object(c.useState)(""),l=Object(m.a)(r,2),i=l[0],d=l[1];Object(c.useEffect)((function(){if("#edit-post"===t.hash){var a=o.id;d(e.posts[a].feed),e.setSelectedCatagory(a)}}),[]);return n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("span",{className:"modal-title"},e.title),n.a.createElement("span",{className:"modal-close",onClick:function(){e.clearSelectedCatagory(),a.push(t.pathname)}},"\xd7")),n.a.createElement("div",{className:"modal-content"},n.a.createElement("textarea",{className:"post-textarea",placeholder:"What's on your mind?",rows:"4",cols:"50",value:i,onChange:function(e){d(e.target.value)}}),n.a.createElement(g,null)),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",onClick:function(){"#edit-post"===t.hash?(e.editPost(o.id,i),a.replace("".concat(t.pathname))):(e.createNewPost(i),a.replace("".concat(t.pathname)))}},"Post"))))})),b=Object(y.b)(null,(function(e){return{saveNewCatagory:function(t){e({type:"SAVE_NEW_CATAGORY",payload:{catagoryName:t}})}}}))((function(e){var t=Object(s.g)(),a=Object(s.f)(),o=Object(c.useState)(""),r=Object(m.a)(o,2),l=r[0],i=r[1];return n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("span",{className:"modal-title"},"Create Catagory"),n.a.createElement("span",{className:"modal-close",onClick:function(){a.push("".concat(t.pathname,"#create-post"))}},"\xd7")),n.a.createElement("div",{className:"modal-content"},n.a.createElement("input",{className:"post-textarea",placeholder:"Catagory Name",type:"text",value:l,onChange:function(e){return i(e.target.value)}})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",onClick:function(){e.saveNewCatagory(l),"#edit-post#create-catagory"===t.hash?a.replace("".concat(t.pathname,"#edit-post")):a.replace("".concat(t.pathname,"#create-post"))}},"Save"))))})),C=(a(43),function(e){return n.a.createElement("div",{className:"post-div"},n.a.createElement("div",{className:"post-upper"},n.a.createElement("span",{className:"post-user-name"},"User Name"),n.a.createElement("div",{className:"post-menu"},n.a.createElement("span",null,"..."),n.a.createElement("div",{className:"dropdown-content"},n.a.createElement(l.b,{to:"/post/".concat(e.id,"#edit-post")},"Edit"),n.a.createElement(l.b,{to:"/post/".concat(e.id,"#delete-post")},"Delete")))),n.a.createElement("div",{className:"post-main"},n.a.createElement("span",null,e.feed)),n.a.createElement("div",{className:"post-catagories"},e.catagories.map((function(e,t){return n.a.createElement("li",{key:t},e)}))))}),O=Object(y.b)((function(e){return{posts:e.posts}}),(function(e){return{deletePost:function(t){e({type:"DELETE_POST",payload:{id:t}})}}}))((function(e){var t=e.location.hash,a=e.match.params.id,o=Object(s.f)();return Object(c.useEffect)((function(){a&&"#delete-post"===t&&(e.deletePost(a),o.replace("/post"))}),[a,t]),n.a.createElement("div",{className:""},n.a.createElement(i,null),n.a.createElement("div",{className:"posts-area"},e.posts.map((function(e,t){return n.a.createElement(C,{key:t,id:t,feed:e.feed,catagories:e.catagory})}))),a&&"#edit-post"===t||a&&"#edit-post#create-catagory"===t?n.a.createElement(f,{title:"Edit Post"}):null,"#create-post"===t||"#create-post#create-catagory"===t?n.a.createElement(f,{title:"Create Post"}):null,"#create-post#create-catagory"===t||"#edit-post#create-catagory"===t?n.a.createElement(b,null):null)}));var v=function(){return n.a.createElement(l.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/post/:id",component:O}),n.a.createElement(s.a,{path:"/",component:O})))},h=a(8),j=a(3),N={posts:[{feed:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia odio voluptas? Similique fugit nemo nulla, perspiciatis possimus quis optio dolorum ab, culpa nihil facere, rerum officia distinctio sit quisquam?",catagory:["Cat A","Cat B"]},{feed:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi consequatur, debitis tenetur maxime corrupti voluptas doloremque aut maiores libero cum nam enim voluptatem blanditiis. Consequuntur modi atque illo molestias?",catagory:[]}],catagory:["Cat A","Cat B"],selectedCatagory:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_NEW_CATAGORY":var a=e.catagory;return Object(j.a)(Object(j.a)({},e),{},{catagory:[].concat(Object(h.a)(a),[t.payload.catagoryName]),selectedCatagory:[].concat(Object(h.a)(e.selectedCatagory),[t.payload.catagoryName])});case"SELECT_CATAGORY":var c=e.selectedCatagory.filter((function(e){return e===t.payload.catagoryName})).length;if(c){var n=e.selectedCatagory.filter((function(e){return e!==t.payload.catagoryName}));return Object(j.a)(Object(j.a)({},e),{},{selectedCatagory:Object(h.a)(n)})}return Object(j.a)(Object(j.a)({},e),{},{selectedCatagory:[].concat(Object(h.a)(e.selectedCatagory),[t.payload.catagoryName])});case"CLEAR_SELECTED_CATAGORY":return Object(j.a)(Object(j.a)({},e),{},{selectedCatagory:[]});case"CREATE_POST":var o=e.posts;return o.unshift({feed:t.payload.feed,catagory:Object(h.a)(e.selectedCatagory)}),Object(j.a)(Object(j.a)({},e),{},{posts:Object(h.a)(o),selectedCatagory:[]});case"SET_SELECTED_CATAGORY":var r=t.payload.id,l=[].concat(Object(h.a)(e.selectedCatagory),Object(h.a)(e.posts[r].catagory));return l=new Set(l),Object(j.a)(Object(j.a)({},e),{},{selectedCatagory:Object(h.a)(l)});case"EDIT_POST":var s=e.posts;return s.splice(t.payload.id,1),s.splice(t.payload.id,0,{feed:t.payload.feed,catagory:e.selectedCatagory}),Object(j.a)(Object(j.a)({},e),{},{posts:Object(h.a)(s),selectedCatagory:[]});case"DELETE_POST":var i=e.posts;return i.splice(t.payload.id,1),Object(j.a)(Object(j.a)({},e),{},{posts:Object(h.a)(i)})}return e},T=a(18),A=Object(T.b)(S);r.a.render(n.a.createElement(y.a,{store:A},n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.eae3684c.chunk.js.map