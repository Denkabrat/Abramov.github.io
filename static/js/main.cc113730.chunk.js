(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(10),c=a.n(i),s=a(2),o=a(3),l=a(5),h=a(4),d=(a(15),a(0)),j=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},u=a(6),b=a.n(u),m=a(7),f=function e(){var t=this;Object(s.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=1a6c1d416196cfc7b1d4c4be9a968bd5",this._baseOffset=210,this.getResource=function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Couldnt fetch ".concat(t,",status:").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(m.a)(b.a.mark((function e(){var a,r,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(m.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"/characters/").concat(a,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},x=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(d.jsx)("g",{transform:"rotate(0 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.4052684903748734s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(17.142857142857142 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.38500506585612976s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(34.285714285714285 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.36474164133738607s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(51.42857142857143 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.3444782168186424s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(68.57142857142857 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.32421479229989875s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(85.71428571428571 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.30395136778115506s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(102.85714285714286 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.28368794326241137s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(120 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.26342451874366773s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(137.14285714285714 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.24316109422492405s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(154.28571428571428 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.22289766970618036s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(171.42857142857142 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.2026342451874367s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(188.57142857142858 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.18237082066869303s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(205.71428571428572 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.16210739614994937s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(222.85714285714286 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.14184397163120568s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(240 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.12158054711246202s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(257.14285714285717 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.10131712259371835s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(274.2857142857143 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.08105369807497469s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(291.42857142857144 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.06079027355623101s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(308.57142857142856 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.04052684903748734s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(325.7142857142857 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"-0.02026342451874367s",repeatCount:"indefinite"})})}),Object(d.jsx)("g",{transform:"rotate(342.85714285714283 50 50)",children:Object(d.jsx)("rect",{x:"49.5",y:"24",rx:"0",ry:"0",width:"1",height:"12",fill:"#05bcef",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.4255319148936171s",begin:"0s",repeatCount:"indefinite"})})})]})},O=a.p+"static/media/error.42292aa1.gif",p=function(){return Object(d.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:O,alt:"Error Message"})},g=(a(18),a.p+"static/media/mjolnir.61f31e18.png"),v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=r?Object(d.jsx)(p,{}):null,i=a?Object(d.jsx)(x,{}):null,c=a||r?null:Object(d.jsx)(y,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[n,i,c,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:g,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),y=function(e){var t=e.char,a=t.name,r=t.description,n=t.homepage,i=t.thumbnail,c=t.wiki,s={objectFit:"Cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===i&&(s={objectFit:"Contain"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:i,style:s,alt:"Random character",className:"randomchar__img"}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:a}),Object(d.jsx)("p",{className:"randomchar__descr",children:r}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:n,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:c,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"wiki"})})]})]})]})},_=v,C=a(9),N=(a(19),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:210,charEnded:!1},e.marvelService=new f,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var r=e.offset,n=e.charList;return{charList:[].concat(Object(C.a)(n),Object(C.a)(t)),loading:!1,newItemLoading:!1,offset:r+9,charEnded:a}}))},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e.itemsRef=[],e.setRef=function(t){e.itemsRef.push(t)},e.focusOnItem=function(t){e.itemsRef.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemsRef[t].classList.add("char__item_selected"),e.itemsRef[t].focus()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,a=e.map((function(e,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(r={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",tabIndex:0,ref:t.setRef,onClick:function(){t.props.onCharSelected(e.id),t.focusOnItem(a)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(t.props.onCharSelected(e.id),t.focusOnItem(a))},children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.name,style:r}),Object(d.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.charList,r=t.loading,n=t.error,i=t.newItemLoading,c=t.offset,s=t.charEnded,o=this.renderItems(a),l=n?Object(d.jsx)(p,{}):null,h=r?Object(d.jsx)(x,{}):null,j=r||n?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,h,j,Object(d.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:s?"none":"block"},onClick:function(){return e.onRequest(c)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component)),k=(a(20),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=(a(21),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=t||a||r?null:Object(d.jsx)(k,{}),i=r?Object(d.jsx)(p,{}):null,c=a?Object(d.jsx)(x,{}):null,s=a||r||!t?null:Object(d.jsx)(L,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[n,i,c,s]})}}]),a}(r.Component)),L=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,i=t.homepage,c=t.wiki,s=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"contain"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:n,alt:a,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:a}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:i,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:c,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:r}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[s.length>0?null:"There is no comics with this character",s.map((function(e,t){if(!(t>9))return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},S=w,T=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.prop?Object(d.jsx)(p,{}):this.props.children}}]),a}(r.Component),I=a.p+"static/media/vision.067d4ae1.png",R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(T,{children:Object(d.jsx)(_,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(T,{children:Object(d.jsx)(N,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(T,{children:Object(d.jsx)(S,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})]})}}]),a}(r.Component);a(22);c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.cc113730.chunk.js.map