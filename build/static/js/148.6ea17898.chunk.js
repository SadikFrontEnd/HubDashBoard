(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[148],{2230:function(e,a,t){"use strict";t.r(a),t.d(a,"EditCategory",(function(){return j}));var n=t(45),s=t(10),l=t(11),r=t(13),c=t(12),o=t(0),i=t.n(o),u=t(821),d=t(819),m=t(820),p=t(195),f=t(824),g=t(836),h=t(844),b=t(837),y=t(833),v=t(811),E=t(20),O=t(831),j=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("category_name",l.state.category_name),a.append("desc",l.state.desc),a.append("status",l.state.status),null!==l.state.selectedFile&&a.append("image",l.state.selectedFile,l.state.selectedName),O.a.post("/addbrand",a).then((function(e){console.log(e),l.props.history.push("/app/freshlist/category/categoryList")})).catch((function(e){console.log(e)}))},l.state={category_name:"",selectedFile:null,selectedName:"",desc:"",image:"",status:""},l}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Update Category")),i.a.createElement(m.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/freshlist/category/categoryListt")}},"Back"))),i.a.createElement(f.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,i.a.createElement(b.a,null,"Category Name"),i.a.createElement(y.a,{type:"text",placeholder:"",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,i.a.createElement(b.a,null,"Description"),i.a.createElement(y.a,{type:"text",placeholder:"Enter Here",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,i.a.createElement(b.a,null,"Category Image "),i.a.createElement(v.a,{type:"file",name:"image",value:this.state.image,onChange:this.onChangeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(h.a,null,i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(d.a,null,i.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Update Category"))))))}}]),t}(o.Component);a.default=j},831:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=s},833:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(16),r=t(18),c=t(0),o=t.n(c),i=t(1),u=t.n(i),d=t(5),m=t.n(d),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";g?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":y&&(O=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var j=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===E||u&&"function"===typeof u)&&(b.type=l),b.children&&!g&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":i}))},a}(o.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h},836:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(16),r=t(18),c=t(0),o=t.n(c),i=t(1),u=t.n(i),d=t(5),m=t.n(d),p=t(4),f=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,r=e.tag,c=e.innerRef,i=Object(s.a)(e,f),u=Object(p.mapToCssModules)(m()(a,!!l&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);h.propTypes=g,h.defaultProps={tag:"form"},a.a=h},837:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(0),r=t.n(l),c=t(1),o=t.n(c),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,l=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,g=Object(s.a)(e,m),h=[];c.forEach((function(a,n){var s=e[a];if(delete g[a],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var c,o=r?"-":"-"+a+"-";l=b(r,a,s.size),h.push(Object(d.mapToCssModules)(u()(((c={})[l]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else l=b(r,a,s),h.push(l)}}));var y=Object(d.mapToCssModules)(u()(a,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:f},g,{className:y}))};y.propTypes=g,y.defaultProps=h,a.a=y},844:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(0),r=t.n(l),c=t(1),o=t.n(c),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.row,c=e.disabled,o=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,m),g=Object(d.mapToCssModules)(u()(a,!!l&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===p&&(f.disabled=c),r.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=148.6ea17898.chunk.js.map