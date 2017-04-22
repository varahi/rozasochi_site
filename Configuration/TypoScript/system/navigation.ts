#Main menu
lib.smMenu >
lib.smMenu = COA
lib.smMenu {   
  10 = HMENU
  10 {
	#special = list
	#special.value = {$page.menu.menuList}    
  #maxItems = 6
  includeNotInMenu = 0
  excludeUidList = {$page.menu.excludeUidList}
    1 = TMENU
    1 {
        expAll = 1
        wrap = <ul id="main-menu" class="sm sm-clean">|</ul>
        NO.wrapItemAndSub = <li class="menu-item">|</li>|*|<li class="menu-item">|</li>|*|<li class="menu-item menu-item-last">|</li>
        NO.subst_elementUid = 1
        CUR = 1
        CUR.wrapItemAndSub = <li class="menu-item menu-item-active">|</li>       
        ACT = 1
        CUR.ATagParams = class="active" 
        ACT < .CUR    
    }
    2 = TMENU
    2 {
        expAll = 1
        wrap = <ul class="submenu">|</ul>
        NO = 1
        NO.wrapItemAndSub = <li>|</li>
        ACT = 1
        ACT.wrapItemAndSub = <li>|</li>
        #ACT < .CUR    
        ACT.ATagParams = class="active"   
    }
    2 >    
  }
}

lib.mainMenu = HMENU
lib.mainMenu {
  maxItems = 99
  includeNotInMenu = 0
  excludeUidList = {$page.menu.excludeUidList}  
  #special=directory
  #special.value=19,5,2
  1 = TMENU
  1 {
    wrap = <div class="top-menu"><ul>|</ul></div>
    expAll = 0
    NO.allWrap = <li>|</li>
    # afaik you do not need RO
    RO < .NO
    RO = 1
    CUR < .NO
    CUR = 1
    CUR.allWrap = <li>|</li>
    ACT < .CUR
  }
  2 < .1
  2 {
    #wrap = <ul>|</ul>
    #NO.allWrap = 
    #CUR.allWrap = 
  }
  3 < .2
  2 >
  3 >
}


# mmenu
lib.mMenu = COA
lib.mMenu  {
  10 = TEXT
  10.value (
    <div class="mmenu-link" id="sticky"><a href="#menu"></a></div>
  )
  10 >
  20 = HMENU
  20 {
  excludeUidList = {$page.menu.mmenuExcludeUidList}
  wrap = <nav id="menu">|</nav>
  #special = list
  #special.value = {$page.menu.topmenu}  
  #maxItems = 7
   1 = TMENU
   1 {
     expAll = 1
      wrap = <ul>|</ul>
      NO.wrapItemAndSub = <li>|</li>
      ACT = 1
      ACT.wrapItemAndSub = <li>|</li>
   }
   2 < .1
   2.wrap = <ul>|</ul>
   #3 < .1
   #3.wrap = <ul>|</ul>  
  }
}

lib.mMenu >
    
