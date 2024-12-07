"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38339],{73663:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>s,data:()=>l});var a=t(6254);const i={},s=(0,t(39583).A)(i,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[14]||(n[14]=(0,a.Lk)("h1",{id:"legrand-067774",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#legrand-067774"},[(0,a.Lk)("span",null,"Legrand 067774")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"067774")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Legrand"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Legrand")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Wireless double remote switch")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, action, linkquality")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067774.png",alt:"Legrand 067774"})])],-1))])]),n[15]||(n[15]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers"><span>Model numbers</span></a></h3><p>Model number depends on the country and the colour of the devices. For example:</p><ul><li>French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 24&quot;, &quot;0 677 74&quot;, and &quot;0 677 94&quot;.</li><li>Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 12&quot;, &quot;7 418 42&quot; and &quot;7 418 72&quot;.</li></ul><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3>',5)),(0,a.Lk)("p",null,[n[8]||(n[8]=(0,a.eW)("The remote supports ")),(0,a.bF)(t,{to:"/guide/usage/binding.html"},{default:(0,a.k6)((()=>n[7]||(n[7]=[(0,a.eW)("binding")]))),_:1}),n[9]||(n[9]=(0,a.eW)(' on each endpoint, so you can bind each button to a different device/group. As part of its configuration, the remote expects to have a "group" binding configured for each of its button. Otherwise, it will consider itself not fully configured and send unnecessary commands on the zigbee network resulting in noticeable delay when controlling your device(s). In a nutshell:'))]),n[16]||(n[16]=(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"When using devices bindings directly in Zigbee2MQTT, create groups with your target devices for each button and bind related groups accordingly."),(0,a.Lk)("li",null,"When using automations to control your devices (e.g. homeassistant), create a virtual group (empty) and bind it to the buttons. Beware that having both the coordinator and group bound to a remote's button will publish 2 MQTT messages")],-1)),n[17]||(n[17]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[n[11]||(n[11]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>n[10]||(n[10]=[(0,a.eW)("OTA updates")]))),_:1}),n[12]||(n[12]=(0,a.eW)("."))]),n[18]||(n[18]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>n[13]||(n[13]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),n[19]||(n[19]=(0,a.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),l=JSON.parse('{"path":"/devices/067774.html","title":"Legrand 067774 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067774 control via MQTT","description":"Integrate your Legrand 067774 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-29T17:33:31.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Model numbers","slug":"model-numbers","link":"#model-numbers","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733602043000},"filePathRelative":"devices/067774.md"}')}}]);