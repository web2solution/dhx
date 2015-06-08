/*! dhx 2015-06-07 */
$dhx.ui.desktop.view.SideBar = {
    version: "1.0.3",
    appName: "Side Bar",
    appId: "$dhx.ui.desktop.SideBar",
    side_bar: null,
    side_button: [],
    programs_contextual_menu: [],
    _programs_contextual_menu: function(a, b) {
        var c = $dhx.ui.desktop.view,
            d = $dhx.ui.desktop.view.SideBar,
            e = a.appId;
        d.programs_contextual_menu[e] = new dhtmlXMenuObject($dhx.ui.desktop.settings.menu_contextual_programs), d.programs_contextual_menu[e].addContextZone(b), d.programs_contextual_menu[e].attachEvent("onClick", function(b) {
            if ("open" == b) c.openCruder(a);
            else if ("close" == b) c.openedCruds[a.collection].close();
            else if ("close_all" == b)
                for (var d in c.openedCruds) c.openedCruds.hasOwnProperty(d) && (console.log(d), c.openedCruds[d].close())
        })
    },
    _side_bar: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.SideBar),
            b = window.innerHeight;
        a.side_bar = $dhx.createElement({
            tag_name: "DIV",
            style: "",
            "class": "dhx_ui_desktop_side_bar",
            id: "$dhx.ui.desktop.active_area.side_bar",
            width: 66,
            height: b,
            resize_height: !0
        }), a.side_bar_nav_top = $dhx.createElement({
            tag_name: "DIV",
            parent: a.side_bar,
            style: "",
            "class": "dhx_ui_desktop_side_bar_nav_top",
            id: "$dhx.ui.desktop.active_area.side_bar_nav_top",
            width: 66,
            height: 12
        }), a.side_bar_nav_bottom = $dhx.createElement({
            tag_name: "DIV",
            parent: a.side_bar,
            style: "",
            "class": "dhx_ui_desktop_side_bar_nav_bottom",
            id: "$dhx.ui.desktop.active_area.side_bar_nav_top",
            width: 66,
            height: 12
        }), a._side_bar_container(), a.side_bar_nav_top.addEventListener("click", function(b) {
            a.side_bar_container.scrollTop -= 54
        }), a.side_bar_nav_bottom.addEventListener("click", function(b) {
            a.side_bar_container.scrollTop += 54
        })
    },
    _side_bar_container: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.SideBar),
            b = 25,
            c = window.innerHeight,
            d = c - b;
        a.side_bar_container = $dhx.createElement({
            tag_name: "DIV",
            parent: a.side_bar,
            style: "",
            "class": "dhx_ui_desktop_side_bar_container",
            id: "$dhx.ui.desktop.active_area.side_bar_container",
            width: 66,
            height: d - 12,
            resize_height: -b
        }), a.side_bar_container.style.clip = "rect(12px,66px," + (d - 11) + "px,0px)", window.addEventListener("resize", function() {
            c = window.innerHeight - b, a.side_bar_container.style.clip = "rect(12px,66px," + (window.innerHeight - 29) + "px,0px)"
        }, !0)
    },
    _button: function(a) {
        var b = $dhx.ui.desktop.view,
            c = $dhx.ui.desktop.view.SideBar,
            d = d = $dhx.strip_tags(a.summary),
            e = '<img alt="' + d + '" title="' + d + '" width="46" height="46" src="' + $dhx.ui.cdn_address + "/dhx/ui/desktop/assets/icons/" + a.icon + '" />',
            f = {
                tag_name: "DIV",
                parent: c.side_bar_container,
                style: a.style || "",
                "class": "dhx_ui_desktop_side_button",
                id: "$dhx.ui.desktop.active_area.side_button." + a.appId,
                html: a.icon ? e : a.html
            };
        c.side_button[a.appId] = $dhx.createElement(f), "cruder" == a.type && (c.side_button[a.appId].onclick = function(c) {
            b.openCruder(a)
        }), c._programs_contextual_menu(a, c.side_button[a.appId].id)
    },
    render: function() {
        var a = ($dhx.ui.desktop.view, $dhx.ui.desktop.view.SideBar);
        try {
            $dhx.showDirections("starting view ... "), a._side_bar(), $dhx.ui.desktop.Registry.cruders.forEach(function(b, c, d) {
                a._button({
                    appName: b.appName,
                    appId: b.appId,
                    summary: b.summary,
                    module: b.module,
                    icon: b.icon,
                    database: b.database,
                    collection: b.collection,
                    type: "cruder"
                })
            }), $dhx.hideDirections()
        } catch (b) {
            console.log(b.stack)
        }
    }
};
