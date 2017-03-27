///////////////// ID DES IMAGES  /////////////////
var chemin = "img/";
var pBlanc1 = chemin+"pb1.png";
var pBlanc2 = chemin+"pb2.png";
var pNoir1 = chemin+"pn1.png";
var pNoir2 = chemin+"pn2.png";


///////////////// CREATION DU PLATEAU  /////////////////
var plateau = "<table>";
var color = true;
for(i=1;i<11;i++){
	plateau+="<tr>";
	for(j=1;j<11;j++){
		if(color==true){
			plateau+="<td id =case-c"+i+"-l"+j+" class=blanche></td>";
		}else{
			plateau+="<td id =case-c"+i+"-l"+j+" class=noire></td>";
		}
		color= !color;
	}
	plateau+="</td>";
	color= !color;
}
plateau+="</table>";
document.getElementById('plateau').innerHTML = plateau;


/////////////////  PLACEMENT DES PIONS + SURVOL DES PIONS  /////////////////

for(i=1;i<11;i++){
	for(j=1;j<11;j++){
		var ligne = i%2;
		var colonne = j%2;
		switch(ligne){
			
		}

		switch(colonne){
			
		}
	}
}




 
