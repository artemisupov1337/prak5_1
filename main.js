let name = prompt();
let position = prompt();
let phone = prompt();

let table = document.getElementById("table");

var visitcard = ' <table width="100%" border="0">'
+'<tr>'
+'<td class="a">'
+'<img src="logo.jpg">'
+'</td>'
+'<td class="b">'
+'<b>' + name + '</b><br>'
+'<i>' + position + '</i><br>'
+'<b color="blue">' + phone + '</b>'
+'</td>'
+'</tr>'
+'</table>';

document.write('<table width="100%" border="0">');
for(var y=0; y<12; y++)
{
document.write('<tr>');
for(var x=0; x<3; x++)
{
document.write('<td style="border-style: dashed; border-width:thin;">');
document.write(visitcard);
document.write('</td>');
}
document.write('</tr>');
}
document.write('</table>');