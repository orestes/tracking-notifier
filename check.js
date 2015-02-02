var url = 'http://aplicacionesweb.correos.es/localizadorenvios/track.asp?numero=SN2AKH0401795220128070C&amp;idiomaCorreos=es_ES';
var fs  = require('fs');

var expression = /\d\d\/\d\d\/\d\d\d\d.*\s+.*\s+txtContenidoTabla.*\s+.*/gim
var html  = fs.readFileSync('response.html', {"encoding": "UTF-8"});
var parts = html.match(expression);

for (var i = 0; i < parts.length; i++) {
	var part = parts[i];

	// 07/01/2015</td>                 <td clastxtContenidoTabl<span class="txtNormal" title="El env�o ha sido depositado en Correos o en el pa�s de origen del env�o."> Admitido
	var matches = part.match(/<.*>/g);

	console.log(part);

	for (j = 0; j < matches.length; j++) {
		console.log(part);
		console.log(matches[j]);

		part.replace(matches[j], "");
	}

	console.log(part);
}
