/**
 * Created by JetBrains PhpStorm.
 * User: mbeck
 * Date: 28.11.11
 * Time: 20:38
 * To change this template use File | Settings | File Templates.
 */
// require("js/omv/module/transmissionbt/navigation/panel.js")

// Register the menu.
OMV.NavigationPanelMgr.registerMenu("transmissionbt", "rss", {
	text: _("RSS"),
	icon: "images/transmissionbt.png",
	position: 20
});