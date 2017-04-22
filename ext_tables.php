<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Rozasochi Site');


$GLOBALS['TCA']['pages']['columns'] += array(
		
	'history_back' => array(
		'label' => 'LLL:EXT:rozasochi_site/Resources/Private/Language/locallang.xlf:page.history_back',
			'exclude' => 1,
			'config' => array(
					'type' => 'input',
					'size' => '50',
					'max' => '1024',
					'eval' => 'trim',
					'wizards' => array(
							'link' => array(
									'type' => 'popup',
									'title' => 'LLL:EXT:cms/locallang_ttc.xlf:header_link_formlabel',
									'icon' => 'link_popup.gif',
									'module' => array(
											'name' => 'wizard_element_browser',
											'urlParameters' => array(
													'mode' => 'wizard'
											)
									),
									'JSopenParams' => 'height=300,width=500,status=0,menubar=0,scrollbars=1'
							)
					),
					'softref' => 'typolink'
			)
			
	),
		
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
	'pages', 'history_back', '1', 'after:title'
);
