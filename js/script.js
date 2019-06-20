
/* Merci bcp à Lucy pour le code :) */

/* le click sur les éléments cercles et carrés génère la coloration de ces éléments (déterminé via la classe 'fill' du document css)*/ 
 $('.btn-full').click(function() {
    $('circle').addClass('fill1');  
    $('rect').addClass('fill1');
 });

/* le click sur les éléments cercles et carrés génère le déssemplissage de ces éléments*/
$('.btn-empty').click(function() {
    $('circle').removeClass('fill1 fill2 fill3 fill4 fill5 fill6'); /* Merci Nicolas, tous les éléments se vident lorsque le bouton empty est cliqué*/
    $('rect').removeClass('fill1 fill2 fill3 fill4 fill5 fill6');
})
/* les cercles se colorent au 1er click et se décolorent au 2ème (chaque click produit l'éffet contraire au click précédent et donc change l'état des éléments) */
$('circle').click(function() {
    $(this).toggleClass('fill1'); /* avec (this) on précise bien que ce sont les cercles qui sont concernés */
})

$(document).ready(function () { 
    $("#recta").click(function () { 
        if($("#recta").hasClass("fill1")) {  /* si l'élément concerné par l'i.d recta est cliqué et qu'il à la classe fill1 (déterminée dans le CSS)*/
            $(".line1").removeClass("fill1"); /* on enlève la classe fill1 (couleur orange) des éléments concernés par la classe line1*/
        } else { 
            $(".line1").addClass("fill2"); /* ou alors on ajoute la classe fill2 aux éléments concernés par la classe line1*/
    }}); 
});

$(document).ready(function () { 
    $("#rectb").click(function () { 
        if($("#rectb").hasClass("fill1")) { 
            $(".line2").removeClass("fill1"); 
        } else { 
            $(".line2").addClass("fill3"); 
    }}); 
    });

$(document).ready(function () { 
    $("#diamond").click(function () { 
        if($("#diamond").hasClass("fill1")) { 
            $(".line3").removeClass("fill1"); 
        } else { 
            $(".line3").addClass("fill4"); 
    }}); 
});

$(document).ready(function () { 
    $("#rectc").click(function () { 
        if($("#rectc").hasClass("fill1")) { 
            $(".line4").removeClass("fill1"); 
        } else { 
            $(".line4").addClass("fill5"); 
    }}); 
});

$(document).ready(function () { 
    $("#rectd").click(function () { 
        if($("#rectd").hasClass("fill1")) { 
            $(".line5").removeClass("fill1"); 
        } else { 
            $(".line5").addClass("fill6"); 
    }}); 
});




 