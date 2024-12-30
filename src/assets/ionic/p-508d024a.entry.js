/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as e,h as i,f as n,i as o}from"./p-d836d43e.js";import{g as s}from"./p-2408c236.js";import{o as r,B as a,n as d,q as h,G as l}from"./p-e6635685.js";import{G as c}from"./p-9b97df10.js";import{shouldUseCloseWatcher as m}from"./p-ecceeb90.js";import{n as p,i as u,m as b,j as f}from"./p-b51e4004.js";import{m as v}from"./p-b82d4cab.js";import{c as g,b as x,a as w}from"./p-0574e87e.js";import{h as y,c as k}from"./p-47794def.js";import{u as z,v as C}from"./p-da2b833b.js";import"./p-7b30edcc.js";import"./p-3cc276f4.js";import"./p-06fee233.js";import"./p-c7e16491.js";const j=class{constructor(i){t(this,i),this.ionWillOpen=e(this,"ionWillOpen",7),this.ionWillClose=e(this,"ionWillClose",7),this.ionDidOpen=e(this,"ionDidOpen",7),this.ionDidClose=e(this,"ionDidClose",7),this.ionMenuChange=e(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=c.createBlocker({disableScroll:!0}),this.didLoad=!1,this.operationCancelled=!1,this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=t=>{const e=r(document);e&&!e.contains(this.el)||this.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const i=this.contentEl;i&&(void 0!==e&&i.classList.remove(`menu-content-${e}`),i.classList.add(`menu-content-${t}`),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=p(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}async connectedCallback(){"undefined"!=typeof customElements&&null!=customElements&&await customElements.whenDefined("ion-menu"),void 0===this.type&&(this.type=g.get("menuType","overlay"));const t=void 0!==this.contentId?document.getElementById(this.contentId):null;null!==t?(this.el.contains(t)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),this.contentEl=t,t.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),v._register(this),this.menuChanged(),this.gesture=(await import("./p-8ededb41.js")).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentWillLoad(){this.inheritedAttributes=u(this.el)}async componentDidLoad(){this.didLoad=!0;const t=this.el.closest("ion-split-pane");null!==t&&(this.isPaneVisible=await t.isVisible()),this.menuChanged(),this.updateState()}menuChanged(){this.didLoad&&this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}async disconnectedCallback(){await this.close(!1),this.blocker.destroy(),v._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=void 0}onSplitPaneChanged(t){const e=this.el.closest("ion-split-pane");null!==e&&e===t.target&&(this.isPaneVisible=t.detail.visible,this.updateState())}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close(void 0,a))}onKeydown(t){"Escape"===t.key&&this.close(void 0,a)}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0,e){return this.setOpen(!1,t,e)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0,i){return v._setOpen(this,t,e,i)}trapKeyboardFocus(t,e){const i=t.target;if(i)if(this.el.contains(i))this.lastFocus=i;else{const{el:t}=this;d(t),this.lastFocus===e.activeElement&&h(t)}}async _setOpen(t,e=!0,i){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t,i),await this.loadAnimation(),await this.startAnimation(t,e),this.operationCancelled?(this.operationCancelled=!1,1):(this.afterAnimation(t,i),0)))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth,e=p(this.side);if(t===this.width&&void 0!==this.animation&&e===this.isEndSide)return;this.width=t,this.isEndSide=e,this.animation&&(this.animation.destroy(),this.animation=void 0);const i=this.animation=await v._createAnimation(this.type,this);g.getBoolean("animated",!0)||i.duration(0),i.fill("both")}async startAnimation(t,e){const i=!t,n=x(this),o="ios"===n?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",s="ios"===n?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",r=this.animation.direction(i?"reverse":"normal").easing(i?s:o);e?await r.play():r.play({sync:!0}),"reverse"===r.getDirection()&&r.direction("normal")}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!v._getOpenSync()&&S(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen,l),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):b(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void b(!1,"isAnimating has to be true");const e=A(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}onEnd(t){if(!this.isAnimating||!this.animation)return void b(!1,"isAnimating has to be true");const e=this._isOpen,i=this.isEndSide,n=A(t.deltaX,e,i),o=this.width,r=n/o,a=t.velocityX,d=o/2,h=a>=0&&(a>.2||t.deltaX>d),c=a<=0&&(a<-.2||t.deltaX<-d),m=e?i?h:c:i?c:h;let p=!e&&m;e&&!m&&(p=!0),this.lastOnEnd=t.currentTime;let u=m?.001:-.001;u+=s([0,0],[.4,0],[.6,1],[1,1],f(0,r<0?.01:r,.9999))[0]||0;const v=this._isOpen?!m:m;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(p,l)),{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-u:u,300)}beforeAnimation(t,e){b(!this.isAnimating,"_before() should not be called while animating"),w("android")&&this.el.setAttribute("aria-hidden","true"),this.el.classList.add(_),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(O),this.contentEl&&(this.contentEl.classList.add(E),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit({role:e})}afterAnimation(t,e){var i;this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(w("android")&&this.el.removeAttribute("aria-hidden"),this.ionDidOpen.emit(),(null===(i=document.activeElement)||void 0===i?void 0:i.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.removeAttribute("aria-hidden"),this.el.classList.remove(_),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(E),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(O),this.animation&&this.animation.stop(),this.ionDidClose.emit({role:e}),document.removeEventListener("focus",this.handleFocus,!0))}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),t||(this.isAnimating&&(this.operationCancelled=!0),this.afterAnimation(!1,l))}render(){const{type:t,disabled:e,el:o,isPaneVisible:s,inheritedAttributes:r,side:a}=this,d=x(this);return i(n,{key:"da96fdb4c5ddf60e615cc4cdda7ccdb3fd7e089b",onKeyDown:m()?null:this.onKeydown,role:"navigation","aria-label":r["aria-label"]||"menu",class:{[d]:!0,[`menu-type-${t}`]:!0,"menu-enabled":!e,[`menu-side-${a}`]:!0,"menu-pane-visible":s,"split-pane-side":y("ion-split-pane",o)}},i("div",{key:"894e680fe227534711128c7aca980964ddb5a08a",class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},i("slot",{key:"e9f5934518dc0cceaeadf1f2820614595fec6bc9"})),i("ion-backdrop",{key:"7282077817657b1bb6c155f1404c0a519fece993",ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return o(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},A=(t,e,i)=>Math.max(0,e!==i?-t:t),S=(t,e,i,n)=>i?e>=t.innerWidth-n:e<=n,_="show-menu",O="show-backdrop",E="menu-content-open";j.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const M=async t=>{const e=await v.get(t);return!(!e||!await e.isActive())},P=class{constructor(e){t(this,e),this.inheritedAttributes={},this.onClick=async()=>v.toggle(this.menu),this.visible=!1,this.color=void 0,this.disabled=!1,this.menu=void 0,this.autoHide=!0,this.type="button"}componentWillLoad(){this.inheritedAttributes=u(this.el)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await M(this.menu)}render(){const{color:t,disabled:e,inheritedAttributes:o}=this,s=x(this),r=g.get("menuIcon","ios"===s?z:C),a=this.autoHide&&!this.visible,d={type:this.type},h=o["aria-label"]||"menu";return i(n,{key:"7ec29715ce7926b7c2b08f3d9cac8aaa16b3dc28",onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":a?"true":null,class:k(t,{[s]:!0,button:!0,"menu-button-hidden":a,"menu-button-disabled":e,"in-toolbar":y("ion-toolbar",this.el),"in-toolbar-color":y("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},i("button",Object.assign({key:"d4c5929264af3ba0328118bcc27d2ab7ef5d3809"},d,{disabled:e,class:"button-native",part:"native","aria-label":h}),i("span",{key:"7bfa6e9a93105486623d044861e879ec79ff64f1",class:"button-inner"},i("slot",{key:"071ab58e285832fc188706166f5547d45d501ac5"},i("ion-icon",{key:"918ec5d791921de9821c347af4f65f97dd94aabf",part:"icon",icon:r,mode:s,lazy:!1,"aria-hidden":"true"}))),"md"===s&&i("ion-ripple-effect",{key:"00ffdd53f635e706c1dbd01b8e7944498650fe81",type:"unbounded"})))}get el(){return o(this)}};P.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const W=class{constructor(e){t(this,e),this.onClick=()=>v.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await M(this.menu)}render(){const t=x(this),e=this.autoHide&&!this.visible;return i(n,{key:"7c27ea5b0795676bf5cb33e1f83aa142c197f64e",onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},i("slot",{key:"69f187becedc0fe34603d41d279f043cf0fdf776"}))}};W.style=":host(.menu-toggle-hidden){display:none}";export{j as ion_menu,P as ion_menu_button,W as ion_menu_toggle}