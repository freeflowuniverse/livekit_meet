(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{7598:function(e,n,s){"use strict";s.d(n,{a:function(){return h}});var i=s(7437),t=s(2265),r=s(708),c=s(6958),o=s(9993),d=s(5934),l=s(6093),a=s.n(l),u=s(257);const h=e=>{let{logLevel:n}=e;const s=(0,r.f)(),[l,h]=t.useState(!1),[,j]=t.useState({}),[m,g]=t.useState("");if(t.useEffect((()=>{s.getSid().then(g)}),[s]),(e=>{let{logLevel:n}=e;const s=(0,r.f)();t.useEffect((()=>((0,c.Ub)(null!==n&&void 0!==n?n:"debug"),u.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN&&u.env.NEXT_PUBLIC_DATADOG_SITE&&(console.log("setting up datadog logs"),d.fy.init({clientToken:u.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,site:u.env.NEXT_PUBLIC_DATADOG_SITE,forwardErrorsToLogs:!0,sessionSampleRate:100}),(0,c.qt)(((e,n,s)=>{switch(e){case c.in.debug:d.fy.logger.debug(n,s);break;case c.in.info:d.fy.logger.info(n,s);break;case c.in.warn:d.fy.logger.warn(n,s);break;case c.in.error:d.fy.logger.error(n,s)}}))),window.__lk_room=s,()=>{window.__lk_room=void 0})),[s,n])})({logLevel:n}),t.useEffect((()=>{if(window){const e=(0,o.Fj)(window,{"Shift+D":()=>{console.log("setting open"),h((e=>!e))}}),n=setInterval((()=>{j({})}),1e3);return()=>{e(),clearInterval(n)}}}),[l]),!l)return null;const f=s.localParticipant;return l?(0,i.jsxs)("div",{className:a().overlay,children:[(0,i.jsx)("section",{id:"room-info",children:(0,i.jsxs)("h3",{children:["Room Info ",s.name,": ",m]})}),(0,i.jsxs)("details",{open:!0,children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("b",{children:["Local Participant: ",f.identity]})}),(0,i.jsxs)("details",{open:!0,className:a().detailsSection,children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Published tracks"})}),(0,i.jsx)("div",{children:Array.from(f.trackPublications.values()).map((e=>{var n,s,t,r;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)("i",{children:[e.source.toString(),"\xa0",(0,i.jsx)("span",{children:e.trackSid})]})}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Kind"}),(0,i.jsxs)("td",{children:[e.kind,"\xa0","video"===e.kind&&(0,i.jsxs)("span",{children:[null===(s=e.track)||void 0===s||null===(n=s.dimensions)||void 0===n?void 0:n.width,"x",null===(r=e.track)||void 0===r||null===(t=r.dimensions)||void 0===t?void 0:t.height]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Bitrate"}),(0,i.jsxs)("td",{children:[Math.ceil(e.track.currentBitrate/1e3)," kbps"]})]})]})})]})}))})]}),(0,i.jsxs)("details",{open:!0,className:a().detailsSection,children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Permissions"})}),(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:f.permissions&&Object.entries(f.permissions).map((e=>{let[n,s]=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n}),"canPublishSources"!==n?(0,i.jsx)("td",{children:s.toString()}):(0,i.jsxs)("td",{children:[" ",s.join(", ")," "]})]})})}))})})})]})]}),(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Remote Participants"})}),Array.from(s.remoteParticipants.values()).map((e=>(0,i.jsxs)("details",{className:a().detailsSection,children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("b",{children:[e.identity,(0,i.jsx)("span",{})]})}),(0,i.jsx)("div",{children:Array.from(e.trackPublications.values()).map((e=>{var n,s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)("i",{children:[e.source.toString(),"\xa0",(0,i.jsx)("span",{children:e.trackSid})]})}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Kind"}),(0,i.jsxs)("td",{children:[e.kind,"\xa0","video"===e.kind&&(0,i.jsxs)("span",{children:[null===(n=e.dimensions)||void 0===n?void 0:n.width,"x",null===(s=e.dimensions)||void 0===s?void 0:s.height]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Status"}),(0,i.jsx)("td",{children:x(e)})]}),e.track&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Bitrate"}),(0,i.jsxs)("td",{children:[Math.ceil(e.track.currentBitrate/1e3)," kbps"]})]})]})})]})}))})]},e.sid)))]})]}):(0,i.jsx)(i.Fragment,{})};function x(e){return e.isSubscribed?e.isEnabled?"enabled":"disabled":"unsubscribed"}},1292:function(e,n,s){"use strict";s.d(n,{T:function(){return j}});var i=s(7437),t=s(2265),r=s(6958),c=s(708),o=s(2854),d=s(3557),l=s(6602),a=s(7365),u=s(5009),h=s.n(u),x=s(257);function j(e){const n=(0,c.j)(),s=(0,c.f)(),u=x.env.NEXT_PUBLIC_LK_RECORD_ENDPOINT,j=t.useMemo((()=>({media:{camera:!0,microphone:!0,label:"Media Devices",speaker:!0},effects:{label:"Effects"},recording:u?{label:"Recording"}:void 0})),[]),m=t.useMemo((()=>Object.keys(j).filter((e=>void 0!==e))),[j]),[g,f]=t.useState(m[0]),{isNoiseFilterEnabled:b,setNoiseFilterEnabled:p,isNoiseFilterPending:v}=(0,a.B)();t.useEffect((()=>{p(!0)}),[]);const k=(0,o.Y)(),[_,N]=t.useState(k),[S,E]=t.useState(!1);t.useEffect((()=>{_!==k&&E(!1)}),[k,_]);return(0,i.jsxs)("div",{className:"settings-menu",style:{width:"100%"},...e,children:[(0,i.jsx)("div",{className:h().tabs,children:m.map((e=>j[e]&&(0,i.jsx)("button",{className:"".concat(h().tab," lk-button"),onClick:()=>f(e),"aria-pressed":e===g,children:j[e].label},e)))}),(0,i.jsxs)("div",{className:"tab-content",children:["media"===g&&(0,i.jsxs)(i.Fragment,{children:[j.media&&j.media.camera&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Camera"}),(0,i.jsxs)("section",{className:"lk-button-group",children:[(0,i.jsx)(d.T,{source:r.fQ.Source.Camera,children:"Camera"}),(0,i.jsx)("div",{className:"lk-button-group-menu",children:(0,i.jsx)(l._T,{kind:"videoinput"})})]})]}),j.media&&j.media.microphone&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Microphone"}),(0,i.jsxs)("section",{className:"lk-button-group",children:[(0,i.jsx)(d.T,{source:r.fQ.Source.Microphone,children:"Microphone"}),(0,i.jsx)("div",{className:"lk-button-group-menu",children:(0,i.jsx)(l._T,{kind:"audioinput"})})]})]}),j.media&&j.media.speaker&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Speaker & Headphones"}),(0,i.jsxs)("section",{className:"lk-button-group",children:[(0,i.jsx)("span",{className:"lk-button",children:"Audio Output"}),(0,i.jsx)("div",{className:"lk-button-group-menu",children:(0,i.jsx)(l._T,{kind:"audiooutput"})})]})]})]}),"effects"===g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Audio"}),(0,i.jsxs)("section",{children:[(0,i.jsx)("label",{htmlFor:"noise-filter",children:" Enhanced Noise Cancellation"}),(0,i.jsx)("input",{type:"checkbox",id:"noise-filter",onChange:e=>p(e.target.checked),checked:b,disabled:v})]})]}),"recording"===g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Record Meeting"}),(0,i.jsxs)("section",{children:[(0,i.jsx)("p",{children:k?"Meeting is currently being recorded":"No active recordings for this meeting"}),(0,i.jsxs)("button",{disabled:S,onClick:()=>(async()=>{if(!u)throw TypeError("No recording endpoint specified");if(s.isE2EEEnabled)throw Error("Recording of encrypted meetings is currently not supported");let e;E(!0),N(k),e=k?await fetch(u+"/stop?roomName=".concat(s.name)):await fetch(u+"/start?roomName=".concat(s.name)),e.ok||(console.error("Error handling recording request, check server logs:",e.status,e.statusText),E(!1))})(),children:[k?"Stop":"Start"," Recording"]})]})]})]}),(0,i.jsx)("button",{className:"lk-button ".concat(h().settingsCloseButton),onClick:()=>{var e,s;return null===n||void 0===n||null===(e=(s=n.widget).dispatch)||void 0===e?void 0:e.call(s,{msg:"toggle_settings"})},children:"Close"})]})}},9413:function(e,n,s){"use strict";function i(e){return encodeURIComponent(e)}function t(e){return decodeURIComponent(e)}function r(){return"".concat(c(4),"-").concat(c(4))}function c(e){let n="";const s="abcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<e;i++)n+=s.charAt(Math.floor(36*Math.random()));return n}s.d(n,{FZ:function(){return t},O1:function(){return c},lO:function(){return i},qP:function(){return r}})},3985:function(e,n,s){"use strict";s.d(n,{t:function(){return t}});var i=s(6958);function t(e){return i.zh.includes(e)}},6093:function(e){e.exports={overlay:"Debug_overlay__SZwFO",detailsSection:"Debug_detailsSection__vJYFV"}},5009:function(e){e.exports={settingsCloseButton:"SettingsMenu_settingsCloseButton__mdSd2",tabs:"SettingsMenu_tabs__uq0cC",tab:"SettingsMenu_tab__Pfa2A"}}}]);
//# sourceMappingURL=126-bc9fe8918e7f1e84.js.map