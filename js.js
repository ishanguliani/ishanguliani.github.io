function Button1_onclick() {
  var locator = new ActiveXObject("WbemScripting.SWbemLocator");
  var service = locator.ConnectServer(".");
  var properties = service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
  var e = new Enumerator (properties);
  document.write("<table border=1>");
  dispHeading();
  for (;!e.atEnd();e.moveNext ())
  {
        var p = e.item ();
        document.write("<tr>");
        document.write("<td>" + p.Caption + "</td>");
        document.write("<td>" + p.IPFilterSecurityEnabled + "</td>");
        document.write("<td>" + p.IPPortSecurityEnabled + "</td>");
        document.write("<td>" + p.IPXAddress + "</td>");
        document.write("<td>" + p.IPXEnabled + "</td>");
        document.write("<td>" + p.IPXNetworkNumber + "</td>");
        document.write("<td>" + p.MACAddress + "</td>");
        document.write("<td>" + p.WINSPrimaryServer + "</td>");
        document.write("<td>" + p.WINSSecondaryServer + "</td>");
        document.write("</tr>");
  }
  document.write("</table>");
}

function dispHeading()
{
    document.write("<thead>");
    document.write("<td>Caption</td>");
    document.write("<td>IPFilterSecurityEnabled</td>");
    document.write("<td>IPPortSecurityEnabled</td>");
    document.write("<td>IPXAddress</td>");
    document.write("<td>IPXEnabled</td>");
    document.write("<td>IPXNetworkNumber</td>");
    document.write("<td>MACAddress</td>");
    document.write("<td>WINSPrimaryServer</td>");
    document.write("<td>WINSSecondaryServer</td>");
    document.write("</thead>");
}
