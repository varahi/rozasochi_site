lib.logo >
lib.logo = COA
lib.logo {
 	#wrap = <div class="logo">|</div>
  10 = IMAGE
  10 {
    #file = {$template_path}/Resources/Public/Images/logo2.png
    file = {$template_path}/Resources/Public/Images/logo-400.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 250
    #file.height = 100
    stdWrap.typolink.parameter = 111
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
  20 = TEXT
  20 {
    value = {$page.header.slogan}
    wrap = <div class="slogan">|</div>
  }
	20 >
}

[globalVar = GP:tx_rozasochiobjects_rozasochiobjects|object > 0]
lib.showObject >
lib.showObject = USER
lib.showObject { 
	userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
  pluginName = Rozasochiobjects
	extensionName = Rozasochiobjects
	controller = Object
	vendorName = T3Dev
  	action = show
        switchableControllerActions {
          Object { 
            1 = show
          }
        }    
        settings =< plugin.tx_rozasochiobjects.settings
        persistence =< plugin.tx_rozasochiobjects.persistence
        view =< plugin.tx_rozasochiobjects.view
  }
[global]

lib.counters >
lib.counters = CONTENT
lib.counters.table = tt_content
lib.counters.select {
  wrap = |
    pidInList = 395
    orderBy = sorting
}

# Search Form
[globalVar = TSFE:id = 432]
lib.searchForm >  
lib.searchForm = RECORDS
lib.searchForm {
  wrap = |
  source = 485
  dontCheckPid = 1
  tables = tt_content
}

[globalVar = TSFE:id = 416]
	lib.searchForm > 
[global]