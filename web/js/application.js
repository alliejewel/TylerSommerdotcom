(function(a){a.fn.sf2select2=function(){var b=a(this).data("values")||"",c=a(this).val();a(this).val(c).select2({tags:b.split(","),width:"220px"})}})(jQuery);
(function(a){if(typeof a.fn.each2=="undefined"){a.fn.extend({each2:function(f){var d=a([0]),e=-1,b=this.length;while(++e<b&&(d.context=d[0]=this[e])&&f.call(d[0],e,d)!==false){}return this}})}})(jQuery);(function(j,l){if(window.Select2!==l){return}var c,e,v,B,t,a;c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(C){C=C.which?C.which:C;switch(C){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return true}return false},isControl:function(D){var C=D.which;switch(C){case c.SHIFT:case c.CTRL:case c.ALT:return true}if(D.metaKey){return true}return false},isFunctionKey:function(C){C=C.which?C.which:C;return C>=112&&C<=123}};t=(function(){var C=1;return function(){return C++}}());function b(F,G){var E=0,C=G.length,D;if(typeof F==="undefined"){return -1}if(F.constructor===String){for(;E<C;E=E+1){if(F.localeCompare(G[E])===0){return E}}}else{for(;E<C;E=E+1){D=G[E];if(D.constructor===String){if(D.localeCompare(F)===0){return E}}else{if(D===F){return E}}}}return -1}function q(D,C){if(D===C){return true}if(D===l||C===l){return false}if(D===null||C===null){return false}if(D.constructor===String){return D.localeCompare(C)===0}if(C.constructor===String){return C.localeCompare(D)===0}return false}function m(D,F){var G,E,C;if(D===null||D.length<1){return[]}G=D.split(F);for(E=0,C=G.length;E<C;E=E+1){G[E]=j.trim(G[E])}return G}function n(C){return C.outerWidth()-C.width()}function z(D){var C="keyup-change-value";D.bind("keydown",function(){if(j.data(D,C)===l){j.data(D,C,D.val())}});D.bind("keyup",function(){var E=j.data(D,C);if(E!==l&&D.val()!==E){j.removeData(D,C);D.trigger("keyup-change")}})}j(document).delegate("body","mousemove",function(C){j.data(document,"select2-lastpos",{x:C.pageX,y:C.pageY})});function u(C){C.bind("mousemove",function(E){var D=j.data(document,"select2-lastpos");if(D===l||D.x!==E.pageX||D.y!==E.pageY){j(E.target).trigger("mousemove-filtered",E)}})}function f(F,D,C){C=C||l;var E;return function(){var G=arguments;window.clearTimeout(E);E=window.setTimeout(function(){D.apply(C,G)},F)}}function A(E){var C=false,D;return function(){if(C===false){D=E();C=true}return D}}function g(C,E){var D=f(C,function(F){E.trigger("scroll-debounced",F)});E.bind("scroll",function(F){if(b(F.target,E.get())>=0){D(F)}})}function d(C){C.preventDefault();C.stopPropagation()}function x(D){if(!a){var C=D[0].currentStyle||window.getComputedStyle(D[0],null);a=j("<div></div>").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:C.fontSize,fontFamily:C.fontFamily,fontStyle:C.fontStyle,fontWeight:C.fontWeight,letterSpacing:C.letterSpacing,textTransform:C.textTransform,whiteSpace:"nowrap"});j("body").append(a)}a.text(D.val());return a.width()}function i(G,F,D){var E=G.toUpperCase().indexOf(F.toUpperCase()),C=F.length;if(E<0){D.push(G);return}D.push(G.substring(0,E));D.push("<span class='select2-match'>");D.push(G.substring(E,E+C));D.push("</span>");D.push(G.substring(E+C,G.length))}function p(D){var F,C=0,E=null,G=D.quietMillis||100;return function(H){window.clearTimeout(F);F=window.setTimeout(function(){C+=1;var I=C,L=D.data,M=D.transport||j.ajax,K=D.traditional||false,J=D.type||"GET";L=L.call(this,H.term,H.page,H.context);if(null!==E){E.abort()}E=M.call(null,{url:D.url,dataType:D.dataType,data:L,type:J,traditional:K,success:function(O){if(I<C){return}var N=D.results(O,H.page);H.callback(N)}})},G)}}function r(C){var E=C,D,F=function(G){return""+G.text};if(!j.isArray(E)){F=E.text;if(!j.isFunction(F)){D=E.text;F=function(G){return G[D]}}E=E.results}return function(I){var H=I.term,G={results:[]},J;if(H===""){I.callback({results:E});return}J=function(L,N){var M,K;L=L[0];if(L.children){M={};for(K in L){if(L.hasOwnProperty(K)){M[K]=L[K]}}M.children=[];j(L.children).each2(function(O,P){J(P,M.children)});if(M.children.length){N.push(M)}}else{if(I.matcher(H,F(L))){N.push(L)}}};j(E).each2(function(L,K){J(K,G.results)});I.callback(G)}}function o(C){if(j.isFunction(C)){return C}return function(F){var E=F.term,D={results:[]};j(C).each(function(){var G=this.text!==l,H=G?this.text:this;if(E===""||F.matcher(E,H)){D.results.push(G?this:{id:this,text:this})}});F.callback(D)}}function k(C,D){if(j.isFunction(C)){return true}if(!C){return false}throw new Error("formatterName must be a function or a falsy value")}function s(C){return j.isFunction(C)?C():C}function h(C){var D=0;j.each(C,function(E,F){if(F.children){D+=h(F.children)}else{D++}});return D}function y(K,L,I,C){var D=K,M=false,F,J,G,E,H;if(!C.createSearchChoice||!C.tokenSeparators||C.tokenSeparators.length<1){return l}while(true){J=-1;for(G=0,E=C.tokenSeparators.length;G<E;G++){H=C.tokenSeparators[G];J=K.indexOf(H);if(J>=0){break}}if(J<0){break}F=K.substring(0,J);K=K.substring(J+H.length);if(F.length>0){F=C.createSearchChoice(F,L);if(F!==l&&F!==null&&C.id(F)!==l&&C.id(F)!==null){M=false;for(G=0,E=L.length;G<E;G++){if(q(C.id(F),C.id(L[G]))){M=true;break}}if(!M){I(F)}}}}if(D.localeCompare(K)!=0){return K}}j(document).ready(function(){j(document).delegate("body","mousedown touchend",function(E){var D=j(E.target).closest("div.select2-container").get(0),C;if(D){j(document).find("div.select2-container-active").each(function(){if(this!==D){j(this).data("select2").blur()}})}else{D=j(E.target).closest("div.select2-drop").get(0);j(document).find("div.select2-drop-active").each(function(){if(this!==D){j(this).data("select2").blur()}})}D=j(E.target);C=D.attr("for");if("LABEL"===E.target.tagName&&C&&C.length>0){D=j("#"+C);D=D.data("select2");if(D!==l){D.focus();E.preventDefault()}}})});function w(C,D){var E=function(){};E.prototype=new C;E.prototype.constructor=E;E.prototype.parent=C.prototype;E.prototype=j.extend(E.prototype,D);return E}e=w(Object,{bind:function(D){var C=this;return function(){D.apply(C,arguments)}},init:function(E){var D,C,F=".select2-results";this.opts=E=this.prepareOpts(E);this.id=E.id;if(E.element.data("select2")!==l&&E.element.data("select2")!==null){this.destroy()}this.enabled=true;this.container=this.createContainer();this.containerId="s2id_"+(E.element.attr("id")||"autogen"+t());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",this.containerId);this.body=A(function(){return E.element.closest("body")});if(E.element.attr("class")!==l){this.container.addClass(E.element.attr("class").replace(/validate\[[\S ]+] ?/,""))}this.container.css(s(E.containerCss));this.container.addClass(s(E.containerCssClass));this.opts.element.data("select2",this).hide().before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(s(E.dropdownCssClass));this.dropdown.data("select2",this);this.results=D=this.container.find(F);this.search=C=this.container.find("input.select2-input");C.attr("tabIndex",this.opts.element.attr("tabIndex"));this.resultsPage=0;this.context=null;this.initContainer();this.initContainerWidth();u(this.results);this.dropdown.delegate(F,"mousemove-filtered",this.bind(this.highlightUnderEvent));g(80,this.results);this.dropdown.delegate(F,"scroll-debounced",this.bind(this.loadMoreIfNeeded));if(j.fn.mousewheel){D.mousewheel(function(K,L,I,H){var J=D.scrollTop(),G;if(H>0&&J-H<=0){D.scrollTop(0);d(K)}else{if(H<0&&D.get(0).scrollHeight-D.scrollTop()+H<=D.height()){D.scrollTop(D.get(0).scrollHeight-D.height());d(K)}}})}z(C);C.bind("keyup-change",this.bind(this.updateResults));C.bind("focus",function(){C.addClass("select2-focused");if(C.val()===" "){C.val("")}});C.bind("blur",function(){C.removeClass("select2-focused")});this.dropdown.delegate(F,"mouseup",this.bind(function(G){if(j(G.target).closest(".select2-result-selectable:not(.select2-disabled)").length>0){this.highlightUnderEvent(G);this.selectHighlighted(G)}else{this.focusSearch()}d(G)}));this.dropdown.bind("click mouseup mousedown",function(G){G.stopPropagation()});if(j.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource()}if(E.element.is(":disabled")||E.element.is("[readonly='readonly']")){this.disable()}},destroy:function(){var C=this.opts.element.data("select2");if(C!==l){C.container.remove();C.dropdown.remove();C.opts.element.removeData("select2").unbind(".select2").show()}},prepareOpts:function(G){var E,D,C,F;E=G.element;if(E.get(0).tagName.toLowerCase()==="select"){this.select=D=G.element}if(D){j.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in G){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}})}G=j.extend({},{populateResults:function(H,L,N){var M,K,P,J,I=this.opts.id,O=this;M=function(V,Q,U){var W,S,ab,Y,aa,R,Z,X,T;for(W=0,S=V.length;W<S;W=W+1){ab=V[W];Y=I(ab)!==l;aa=ab.children&&ab.children.length>0;R=j("<li></li>");R.addClass("select2-results-dept-"+U);R.addClass("select2-result");R.addClass(Y?"select2-result-selectable":"select2-result-unselectable");if(aa){R.addClass("select2-result-with-children")}R.addClass(O.opts.formatResultCssClass(ab));Z=j("<div></div>");Z.addClass("select2-result-label");T=G.formatResult(ab,Z,N);if(T!==l){Z.html(O.opts.escapeMarkup(T))}R.append(Z);if(aa){X=j("<ul></ul>");X.addClass("select2-result-sub");M(ab.children,X,U+1);R.append(X)}R.data("select2-data",ab);Q.append(R)}};M(L,H,0)}},j.fn.select2.defaults,G);if(typeof(G.id)!=="function"){C=G.id;G.id=function(H){return H[C]}}if(D){G.query=this.bind(function(K){var J={results:[],more:false},I=K.term,H,M,L;L=function(N,P){var O;if(N.is("option")){if(K.matcher(I,N.text(),N)){P.push({id:N.attr("value"),text:N.text(),element:N.get(),css:N.attr("class")})}}else{if(N.is("optgroup")){O={text:N.attr("label"),children:[],element:N.get(),css:N.attr("class")};N.children().each2(function(Q,R){L(R,O.children)});if(O.children.length>0){P.push(O)}}}};H=E.children();if(this.getPlaceholder()!==l&&H.length>0){M=H[0];if(j(M).text()===""){H=H.not(M)}}H.each2(function(N,O){L(O,J.results)});K.callback(J)});G.id=function(H){return H.id};G.formatResultCssClass=function(H){return H.css}}else{if(!("query" in G)){if("ajax" in G){F=G.element.data("ajax-url");if(F&&F.length>0){G.ajax.url=F}G.query=p(G.ajax)}else{if("data" in G){G.query=r(G.data)}else{if("tags" in G){G.query=o(G.tags);G.createSearchChoice=function(H){return{id:H,text:H}};G.initSelection=function(H,J){var I=[];j(m(H.val(),G.separator)).each(function(){var M=this,L=this,K=G.tags;if(j.isFunction(K)){K=K()}j(K).each(function(){if(q(this.id,M)){L=this.text;return false}});I.push({id:M,text:L})});J(I)}}}}}}if(typeof(G.query)!=="function"){throw"query function not defined for Select2 "+G.element.attr("id")}return G},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(C){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()}}))},triggerChange:function(C){C=C||{};C=j.extend({},C,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(C);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange){this.opts.element.blur()}},enable:function(){if(this.enabled){return}this.enabled=true;this.container.removeClass("select2-container-disabled")},disable:function(){if(!this.enabled){return}this.close();this.enabled=false;this.container.addClass("select2-container-disabled")},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var G=this.container.offset(),O=this.container.outerHeight(),D=this.container.outerWidth(),F=this.dropdown.outerHeight(),K=j(window).scrollTop()+document.documentElement.clientHeight,C=G.top+O,N=G.left,L=C+F<=K,J=(G.top-F)>=this.body().scrollTop(),E=this.dropdown.hasClass("select2-drop-above"),H,M,I;if(this.body().css("position")!=="static"){H=this.body().offset();C-=H.top;N-=H.left}if(E){M=true;if(!J&&L){M=false}}else{M=false;if(!L&&J){M=true}}if(M){C=G.top-F;this.container.addClass("select2-drop-above");this.dropdown.addClass("select2-drop-above")}else{this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")}I=j.extend({top:C,left:N,width:D},s(this.opts.dropdownCss));this.dropdown.css(I)},shouldOpen:function(){var C;if(this.opened()){return false}C=j.Event("open");this.opts.element.trigger(C);return !C.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen()){return false}window.setTimeout(this.bind(this.opening),1);return true},opening:function(){var F=this.containerId,D=this.containerSelector,C="scroll."+F,E="resize."+F;this.container.parents().each(function(){j(this).bind(C,function(){var G=j(D);if(G.length==0){j(this).unbind(C)}G.select2("close")})});j(window).bind(E,function(){var G=j(D);if(G.length==0){j(window).unbind(E)}G.select2("close")});this.clearDropdownAlignmentPreference();if(this.search.val()===" "){this.search.val("")}this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.updateResults(true);if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();this.focusSearch()},close:function(){if(!this.opened()){return}var C=this;this.container.parents().each(function(){j(this).unbind("scroll."+C.containerId)});j(window).unbind("resize."+this.containerId);this.clearDropdownAlignmentPreference();this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.opts.element.trigger(j.Event("close"))},clearSearch:function(){},ensureHighlightVisible:function(){var F=this.results,E,C,J,I,G,H,D;C=this.highlight();if(C<0){return}if(C==0){F.scrollTop(0);return}E=F.find(".select2-result-selectable");J=j(E[C]);I=J.offset().top+J.outerHeight();if(C===E.length-1){D=F.find("li.select2-more-results");if(D.length>0){I=D.offset().top+D.outerHeight()}}G=F.offset().top+F.outerHeight();if(I>G){F.scrollTop(F.scrollTop()+(I-G))}H=J.offset().top-F.offset().top;if(H<0){F.scrollTop(F.scrollTop()+H)}},moveHighlight:function(F){var E=this.results.find(".select2-result-selectable"),D=this.highlight();while(D>-1&&D<E.length){D+=F;var C=j(E[D]);if(C.hasClass("select2-result-selectable")&&!C.hasClass("select2-disabled")){this.highlight(D);break}}},highlight:function(C){var D=this.results.find(".select2-result-selectable").not(".select2-disabled");if(arguments.length===0){return b(D.filter(".select2-highlighted")[0],D.get())}if(C>=D.length){C=D.length-1}if(C<0){C=0}D.removeClass("select2-highlighted");j(D[C]).addClass("select2-highlighted");this.ensureHighlightVisible()},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length},highlightUnderEvent:function(D){var C=j(D.target).closest(".select2-result-selectable");if(C.length>0&&!C.is(".select2-highlighted")){var E=this.results.find(".select2-result-selectable");this.highlight(E.index(C))}else{if(C.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted")}}},loadMoreIfNeeded:function(){var G=this.results,F=G.find("li.select2-more-results"),J,I=-1,H=this.resultsPage+1,C=this,E=this.search.val(),D=this.context;if(F.length===0){return}J=F.offset().top-G.offset().top-G.height();if(J<=0){F.addClass("select2-active");this.opts.query({term:E,page:H,context:D,matcher:this.opts.matcher,callback:this.bind(function(K){if(!C.opened()){return}C.opts.populateResults.call(this,G,K.results,{term:E,page:H,context:D});if(K.more===true){F.detach().appendTo(G).text(C.opts.formatLoadMore(H+1));window.setTimeout(function(){C.loadMoreIfNeeded()},10)}else{F.remove()}C.positionDropdown();C.resultsPage=H})})}},tokenize:function(){},updateResults:function(H){var K=this.search,F=this.results,C=this.opts,E,J=this,I;if(H!==true&&(this.showSearchInput===false||!this.opened())){return}K.addClass("select2-active");function G(){F.scrollTop(0);K.removeClass("select2-active");J.positionDropdown()}function D(L){F.html(J.opts.escapeMarkup(L));G()}if(C.maximumSelectionSize>=1){E=this.data();if(j.isArray(E)&&E.length>=C.maximumSelectionSize&&k(C.formatSelectionTooBig,"formatSelectionTooBig")){D("<li class='select2-selection-limit'>"+C.formatSelectionTooBig(C.maximumSelectionSize)+"</li>");return}}if(K.val().length<C.minimumInputLength&&k(C.formatInputTooShort,"formatInputTooShort")){D("<li class='select2-no-results'>"+C.formatInputTooShort(K.val(),C.minimumInputLength)+"</li>");return}else{D("<li class='select2-searching'>"+C.formatSearching()+"</li>")}I=this.tokenize();if(I!=l&&I!=null){K.val(I)}this.resultsPage=1;C.query({term:K.val(),page:this.resultsPage,context:null,matcher:C.matcher,callback:this.bind(function(M){var L;if(!this.opened()){return}this.context=(M.context===l)?null:M.context;if(this.opts.createSearchChoice&&K.val()!==""){L=this.opts.createSearchChoice.call(null,K.val(),M.results);if(L!==l&&L!==null&&J.id(L)!==l&&J.id(L)!==null){if(j(M.results).filter(function(){return q(J.id(this),J.id(L))}).length===0){M.results.unshift(L)}}}if(M.results.length===0&&k(C.formatNoMatches,"formatNoMatches")){D("<li class='select2-no-results'>"+C.formatNoMatches(K.val())+"</li>");return}F.empty();J.opts.populateResults.call(this,F,M.results,{term:K.val(),page:this.resultsPage,context:null});if(M.more===true&&k(C.formatLoadMore,"formatLoadMore")){F.append("<li class='select2-more-results'>"+J.opts.escapeMarkup(C.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){J.loadMoreIfNeeded()},10)}this.postprocessResults(M,H);G()})})},cancel:function(){this.close()},blur:function(){this.close();this.container.removeClass("select2-container-active");this.dropdown.removeClass("select2-drop-active");if(this.search[0]===document.activeElement){this.search.blur()}this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){this.search.show();this.search.focus();window.setTimeout(this.bind(function(){this.search.show();this.search.focus();this.search.val(this.search.val())}),10)},selectHighlighted:function(){var C=this.highlight(),D=this.results.find(".select2-highlighted").not(".select2-disabled"),E=D.closest(".select2-result-selectable").data("select2-data");if(E){D.addClass("select2-disabled");this.highlight(C);this.onSelect(E)}},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder},initContainerWidth:function(){function D(){var H,F,I,G,E;if(this.opts.width==="off"){return null}else{if(this.opts.width==="element"){return this.opts.element.outerWidth()===0?"auto":this.opts.element.outerWidth()+"px"}else{if(this.opts.width==="copy"||this.opts.width==="resolve"){H=this.opts.element.attr("style");if(H!==l){F=H.split(";");for(G=0,E=F.length;G<E;G=G+1){I=F[G].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/);if(I!==null&&I.length>=1){return I[1]}}}if(this.opts.width==="resolve"){H=this.opts.element.css("width");if(H.indexOf("%")>0){return H}return(this.opts.element.outerWidth()===0?"auto":this.opts.element.outerWidth()+"px")}return null}else{if(j.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}}}}var C=D.call(this);if(C!==null){this.container.attr("style","width: "+C)}}});v=w(e,{createContainer:function(){var C=j("<div></div>",{"class":"select2-container"}).html(["    <a href='#' onclick='return false;' class='select2-choice'>","   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>","   <div><b></b></div>","</a>","    <div class='select2-drop select2-offscreen'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return C},opening:function(){this.search.show();this.parent.opening.apply(this,arguments);this.dropdown.removeClass("select2-offscreen")},close:function(){if(!this.opened()){return}this.parent.close.apply(this,arguments);this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show()},focus:function(){this.close();this.selection.focus()},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments);this.selection.focus()},initContainer:function(){var E,D=this.container,F=this.dropdown,C=false;this.selection=E=D.find(".select2-choice");this.search.bind("keydown",this.bind(function(G){if(!this.enabled){return}if(G.which===c.PAGE_UP||G.which===c.PAGE_DOWN){d(G);return}if(this.opened()){switch(G.which){case c.UP:case c.DOWN:this.moveHighlight((G.which===c.UP)?-1:1);d(G);return;case c.TAB:case c.ENTER:this.selectHighlighted();d(G);return;case c.ESC:this.cancel(G);d(G);return}}else{if(G.which===c.TAB||c.isControl(G)||c.isFunctionKey(G)||G.which===c.ESC){return}if(this.opts.openOnEnter===false&&G.which===c.ENTER){return}this.open();if(G.which===c.ENTER){return}}}));this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1")}));this.search.bind("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active")}window.setTimeout(this.bind(function(){this.selection.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));E.bind("mousedown",this.bind(function(G){C=true;if(this.opened()){this.close();this.selection.focus()}else{if(this.enabled){this.open()}}C=false}));F.bind("mousedown",this.bind(function(){this.search.focus()}));E.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");this.search.attr("tabIndex","-1")}));E.bind("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active")}window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));E.bind("keydown",this.bind(function(H){if(!this.enabled){return}if(H.which===c.PAGE_UP||H.which===c.PAGE_DOWN){d(H);return}if(H.which===c.TAB||c.isControl(H)||c.isFunctionKey(H)||H.which===c.ESC){return}if(this.opts.openOnEnter===false&&H.which===c.ENTER){return}if(H.which==c.DELETE){if(this.opts.allowClear){this.clear()}return}this.open();if(H.which===c.ENTER){d(H);return}if(H.which<48){d(H);return}var G=String.fromCharCode(H.which).toLowerCase();if(H.shiftKey){G=G.toUpperCase()}this.search.focus();this.search.val(G);d(H)}));E.delegate("abbr","mousedown",this.bind(function(G){if(!this.enabled){return}this.clear();d(G);this.close();this.triggerChange();this.selection.focus()}));this.setPlaceholder();this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder()},initSelection:function(){var D;if(this.opts.element.val()===""){this.close();this.setPlaceholder()}else{var C=this;this.opts.initSelection.call(null,this.opts.element,function(E){if(E!==l&&E!==null){C.updateSelection(E);C.close();C.setPlaceholder()}})}},prepareOpts:function(){var C=this.parent.prepareOpts.apply(this,arguments);if(C.element.get(0).tagName.toLowerCase()==="select"){C.initSelection=function(D,F){var E=D.find(":selected");if(j.isFunction(F)){F({id:E.attr("value"),text:E.text()})}}}return C},setPlaceholder:function(){var C=this.getPlaceholder();if(this.opts.element.val()===""&&C!==l){if(this.select&&this.select.find("option:first").text()!==""){return}this.selection.find("span").html(this.opts.escapeMarkup(C));this.selection.addClass("select2-default");this.selection.find("abbr").hide()}},postprocessResults:function(F,D){var E=0,C=this,G=true;this.results.find(".select2-result-selectable").each2(function(H,I){if(q(C.id(I.data("select2-data")),C.opts.element.val())){E=H;return false}});this.highlight(E);if(D===true){G=this.showSearchInput=h(F.results)>=this.opts.minimumResultsForSearch;this.dropdown.find(".select2-search")[G?"removeClass":"addClass"]("select2-search-hidden");j(this.dropdown,this.container)[G?"addClass":"removeClass"]("select2-with-searchbox")}},onSelect:function(D){var C=this.opts.element.val();this.opts.element.val(this.id(D));this.updateSelection(D);this.close();this.selection.focus();if(!q(C,this.id(D))){this.triggerChange()}},updateSelection:function(E){var C=this.selection.find("span"),D;this.selection.data("select2-data",E);C.empty();D=this.opts.formatSelection(E,C);if(D!==l){C.append(this.opts.escapeMarkup(D))}this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==l){this.selection.find("abbr").show()}},val:function(){var E,D=null,C=this;if(arguments.length===0){return this.opts.element.val()}E=arguments[0];if(this.select){this.select.val(E).find(":selected").each2(function(F,G){D={id:G.attr("value"),text:G.text()};return false});this.updateSelection(D);this.setPlaceholder()}else{if(this.opts.initSelection===l){throw new Error("cannot call val() if initSelection() is not defined")}if(!E){this.clear();return}this.opts.element.val(E);this.opts.initSelection(this.opts.element,function(F){C.opts.element.val(!F?"":C.id(F));C.updateSelection(F);C.setPlaceholder()})}},clearSearch:function(){this.search.val("")},data:function(D){var C;if(arguments.length===0){C=this.selection.data("select2-data");if(C==l){C=null}return C}else{if(!D||D===""){this.clear()}else{this.opts.element.val(!D?"":this.id(D));this.updateSelection(D)}}}});B=w(e,{createContainer:function(){var C=j("<div></div>",{"class":"select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi' style='display:none;'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return C},prepareOpts:function(){var C=this.parent.prepareOpts.apply(this,arguments);if(C.element.get(0).tagName.toLowerCase()==="select"){C.initSelection=function(D,F){var E=[];D.find(":selected").each2(function(G,H){E.push({id:H.attr("value"),text:H.text()})});if(j.isFunction(F)){F(E)}}}return C},initContainer:function(){var C=".select2-choices",D;this.searchContainer=this.container.find(".select2-search-field");this.selection=D=this.container.find(C);this.search.bind("keydown",this.bind(function(F){if(!this.enabled){return}if(F.which===c.BACKSPACE&&this.search.val()===""){this.close();var G,E=D.find(".select2-search-choice-focus");if(E.length>0){this.unselect(E.first());this.search.width(10);d(F);return}G=D.find(".select2-search-choice");if(G.length>0){G.last().addClass("select2-search-choice-focus")}}else{D.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")}if(this.opened()){switch(F.which){case c.UP:case c.DOWN:this.moveHighlight((F.which===c.UP)?-1:1);d(F);return;case c.ENTER:case c.TAB:this.selectHighlighted();d(F);return;case c.ESC:this.cancel(F);d(F);return}}if(F.which===c.TAB||c.isControl(F)||c.isFunctionKey(F)||F.which===c.BACKSPACE||F.which===c.ESC){return}if(this.opts.openOnEnter===false&&F.which===c.ENTER){return}this.open();if(F.which===c.PAGE_UP||F.which===c.PAGE_DOWN){d(F)}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(E){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.clearSearch();E.stopImmediatePropagation()}));this.container.delegate(C,"mousedown",this.bind(function(E){if(!this.enabled){return}if(j(E.target).closest(".select2-search-choice").length>0){return}this.clearPlaceholder();this.open();this.focusSearch();E.preventDefault()}));this.container.delegate(C,"focus",this.bind(function(){if(!this.enabled){return}this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder()}));this.clearSearch()},enable:function(){if(this.enabled){return}this.parent.enable.apply(this,arguments);this.search.removeAttr("disabled")},disable:function(){if(!this.enabled){return}this.parent.disable.apply(this,arguments);this.search.attr("disabled",true)},initSelection:function(){var D;if(this.opts.element.val()===""){this.updateSelection([]);this.close();this.clearSearch()}if(this.select||this.opts.element.val()!==""){var C=this;this.opts.initSelection.call(null,this.opts.element,function(E){if(E!==l&&E!==null){C.updateSelection(E);C.close();C.clearSearch()}})}},clearSearch:function(){var C=this.getPlaceholder();if(C!==l&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(C).addClass("select2-default");this.resizeSearch()}else{this.search.val(" ").width(10)}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")}else{if(this.search.val()===" "){this.search.val("")}}},opening:function(){this.parent.opening.apply(this,arguments);this.clearPlaceholder();this.resizeSearch();this.focusSearch()},close:function(){if(!this.opened()){return}this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(F){var E=[],D=[],C=this;j(F).each(function(){if(b(C.id(this),E)<0){E.push(C.id(this));D.push(this)}});F=D;this.selection.find(".select2-search-choice").remove();j(F).each(function(){C.addSelectedChoice(this)});C.postprocessResults()},tokenize:function(){var C=this.search.val();C=this.opts.tokenizer(C,this.data(),this.bind(this.onSelect),this.opts);if(C!=null&&C!=l){this.search.val(C);if(C.length>0){this.open()}}},onSelect:function(C){this.addSelectedChoice(C);if(this.select){this.postprocessResults()}if(this.opts.closeOnSelect){this.close();this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();this.positionDropdown()}else{this.close()}}this.triggerChange({added:C});this.focusSearch()},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(E){var C=j("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),G=this.id(E),F=this.getVal(),D;D=this.opts.formatSelection(E,C);C.find("div").replaceWith("<div>"+this.opts.escapeMarkup(D)+"</div>");C.find(".select2-search-choice-close").bind("mousedown",d).bind("click dblclick",this.bind(function(H){if(!this.enabled){return}j(H.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(j(H.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue();d(H)})).bind("focus",this.bind(function(){if(!this.enabled){return}this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active")}));C.data("select2-data",E);C.insertBefore(this.searchContainer);F.push(G);this.setVal(F)},unselect:function(D){var F=this.getVal(),E,C;D=D.closest(".select2-search-choice");if(D.length===0){throw"Invalid argument: "+D+". Must be .select2-search-choice"}E=D.data("select2-data");C=b(this.id(E),F);if(C>=0){F.splice(C,1);this.setVal(F);if(this.select){this.postprocessResults()}}D.remove();this.triggerChange({removed:E})},postprocessResults:function(){var E=this.getVal(),F=this.results.find(".select2-result-selectable"),D=this.results.find(".select2-result-with-children"),C=this;F.each2(function(H,G){var I=C.id(G.data("select2-data"));if(b(I,E)>=0){G.addClass("select2-disabled").removeClass("select2-result-selectable")}else{G.removeClass("select2-disabled").addClass("select2-result-selectable")}});D.each2(function(G,H){if(H.find(".select2-result-selectable").length==0){H.addClass("select2-disabled")}else{H.removeClass("select2-disabled")}});F.each2(function(H,G){if(!G.hasClass("select2-disabled")&&G.hasClass("select2-result-selectable")){C.highlight(0);return false}})},resizeSearch:function(){var H,F,E,C,D,G=n(this.search);H=x(this.search)+10;F=this.search.offset().left;E=this.selection.width();C=this.selection.offset().left;D=E-(F-C)-G;if(D<H){D=E-G}if(D<40){D=E-G}this.search.width(D)},getVal:function(){var C;if(this.select){C=this.select.val();return C===null?[]:C}else{C=this.opts.element.val();return m(C,this.opts.separator)}},setVal:function(D){var C;if(this.select){this.select.val(D)}else{C=[];j(D).each(function(){if(b(this,C)<0){C.push(this)}});this.opts.element.val(C.length===0?"":C.join(this.opts.separator))}},val:function(){var E,D=[],C=this;if(arguments.length===0){return this.getVal()}E=arguments[0];if(!E){this.opts.element.val("");this.updateSelection([]);this.clearSearch();return}this.setVal(E);if(this.select){this.select.find(":selected").each(function(){D.push({id:j(this).attr("value"),text:j(this).text()})});this.updateSelection(D)}else{if(this.opts.initSelection===l){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(G){var F=j(G).map(C.id);C.setVal(F);C.updateSelection(G);C.clearSearch()})}this.clearSearch()},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")}this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var D=[],C=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){D.push(C.opts.id(j(this).data("select2-data")))});this.setVal(D);this.triggerChange()},data:function(D){var C=this,E;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return j(this).data("select2-data")}).get()}else{if(!D){D=[]}E=j.map(D,function(F){return C.opts.id(F)});this.setVal(E);this.updateSelection(D);this.clearSearch()}}});j.fn.select2=function(){var F=Array.prototype.slice.call(arguments,0),G,E,H,D,C=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","disable","positionDropdown","data"];this.each(function(){if(F.length===0||typeof(F[0])==="object"){G=F.length===0?{}:j.extend({},F[0]);G.element=j(this);if(G.element.get(0).tagName.toLowerCase()==="select"){D=G.element.attr("multiple")}else{D=G.multiple||false;if("tags" in G){G.multiple=D=true}}E=D?new B():new v();E.init(G)}else{if(typeof(F[0])==="string"){if(b(F[0],C)<0){throw"Unknown method: "+F[0]}H=l;E=j(this).data("select2");if(E===l){return}if(F[0]==="container"){H=E.container}else{H=E[F[0]].apply(E,F.slice(1))}if(H!==l){return false}}else{throw"Invalid arguments to select2 plugin: "+F}}});return(H===l)?this:H};j.fn.select2.defaults={width:"copy",closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(C,D,F){var E=[];i(C.text,F.term,E);return E.join("")},formatSelection:function(D,C){return D?D.text:l},formatResultCssClass:function(C){return l},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(C,D){return"Please enter "+(D-C.length)+" more characters"},formatSelectionTooBig:function(C){return"You can only select "+C+" item"+(C==1?"":"s")},formatLoadMore:function(C){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumSelectionSize:0,id:function(C){return C.id},matcher:function(C,D){return D.toUpperCase().indexOf(C.toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:y,escapeMarkup:function(C){if(C&&typeof(C)==="string"){return C.replace(/&/g,"&amp;")}return C},blurOnChange:false};window.Select2={query:{ajax:p,local:r,tags:o},util:{debounce:f,markMatch:i},"class":{"abstract":e,single:v,multi:B}}}(jQuery));