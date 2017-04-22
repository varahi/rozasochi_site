config {
  doctype = html5
  xmlprologue = none
  metaCharset = utf8
  renderCharset = utf-8
  admPanel = 0
  spamProtectEmailAddresses = 0
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  baseURL = http://{$domain}/
  sys_language_mode = content_fallback
  pageTitleFirst = 1
  removeDefaultJS = 1
# Deafult language
  sys_language_uid = 0
  language = ru
  locale_all = ru_RU
  htmlTag_langKey  = ru
  sys_language_uid = 0
  linkVars = L,type,cHash
  uniqueLinkVars = 1
  #absRefPrefix = http://{$domain}/
  prefixLocalAnchors = all
  
  concatenateJs = 1
  concatenateCss = 1
  compressJs = 1
  compressCss = 1  
}

[globalVar = TSFE : beUserLogin > 0] 
	config {
  	concatenateJs = 1
  	concatenateCss = 1
  	compressJs = 1
  	compressCss = 1  
	}
[global]

#config.baseURL = http://polyana.travel/
#config.tx_cooluri_enable = 1
#config.redirectOldLinksToNew = 1


# Extbase exceptions
#config.contentObjectExceptionHandler = 0

page.config.headerComment (
  Roza Sochi Site
  ___________________________________
)

page.shortcutIcon = {$template_path}/Resources/Public/img/favicon.ico

page.meta {
  revisit             = 1
  revisit-after       = 7 days
  imagetoolbar        = no
  keywords.field      = keywords
  keywords.ifEmpty    = {$page.meta.keywords}
  description.field   = description
  description.ifEmpty = {$page.meta.description}  
  #abstract.field      = abstract
  #abstract.ifEmpty    = {$page.meta.abstract}  
  #page-topic.field    = title
  #page-topic.ifEmpty  = {$page.meta.topic} 
  local_all           = ru_RU
  language            = ru
  #author              = {$page.meta.autor}  
  robots              = index,follow
  #robots               = noindex,nofollow
  viewport             = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no
  #MSSmartTagsPreventParsing = true
  SKYPE_TOOLBAR        = SKYPE_TOOLBAR_PARSER_COMPATIBLE
}