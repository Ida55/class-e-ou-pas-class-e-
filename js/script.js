
/* Merci bcp à Lucy pour le code :) */

/* le click sur les éléments cercles et carrés génère la coloration de ces éléments (déterminé via la classe 'fill' du document css)*/ 
 $('.btn1').click(function() {
    $('circle').addClass('fill');  
    $('rect').addClass('fill');
 });

/* le click sur les éléments cercles et carrés génère le déssemplissage de ces éléments*/
$('.btn2').click(function() {
    $('circle').removeClass('fill');
    $('rect').removeClass('fill');
})
/* les cercles se colorent au 1er click et se décolorent au 2ème (chaque click produit l'éffet contraire au click précédent et donc change l'état des éléments) */
$('circle').click(function() {
    $(this).toggleClass('fill'); /* avec (this) on précise bien que ce sont les cercles qui sont concernés */
})


$(document).ready(function () { 
    $("#recta").click(function () { 
        if($("#recta").hasClass("fill")) { 
            $(".line1").removeClass("fill"); 
        } else { 
            $(".line1").addClass("fill2"); 
    }}); 
});

$(document).ready(function () { 
    $("#rectb").click(function () { 
        if($("#rectb").hasClass("fill")) { 
            $(".line2").removeClass("fill"); 
        } else { 
            $(".line2").addClass("fill3"); 
    }}); 
    });

$(document).ready(function () { 
    $("#diamond").click(function () { 
        if($("#diamond").hasClass("fill")) { 
            $(".line3").removeClass("fill"); 
        } else { 
            $(".line3").addClass("fill4"); 
    }}); 
});

$(document).ready(function () { 
    $("#rectc").click(function () { 
        if($("#rectc").hasClass("fill")) { 
            $(".line4").removeClass("fill"); 
        } else { 
            $(".line4").addClass("fill5"); 
    }}); 
});

$(document).ready(function () { 
    $("#rectd").click(function () { 
        if($("#rectd").hasClass("fill")) { 
            $(".line5").removeClass("fill"); 
        } else { 
            $(".line5").addClass("fill6"); 
    }}); 
});

// $('rect').click(function() {
//     if ($(this).toggleClass('fill')) {
//         $('circle').hasClass('fill2');
//     } else { 
//         $(this).removeClass('fill');
//         $('circle').removeClass('fill2');
//     }
// })


// $("#recta").click(function() {
//    if ($(this).hasClass('fill')) {
//     $('line1').removeClass('fill2');
//    } else {
//     $('line1').addClass('fill2');
//    }
// });

// $(document).ready(function() {
//     $(rect#recta.line1).click(function() {
//         if ($(rect#recta.line1).hasClass('fill')) {
//         $('line1').removeClass('fill');
// }  else {
//     $('line1').addClass('fill');
// }
// })





 