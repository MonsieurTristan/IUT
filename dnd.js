$( function() {
    $( ".draggable" ).draggable({
    	revert : 'invalid'
    });

    $('.noire').droppable({
    	drop : function(){
    		if(cakidejouer){
    			clearInterval(tn);
    			TimerBlanc();
    			cakidejouer = false;
    		}else{
    			clearInterval(tb);
    			TimerNoir();
    			cakidejouer = true;
    		}
    	}
    }); // ce bloc servira de zone de dépôt

});