(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[196],{2170:function(e,a,t){"use strict";t.r(a);var n=t(45),r=t(10),i=t(11),l=t(13),s=t(12),c=t(0),o=t.n(c),u=t(819),d=t(820),m=t(821),f=t(195),p=t(824),g=t(817),h=t(594),b=t(590),v=t(180),E=t(833),w=(t(44),t(62)),z=(t(831),t(102)),S=t(838),N=t(320),y=t(317),P=t(273),R=t(20),x=(t(834),t(832),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e,i;Object(r.a)(this,t);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(i=a.call.apply(a,[this].concat(s))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"username",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.username))}},{headerName:"Email",field:"email",filter:!0,width:190,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.email))}},{headerName:"Mobile No.",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.mobile))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?o.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"false"===e.value?o.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(N.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return R.a.push("/app/freshlist/customer/viewCustomer/".concat(e.data._id))}}),o.a.createElement(y.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return R.a.push("/app/freshlist/customer/editCustomer/".concat(e.data._id))}}))})),e)]},i.onGridReady=function(e){i.gridApi=e.api,i.gridColumnApi=e.columnApi,i.setState({currenPageSize:i.gridApi.paginationGetCurrentPage()+1,getPageSize:i.gridApi.paginationGetPageSize(),totalPages:i.gridApi.paginationGetTotalPages()})},i.updateSearchQuery=function(e){i.gridApi.setQuickFilter(e)},i.filterSize=function(e){i.gridApi&&(i.gridApi.paginationSetPageSize(Number(e)),i.setState({currenPageSize:e,getPageSize:e}))},i}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return console.log(t),o.a.createElement(u.a,{className:"app-user-list"},o.a.createElement(d.a,{sm:"12"}),o.a.createElement(d.a,{sm:"12"},o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"RewardPoints")),o.a.createElement(d.a,null,o.a.createElement(w.b,{render:function(e){var a=e.history;return o.a.createElement(f.a,{className:"btn btn-primary float-right",onClick:function(){return a.push("/app/freshlist/customer/addCustomer")}},"Add New")}}))),o.a.createElement(p.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(g.a,{className:"p-1 ag-dropdown"},o.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(P.a,{className:"ml-50",size:15})),o.a.createElement(b.a,{right:!0},o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(z.a.Consumer,null,(function(a){return o.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(o.a.Component));a.default=x},831:function(e,a,t){"use strict";var n=t(44),r=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=r},832:function(e,a,t){},833:function(e,a,t){"use strict";var n=t(6),r=t(7),i=t(16),l=t(18),s=t(0),c=t.n(s),o=t(1),u=t.n(o),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(i)>-1,E=new RegExp("\\D","g"),w=u||("select"===i||"textarea"===i?i:"input"),z="form-control";g?(z+="-plaintext",w=u||"input"):"file"===i?z+="-file":"range"===i?z+="-range":v&&(z=d?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var S=Object(f.mapToCssModules)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,z),t);return("input"===w||u&&"function"===typeof u)&&(b.type=i),b.children&&!g&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(w,Object(n.a)({},b,{ref:h,className:S,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h}}]);
//# sourceMappingURL=196.b5deda10.chunk.js.map