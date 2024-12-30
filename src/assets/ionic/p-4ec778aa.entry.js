/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,h as i,f as s,i as e,d as o}from"./p-d836d43e.js";import{a as n}from"./p-3cc276f4.js";import"./p-b51e4004.js";const a=class{constructor(i){t(this,i),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return n(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:e,component:o}=this;return i(s,{key:"cb75d0877979b3b8df8f7e1952bfa9677da1eaa5",role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===o,"tab-hidden":!e}},i("slot",{key:"37fbb7b7a6b03eb93b1dacd2dc1025b78eb2aa6b"}))}get el(){return e(this)}static get watchers(){return{active:["changeActive"]}}};a.style=":host(.tab-hidden){display:none !important}";const h=class{constructor(i){t(this,i),this.ionNavWillLoad=o(this,"ionNavWillLoad",7),this.ionTabsWillChange=o(this,"ionTabsWillChange",3),this.ionTabsDidChange=o(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=t=>{const{href:i,tab:s}=t.detail;if(this.useRouter&&void 0!==i){const t=document.querySelector("ion-router");t&&t.push(i)}else this.select(s)},this.selectedTab=void 0,this.useRouter=!1}async componentWillLoad(){if(this.useRouter||(this.useRouter=!(!this.el.querySelector("ion-router-outlet")&&!document.querySelector("ion-router")||this.el.closest("[no-router]"))),!this.useRouter){const t=this.tabs;t.length>0&&await this.select(t[0])}this.ionNavWillLoad.emit()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}async select(t){const i=r(this.tabs,t);return!!this.shouldSwitch(i)&&(await this.setActive(i),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(t){return r(this.tabs,t)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(t){const i=r(this.tabs,t);return this.shouldSwitch(i)?(await this.setActive(i),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){var t;const i=null===(t=this.selectedTab)||void 0===t?void 0:t.tab;return void 0!==i?{id:i,element:this.selectedTab}:void 0}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,i=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&i!==t&&(i&&(i.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return i(s,{key:"e01ccf6bfaccad094515be50e407399c733fc226",onIonTabButtonClick:this.onTabClicked},i("slot",{key:"38d2d01dbfd8a08f01e6f0e27274b21d75424e37",name:"top"}),i("div",{key:"7e894f0f423e2d43e1c68daff5f9f6c442fad237",class:"tabs-inner"},i("slot",{key:"df16be529a0370a26d0adf850530b31607507c23"})),i("slot",{key:"44642e1cb24c3281c43db75fd69a32fe0defe40a",name:"bottom"}))}get el(){return e(this)}},r=(t,i)=>{const s="string"==typeof i?t.find((t=>t.tab===i)):i;return s||console.error(`tab with id: "${s}" does not exist`),s};h.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";export{a as ion_tab,h as ion_tabs}