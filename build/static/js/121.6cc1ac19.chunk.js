(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{2425:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a(10),i=a(11),l=a(13),s=a(12),o=a(0),c=a.n(o),u=a(819),d=a(820),m=a(821),f=a(824),p=a(817),g=a(594),h=a(590),b=a(180),v=(a(44),a(102)),E=a(838),y=a(452),z=a(273),O=(a(20),a(834),a(832),a(836)),S=a(837),w=a(833),j=a(195),N=a(831),P=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).onChangeHandler=function(e){i.setState({selectedFile:e.target.files[0]}),i.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},i.changeHandler1=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",i.state.name),t.append("sortorder",i.state.sortorder),t.append("desc",i.state.desc),t.append("status",i.state.status),t.append("product_img",i.state.selectedFile,i.state.selectedName),N.a.post(" /addproductcategory",t).then((function(e){console.log(e),i.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},i.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},i}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Add New Product"),c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(u.a,{className:"m-1"},c.a.createElement(d.a,null,c.a.createElement("h2",null,"Flash Deal 2"))),c.a.createElement(f.a,null,c.a.createElement(O.a,{onSubmit:this.submitHandler},c.a.createElement(u.a,{className:"mb-1"},c.a.createElement(d.a,{lg:"12"},c.a.createElement(S.a,null,"Add New Product"),c.a.createElement(w.a,{required:!0,type:"select",name:"bannertype",placeholder:"Enter Identity Type",value:this.state.bannertype,onChange:this.changeHandler},c.a.createElement("option",{value:"select"},"--Select--"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2 "),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4 ")))),c.a.createElement(u.a,{style:{float:"right"}},c.a.createElement(j.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Add")))))))}}]),a}(o.Component),R=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e,i;Object(r.a)(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(i=t.call.apply(t,[this].concat(s))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"customerId",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.customerId))}},{headerName:"Prize",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.mobile))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",100),Object(n.a)(e,"cellRendererFramework",(function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=i.gridApi.getSelectedRows();i.runthisfunction(e.data._id),i.gridApi.updateRowData({remove:t})}}))})),e)]},i.onGridReady=function(e){i.gridApi=e.api,i.gridColumnApi=e.columnApi,i.setState({currenPageSize:i.gridApi.paginationGetCurrentPage()+1,getPageSize:i.gridApi.paginationGetPageSize(),totalPages:i.gridApi.paginationGetTotalPages()})},i.updateSearchQuery=function(e){i.gridApi.setQuickFilter(e)},i.filterSize=function(e){i.gridApi&&(i.gridApi.paginationSetPageSize(Number(e)),i.setState({currenPageSize:e,getPageSize:e}))},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),c.a.createElement(u.a,{className:"app-user-list"},c.a.createElement(d.a,{sm:"12"},c.a.createElement(d.a,null,c.a.createElement("h1",{sm:"12"},c.a.createElement(P,null)))),c.a.createElement(d.a,{sm:"12"},c.a.createElement(m.a,null,c.a.createElement(f.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement("h3",{className:"float-left"},"Product Table"))),null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(p.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(z.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134"))))),c.a.createElement(v.a.Consumer,null,(function(t){return c.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(c.a.Component);t.default=R},831:function(e,t,a){"use strict";var n=a(44),r=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=r},832:function(e,t,a){},833:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(16),l=a(18),s=a(0),o=a.n(s),c=a(1),u=a.n(c),d=a(5),m=a.n(d),f=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(i)>-1,E=new RegExp("\\D","g"),y=u||("select"===i||"textarea"===i?i:"input"),z="form-control";g?(z+="-plaintext",y=u||"input"):"file"===i?z+="-file":"range"===i?z+="-range":v&&(z=d?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var O=Object(f.mapToCssModules)(m()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,z),a);return("input"===y||u&&"function"===typeof u)&&(b.type=i),b.children&&!g&&"select"!==i&&"string"===typeof y&&"select"!==y&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(y,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h},836:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(16),l=a(18),s=a(0),o=a.n(s),c=a(1),u=a.n(c),d=a(5),m=a.n(d),f=a(4),p=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,l=e.tag,s=e.innerRef,c=Object(r.a)(e,p),u=Object(f.mapToCssModules)(m()(t,!!i&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:s,className:u}))},t}(s.Component);h.propTypes=g,h.defaultProps={tag:"form"},t.a=h},837:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(0),l=a.n(i),s=a(1),o=a.n(s),c=a(5),u=a.n(c),d=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,i=e.hidden,s=e.widths,o=e.tag,c=e.check,f=e.size,p=e.for,g=Object(r.a)(e,m),h=[];s.forEach((function(t,n){var r=e[t];if(delete g[t],r||""===r){var i,l=!n;if(Object(d.isObject)(r)){var s,o=l?"-":"-"+t+"-";i=b(l,t,r.size),h.push(Object(d.mapToCssModules)(u()(((s={})[i]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s))),a)}else i=b(l,t,r),h.push(i)}}));var v=Object(d.mapToCssModules)(u()(t,!!i&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:p},g,{className:v}))};v.propTypes=g,v.defaultProps=h,t.a=v}}]);
//# sourceMappingURL=121.6cc1ac19.chunk.js.map