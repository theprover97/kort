Ext.data.JsonP.Kort_view_validation_List({"tagname":"class","name":"Kort.view.validation.List","extends":"Ext.List","mixins":[],"alternateClassNames":[],"aliases":{"widget":["validationlist"]},"singleton":false,"requires":["Kort.view.validation.PullRefreshPlugin"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.view.validation.List","code_type":"ext_define","members":{"cfg":[{"name":"disableSelection","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-disableSelection"},{"name":"emptyText","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-emptyText"},{"name":"grouped","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-grouped"},{"name":"itemTpl","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-itemTpl"},{"name":"layout","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-layout"},{"name":"loadingText","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-loadingText"},{"name":"plugins","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-plugins"},{"name":"scrollToTopOnRefresh","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-scrollToTopOnRefresh"},{"name":"store","tagname":"cfg","owner":"Kort.view.validation.List","meta":{"private":true},"id":"cfg-store"}],"property":[],"method":[{"name":"getDisableSelection","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getDisableSelection"},{"name":"getEmptyText","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getEmptyText"},{"name":"getGrouped","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getGrouped"},{"name":"getItemTpl","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getItemTpl"},{"name":"getLayout","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getLayout"},{"name":"getLoadingText","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getLoadingText"},{"name":"getPlugins","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getPlugins"},{"name":"getScrollToTopOnRefresh","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getScrollToTopOnRefresh"},{"name":"getStore","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-getStore"},{"name":"setDisableSelection","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setDisableSelection"},{"name":"setEmptyText","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setEmptyText"},{"name":"setGrouped","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setGrouped"},{"name":"setItemTpl","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setItemTpl"},{"name":"setLayout","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setLayout"},{"name":"setLoadingText","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setLoadingText"},{"name":"setPlugins","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setPlugins"},{"name":"setScrollToTopOnRefresh","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setScrollToTopOnRefresh"},{"name":"setStore","tagname":"method","owner":"Kort.view.validation.List","meta":{},"id":"method-setStore"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"List.js","href":"List2.html#Kort-view-validation-List"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.List"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.List<div class='subclass '><strong>Kort.view.validation.List</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Kort.view.validation.PullRefreshPlugin' rel='Kort.view.validation.PullRefreshPlugin' class='docClass'>Kort.view.validation.PullRefreshPlugin</a></div><h4>Files</h4><div class='dependency'><a href='source/List2.html#Kort-view-validation-List' target='_blank'>List.js</a></div></pre><div class='doc-contents'><p>Validations list</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-disableSelection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-disableSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-disableSelection' class='name expandable'>disableSelection</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-emptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-emptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-emptyText' class='name not-expandable'>emptyText</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-grouped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-grouped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-grouped' class='name expandable'>grouped</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-itemTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-itemTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-itemTpl' class='name not-expandable'>itemTpl</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-layout' class='name expandable'>layout</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='cfg-loadingText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-loadingText' class='name not-expandable'>loadingText</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-plugins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-plugins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-plugins' class='name expandable'>plugins</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{xclass: 'Kort.view.validation.PullRefreshPlugin'}]</code></p></div></div></div><div id='cfg-scrollToTopOnRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-scrollToTopOnRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-scrollToTopOnRefresh' class='name expandable'>scrollToTopOnRefresh</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-cfg-store' class='name expandable'>store</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Validations'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getDisableSelection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-disableSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getDisableSelection' class='name expandable'>getDisableSelection</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of disableSelection. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-disableSelection\" rel=\"Kort.view.validation.List-cfg-disableSelection\" class=\"docClass\">disableSelection</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEmptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-emptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getEmptyText' class='name expandable'>getEmptyText</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of emptyText. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-emptyText\" rel=\"Kort.view.validation.List-cfg-emptyText\" class=\"docClass\">emptyText</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getGrouped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-grouped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getGrouped' class='name expandable'>getGrouped</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of grouped. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-grouped\" rel=\"Kort.view.validation.List-cfg-grouped\" class=\"docClass\">grouped</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-itemTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getItemTpl' class='name expandable'>getItemTpl</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of itemTpl. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-itemTpl\" rel=\"Kort.view.validation.List-cfg-itemTpl\" class=\"docClass\">itemTpl</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getLayout' class='name expandable'>getLayout</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of layout. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-layout\" rel=\"Kort.view.validation.List-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLoadingText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getLoadingText' class='name expandable'>getLoadingText</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of loadingText. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-loadingText\" rel=\"Kort.view.validation.List-cfg-loadingText\" class=\"docClass\">loadingText</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPlugins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-plugins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getPlugins' class='name expandable'>getPlugins</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of plugins. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-plugins\" rel=\"Kort.view.validation.List-cfg-plugins\" class=\"docClass\">plugins</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScrollToTopOnRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-scrollToTopOnRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getScrollToTopOnRefresh' class='name expandable'>getScrollToTopOnRefresh</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of scrollToTopOnRefresh. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-scrollToTopOnRefresh\" rel=\"Kort.view.validation.List-cfg-scrollToTopOnRefresh\" class=\"docClass\">scrollToTopOnRefresh</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-getStore' class='name expandable'>getStore</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of store. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.validation.List-cfg-store\" rel=\"Kort.view.validation.List-cfg-store\" class=\"docClass\">store</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDisableSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-disableSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setDisableSelection' class='name expandable'>setDisableSelection</a>( <span class='pre'>disableSelection</span> )</div><div class='description'><div class='short'>Sets the value of disableSelection. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-disableSelection\" rel=\"Kort.view.validation.List-cfg-disableSelection\" class=\"docClass\">disableSelection</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disableSelection</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEmptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-emptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setEmptyText' class='name expandable'>setEmptyText</a>( <span class='pre'>emptyText</span> )</div><div class='description'><div class='short'>Sets the value of emptyText. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-emptyText\" rel=\"Kort.view.validation.List-cfg-emptyText\" class=\"docClass\">emptyText</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>emptyText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setGrouped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-grouped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setGrouped' class='name expandable'>setGrouped</a>( <span class='pre'>grouped</span> )</div><div class='description'><div class='short'>Sets the value of grouped. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-grouped\" rel=\"Kort.view.validation.List-cfg-grouped\" class=\"docClass\">grouped</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grouped</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setItemTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-itemTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setItemTpl' class='name expandable'>setItemTpl</a>( <span class='pre'>itemTpl</span> )</div><div class='description'><div class='short'>Sets the value of itemTpl. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-itemTpl\" rel=\"Kort.view.validation.List-cfg-itemTpl\" class=\"docClass\">itemTpl</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>itemTpl</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setLayout' class='name expandable'>setLayout</a>( <span class='pre'>layout</span> )</div><div class='description'><div class='short'>Sets the value of layout. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-layout\" rel=\"Kort.view.validation.List-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLoadingText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setLoadingText' class='name expandable'>setLoadingText</a>( <span class='pre'>loadingText</span> )</div><div class='description'><div class='short'>Sets the value of loadingText. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-loadingText\" rel=\"Kort.view.validation.List-cfg-loadingText\" class=\"docClass\">loadingText</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>loadingText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPlugins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-plugins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setPlugins' class='name expandable'>setPlugins</a>( <span class='pre'>plugins</span> )</div><div class='description'><div class='short'>Sets the value of plugins. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-plugins\" rel=\"Kort.view.validation.List-cfg-plugins\" class=\"docClass\">plugins</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>plugins</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScrollToTopOnRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-scrollToTopOnRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setScrollToTopOnRefresh' class='name expandable'>setScrollToTopOnRefresh</a>( <span class='pre'>scrollToTopOnRefresh</span> )</div><div class='description'><div class='short'>Sets the value of scrollToTopOnRefresh. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-scrollToTopOnRefresh\" rel=\"Kort.view.validation.List-cfg-scrollToTopOnRefresh\" class=\"docClass\">scrollToTopOnRefresh</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollToTopOnRefresh</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.validation.List'>Kort.view.validation.List</span><br/><a href='source/List2.html#Kort-view-validation-List-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.validation.List-method-setStore' class='name expandable'>setStore</a>( <span class='pre'>store</span> )</div><div class='description'><div class='short'>Sets the value of store. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.validation.List-cfg-store\" rel=\"Kort.view.validation.List-cfg-store\" class=\"docClass\">store</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});