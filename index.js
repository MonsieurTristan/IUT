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
			plateau+="<td id =case-c"+j+"-l"+i+" class=blanche></td>";
		}else{
			plateau+="<td id =case-c"+j+"-l"+i+" class=noire></td>";
		}
		color= !color;
	}
	plateau+="</td>";
	color= !color;
}
plateau+="</table>";
document.getElementById('plateau').innerHTML = plateau;


/////////////////  PLACEMENT DES PIONS + SURVOL DES PIONS  /////////////////


var cakidejouer = true; //True : Noir, False : Blanc


for(i=1;i<11;i++){
	for(j=1;j<11;j++){
		var k = i+j;
		k = k%2;
		if(k==1){
			if(i<=4){
				document.getElementById('case-c'+j+'-l'+i).innerHTML="<img class=draggable id=pn"+j+";"+i+" src="+pNoir1+">";
				document.getElementById("pn"+j+";"+i).addEventListener("mouseover", function(){
					document.getElementById(this.id).className = "rouge";
				});
				document.getElementById("pn"+j+";"+i).addEventListener("mouseout", function(){
					document.getElementById(this.id).className = null;
				});
				document.getElementById("pn"+j+";"+i).addEventListener("click", function(){
					document.getElementById(this.id).className = "vert";
					console.log(this.id);
				});
			}
			if (i>=7){
				document.getElementById('case-c'+j+'-l'+i).innerHTML="<img class=draggable id=pb"+j+";"+i+" src="+pBlanc1+">";
				document.getElementById("pb"+j+";"+i).addEventListener("mouseover", function(){
					document.getElementById(this.id).className = "rouge";
				});
				document.getElementById("pb"+j+";"+i).addEventListener("mouseout", function(){
					document.getElementById(this.id).className = null;
				});
				document.getElementById("pb"+j+";"+i).addEventListener("click", function(){
					document.getElementById(this.id).className = "vert";
				});
			}
		}

		
	}
}
