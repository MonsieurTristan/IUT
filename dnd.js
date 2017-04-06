$( function() {
    $( ".draggable" ).draggable({
    	revert : 'invalid'
    });

    $('.noire').droppable(); // ce bloc servira de zone de dépôt

});