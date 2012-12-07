Ext.data.JsonP.Kort_util_Geolocation({"tagname":"class","name":"Kort.util.Geolocation","extends":"Ext.util.Geolocation","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.util.Geolocation","code_type":"ext_define","members":{"cfg":[{"name":"autoUpdate","tagname":"cfg","owner":"Kort.util.Geolocation","meta":{"private":true},"id":"cfg-autoUpdate"},{"name":"available","tagname":"cfg","owner":"Kort.util.Geolocation","meta":{"private":true},"id":"cfg-available"},{"name":"listeners","tagname":"cfg","owner":"Kort.util.Geolocation","meta":{"private":true},"id":"cfg-listeners"}],"property":[],"method":[{"name":"getAutoUpdate","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-getAutoUpdate"},{"name":"getAvailable","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-getAvailable"},{"name":"getDistance","tagname":"method","owner":"Kort.util.Geolocation","meta":{"private":true},"id":"method-getDistance"},{"name":"getFormattedDistance","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-getFormattedDistance"},{"name":"getListeners","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-getListeners"},{"name":"setAutoUpdate","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-setAutoUpdate"},{"name":"setAvailable","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-setAvailable"},{"name":"setListeners","tagname":"method","owner":"Kort.util.Geolocation","meta":{},"id":"method-setListeners"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Geolocation.js","href":"Geolocation.html#Kort-util-Geolocation"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.util.Geolocation"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.util.Geolocation<div class='subclass '><strong>Kort.util.Geolocation</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Geolocation.html#Kort-util-Geolocation' target='_blank'>Geolocation.js</a></div></pre><div class='doc-contents'><p>Geolocation with distance calculation function</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoUpdate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-autoUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-cfg-autoUpdate' class='name expandable'>autoUpdate</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-available' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-available' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-cfg-available' class='name expandable'>available</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-cfg-listeners' class='name not-expandable'>listeners</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getAutoUpdate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-autoUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-getAutoUpdate' class='name expandable'>getAutoUpdate</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of autoUpdate. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.util.Geolocation-cfg-autoUpdate\" rel=\"Kort.util.Geolocation-cfg-autoUpdate\" class=\"docClass\">autoUpdate</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-available' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-getAvailable' class='name expandable'>getAvailable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of available. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.util.Geolocation-cfg-available\" rel=\"Kort.util.Geolocation-cfg-available\" class=\"docClass\">available</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDistance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-method-getDistance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-getDistance' class='name expandable'>getDistance</a>( <span class='pre'>latitude, longitude</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Calculates the distance to given latitude / logitude. ...</div><div class='long'><p>Calculates the distance to given latitude / logitude. Source: http://www.movable-type.co.uk/scripts/latlong.html</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>latitude</span> : Number<div class='sub-desc'><p>Latitude</p>\n</div></li><li><span class='pre'>longitude</span> : Number<div class='sub-desc'><p>Longitude</p>\n</div></li></ul></div></div></div><div id='method-getFormattedDistance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-method-getFormattedDistance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-getFormattedDistance' class='name expandable'>getFormattedDistance</a>( <span class='pre'>distanceInMeters</span> )</div><div class='description'><div class='short'>Returns distances with measurement unit ...</div><div class='long'><p>Returns distances with measurement unit</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>distanceInMeters</span> : Number<div class='sub-desc'><p>Distance to format</p>\n</div></li></ul></div></div></div><div id='method-getListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-getListeners' class='name expandable'>getListeners</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of listeners. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.util.Geolocation-cfg-listeners\" rel=\"Kort.util.Geolocation-cfg-listeners\" class=\"docClass\">listeners</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAutoUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-autoUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-setAutoUpdate' class='name expandable'>setAutoUpdate</a>( <span class='pre'>autoUpdate</span> )</div><div class='description'><div class='short'>Sets the value of autoUpdate. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.util.Geolocation-cfg-autoUpdate\" rel=\"Kort.util.Geolocation-cfg-autoUpdate\" class=\"docClass\">autoUpdate</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>autoUpdate</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-available' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-setAvailable' class='name expandable'>setAvailable</a>( <span class='pre'>available</span> )</div><div class='description'><div class='short'>Sets the value of available. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.util.Geolocation-cfg-available\" rel=\"Kort.util.Geolocation-cfg-available\" class=\"docClass\">available</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>available</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.util.Geolocation'>Kort.util.Geolocation</span><br/><a href='source/Geolocation.html#Kort-util-Geolocation-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.util.Geolocation-method-setListeners' class='name expandable'>setListeners</a>( <span class='pre'>listeners</span> )</div><div class='description'><div class='short'>Sets the value of listeners. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.util.Geolocation-cfg-listeners\" rel=\"Kort.util.Geolocation-cfg-listeners\" class=\"docClass\">listeners</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listeners</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});