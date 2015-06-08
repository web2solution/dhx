/*! dhx 2015-06-07 */
$dhx.ui.desktop.view.TopBar = {
    version: "1.0.3",
    appName: "$dhx Web Desktop - Top Bar",
    appId: "$dhx.ui.desktop.TopBar",
    top_bar: null,
    _idiom_contextual_menu: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.TopBar);
        a.idiom_contextual_menu = new dhtmlXMenuObject($dhx.ui.desktop.settings.menu_contextual_idiom), a.idiom_contextual_menu.addContextZone(a.top_bar_quick_tools_idioms.id), a.idiom_contextual_menu.attachEvent("onClick", function(a) {
            "portuguese" == a ? $dhx.ui.i18n.setUserIdiom("pt-br") : "english" == a && $dhx.ui.i18n.setUserIdiom("en-us")
        })
    },
    _top_bar: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.TopBar);
        a.top_bar = $dhx.createElement({
            tag_name: "DIV",
            style: "",
            "class": "dhx_ui_desktop_top_bar",
            id: "$dhx.ui.desktop.active_area.top_bar",
            width: window.innerWidth,
            height: 24,
            resize_width: !0
        })
    },
    _top_bar_left_text: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.TopBar);
        a.top_bar_left_text = $dhx.createElement({
            tag_name: "DIV",
            parent: a.top_bar,
            style: "",
            "class": "dhx_ui_desktop_top_bar_left_text",
            id: "$dhx.ui.desktop.active_area.top_bar.left_text",
            html: "T-Rex webOS"
        })
    },
    _top_bar_quick_tools: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.TopBar);
        a.top_bar_quick_tools = $dhx.createElement({
            tag_name: "DIV",
            parent: a.top_bar,
            style: "",
            "class": "dhx_ui_desktop_top_bar_quick_tools",
            id: "$dhx.ui.desktop.active_area.top_bar.quick_tools"
        }), a.top_bar_quick_tools_settings = $dhx.createElement({
            tag_name: "DIV",
            parent: a.top_bar_quick_tools,
            style: "",
            "class": "dhx_ui_desktop_top_bar_quick_tools_settings",
            id: "$dhx.ui.desktop.active_area.top_bar.quick_tools.settings",
            width: 30
        }), a.top_bar_quick_tools_clock = $dhx.createElement({
            tag_name: "DIV",
            parent: a.top_bar_quick_tools,
            style: "",
            "class": "dhx_ui_desktop_top_bar_quick_tools_clock",
            id: "$dhx.ui.desktop.active_area.top_bar.quick_tools.clock"
        }), $dhx.ui.helpers.clock("$dhx.ui.desktop.active_area.top_bar.quick_tools.clock"), a.top_bar_quick_tools_transfers = $dhx.createElement({
            tag_name: "DIV",
            parent: a.top_bar_quick_tools,
            style: "",
            "class": "dhx_ui_desktop_top_bar_quick_tools_transfers",
            id: "$dhx.ui.desktop.active_area.top_bar.quick_tools.transfers"
        }), a.top_bar_quick_tools_idioms = $dhx.createElement({
            tag_name: "DIV",
            parent: a.top_bar_quick_tools,
            style: "",
            "class": "dhx_ui_desktop_top_bar_quick_tools_idioms",
            id: "$dhx.ui.desktop.active_area.top_bar.quick_tools.idioms",
            html: $dhx.ui.i18n.idiom,
            title: $dhx.ui.language.right_click_to_select_a_language
        }), a._idiom_contextual_menu(), a.top_bar_quick_tools_idioms.onclick = function(b) {
            console.log(b.clientX, b.clientY), a.idiom_contextual_menu.showContextMenu(b.clientX, b.clientY)
        }
    },
    render: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.TopBar);
        try {
            a._top_bar(), a._top_bar_left_text(), a._top_bar_quick_tools()
        } catch (b) {
            console.log(b.stack)
        }
    }
};
