/*! dhx 2015-06-07 */
$dhx.ui.desktop.view = {
    version: "1.0.3",
    appName: "$dhx Web Desktop - view module",
    appId: "$dhx.ui.desktop.vew",
    window: [],
    window_context_menu: [],
    openedCruds: [],
    initialY: 30,
    initialX: 60,
    currentlyY: 30,
    currentlyX: 60,
    positionIncrease: !0,
    _window: function(a) {
        var b = $dhx.ui.desktop.view,
            c = a.appId,
            d = {
                id: c,
                left: b.currentlyX,
                top: b.currentlyY,
                width: $dhx.ui.desktop.settings.cruder.window.width,
                height: $dhx.ui.desktop.settings.cruder.window.height
            };
        return b.positionIncrease && (b.currentlyX = b.currentlyX + 60, b.currentlyY = b.currentlyY + 30), b.positionIncrease || (b.currentlyX = b.currentlyX - 60, b.currentlyY = b.currentlyY - 30), b.currentlyX <= b.initialX && (b.positionIncrease = !0), b.currentlyY >= window.innerHeight - 300 && (b.positionIncrease = !1), b.window[c] = new $dhx.ui.window(d), b.window[c].attachEvent("onClose", function(d) {
            return $dhx.ui.crud.controller[c].destroy(), delete b.openedCruds[a.collection], b.enableAllOpenShortcuts(c), b.disableAllCloseShortcuts(c), !0
        }), b.window[c].setText(a.collection + " management"), b._window_context_menu(a), b.disableAllOpenShortcuts(c), b.enableAllCloseShortcuts(c), b.window[c]
    },
    _window_context_menu: function(a) {
        var b = $dhx.ui.desktop.view,
            c = a.appId;
        b.window_context_menu[c] = b.window[c].attachContextMenu($dhx.ui.desktop.settings.menu_contextual_windows), b.window_context_menu[c].attachEvent("onClick", function(c) {
            if ("close" == c) b.openedCruds[a.collection].close();
            else if ("close_all" == c)
                for (var d in that.openedCruds) b.openedCruds.hasOwnProperty(d) && (console.log(d), b.openedCruds[d].close())
        })
    },
    disableAllOpenShortcuts: function(a) {
        var b = $dhx.ui.desktop.view;
        b.SideBar.programs_contextual_menu[a].setItemDisabled("open")
    },
    enableAllOpenShortcuts: function(a) {
        var b = $dhx.ui.desktop.view;
        b.SideBar.programs_contextual_menu[a].setItemEnabled("open")
    },
    disableAllCloseShortcuts: function(a) {
        var b = $dhx.ui.desktop.view;
        b.SideBar.programs_contextual_menu[a].setItemDisabled("close")
    },
    enableAllCloseShortcuts: function(a) {
        var b = $dhx.ui.desktop.view;
        b.SideBar.programs_contextual_menu[a].setItemEnabled("close")
    },
    openCruder: function(a) {
        var b = $dhx.ui.desktop.view,
            c = a.appId;
        return "undefined" != typeof b.openedCruds[a.collection] ? ($dhx.ui.desktop.view.window[c].show(), void $dhx.ui.desktop.view.window[c].bringToTop()) : void(b.openedCruds[a.collection] = new $dhx.ui.crud.simple({
            wrapper: $dhx.ui.desktop.view._window(a),
            database: a.database,
            collection: a.collection,
            base_path: $dhx.ui.cdn_address
        }))
    },
    render: function() {
        var a = ($dhx.ui.desktop, $dhx.ui.desktop.view);
        try {
            $dhx.showDirections("starting view ... "), $dhx.ui._window_manager(), $dhx.ui.desktop.settings.base_path = $dhx.ui.cdn_address, $dhx.ui.desktop.settings.application_path = $dhx.ui.desktop.settings.base_path + "dhx/ui/", $dhx.ui.desktop.settings.icons_path = $dhx.ui.desktop.settings.application_path + $dhx.ui.skin + "/", $dhx.ui.desktop.settings.menu_contextual.icons_path = $dhx.ui.desktop.settings.application_path + $dhx.ui.skin + "/", $dhx.ui.desktop.settings.menu_contextual_idiom.icons_path = $dhx.ui.desktop.settings.application_path + $dhx.ui.skin + "/", a.ActiveDesktop.render(), a.TopBar.render(), a.SideBar.render(), $dhx.hideDirections()
        } catch (b) {
            console.log(b.stack)
        }
    }
};
