# Powermail sripts to header
[globalVar = LIT:0 < {$plugin.tx_powermail.settings.javascript.addAdditionalJavaScript}]
page {
	# Inlude JavaScript files
	includeJSFooter >
	includeJS {
		powermailJQueryDatepicker = EXT:powermail/Resources/Public/JavaScripts/Libraries/jquery.datetimepicker.min.js
		powermailJQueryFormValidation = EXT:powermail/Resources/Public/JavaScripts/Libraries/parsley.min.js
		powermailJQueryTabs = EXT:powermail/Resources/Public/JavaScripts/Powermail/Tabs.min.js
		powermailForm = EXT:powermail/Resources/Public/JavaScripts/Powermail/Form.min.js
	}
}
[end]

# Magnifiv pop to headers
# Add JavaScript files to page
page.includeJSFooterlibs >
page.includeJS {
  tx_jhmagnificpopup10 = EXT:jh_magnificpopup/Resources/Public/js/jquery-1.11.2.min.js
  tx_jhmagnificpopup10.forceOnTop = 1
  tx_jhmagnificpopup10.if.isTrue = {$plugin.tx_jhmagnificpopup.includejquerycore}

  tx_jhmagnificpopup20 = {$plugin.tx_jhmagnificpopup.includeMagnificpopupJs}
  tx_jhmagnificpopup20.if.isTrue = {$plugin.tx_jhmagnificpopup.includeMagnificpopupJs}

  tx_jhmagnificpopup25 = {$plugin.tx_jhmagnificpopup.includeFilterIsImageFileJs}
  tx_jhmagnificpopup25.if.isTrue = {$plugin.tx_jhmagnificpopup.includeFilterIsImageFileJs}
}