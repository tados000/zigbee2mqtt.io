"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28264],{29834:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>s});var a=o(6254);const i={},d=(0,o(39583).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"bosch-bth-ra",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#bosch-bth-ra"},[(0,a.Lk)("span",null,"Bosch BTH-RA")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"BTH-RA")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Bosch"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Bosch")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Radiator thermostat II")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, system_mode, pi_heating_demand, running_state), battery, operating_mode, window_detection, boost_heating, remote_temperature, setpoint_change_source, child_lock, display_ontime, display_brightness, display_orientation, displayed_temperature, valve_adapt_status, valve_adapt_process, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BTH-RA.png",alt:"Bosch BTH-RA"})])],-1))])]),t[12]||(t[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then put the device into pairing mode, by reseating a battery. The device is in pairing mode, when the display shows &quot;&gt;o&lt;&quot;. Don&#39;t press the button on the valve, before pairing is completed. In zigbee2mqtt navigate to &quot;Settings&quot; --&gt; &quot;Tools&quot; and click on &quot;Add install code&quot;. Paste the code you got from the QR-code and confirm by clicking &quot;OK&quot; which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined. The valve should still show &quot;&gt;o&lt;&quot; on its display. Now you can press the button on the valve to initiate valve adaption. If you have variant with Matter (Smart radiator thermostat II [+M]), QR code is for Matter only. You can construct Install code from the IEEE Address and Install code (it is next to QR code): Bosch prefix (40 characters), IEEE Address (16), DLK, Install code (36). Example of Install code: <code>RB01SG0D83101826480080000000000000000000XXXXXXXXXXXXXXXXDLKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</code></p><h3 id="factory-resetting" tabindex="-1"><a class="header-anchor" href="#factory-resetting"><span>Factory resetting</span></a></h3><p>To factory reset the device remove one of the batteries. While pressing and holding the device&#39;s main button on the front, insert the battery back. As soon as the device&#39;s LED is starting to blink orange while showing &quot;RES&quot;, release the main button and press and hold it again until the device&#39;s LED is lighting up green. The device will then restart into the calibration process and look for a Zigbee network to join. In case something went wrong, the device&#39;s LED will start to blink red. The process has then to be start all over again.</p><h3 id="using-the-manufacturer-specific-operation-mode" tabindex="-1"><a class="header-anchor" href="#using-the-manufacturer-specific-operation-mode"><span>Using the manufacturer specific operation mode</span></a></h3><p>The <code>system_mode</code> exposed by the device according to zigbee specification is always &#39;heat&#39;. To set or read the actual operation mode of the device, use the manufacturer-specific feature &#39;operating mode&#39; (see below)</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',8)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>pi_heating_demand</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Temperature used by the heating algorithm. This is the temperature measured on the device (by default) or the remote temperature (if set within the last 30 min). (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-5</code> and the maximum value is <code>5</code> with a step size of <code>0.1</code>.</li></ul><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="operating-mode-enum" tabindex="-1"><a class="header-anchor" href="#operating-mode-enum"><span>Operating mode (enum)</span></a></h3><p>Bosch-specific operating mode (overrides system mode). Value can be found in the published state on the <code>operating_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operating_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operating_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>schedule</code>, <code>manual</code>, <code>pause</code>.</p><h3 id="window-detection-binary" tabindex="-1"><a class="header-anchor" href="#window-detection-binary"><span>Window detection (binary)</span></a></h3><p>Enable/disable window open (Lo.) mode. Value can be found in the published state on the <code>window_detection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_detection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> window detection is ON, if <code>OFF</code> OFF.</p><h3 id="boost-heating-binary" tabindex="-1"><a class="header-anchor" href="#boost-heating-binary"><span>Boost heating (binary)</span></a></h3><p>Activate boost heating (5 min. on TRV). Value can be found in the published state on the <code>boost_heating</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;boost_heating&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> boost heating is ON, if <code>OFF</code> OFF.</p><h3 id="remote-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#remote-temperature-numeric"><span>Remote temperature (numeric)</span></a></h3><p>Input for remote temperature sensor. Required at least every 30 min. to prevent fallback to internal sensor!. Value can be found in the published state on the <code>remote_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;remote_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;remote_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="setpoint-change-source-enum" tabindex="-1"><a class="header-anchor" href="#setpoint-change-source-enum"><span>Setpoint change source (enum)</span></a></h3><p>Source of the current setpoint temperature. Value can be found in the published state on the <code>setpoint_change_source</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;setpoint_change_source&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>manual</code>, <code>schedule</code>, <code>externally</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="display-ontime-numeric" tabindex="-1"><a class="header-anchor" href="#display-ontime-numeric"><span>Display ontime (numeric)</span></a></h3><p>Sets the display on-time. Value can be found in the published state on the <code>display_ontime</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_ontime&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_ontime&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="display-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#display-brightness-numeric"><span>Display brightness (numeric)</span></a></h3><p>Sets brightness of the display. Value can be found in the published state on the <code>display_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="display-orientation-enum" tabindex="-1"><a class="header-anchor" href="#display-orientation-enum"><span>Display orientation (enum)</span></a></h3><p>Sets orientation of the display. Value can be found in the published state on the <code>display_orientation</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_orientation&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_orientation&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>flipped</code>.</p><h3 id="displayed-temperature-enum" tabindex="-1"><a class="header-anchor" href="#displayed-temperature-enum"><span>Displayed temperature (enum)</span></a></h3><p>Temperature displayed on the TRV. Value can be found in the published state on the <code>displayed_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;displayed_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;displayed_temperature&quot;: NEW_VALUE}</code>. The possible values are: <code>target</code>, <code>measured</code>.</p><h3 id="valve-adapt-status-enum" tabindex="-1"><a class="header-anchor" href="#valve-adapt-status-enum"><span>Valve adapt status (enum)</span></a></h3><p>Specifies the current status of the valve adaptation. Value can be found in the published state on the <code>valve_adapt_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_adapt_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>ready_to_calibrate</code>, <code>calibration_in_progress</code>, <code>error</code>, <code>success</code>.</p><h3 id="trigger-adaptation-process-binary" tabindex="-1"><a class="header-anchor" href="#trigger-adaptation-process-binary"><span>Trigger adaptation process (binary)</span></a></h3><p>Trigger the valve adaptation process. Only possible when adaptation status is &quot;ready_to_calibrate&quot; or &quot;error&quot;.. Value can be found in the published state on the <code>valve_adapt_process</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_adapt_process&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_adapt_process&quot;: NEW_VALUE}</code>. If value equals <code>true</code> trigger adaptation process is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',33))])}]]),s=JSON.parse('{"path":"/devices/BTH-RA.html","title":"Bosch BTH-RA control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BTH-RA control via MQTT","description":"Integrate your Bosch BTH-RA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-01T15:07:19.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory resetting","slug":"factory-resetting","link":"#factory-resetting","children":[]},{"level":3,"title":"Using the manufacturer specific operation mode","slug":"using-the-manufacturer-specific-operation-mode","link":"#using-the-manufacturer-specific-operation-mode","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Operating mode (enum)","slug":"operating-mode-enum","link":"#operating-mode-enum","children":[]},{"level":3,"title":"Window detection (binary)","slug":"window-detection-binary","link":"#window-detection-binary","children":[]},{"level":3,"title":"Boost heating (binary)","slug":"boost-heating-binary","link":"#boost-heating-binary","children":[]},{"level":3,"title":"Remote temperature (numeric)","slug":"remote-temperature-numeric","link":"#remote-temperature-numeric","children":[]},{"level":3,"title":"Setpoint change source (enum)","slug":"setpoint-change-source-enum","link":"#setpoint-change-source-enum","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Display ontime (numeric)","slug":"display-ontime-numeric","link":"#display-ontime-numeric","children":[]},{"level":3,"title":"Display brightness (numeric)","slug":"display-brightness-numeric","link":"#display-brightness-numeric","children":[]},{"level":3,"title":"Display orientation (enum)","slug":"display-orientation-enum","link":"#display-orientation-enum","children":[]},{"level":3,"title":"Displayed temperature (enum)","slug":"displayed-temperature-enum","link":"#displayed-temperature-enum","children":[]},{"level":3,"title":"Valve adapt status (enum)","slug":"valve-adapt-status-enum","link":"#valve-adapt-status-enum","children":[]},{"level":3,"title":"Trigger adaptation process (binary)","slug":"trigger-adaptation-process-binary","link":"#trigger-adaptation-process-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733602043000},"filePathRelative":"devices/BTH-RA.md"}')}}]);