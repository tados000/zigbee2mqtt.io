"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[99763],{60809:(s,e,n)=>{n.r(e),n.d(e,{comp:()=>l,data:()=>i});var a=n(6254);const t={},l=(0,n(39583).A)(t,[["render",function(s,e){return(0,a.uX)(),(0,a.CE)("div",null,e[0]||(e[0]=[(0,a.Fv)('<h1 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes"><span>Kubernetes</span></a></h1><p>These instructions explain how to run Zigbee2MQTT on k8s clusters through the use of the helm chart.</p><h1 id="values-configuration" tabindex="-1"><a class="header-anchor" href="#values-configuration"><span>Values - Configuration</span></a></h1><p>Regardless of the method of installation chosen helm cli, flux/argo CD, first review the values.yaml file and choose the configuration required for you. The Zigbee2MQTT config section in the values.yaml is a 1:1 mapping of the usual config file, it simply is created on a configmap during the helm release creation. If you don&#39;t provide any additional values, sensible defaults are used in the deployment.</p><p>If you are planning to use an usb adapter directly plugged into a node of the cluster, most likely you need to specify a <code>.values.statefulset.nodeSelector</code> so the pods are scheduled in the right node.</p><p>By default, storage is not enabled, which is great for testing. If you just want to use dynamic volume provisioning, just configure the <code>statefulset.storage.storageClassName</code>. Persisting the volumes across installations, or you want to reuse existing data, you can leverage the options in <code>statefulset.storage</code> either providing a <code>volumeName</code> or selectors for volumes. Those fields get injected into the statefulSet persistentVolumeClaim which can link to existing volumes.</p><h2 id="helm" tabindex="-1"><a class="header-anchor" href="#helm"><span>helm</span></a></h2><p>To install the chart manually using helm, first you need to add your the helm repository to your local helm installation:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">helm repo <span class="token function">add</span> zigbee2mqtt  https://charts.zigbee2mqtt.io</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Load the charts from the repository:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">helm repo update</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Install the helm chart using the values of your choice (<code>myvalues.yaml</code> in the snipet below):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">helm <span class="token function">install</span> <span class="token parameter variable">-f</span> myvalues.yaml zigbee2mqtt zigbee2mqtt/zigbee2mqtt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="flux" tabindex="-1"><a class="header-anchor" href="#flux"><span>flux</span></a></h2><p>If you are using a gitops approach to manage your cluster, you can use the flux CRDs to create and manage the releases.</p><p>The first step is to add to your repository the helm repository of zigbee2mqtt:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> source.toolkit.fluxcd.io/v1beta2</span>\n<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> HelmRepository</span>\n<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> flux<span class="token punctuation">-</span>system</span>\n<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10m</span>\n<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//charts.zigbee2mqtt.io/index</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then create a Helm release:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> helm.toolkit.fluxcd.io/v2beta2</span>\n<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> HelmRelease</span>\n<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> flux<span class="token punctuation">-</span>system</span>\n<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">interval</span><span class="token punctuation">:</span> 5m</span>\n<span class="line">    <span class="token key atrule">targetNamespace</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">    <span class="token key atrule">chart</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token key atrule">chart</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">            <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;1.37.1&#39;</span></span>\n<span class="line">            <span class="token key atrule">sourceRef</span><span class="token punctuation">:</span></span>\n<span class="line">                <span class="token key atrule">kind</span><span class="token punctuation">:</span> HelmRepository</span>\n<span class="line">                <span class="token key atrule">name</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">                <span class="token key atrule">namespace</span><span class="token punctuation">:</span> flux<span class="token punctuation">-</span>system</span>\n<span class="line">            <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10m</span>\n<span class="line">    <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">...</span> your settings</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',19)]))}]]),i=JSON.parse('{"path":"/guide/installation/08_kubernetes.html","title":"Kubernetes","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"headers":[{"level":2,"title":"helm","slug":"helm","link":"#helm","children":[]},{"level":2,"title":"flux","slug":"flux","link":"#flux","children":[]}],"git":{"updatedTime":1733602043000},"filePathRelative":"guide/installation/08_kubernetes.md"}')}}]);