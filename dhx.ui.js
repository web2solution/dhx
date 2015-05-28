/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */

$dhx.ui = $dhx.ui || {
	version : '1.0.3',
    cdn_address: $dhx.CDN,
    require: function(dependencies, callBack) {
        'use strict';
        $dhx.onDemand.load(dependencies, function() {
            if (callBack) {
                callBack();
            }
        });
    },
    window_manager: null,
    window_manager_is_ready: false,
    _window_manager: function(skin) {
        'use strict';
        var self = $dhx.ui,
            skin = skin || 'dhx_terrace';
        if (!self.window_manager_is_ready) {
            self.window_manager = new dhtmlXWindows({
                skin: skin
            });
            self.window_manager.setSkin('dhx_terrace');
            self.window_manager_is_ready = true;
        }
    }
	,window : function(c){
		 return $dhx.ui.window_manager.createWindow(c);
	}
	,PDFjsLoaded : false
    
	,dhxPDF : function(){
		
		dhtmlXGridObject.prototype.dhxPDF = function(j, r, w, u, o, C, appId) {
				var l = {
					row: this.getSelectedRowId(),
					col: this.getSelectedCellIndex()
				};
				if (l.row === null || l.col === -1) {
					l = false
				} else {
					if (l.row && l.row.indexOf(this.delim) !== -1) {
						var c = this.cells(l.row, l.col).cell;
						c.parentNode.className = c.parentNode.className.replace(" rowselected", "");
						c.className = c.className.replace(" cellselected", "");
						l.el = c
					} else {
						l = false
					}
				}
				r = r || "color";
				var x = r == "full_color";
				var a = this;
				a._asCDATA = true;
				if (typeof(C) === "undefined") {
					this.target = ' target="_blank"'
				} else {
					this.target = C
				}
				eXcell_ch.prototype.getContent = function() {
					return this.getValue()
				};
				eXcell_ra.prototype.getContent = function() {
					return this.getValue()
				};
			
				function A(F) {
					var M = [];
					for (var K = 1; K < a.hdr.rows.length; K++) {
						M[K] = [];
						for (var J = 0; J < a._cCount; J++) {
							var O = a.hdr.rows[K].childNodes[J];
							if (!M[K][J]) {
								M[K][J] = [0, 0]
							}
							if (O) {
								M[K][O._cellIndexS] = [O.colSpan, O.rowSpan]
							}
						}
					}
					var L = "<rows profile='" + F + "'";
					if (w) {
						L += " header='" + w + "'"
					}
					if (u) {
						L += " footer='" + u + "'"
					}
					L += "><head>" + a._serialiseExportConfig(M).replace(/^<head/, "<columns").replace(/head>$/, "columns>");
					for (var K = 2; K < a.hdr.rows.length; K++) {
						var D = 0;
						var S = a.hdr.rows[K];
						var N = "";
						for (var J = 0; J < a._cCount; J++) {
							if ((a._srClmn && !a._srClmn[J]) || (a._hrrar[J] && (!a._fake || J >= a._fake.hdrLabels.length))) {
								D++;
								continue
							}
							var Q = M[K][J];
							var P = ((Q[0] && Q[0] > 1) ? ' colspan="' + Q[0] + '" ' : "");
							if (Q[1] && Q[1] > 1) {
								P += ' rowspan="' + Q[1] + '" ';
								D = -1
							}
							var E = "";
							var I = S;
							if (a._fake && J < a._fake._cCount) {
								I = a._fake.hdr.rows[K]
							}
							for (var H = 0; H < I.cells.length; H++) {
								if (I.cells[H]._cellIndexS == J) {
									if (I.cells[H].getElementsByTagName("SELECT").length) {
										E = ""
									} else {
										E = _isIE ? I.cells[H].innerText : I.cells[H].textContent
									}
									E = E.replace(/[ \n\r\t\xA0]+/, " ");
									break
								}
							}
							if (!E || E == " ") {
								D++
							}
							N += "<column" + P + "><![CDATA[" + E + "]]></column>"
						}
						if (D != a._cCount) {
							L += "\n<columns>" + N + "</columns>"
						}
					}
					L += "</head>\n";
					L += q();
					return L
				}
			
				function g() {
					var D = [];
					if (o) {
						for (var E = 0; E < o.length; E++) {
							D.push(v(a.getRowIndex(o[E])))
						}
					} else {
						for (var E = 0; E < a.getRowsNum(); E++) {
							D.push(v(E))
						}
					}
					return D.join("\n")
				}
			
				function q() {
					var F = ["<foot>"];
					if (!a.ftr) {
						return ""
					}
					for (var H = 1; H < a.ftr.rows.length; H++) {
						F.push("<columns>");
						var K = a.ftr.rows[H];
						for (var E = 0; E < a._cCount; E++) {
							if (a._srClmn && !a._srClmn[E]) {
								continue
							}
							if (a._hrrar[E] && (!a._fake || E >= a._fake.hdrLabels.length)) {
								continue
							}
							for (var D = 0; D < K.cells.length; D++) {
								var J = "";
								var I = "";
								if (K.cells[D]._cellIndexS == E) {
									J = _isIE ? K.cells[D].innerText : K.cells[D].textContent;
									J = J.replace(/[ \n\r\t\xA0]+/, " ");
									if (K.cells[D].colSpan && K.cells[D].colSpan != 1) {
										I = " colspan='" + K.cells[D].colSpan + "' "
									}
									if (K.cells[D].rowSpan && K.cells[D].rowSpan != 1) {
										I = " rowspan='" + K.cells[D].rowSpan + "' "
									}
									break
								}
							}
							F.push("<column" + I + "><![CDATA[" + J + "]]></column>")
						}
						F.push("</columns>")
					}
					F.push("</foot>");
					return F.join("\n")
				}
			
				function n(E, D) {
					return (window.getComputedStyle ? (window.getComputedStyle(E, null)[D]) : (E.currentStyle ? E.currentStyle[D] : null)) || ""
				}
			
				function v(H) {
					if (!a.rowsBuffer[H]) {
						return ""
					}
					var D = a.render_row(H);
					if (D.style.display == "none") {
						return ""
					}
					var E = a.isTreeGrid() ? ' level="' + a.getLevel(D.idd) + '"' : "";
					var L = "<row" + E + ">";
					for (var J = 0; J < a._cCount; J++) {
						if (((!a._srClmn) || (a._srClmn[J])) && (!a._hrrar[J] || (a._fake && J < a._fake.hdrLabels.length))) {
							var P = a.cells(D.idd, J);
							if (x) {
								var I = n(P.cell, "color");
								var O = n(P.cell, "backgroundColor");
								var N = n(P.cell, "font-weight") || n(P.cell, "fontWeight");
								var K = n(P.cell, "font-style") || n(P.cell, "fontStyle");
								var M = n(P.cell, "text-align") || n(P.cell, "textAlign");
								var F = n(P.cell, "font-family") || n(P.cell, "fontFamily");
								if (O == "transparent" || O == "rgba(0, 0, 0, 0)") {
									O = "rgb(255,255,255)"
								}
								L += "<cell bgColor='" + O + "' textColor='" + I + "' bold='" + N + "' italic='" + K + "' align='" + M + "' font='" + F + "'>"
							} else {
								L += "<cell>"
							}
							L += "<![CDATA[" + (P.getContent ? P.getContent() : P.getTitle()) + "]]></cell>"
						}
					}
					return L + "</row>"
				}
			
				function s() {
					var D = "</rows>";
					return D
				}
				
				function complete(){
					var y = document.createElement("div");
				
					y.style.height = "100%";
					y.style.width = "100%";
					
					var pdf_name = "grid_" + appId + '.pdf';
					
					y.id = new Date().getTime();
					var dhx_pdf_window = new $dhx.ui.window({
						id: new Date().getTime() - 1000,
						left: $dhx.ui.crud.simple.View.settings.app_generic.window.left,
						top: $dhx.ui.crud.simple.View.settings.app_generic.window.top,
						width: 800,
						height: 500,
					});
					dhx_pdf_window.button('park').hide();
					dhx_pdf_window.button('minmax').hide();
					dhx_pdf_window.button('stick').hide();
					dhx_pdf_window.setText("Grid PDF version");
					var dhx_pdf_status_bar = dhx_pdf_window.attachStatusBar();
					dhx_pdf_status_bar.setText('Press ctrl+p (cmd+p Mac) to print it');
					
					
					
					//y.style.display = "none";
					document.body.appendChild(y);
					
					var m = "form_" + a.uid();
					y.innerHTML = '<iframe name="pdfFrame" width="100%" height="100%" frameborder="0"></iframe><form style="display:none;" id="' + m + '" method="post" action="' + j + '" accept-charset="utf-8"  enctype="application/x-www-form-urlencoded" target="pdfFrame"><input type="hidden" name="grid_xml" id="grid_xml"/><input type="hidden" name="viewer" id="viewer" value="'+$dhx.ui.cdn_address+'dhx/ui/pdfjs/web/viewer.php?pdf_name='+$dhx.ui.cdn_address+'dhx/ui/bin/2pdf/'+pdf_name+'"/><input type="hidden" name="pdf_name" id="pdf_name" value="'+pdf_name+'"/> </form>';
					dhx_pdf_window.attachObject(y.id);
					
					
					document.getElementById(m).firstChild.value = encodeURIComponent(A(r).replace("\u2013", "-") + g() + s());
					document.getElementById(m).submit();
					//y.parentNode.removeChild(y);
					a = null;
					if (l) {
						l.el.parentNode.className += " rowselected";
						l.el.className += " cellselected"
					}
					l = null	
				}
				
				complete();
			};
	}
    ,start: function(c) {
        'use strict';
        var self = $dhx.ui,
            dependencies = [];
		
		if( c.require )
		{
			if( $dhx.isArray(c.require) )
			{
				dependencies = require;
			}
		}

        if (window.location.host.indexOf('web2.eti.br') != -1) {
            $dhx.environment = "test";
            $dhx.ui.cdn_address = '//mac.web2.eti.br/';
        } else {
            $dhx.environment = "production";
        }

        if (c.dhtmlx) {
            if (typeof window.dhx4 === 'undefined') {
                dependencies.push($dhx.ui.cdn_address + "codebase4.2_std/dhtmlx.css");
                dependencies.push($dhx.ui.cdn_address + "codebase4.2_std/skins/terrace/dhtmlx.css");
                dependencies.push($dhx.ui.cdn_address + "codebase4.2_std/dhtmlx.js");
            }
        }
        dependencies.push($dhx.ui.cdn_address + "dhx/ui/css/dhx.ui.css");	
		if( typeof $dhx.ui.data == 'undefined' )
		{
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.data.js");
		}
		
		if( typeof $dhx.dataDriver == 'undefined' )
		{
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.dataDriver.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/latinize.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.MQ.js");
		}
		
		if( typeof $dhx.ui.crud == 'undefined' )
		{
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.crud.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.crud.simple.View.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.crud.simple.View.settings.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.crud.simple.View.Record.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.crud.simple.View.FormWindow.js");
			dependencies.push($dhx.ui.cdn_address + "dhx/dhx.ui.crud.simple.View.Search.js");
			
		}		

        if (typeof jQuery === 'undefined') {
            dependencies.push($dhx.ui.cdn_address + "dhx/ui/js/jquery-1.11.1.min.js");
        }
        // Currency mask - shall to be loaded after JQUERY only
        dependencies.push($dhx.ui.cdn_address + "dhx/ui/js/jquery.price_format.1.7.min.js");

        //typeof window.JSON === 'undefined' ? 
		dependencies.unshift($dhx.ui.cdn_address + "dhx/ui/js/json3.min.js");// : "";

        $dhx.ui.require(dependencies, function() {
            $dhx.init();

            self._window_manager();

            if ($dhx._enable_log) console.warn('starting $dhx.ui');
            window.dhx4.dateFormat = {
                en: "%Y-%m-%d",
                pt: "%Y-%m-%d"
            };
			
			self.dhxPDF();
			
			

            $dhx.ui.data.model.start({
                db: c.db,
                version: c.version,
                schema: c.schema,
                settings: c.settings,
                records: c.records,
                onSuccess: function() {
                    // call onStart for $dhx.ui.start()
                    if (c.onStart) c.onStart();
                },
                onFail: function() {

                }
            })
        });
    }
};


$dhx.ui.$Application = (function()
{
	
	return{};
})();



$dhx.ui.$Session = (function()
{
	
	return{};
})();

Object.defineProperty($dhx.ui.$Session, 'SessionID', {
	//get: function() { return bValue; },
	//set: function(newValue) { },
	value: ( 
		typeof $dhx.REST.API.session.client_session_id !== 'undefined' ? 
		$dhx.REST.API.session.client_session_id : -1 
	),
	enumerable: true,
	configurable: false,
	writable: true
});
	
$dhx.ui.$Session = $dhx.extend( $dhx.REST.API.session );