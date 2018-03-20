webpackJsonp([1],{"1Irx":function(e,t){},HVkT:function(e,t){},N6XS:function(e,t){},NBsK:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};a.d(n,"playbackConfig",function(){return u}),a.d(n,"youboraConfig",function(){return p}),a.d(n,"imaConfig",function(){return f}),a.d(n,"player",function(){return m}),a.d(n,"playerType",function(){return v}),a.d(n,"embedServiceUrl",function(){return g}),a.d(n,"playerConfig",function(){return y}),a.d(n,"uiConfig",function(){return h}),a.d(n,"providerConfig",function(){return _}),a.d(n,"genericConfig",function(){return b}),a.d(n,"runtimeConfig",function(){return C}),a.d(n,"mediaInfo",function(){return x}),a.d(n,"targetId",function(){return T}),a.d(n,"partnerId",function(){return S});var r,i=a("7+uW"),o=a("Dd8w"),l=a.n(o),s=a("woOf"),c=a.n(s),d=a("NYxO"),u=function(e){return e.playerConfig.playback},p=function(e){return e.playerConfig.plugins.youbora},f=function(e){return e.playerConfig.plugins.ima},m=function(e){return e.player},v=function(e){return e.playerType},g=function(e){return e.embedServiceUrl},y=function(e){return e.playerConfig},h=function(e){return e.uiConfig},_=function(e){return e.providerConfig},b=function(e){return e.genericConfig},C=function(e){return e.runtimeConfig},x=function(e){return e.mediaInfo},T=function(e){return e.runtimeConfig.targetId},S=function(e){return e.runtimeConfig.provider.partnerId},E=a("bOdI"),k=a.n(E),w=(r={},k()(r,"SET_PLAYER",function(e,t){e.player=t}),k()(r,"ADD_PLUGIN",function(e,t){e.playerConfig.plugins[t.name]=t.config}),k()(r,"REMOVE_PLUGIN",function(e,t){e.playerConfig.plugins[t]&&delete e.playerConfig.plugins[t]}),k()(r,"UPDATE_AD_TAG_URL",function(e,t){e.playerConfig.plugins.ima.adTagUrl=t}),k()(r,"UPDATE_CONFIG",function(e,t){e.runtimeConfig=t}),k()(r,"UPDATE_MEDIA_INFO",function(e,t){e.mediaInfo=t}),k()(r,"UPDATE_PLAYER_TYPE",function(e,t){e.playerType=t}),k()(r,"UPDATE_EMBED_SERVICE_URL",function(e,t){e.embedServiceUrl=t}),r);i.default.use(d.a);var I={player:null,mediaInfo:null,playerType:"ovp",embedServiceUrl:"",genericConfig:{targetId:"player-container",disableUserCache:!1,logLevel:"DEBUG"},providerConfig:{partnerId:1091,uiConfId:null,ks:"",env:{cdnUrl:"//qa-apache-php7.dev.kaltura.com/",serviceUrl:"//qa-apache-php7.dev.kaltura.com/api_v3"}},playerConfig:{plugins:{},playback:{audioLanguage:"",textLanguage:"",useNativeTextTrack:!1,volume:1,startTime:0,playsinline:!0,preload:"none",autoplay:!1,allowMutedAutoPlay:!0,muted:!1}},uiConfig:{forceTouchUI:!1},runtimeConfig:null},U=new d.a.Store({state:I,mutations:w,getters:n}),P=function(e){return U.commit("ADD_PLUGIN",e)},L=function(e){return U.commit("REMOVE_PLUGIN",e)},A=function(e){return U.commit("UPDATE_CONFIG",e)},D=function(e){return U.commit("UPDATE_MEDIA_INFO",e)},O=function(e){return U.commit("UPDATE_EMBED_SERVICE_URL",e)},R={computed:l()({},Object(d.c)({config:"providerConfig",playerType:"playerType",embedServiceUrl:"embedServiceUrl"})),methods:{onPlayerTypeSelected:function(e){!function(e){U.commit("UPDATE_PLAYER_TYPE",e)}(e)},onEmbedServiceInput:function(e){if(this.embedServiceRegex.test(e)){var t=e.match(this.embedServiceRegex),a=t[1],n=t[2];this.config.uiConfId=a,this.config.partnerId=n,O(e)}else O("")}},data:function(){return{playerTypes:["ovp","ott"],embedServiceRegex:/\/p\/\d+\/sp\/\d+\/embedPlaykitJs\/uiconf_id\/(\d+)\/partner_id\/(\d+)/}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{"label-position":"left",model:e.config,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Embed Service Url","label-width":"130px"}},[a("el-input",{on:{change:e.onEmbedServiceInput}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Player Type"}},[a("el-dropdown",{on:{command:e.onPlayerTypeSelected}},[a("el-button",{attrs:{disabled:!!e.embedServiceUrl,type:"primary"}},[e._v("\n        "+e._s(e.playerType.toUpperCase())),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.playerTypes,function(t){return a("el-dropdown-item",{key:t,attrs:{value:t,command:t}},[e._v("\n          "+e._s(t.toUpperCase())+"\n        ")])}))],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Partner ID"}},[a("el-input",{attrs:{disabled:!!e.embedServiceUrl},model:{value:e.config.partnerId,callback:function(t){e.$set(e.config,"partnerId",t)},expression:"config.partnerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"UI Conf ID"}},[a("el-input",{attrs:{disabled:!!e.embedServiceUrl},model:{value:e.config.uiConfId,callback:function(t){e.$set(e.config,"uiConfId",t)},expression:"config.uiConfId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"KS"}},[a("el-input",{model:{value:e.config.ks,callback:function(t){e.$set(e.config,"ks",t)},expression:"config.ks"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Service Url"}},[a("el-input",{attrs:{disabled:!!e.embedServiceUrl},model:{value:e.config.env.serviceUrl,callback:function(t){e.$set(e.config.env,"serviceUrl",t)},expression:"config.env.serviceUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"CDN Url"}},[a("el-input",{attrs:{disabled:!!e.embedServiceUrl},model:{value:e.config.env.cdnUrl,callback:function(t){e.$set(e.config.env,"cdnUrl",t)},expression:"config.env.cdnUrl"}})],1)],1)},staticRenderFns:[]},N=a("VU/8")(R,$,!1,null,null,null).exports,M=a("W3Iv"),V=a.n(M),F=a("Sf6X"),j={mounted:function(){var e=F.core.LogLevelType;this.logLevels=V()(e)},data:function(){return{logLevels:[]}},computed:l()({},Object(d.c)({config:"genericConfig"}))},B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{"label-position":"left",model:e.config,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Target ID"}},[a("el-input",{model:{value:e.config.targetId,callback:function(t){e.$set(e.config,"targetId",t)},expression:"config.targetId"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"200px",label:"Disable User Cache"}},[a("el-switch",{model:{value:e.config.disableUserCache,callback:function(t){e.$set(e.config,"disableUserCache",t)},expression:"config.disableUserCache"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"200px",label:"Log Level"}},[a("el-select",{attrs:{placeholder:"Select"},model:{value:e.config.logLevel,callback:function(t){e.$set(e.config,"logLevel",t)},expression:"config.logLevel"}},e._l(e.logLevels,function(e){return a("el-option",{key:e[1],attrs:{label:e[0],value:e[1]}})}))],1)],1)},staticRenderFns:[]},H=a("VU/8")(j,B,!1,null,null,null).exports,G={props:["size","playerLoaded"],updated:function(){this.playerLoaded&&this.player.configure({playback:this.config})},created:function(){this.playerLoaded&&(this.cachedConfig=this.playbackConfig)},computed:l()({},Object(d.b)(["player","playbackConfig"]),{config:function(){return this.playerLoaded?this.cachedConfig:this.playbackConfig},preload:{get:function(){return"auto"===this.config.preload},set:function(e){this.config.preload=e?"auto":"none"}}}),data:function(){return{cachedConfig:{}}}},K={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{size:e.size,"label-position":"left",model:e.config,"label-width":"150px"}},[a("el-form-item",{staticClass:"padding-sm",attrs:{"label-width":"200px",label:"Auto Play"}},[a("el-checkbox",{model:{value:e.config.autoplay,callback:function(t){e.$set(e.config,"autoplay",t)},expression:"config.autoplay"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{"label-width":"200px",label:"Allow Muted Auto Play"}},[a("el-checkbox",{model:{value:e.config.allowMutedAutoPlay,callback:function(t){e.$set(e.config,"allowMutedAutoPlay",t)},expression:"config.allowMutedAutoPlay"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{"label-width":"200px",label:"Preload"}},[a("el-checkbox",{model:{value:e.preload,callback:function(t){e.preload=t},expression:"preload"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{"label-width":"200px",label:"Muted"}},[a("el-checkbox",{model:{value:e.config.muted,callback:function(t){e.$set(e.config,"muted",t)},expression:"config.muted"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{"label-width":"200px",label:"Playsinline"}},[a("el-checkbox",{model:{value:e.config.playsinline,callback:function(t){e.$set(e.config,"playsinline",t)},expression:"config.playsinline"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{label:"Volume"}},[a("el-input-number",{attrs:{min:0,max:1,step:.1},model:{value:e.config.volume,callback:function(t){e.$set(e.config,"volume",t)},expression:"config.volume"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{label:"Start Time"}},[a("el-input",{model:{value:e.config.startTime,callback:function(t){e.$set(e.config,"startTime",t)},expression:"config.startTime"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{"label-width":"200px",label:"Use Native Text Track"}},[a("el-checkbox",{model:{value:e.config.useNativeTextTrack,callback:function(t){e.$set(e.config,"useNativeTextTrack",t)},expression:"config.useNativeTextTrack"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{label:"Audio Language"}},[a("el-input",{model:{value:e.config.audioLanguage,callback:function(t){e.$set(e.config,"audioLanguage",t)},expression:"config.audioLanguage"}})],1),e._v(" "),a("el-form-item",{staticClass:"padding-sm",attrs:{label:"Text Language"}},[a("el-input",{model:{value:e.config.textLanguage,callback:function(t){e.$set(e.config,"textLanguage",t)},expression:"config.textLanguage"}})],1)],1)},staticRenderFns:[]};var Y=a("VU/8")(G,K,!1,function(e){a("v6Sm")},"data-v-42f7c978",null).exports,z={methods:{onAdTagChanged:function(){var e;e=this.ima.adTagUrl,U.commit("UPDATE_AD_TAG_URL",e)},onSwitchChanged:function(){this.active?P({name:"ima",config:this.ima}):L("ima")}},created:function(){this.config&&(this.active=!0,this.ima=this.config)},computed:l()({},Object(d.b)({config:"imaConfig"})),data:function(){return{active:!1,ima:{adTagUrl:"https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator="}}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:4}},[a("el-switch",{on:{change:e.onSwitchChanged},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})],1),e._v(" "),a("el-col",{attrs:{span:20}},[e.active?a("el-input",{attrs:{placeholder:"Enter Ad Tag Url"},on:{change:e.onAdTagChanged},model:{value:e.ima.adTagUrl,callback:function(t){e.$set(e.ima,"adTagUrl",t)},expression:"ima.adTagUrl"}}):e._e()],1)],1)},staticRenderFns:[]},W=a("VU/8")(z,q,!1,null,null,null).exports,J={methods:{onSwitchChanged:function(){this.active?P({name:"youbora",config:this.youbora}):L("youbora")}},computed:l()({},Object(d.b)({config:"youboraConfig"})),created:function(){this.config&&(this.active=!0,this.youbora=this.config)},data:function(){return{active:!1,youbora:{accountCode:"powerdev"}}}},X={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:4}},[a("el-switch",{on:{change:e.onSwitchChanged},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})],1)],1)},staticRenderFns:[]};var Z={components:{YouboraPlugin:a("VU/8")(J,X,!1,function(e){a("hIWA")},"data-v-8a3d44ae",null).exports,ImaPlugin:W}},Q={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-form-item",{attrs:{label:"IMA","label-width":"80px"}},[t("ImaPlugin")],1),this._v(" "),t("el-form-item",{attrs:{label:"Youbora","label-width":"80px"}},[t("YouboraPlugin")],1)],1)},staticRenderFns:[]},ee={props:["playerLoaded"],components:{PlaybackOptions:Y,PluginsConfig:a("VU/8")(Z,Q,!1,null,null,null).exports}},te={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"120px"}},[t("el-form-item",{attrs:{label:"Plugins"}},[t("br"),this._v(" "),t("PluginsConfig")],1),this._v(" "),t("el-form-item",{attrs:{label:"Playback"}},[t("br"),this._v(" "),t("PlaybackOptions",{attrs:{playerLoaded:this.playerLoaded}})],1)],1)},staticRenderFns:[]},ae=a("VU/8")(ee,te,!1,null,null,null).exports,ne={computed:l()({},Object(d.c)({config:"uiConfig"}))},re={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{"label-position":"left",model:e.config,"label-width":"120px"}},[a("el-form-item",{attrs:{"label-width":"200px",label:"Force Touch UI"}},[a("el-switch",{model:{value:e.config.forceTouchUI,callback:function(t){e.$set(e.config,"forceTouchUI",t)},expression:"config.forceTouchUI"}})],1)],1)},staticRenderFns:[]},ie=a("VU/8")(ne,re,!1,null,null,null).exports;var oe=a("//Fk"),le=a.n(oe);var se={OTT:"kaltura-tv-player.js",OVP:"kaltura-ovp-player.js"};function ce(e,t){var a,n=void 0;return n=e||se[t.toUpperCase()],a=n,new le.a(function(e,t){var n=void 0;(n=document.createElement("script")).src=a,n.onload=e,n.onerror=t,document.head.appendChild(n)})}var de=a("9Luo"),ue=a.n(de),pe=a("fZjL"),fe=a.n(pe),me=a("mvHQ"),ve=a.n(me),ge=a("Zrlr"),ye=a.n(ge),he=a("wxAW"),_e=a.n(he),be=function(){function e(){ye()(this,e)}return _e()(e,null,[{key:"clearPlayerStorage",value:function(){Ce("kaltura-player-js")}},{key:"clearAppStorage",value:function(){Ce("kaltura-player-app")}},{key:"hasAppStorage",value:function(){return function(e){if(localStorage)return!!localStorage.getItem(e);return!1}("kaltura-player-app___data")}},{key:"setAppStorage",value:function(e,t,a){var n,r;n="kaltura-player-app___data",r={config:e,embedServiceUrl:t,playerType:a},localStorage&&localStorage.setItem(n,ve()(r))}},{key:"getAppStorage",value:function(){return function(e){if(localStorage){var t=localStorage.getItem(e);if(t)return JSON.parse(t)}}("kaltura-player-app___data")}}]),e}();function Ce(e){localStorage&&fe()(localStorage).forEach(function(t){t.startsWith(e)&&localStorage.removeItem(t)})}var xe={computed:l()({},Object(d.b)(["runtimeConfig","genericConfig","uiConfig","providerConfig","playerConfig","embedServiceUrl","playerType"])),components:{ProviderOptions:N,GenericOptions:H,PlayerOptions:ae,UIOptions:ie},created:function(){var e=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}("generate");if(this.setup=!0,e){var t=ue.a.decompress(JSON.parse(e));A(t.config),D(t.mediaInfo),this.loadAndCreatePlayer(t.embedServiceUrl,t.playerType)}else if(be.hasAppStorage()){var a=be.getAppStorage();A(a.config),this.loadAndCreatePlayer(a.embedServiceUrl,a.playerType)}else this.setup=!1},methods:{setupPlayer:function(){this.setup=!0;var e={provider:this.providerConfig,player:this.playerConfig,ui:this.uiConfig};A(c()(e,this.genericConfig)),be.setAppStorage(this.runtimeConfig,this.embedServiceUrl,this.playerType),this.loadAndCreatePlayer(this.embedServiceUrl,this.playerType)},loadAndCreatePlayer:function(e,t){var a=this;ce(e,t).then(function(){var e,t,n;e=a.runtimeConfig,(t=document.createElement("div")).id=e.targetId,document.body.appendChild(t),__kalturaPlayer=KalturaPlayer.setup(e),n=__kalturaPlayer,U.commit("SET_PLAYER",n),a.setup=!1})}},data:function(){return{setup:!1}}},Te={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.setup,expression:"setup"}]},[a("el-col",{attrs:{span:7}},[a("div",{staticClass:"grid-content"})]),e._v(" "),a("el-col",{attrs:{span:9}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("h1",[e._v("Configuration")])]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{position:"relative"}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.setup,expression:"setup"}],staticStyle:{float:"right","margin-top":"30px"},attrs:{type:"primary"},on:{click:e.setupPlayer}},[e._v("\n            Setup\n            Player\n          ")])],1)])],1),e._v(" "),a("el-collapse",[a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[e._v("Generic Options")])])]),e._v(" "),a("div",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("GenericOptions")],1)],1)],2),e._v(" "),a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[e._v("Provider Options")])])]),e._v(" "),a("div",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("ProviderOptions")],1)],1)],2),e._v(" "),a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[e._v("Player Options")])])]),e._v(" "),a("div",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("PlayerOptions",{attrs:{playerLoaded:!1}})],1)],1)],2),e._v(" "),a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[e._v("UI Options")])])]),e._v(" "),a("div",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("UIOptions")],1)],1)],2)],1)],1),e._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"grid-content"})])],1)},staticRenderFns:[]},Se=a("VU/8")(xe,Te,!1,null,null,null).exports,Ee=[{value:"0_wifqaipd",description:"Basic VOD"},{value:"0_4ktof5po",description:"Long VOD"},{value:"0_wu32qrt3",description:"ABR"},{value:"0_clvqgcxy",description:"Manual Switch"},{value:"0_df8g87v8",description:"Captions/Multi Audio (Disney)"},{value:"0_fl4ioobl",description:"Default Captions (Ger)"},{value:"0_ttfy4uu0",description:"Multi Audio (it/en/ru)"},{value:"0_12xzpcxr",description:"Audio Entry"},{value:"0_2jiaa9tb",description:"DRM"},{value:"0_7o8zceol",description:"DRM ABR"},{value:"0_f8re4ujs",description:"Live No DVR"},{value:"0_popae503",description:"Live DVR"},{value:"0_uwai8bwr",description:"Universal Live No DVR"},{value:"0_fdb6sbgm",description:"WhetherNation Live"},{value:"0_itdftc7v",description:"ABC Live"}],ke={computed:l()({},Object(d.b)(["player","mediaInfo","partnerId"])),mounted:function(){var e=this;if(1091===this.partnerId&&(this.entries=Ee),this.isOTT()){var t=KalturaPlayer.providers.ContextType,a=KalturaPlayer.providers.MediaType;this.contextTypes=V()(t),this.mediaTypes=V()(a),this.options.contextType=t.PLAYBACK,this.options.mediaType=a.MEDIA}this.mediaInfo&&(this.isLoadingMedia=!0,this.player.loadMedia(this.mediaInfo).then(function(){var t=e.streamPriority.find(function(t){return t.data.format===e.player.streamType});e.onPrioritySelected(t),e.entry=e.mediaInfo.entryId,e.isLoadingMedia=!1}))},methods:{isOTT:function(){return"ott"===KalturaPlayer.PLAYER_TYPE},querySearch:function(e,t){var a=this.entries;t(e?a.filter(this.createFilter(e)):a)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase())}},onLoadClicked:function(){var e=this;if(this.entry)if(this.isLoadingMedia=!0,this.configureStreamPriority(),this.entry.includes("."))this.configureSource(),setTimeout(function(){return e.isLoadingMedia=!1},500);else{var t={entryId:this.entry};this.options.ks&&(t.ks=this.options.ks),this.isOTT()&&(this.options.contextType&&(t.contextType=this.options.contextType),this.options.mediaType&&(t.mediaType=this.options.mediaType),this.options.fileIds&&(t.fileIds=this.options.fileIds),this.options.protocol&&(t.protocol=this.options.protocol),this.options.formats&&(t.formats=this.options.formats)),D(t),this.player.loadMedia(t).then(function(){return e.isLoadingMedia=!1})}},onPrioritySelected:function(e){var t=this.streamPriority.findIndex(function(t){return t.data.format===e.data.format});t>-1&&this.streamPriority.splice(t,1),this.streamPriority.unshift(e)},configureSource:function(){this.player.configure({sources:k()({},this.streamPriority[0].data.format,[{mimetype:this.streamPriority[0].mimetype,url:this.entry}])})},configureStreamPriority:function(){this.player.configure({playback:{streamPriority:this.streamPriority.map(function(e){return e.data})}})}},data:function(){return{entries:[],contextTypes:[],mediaTypes:[],isLoadingMedia:!1,entry:null,options:{ks:"",protocol:"",contextType:"",mediaType:"",fileIds:"",formats:[]},streamPriority:[{mimetype:"application/x-mpegURL",data:{engine:"html5",format:"hls"}},{mimetype:"application/dash+xml",data:{engine:"html5",format:"dash"}},{mimetype:"video/mp4",data:{engine:"html5",format:"progressive"}}]}}},we={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-row",[a("el-col",{attrs:{span:5}},[a("div",{staticStyle:{float:"right"}},[a("el-dropdown",{on:{command:e.onPrioritySelected}},[a("el-button",{attrs:{type:"primary"}},[e._v("\n            "+e._s(e.streamPriority[0].data.format.toUpperCase())),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.streamPriority,function(t){return a("el-dropdown-item",{key:t.data.format,attrs:{value:t.data.format,command:t}},[e._v("\n              "+e._s(t.data.format.toUpperCase())+"\n            ")])}))],1)],1)]),e._v(" "),a("el-col",{attrs:{span:14}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"Enter .mpd/.m3u8/.mp4 URL or a valid entry ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"value"},[e._v(e._s(t.item.value)+" - "+e._s(t.item.description))])]}}]),model:{value:e.entry,callback:function(t){e.entry=t},expression:"entry"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary",loading:e.isLoadingMedia},on:{click:e.onLoadClicked}},[e._v("LOAD MEDIA")])],1)],1),e._v(" "),a("el-row",[a("div",{staticClass:"padding-sm"},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"})]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-collapse",[a("el-collapse-item",{attrs:{title:"Provider Options",name:"provider-options"}},[a("el-form",{ref:"form",attrs:{"label-position":"left",size:"mini",model:e.options,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"KS"}},[a("el-input",{model:{value:e.options.ks,callback:function(t){e.$set(e.options,"ks",t)},expression:"options.ks"}})],1),e._v(" "),e.isOTT()?a("div",[a("el-form-item",{attrs:{label:"Media Type"}},[a("el-select",{attrs:{"default-first-option":!0,placeholder:"Select"},model:{value:e.options.mediaType,callback:function(t){e.$set(e.options,"mediaType",t)},expression:"options.mediaType"}},e._l(e.mediaTypes,function(e){return a("el-option",{key:e[1],attrs:{label:e[0],value:e[1]}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"Context Type"}},[a("el-select",{attrs:{"default-first-option":!0,placeholder:"Select"},model:{value:e.options.contextType,callback:function(t){e.$set(e.options,"contextType",t)},expression:"options.contextType"}},e._l(e.contextTypes,function(e){return a("el-option",{key:e[1],attrs:{label:e[0],value:e[1]}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"Protocol"}},[a("el-input",{attrs:{placeholder:"http/https"},model:{value:e.options.protocol,callback:function(t){e.$set(e.options,"protocol",t)},expression:"options.protocol"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"File Ids"}},[a("el-input",{attrs:{placeholder:"fileId1, fileId2"},model:{value:e.options.fileIds,callback:function(t){e.$set(e.options,"fileIds",t)},expression:"options.fileIds"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Formats"}},[a("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"","no-data-text":"...",placeholder:"Choose formats"},model:{value:e.options.formats,callback:function(t){e.$set(e.options,"formats",t)},expression:"options.formats"}})],1)],1):e._e()],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]},Ie=a("VU/8")(ke,we,!1,null,null,null).exports,Ue={created:function(){var e=this;this.player.addEventListener(this.player.Event.SOURCE_SELECTED,function(){e.engineType=e.player.engineType,e.streamType=e.player.streamType,e.rawAdapterType=e.player._engine._mediaSourceAdapter.constructor.id})},computed:l()({},Object(d.b)(["player"]),{adapterType:function(){switch(this.rawAdapterType){case"NativeAdapter":return"native";case"HlsAdapter":return"hls.js";case"DashAdapter":return"shaka-player"}}}),data:function(){return{streamType:"",engineType:"",rawAdapterType:""}}},Pe={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("div",{staticClass:"text item font-sm"},[a("b",[e._v("Engine Type:")]),e._v(" "),a("span",{staticClass:"engine-info-type"},[e._v(e._s(e.engineType))])]),e._v(" "),a("div",{staticClass:"text item font-sm"},[a("b",[e._v("Stream Type:")]),e._v(" "),a("span",{staticClass:"engine-info-type"},[e._v(e._s(e.streamType))])]),e._v(" "),a("div",{staticClass:"text item font-sm"},[a("b",[e._v("Adapter Type:")]),e._v(" "),a("span",{staticClass:"engine-info-type"},[e._v(e._s(e.adapterType))])])])},staticRenderFns:[]};var Le=a("VU/8")(Ue,Pe,!1,function(e){a("N6XS")},"data-v-020e1674",null).exports,Ae={computed:l()({},Object(d.b)(["player"])),created:function(){var e=this;this.player.addEventListener(this.player.Event.PLAYER_STATE_CHANGED,function(t){e.currentState=t.payload.newState.type,e.previousState=t.payload.oldState.type})},data:function(){return{currentState:"",previousState:""}}},De={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("div",{staticClass:"text item font-sm"},[a("b",[e._v("Previous State:")]),e._v(" "),a("span",{staticClass:"state-info-type"},[e._v(e._s(e.previousState))])]),e._v(" "),a("div",{staticClass:"text item font-sm"},[a("b",[e._v("Current State:")]),e._v(" "),a("span",{staticClass:"state-info-type"},[e._v(e._s(e.currentState))])])])},staticRenderFns:[]};var Oe=a("VU/8")(Ae,De,!1,function(e){a("rV1i")},"data-v-2a25ebd1",null).exports,Re={computed:l()({},Object(d.b)(["player"])),created:function(){var e=this;this.player.addEventListener(this.player.Event.SOURCE_SELECTED,function(){e.stateHistory=[]}),this.player.addEventListener(this.player.Event.PLAYER_STATE_CHANGED,function(t){e.stateHistory.unshift({time:(new Date).toLocaleTimeString(),type:t.payload.oldState.type,index:e.stateHistory.length})})},data:function(){return{stateHistory:[]}}},$e={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("div",{staticClass:"state-history-console"},e._l(e.stateHistory,function(t){return a("div",{key:t.index,staticClass:"text item font-sm"},[a("span",{staticClass:"state-info-type"},[e._v(e._s(t.time)+": "+e._s(t.type))])])}))])},staticRenderFns:[]};var Ne=a("VU/8")(Re,$e,!1,function(e){a("HVkT")},"data-v-25b27491",null).exports,Me=a("gRE1"),Ve=a.n(Me),Fe={computed:l()({},Object(d.b)(["player"]),{filteredEvents:function(){var e=this;return this.events.filter(function(t){return t.type.indexOf(e.filter.toLowerCase())>-1})}}),created:function(){var e=this;Ve()(KalturaPlayer.core.EventType).forEach(function(t){e.ignoredEvents.includes(t)||e.player.addEventListener(t,function(t){e.events.push({index:e.index++,time:(new Date).toLocaleTimeString(),type:t.type,payload:t.payload})})})},data:function(){return{index:1,filter:"",ignoredEvents:[KalturaPlayer.core.EventType.TIME_UPDATE,KalturaPlayer.core.EventType.PROGRESS,KalturaPlayer.core.EventType.STALLED],events:[]}}},je={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-row",[a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{"margin-bottom":"5px"}},[a("el-input",{attrs:{placeholder:"Filter..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.events=[]}}},[e._v("Clear "),a("i",{staticClass:"el-icon-delete"})])],1)],1),e._v(" "),a("el-row",[a("el-table",{staticClass:"event-table",attrs:{data:e.filteredEvents,"default-sort":{prop:"time",order:"descending"},"max-height":"500","empty-text":"No Data"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.payload?a("pre",[e._v(e._s(JSON.stringify(t.row.payload||{},null,2)))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"index",label:"#",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"time",label:"Time",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"type",label:"Type"}})],1)],1)],1)},staticRenderFns:[]};var Be=a("VU/8")(Fe,je,!1,function(e){a("1Irx")},"data-v-7f4bb099",null).exports,He={created:function(){var e=this;this.player.addEventListener(this.player.Event.TRACKS_CHANGED,function(t){var a=e.player.getActiveTracks();e.currentBitrate=a.video.bandwidth,a.audio&&(e.audioLanguage=a.audio.label),a.text&&(e.textLanguage=a.text.label)}),this.player.addEventListener(this.player.Event.ABR_MODE_CHANGED,function(t){e.abrMode=t.payload.mode}),this.player.addEventListener(this.player.Event.AUDIO_TRACK_CHANGED,function(t){e.audioLanguage=t.payload.selectedAudioTrack.label}),this.player.addEventListener(this.player.Event.TEXT_TRACK_CHANGED,function(t){e.textLanguage=t.payload.selectedTextTrack.label}),this.player.addEventListener(this.player.Event.VIDEO_TRACK_CHANGED,function(t){e.currentBitrate=t.payload.selectedVideoTrack.bandwidth})},computed:l()({},Object(d.b)(["player"])),data:function(){return{audioLanguage:"N/A",textLanguage:"N/A",currentBitrate:-1,abrMode:"N/A"}}},Ge={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"200px"}},[a("el-form-item",{attrs:{label:"Text Language"}},[e._v("\n    "+e._s(e.textLanguage)+"\n  ")]),e._v(" "),a("el-form-item",{attrs:{label:"Audio Language"}},[e._v("\n    "+e._s(e.audioLanguage)+"\n  ")]),e._v(" "),a("el-form-item",{attrs:{label:"ABR Mode"}},[e._v("\n    "+e._s(e.abrMode)+"\n  ")]),e._v(" "),a("el-form-item",{attrs:{label:"Current Bitrate"}},[e._v("\n    "+e._s(e.currentBitrate)+"\n  ")])],1)},staticRenderFns:[]},Ke=a("VU/8")(He,Ge,!1,null,null,null).exports,Ye={computed:l()({},Object(d.b)(["targetId"])),mounted:function(){var e=document.getElementById("player-placeholder"),t=document.getElementById(this.targetId);!function(e){e.style.margin="10px 10px 10px 10px",e.style.backgroundColor="white",e.style.height="360px",e.style.width="640px",e.style.boxShadow="2px 2px 8px 0px #88888885"}(t),e.appendChild(t)}};var ze={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",[t("center",[t("div",{staticClass:"padding",attrs:{id:"player-placeholder"}})])],1)},staticRenderFns:[]},qe=a("VU/8")(Ye,ze,!1,null,null,null).exports,We={props:["label","handler"],methods:{clearStorage:function(){var e=this;this.loading=!0,this.handler(),setTimeout(function(){return e.loading=!1},500)}},data:function(){return{loading:!1}}},Je={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Clear the browser's local storage",placement:"top-start"}},[t("el-button",{attrs:{type:"primary",plain:"",loading:this.loading},on:{click:this.clearStorage}},[this._v(this._s(this.label)+" "),t("i",{staticClass:"el-icon-delete"})])],1)],1)},staticRenderFns:[]},Xe=a("VU/8")(We,Je,!1,null,null,null).exports;function Ze(e){var t=document.createElement("textarea");t.id="t",t.style.height=0,document.body.appendChild(t),t.value=document.getElementById(e).innerText,document.querySelector("#t").select(),document.execCommand("copy"),document.body.removeChild(t)}var Qe={mounted:function(){var e=this;this.player.addEventListener(this.player.Event.SOURCE_SELECTED,function(t){e.src=t.payload.selectedSource[0].url})},methods:{onClick:function(){Ze(this.sourceHiddenDivId)}},computed:l()({},Object(d.b)(["player"])),data:function(){return{src:"",sourceHiddenDivId:"src-div"}}},et={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Copy playing source url to clipboard",placement:"top-start"}},[a("el-button",{attrs:{type:"primary",plain:"",disabled:!e.src},on:{click:e.onClick}},[e._v("Copy Source "),a("i",{staticClass:"el-icon-edit-outline"})])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:e.sourceHiddenDivId},on:{click:e.onClick}},[e._v(e._s(e.src))])],1)},staticRenderFns:[]},tt=a("VU/8")(Qe,et,!1,null,null,null).exports,at={computed:l()({},Object(d.b)(["player","runtimeConfig","mediaInfo","embedServiceUrl"])),methods:{getJSON:function(){var e=this.runtimeConfig;e.player.playback=this.player.config.playback;var t={config:e};return this.embedServiceUrl?t.embedServiceUrl=this.embedServiceUrl:t.playerType=KalturaPlayer.PLAYER_TYPE,this.mediaInfo&&(t.mediaInfo=this.mediaInfo),t},generate:function(){var e=this,t=this.getJSON(),a=ue.a.compress(t),n=encodeURIComponent(ve()(a));this.url="?generate="+n,this.$alert(this.url,"Generated Test Page URL",{customClass:"box",confirmButtonText:"Copy to clipboard",callback:function(t){"confirm"===t&&(Ze(e.urlHiddenDivId),e.$message({type:"success",message:"Copied"}))}})}},data:function(){return{generating:!1,urlHiddenDivId:"url-div",url:""}}},nt={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Generate test page url",placement:"top-start"}},[a("el-button",{attrs:{type:"primary",plain:"",loading:e.generating},on:{click:e.generate}},[e._v("Generate Test Page "),a("i",{staticClass:"el-icon-tickets"})])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:e.urlHiddenDivId}},[e._v(e._s(e.url))])],1)},staticRenderFns:[]};var rt={computed:{StorageManager:function(){return be}},components:{MediaInfoConsole:Ie,EngineInfoConsole:Le,StateInfoConsole:Oe,StateHistoryConsole:Ne,EventConsole:Be,PlayerPlaceholder:qe,PlaybackOptions:Y,ClearStorageButton:Xe,TracksInfoConsole:Ke,CopySourceButton:tt,GeneratePageButton:a("VU/8")(at,nt,!1,function(e){a("Zs+T")},null,null).exports}},it={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:4}},[a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Engine Info")])]),e._v(" "),a("EngineInfoConsole")],1)],1),e._v(" "),a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("State Info")])]),e._v(" "),a("StateInfoConsole")],1)],1),e._v(" "),a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("State History")])]),e._v(" "),a("StateHistoryConsole")],1)],1),e._v(" "),a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Page Actions")])]),e._v(" "),a("div",{staticClass:"padding-sm"},[a("GeneratePageButton")],1),e._v(" "),a("div",{staticClass:"padding-sm"},[a("CopySourceButton")],1),e._v(" "),a("div",{staticClass:"padding-sm"},[a("ClearStorageButton",{attrs:{label:"Clear Player Storage",handler:e.StorageManager.clearPlayerStorage}})],1),e._v(" "),a("div",{staticClass:"padding-sm"},[a("ClearStorageButton",{attrs:{label:"Clear App Storage",handler:e.StorageManager.clearAppStorage}})],1)])],1)],1),e._v(" "),a("el-col",{attrs:{span:15}},[a("el-row",{staticClass:"padding-sm"},[a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Media Info")])]),e._v(" "),a("MediaInfoConsole")],1)],1),e._v(" "),a("PlayerPlaceholder"),e._v(" "),a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Event Monitoring")])]),e._v(" "),a("EventConsole")],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Playback Values")])]),e._v(" "),a("PlaybackOptions",{attrs:{size:"mini",playerLoaded:!0}})],1)],1),e._v(" "),a("el-row",{staticClass:"padding-sm"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Tracks Info")])]),e._v(" "),a("TracksInfoConsole",{attrs:{size:"mini"}})],1)],1)],1)],1)},staticRenderFns:[]},ot=a("VU/8")(rt,it,!1,null,null,null).exports,lt={computed:l()({version:function(){return KalturaPlayer.VERSION}},Object(d.c)(["player"])),data:function(){return{title:"kaltura-player-js",repoUrl:"//github.com/kaltura/kaltura-player-js",docsUrl:"//github.com/kaltura/kaltura-player-js#documentation",releasesUrl:"//github.com/kaltura/kaltura-player-js/releases"}}},st={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("center",[a("h1",[e._v(e._s(e.title))]),e._v(" "),a("h3",[e._v("Demo Page")]),e._v(" "),a("el-row",{staticClass:"version"},[e.player?a("el-tag",[e._v("v"+e._s(e.version))]):e._e()],1),e._v(" "),a("p",{staticClass:"links"},[a("a",{attrs:{href:e.docsUrl,target:"_blank"}},[e._v("Documentation")]),e._v(" |\n      "),a("a",{attrs:{href:e.repoUrl,target:"_blank"}},[e._v("Repo")]),e._v(" |\n      "),a("a",{attrs:{href:e.releasesUrl,target:"_blank"}},[e._v("Releases")])])],1)],1)},staticRenderFns:[]};var ct=a("VU/8")(lt,st,!1,function(e){a("T7CP")},"data-v-5b17acd0",null).exports,dt={name:"App",computed:l()({},Object(d.b)(["player"])),components:{HeaderInfoContainer:ct,SetupScreen:Se,DemoScreen:ot}},ut={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",{attrs:{height:"200px"}},[t("HeaderInfoContainer")],1),this._v(" "),this.player?this._e():t("SetupScreen"),this._v(" "),this.player?t("DemoScreen"):this._e()],1)],1)},staticRenderFns:[]};var pt=a("VU/8")(dt,ut,!1,function(e){a("NBsK")},null,null).exports,ft=a("zL8q"),mt=a.n(ft);i.default.use(mt.a),i.default.config.productionTip=!1,WebFont.load({google:{families:["Barlow"]}}),new i.default({el:"#app",store:U,components:{App:pt},template:"<App/>"})},T7CP:function(e,t){},"Zs+T":function(e,t){},hIWA:function(e,t){},rV1i:function(e,t){},v6Sm:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6024a9a2d9dabf4489cb.js.map