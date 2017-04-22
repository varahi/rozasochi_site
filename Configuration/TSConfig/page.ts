tx_csseo {
  1 = tx_rozasochiobjects_domain_model_object
	1.enable = GP:tx_rozasochiobjects_rozasochiobjects|object
	
	1.fallback {
		# cs_seo title field fallback = mymod title field
		title = title
		# cs_seo description field fallback = mymod description field
    description = description
   }

		# enable evaluation for news
#		1.evaluation {
#    	# additional params to initialize the detail view, the pipe will be replaced by the uid
#			getParams = &tx_myext_pi1[controller]=MyController&tx_myext_pi1[action]=MyAction&tx_myext_pi1[mymod]=|
#			# detail pid for the current records, only if set the table will be available
#			detailPid =
#    }

}



TCEFORM.tt_content.section_frame.removeItems = 1,5,6,10,11,12,20,21,66
TCEFORM.tt_content.section_frame.addItems.25 = Добавить объект

RTE.default.contentCSS = typo3conf/ext/rozasochi_site/Resources/Public/Styles/rte.css

RTE.classes {           
    gray-text {
    name = Серый текст
    value = color: #000000;
   }         
}

TCEFORM.tt_content.header_layout {
    altLabels {
        1 = h1
        2 = h2
        3 = h3
        4 = h4
        5 = h5
    }
    addItems {
        9 = h1 с флажком
        10 = h2 по центру, в верхнем регистре   
        11 = h2 3D
        12 = h2 Фотогалерея 
        13 = h2 Дополнительная инофрмация       
    }   
}

RTE.default.proc.denyTags = font,dl,dt,dd,style
RTE.default {

#showButtons = *
showButtons (
        class, blockstylelabel, blockstyle, textstylelabel, textstyle,
        formatblock, bold, italic, subscript, superscript,
        orderedlist, unorderedlist, outdent, indent, textindicator,
        insertcharacter, link, table, findreplace, chMode, removeformat, undo, redo, about,
        toggleborders, tableproperties,
        rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
        columninsertbefore, columninsertafter, columndelete, columnsplit,
        cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge,
        fontstyle, formatblock, fontsize, bgcolor, textcolor, image
)
    enableWordClean = 1
    removeTrailingBR = 1
    removeComments = 1
    removeTags = center, o:p, sdfield, font, font-family, dt, dl, dd,style
    removeTagsAndContents = style,script


  proc.allowedClasses (
  external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail,
  align-left, align-center, align-right, align-justify,
  csc-frame-frame1, csc-frame-frame2,
  component-items, action-items,
  component-items-ordered, action-items-ordered,
  important, name-of-person, detail, indent-bot, bold, invert, gray-text,
  indent
  )
  
  buttons.blockstyle.tags.table.allowedClasses = csc-frame-frame1, csc-frame-frame2
  buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
  buttons.textstyle.tags.span.allowedClasses = important, name-of-person, detail, gray-text, invert,
  
  inlineStyle.ul (
    ul.component-items { color: #186900; list-style-type: circle; }
    ul.action-items { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
    ul.invert { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
  )
  inlineStyle.ol (
    ol.component-items-ordered { color: #10007B; list-style-type: lower-roman; }
    ol.action-items-ordered { color: #8A0020; list-style-type: lower-greek; }
    ol.indent-bot { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
  ) 
  inlineStyle.inline-text (
    span.important { color: #8A0020; }
    span.name-of-person { color: #10007B; }
    span.detail { color: #186900; }
    #span.green-text { color: #186900; }
    #span.bold-green-text { color: #186900; }
    span.gray-text { color: #186900; }
  )
  classesParagraph (
    align-left, align-center, align-right,
    csc-frame-frame1, csc-frame-frame2, gray-text
  )
  classesTable = csc-frame-frame1, csc-frame-frame2
  classesTD = align-left, align-center, align-right
  classesLinks = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
  classesCharacter = important, name-of-person, detail, bold

    ## Configuration of the anchor accessibility feature (htmlArea RTE only)
    ## These classes should also be in the list of allowedClasses.
  classesAnchor = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
  classesAnchor.default {
    page = internal-link
    url = external-link-new-window
    file = download
    mail = mail
  }

  HTMLparser_rte {
    removeTags >
    removeTags = font,font-family,dl,dt,dd,style
    denyTags >
    denyTags = font,dl,dt,dd,style
    denyTags  < RTE.default.proc.denyTags
    keepNonMatchedTags = 1
  }
  HTMLparser_db {
    removeTags >
    removeTags = font,font-family,dl,dt,dd,style
    denyTags >
    denyTags = font,dl,dt,dd,style
    denyTags  < RTE.default.proc.denyTags
    keepNonMatchedTags = 1
   }
}

tx_news.templateLayouts {
	1 = Последние новости
	2 = Список новостей
}


