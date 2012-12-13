Ext.data.JsonP.Kort_view_highscore_PullRefreshPlugin({"tagname":"class","name":"Kort.view.highscore.PullRefreshPlugin","extends":"Kort.plugin.PullRefresh","mixins":[],"alternateClassNames":[],"aliases":{"plugin":["highscorepullrefresh"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.view.highscore.PullRefreshPlugin","code_type":"ext_define","members":{"cfg":[{"name":"dateFormat","tagname":"cfg","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"cfg-dateFormat"},{"name":"lastUpdatedText","tagname":"cfg","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"cfg-lastUpdatedText"},{"name":"loadingText","tagname":"cfg","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"cfg-loadingText"},{"name":"pullRefreshText","tagname":"cfg","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"cfg-pullRefreshText"},{"name":"pullTpl","tagname":"cfg","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"cfg-pullTpl"},{"name":"refreshFn","tagname":"cfg","owner":"Kort.view.highscore.PullRefreshPlugin","meta":{"private":true},"id":"cfg-refreshFn"},{"name":"releaseRefreshText","tagname":"cfg","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"cfg-releaseRefreshText"}],"property":[],"method":[{"name":"getDateFormat","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-getDateFormat"},{"name":"getLastUpdatedText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-getLastUpdatedText"},{"name":"getLoadingText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-getLoadingText"},{"name":"getPullRefreshText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-getPullRefreshText"},{"name":"getPullTpl","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-getPullTpl"},{"name":"getRefreshFn","tagname":"method","owner":"Kort.view.highscore.PullRefreshPlugin","meta":{},"id":"method-getRefreshFn"},{"name":"getReleaseRefreshText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-getReleaseRefreshText"},{"name":"initScrollable","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{"private":true},"id":"method-initScrollable"},{"name":"loadStore","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-loadStore"},{"name":"resetRefreshState","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-resetRefreshState"},{"name":"setDateFormat","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-setDateFormat"},{"name":"setLastUpdatedText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-setLastUpdatedText"},{"name":"setLoadingText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-setLoadingText"},{"name":"setPullRefreshText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-setPullRefreshText"},{"name":"setPullTpl","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-setPullTpl"},{"name":"setRefreshFn","tagname":"method","owner":"Kort.view.highscore.PullRefreshPlugin","meta":{},"id":"method-setRefreshFn"},{"name":"setReleaseRefreshText","tagname":"method","owner":"Kort.plugin.PullRefresh","meta":{},"id":"method-setReleaseRefreshText"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"PullRefreshPlugin.js","href":"PullRefreshPlugin.html#Kort-view-highscore-PullRefreshPlugin"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.plugin.PullRefresh","Kort.plugin.PullRefresh"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.plugin.PullRefresh<div class='subclass '><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='docClass'>Kort.plugin.PullRefresh</a><div class='subclass '><strong>Kort.view.highscore.PullRefreshPlugin</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/PullRefreshPlugin.html#Kort-view-highscore-PullRefreshPlugin' target='_blank'>PullRefreshPlugin.js</a></div></pre><div class='doc-contents'><p>Pull refresh plugin for highscore list</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dateFormat' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-dateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-cfg-dateFormat' class='name expandable'>dateFormat</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'d.m.Y H:i:s'</code></p></div></div></div><div id='cfg-lastUpdatedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-lastUpdatedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-cfg-lastUpdatedText' class='name not-expandable'>lastUpdatedText</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-loadingText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-cfg-loadingText' class='name not-expandable'>loadingText</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-pullRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-pullRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-cfg-pullRefreshText' class='name not-expandable'>pullRefreshText</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-pullTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-pullTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-cfg-pullTpl' class='name not-expandable'>pullTpl</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-refreshFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.highscore.PullRefreshPlugin'>Kort.view.highscore.PullRefreshPlugin</span><br/><a href='source/PullRefreshPlugin.html#Kort-view-highscore-PullRefreshPlugin-cfg-refreshFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.highscore.PullRefreshPlugin-cfg-refreshFn' class='name not-expandable'>refreshFn</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href='#!/api/Kort.plugin.PullRefresh-cfg-refreshFn' rel='Kort.plugin.PullRefresh-cfg-refreshFn' class='docClass'>Kort.plugin.PullRefresh.refreshFn</a></p></div></div></div><div id='cfg-releaseRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-releaseRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-cfg-releaseRefreshText' class='name not-expandable'>releaseRefreshText</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getDateFormat' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-dateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-getDateFormat' class='name expandable'>getDateFormat</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of dateFormat. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-dateFormat\" rel=\"Kort.plugin.PullRefresh-cfg-dateFormat\" class=\"docClass\">dateFormat</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLastUpdatedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-lastUpdatedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-getLastUpdatedText' class='name expandable'>getLastUpdatedText</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of lastUpdatedText. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-lastUpdatedText\" rel=\"Kort.plugin.PullRefresh-cfg-lastUpdatedText\" class=\"docClass\">lastUpdatedText</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLoadingText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-getLoadingText' class='name expandable'>getLoadingText</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of loadingText. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-loadingText\" rel=\"Kort.plugin.PullRefresh-cfg-loadingText\" class=\"docClass\">loadingText</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPullRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-pullRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-getPullRefreshText' class='name expandable'>getPullRefreshText</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of pullRefreshText. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-pullRefreshText\" rel=\"Kort.plugin.PullRefresh-cfg-pullRefreshText\" class=\"docClass\">pullRefreshText</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPullTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-pullTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-getPullTpl' class='name expandable'>getPullTpl</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of pullTpl. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-pullTpl\" rel=\"Kort.plugin.PullRefresh-cfg-pullTpl\" class=\"docClass\">pullTpl</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefreshFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.highscore.PullRefreshPlugin'>Kort.view.highscore.PullRefreshPlugin</span><br/><a href='source/PullRefreshPlugin.html#Kort-view-highscore-PullRefreshPlugin-cfg-refreshFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.highscore.PullRefreshPlugin-method-getRefreshFn' class='name expandable'>getRefreshFn</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of refreshFn. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.highscore.PullRefreshPlugin-cfg-refreshFn\" rel=\"Kort.view.highscore.PullRefreshPlugin-cfg-refreshFn\" class=\"docClass\">refreshFn</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Kort.plugin.PullRefresh-method-getRefreshFn' rel='Kort.plugin.PullRefresh-method-getRefreshFn' class='docClass'>Kort.plugin.PullRefresh.getRefreshFn</a></p></div></div></div><div id='method-getReleaseRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-releaseRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-getReleaseRefreshText' class='name expandable'>getReleaseRefreshText</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of releaseRefreshText. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-releaseRefreshText\" rel=\"Kort.plugin.PullRefresh-cfg-releaseRefreshText\" class=\"docClass\">releaseRefreshText</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initScrollable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-method-initScrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-initScrollable' class='name expandable'>initScrollable</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-loadStore' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-method-loadStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-loadStore' class='name expandable'>loadStore</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>OVERRIDEN SENCHA TOUCH FUNCTION\nCHANGE: wait for a longer time to scroll to top ...</div><div class='long'><p>OVERRIDEN SENCHA TOUCH FUNCTION\nCHANGE: wait for a longer time to scroll to top</p>\n</div></div></div><div id='method-resetRefreshState' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-method-resetRefreshState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-resetRefreshState' class='name expandable'>resetRefreshState</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>OVERRIDEN SENCHA TOUCH FUNCTION\nCHANGE: German date format ...</div><div class='long'><p>OVERRIDEN SENCHA TOUCH FUNCTION\nCHANGE: German date format</p>\n</div></div></div><div id='method-setDateFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-dateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-setDateFormat' class='name expandable'>setDateFormat</a>( <span class='pre'>dateFormat</span> )</div><div class='description'><div class='short'>Sets the value of dateFormat. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-dateFormat\" rel=\"Kort.plugin.PullRefresh-cfg-dateFormat\" class=\"docClass\">dateFormat</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dateFormat</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLastUpdatedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-lastUpdatedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-setLastUpdatedText' class='name expandable'>setLastUpdatedText</a>( <span class='pre'>lastUpdatedText</span> )</div><div class='description'><div class='short'>Sets the value of lastUpdatedText. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-lastUpdatedText\" rel=\"Kort.plugin.PullRefresh-cfg-lastUpdatedText\" class=\"docClass\">lastUpdatedText</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lastUpdatedText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLoadingText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-setLoadingText' class='name expandable'>setLoadingText</a>( <span class='pre'>loadingText</span> )</div><div class='description'><div class='short'>Sets the value of loadingText. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-loadingText\" rel=\"Kort.plugin.PullRefresh-cfg-loadingText\" class=\"docClass\">loadingText</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>loadingText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPullRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-pullRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-setPullRefreshText' class='name expandable'>setPullRefreshText</a>( <span class='pre'>pullRefreshText</span> )</div><div class='description'><div class='short'>Sets the value of pullRefreshText. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-pullRefreshText\" rel=\"Kort.plugin.PullRefresh-cfg-pullRefreshText\" class=\"docClass\">pullRefreshText</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pullRefreshText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPullTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-pullTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-setPullTpl' class='name expandable'>setPullTpl</a>( <span class='pre'>pullTpl</span> )</div><div class='description'><div class='short'>Sets the value of pullTpl. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-pullTpl\" rel=\"Kort.plugin.PullRefresh-cfg-pullTpl\" class=\"docClass\">pullTpl</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pullTpl</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRefreshFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.highscore.PullRefreshPlugin'>Kort.view.highscore.PullRefreshPlugin</span><br/><a href='source/PullRefreshPlugin.html#Kort-view-highscore-PullRefreshPlugin-cfg-refreshFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.highscore.PullRefreshPlugin-method-setRefreshFn' class='name expandable'>setRefreshFn</a>( <span class='pre'>refreshFn</span> )</div><div class='description'><div class='short'>Sets the value of refreshFn. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.highscore.PullRefreshPlugin-cfg-refreshFn\" rel=\"Kort.view.highscore.PullRefreshPlugin-cfg-refreshFn\" class=\"docClass\">refreshFn</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refreshFn</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Kort.plugin.PullRefresh-method-setRefreshFn' rel='Kort.plugin.PullRefresh-method-setRefreshFn' class='docClass'>Kort.plugin.PullRefresh.setRefreshFn</a></p></div></div></div><div id='method-setReleaseRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Kort.plugin.PullRefresh' rel='Kort.plugin.PullRefresh' class='defined-in docClass'>Kort.plugin.PullRefresh</a><br/><a href='source/PullRefresh.html#Kort-plugin-PullRefresh-cfg-releaseRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.plugin.PullRefresh-method-setReleaseRefreshText' class='name expandable'>setReleaseRefreshText</a>( <span class='pre'>releaseRefreshText</span> )</div><div class='description'><div class='short'>Sets the value of releaseRefreshText. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.plugin.PullRefresh-cfg-releaseRefreshText\" rel=\"Kort.plugin.PullRefresh-cfg-releaseRefreshText\" class=\"docClass\">releaseRefreshText</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>releaseRefreshText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});