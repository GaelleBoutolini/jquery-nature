// $(document).ready(function() {
//     $(".images5 img", ).click(function() {
//       $(".descriptionpart5").toggle(1000);
//     });
//             $('button').click(function(){
//                 $('.descriptionpart5').animate({ width: '400px'},3000);
//                 $('.descriptionpart5').animate({ height: '320px'},3000);
//                 $(".nourriture").append("<p1>  Le Faucon pèlerin se nourrit principalement d'oiseaux, tels que des pigeons, des étourneaux, des moineaux et des corbeaux. Il chasse en piqué depuis les airs pour attraper sa proie et peut atteindre des vitesses allant jusqu'à 390 km/h..La durée de vie moyenne du Faucon pèlerin est d'environ 8 à 10 ans, bien que certains individus puissent vivre jusqu'à 15 ans.</p1>");

//                 // $('.descriptionpart5').stop(true, true, 300);
            
    
               
//             });
//             /*******************IMAGE4******************* */
        
//         $(".images4 img", ).click(function() {
//             $(".descriptionpart4").toggle(1000),
//             $('.myBouton').click(function(){
//                 $('.descriptionpart4').animate({ width: '400px'},1000);
//                 $('.descriptionpart4').animate({ height: '320px'},1000);
//                  $(".nourriture").append("<p1> </p1>");
                
    
//             });
//         });
            
    
//          /*******************IMAGE3******************* */
    
//         $(".images3 img", ).click(function() {
//           $(".descriptionpart3").toggle(1000);
//         });
    
//          /*******************IMAGE2******************* */
    
//         $(".images2 img", ).click(function() {
//           $(".descriptionpart2").toggle(1000);
//         });
    
//          /*******************IMAGE1******************* */
    
//         $(".images1 img", ).click(function() {
//           $(".descriptionpart1").toggle(1000);
//         // //   $(".descriptionpart1").toggle("fast");
//           $(".descriptionpart5").fadeToggle();
//         });
    
//               });
$(document).ready(function() {
  // Sélectionner tous les boutons ayant la classe "bouton"
  $(".bouton").each(function(index) {
    // Ajouter un événement de clic sur chaque bouton
    $(this).click(function() {
      // Sélectionner la description correspondante
      let descId = ".descriptionpart" + (index + 1);
      // Cacher toutes les descriptions
      $(".descriptionpart").hide();
      // Afficher la description correspondante
      $(descId).show();
      if (!$('.nourriture').find('#faucon-pelerin').length) {
        $('.nourriture').append('<p id="faucon-pelerin">Le Faucon pèlerin se nourrit principalement d\'oiseaux, tels que des pigeons, des étourneaux, des moineaux et des corbeaux. Il chasse en piqué depuis les airs pour attraper sa proie et peut atteindre des vitesses allant jusqu\'à 390 km/h..La durée de vie moyenne du Faucon pèlerin est d\'environ 8 à 10 ans, bien que certains individus puissent vivre jusqu\'à 15 ans.</p>');
           
      }
      let nourrId = ".descriptionpart" + (index + 1);
      // Cacher toutes les descriptions
      $(".descriptionpart").hide();
      // Afficher la description correspondante
      $(nourrId).show();
      if (!$('.nourri').find('#grue cendrée').length) {
        $('.nourri').text('La grue cendrée est un oiseau omnivore qui se nourrit principalement de plantes, de graines, d\'insectes, de mollusques et de petits vertébrés tels que les grenouilles et les souris. Elle se nourrit principalement en fouillant le sol avec son long bec.Les grues cendrées peuvent vivre jusqu\'à 25 ans dans la nature, bien que la plupart vivent probablement moins longtemps en raison des menaces telles que la perte d\'habitat et la chasse illégale.');
     
    }
      let pecheurId = ".descriptionpart" + (index + 1);
      // Cacher toutes les descriptions
      $(".descriptionpart").hide();
      // Afficher la description correspondante
      $(pecheurId).show();
      if (!$('.pecheur').find('#grue cendrée').length) {
        $('.pecheur').text('Le martin-pêcheur d\'Europe se nourrit principalement de poissons, mais il peut également consommer des insectes, des crustacés et des petits amphibiens. Il capture ses proies en plongeant rapidement depuis un perchoir au-dessus de l\'eau et en les saisissant avec son bec pointu.En ce qui concerne l\'expérience de vie du martin-pêcheur d\'Europe, il vit généralement entre 5 et 7 ans en moyenne, bien que certains individus puissent vivre jusqu\'à 10 ans');
      }
     
      let cygneId = ".descriptionpart" + (index + 1);
      // Cacher toutes les descriptions
      $(".descriptionpart").hide();
      // Afficher la description correspondante
      $(cygneId).show();
      if (!$('.cygne').find('#grue cendrée').length) {
        $('.cygne').text('Le cygne chanteur se nourrit principalement de plantes aquatiques, de racines, de tiges et de feuilles, mais il peut également consommer des crustacés, des mollusques et des petits invertébrés. Il recherche sa nourriture en plongeant son long cou dans l\'eau peu profonde.Il peut vivre jusqu\'à 20 ans en moyenne, bien que certains individus puissent vivre jusqu\'à 30 ans.');
     
    }
      let hirondelleId = ".descriptionpart" + (index + 1);
      // Cacher toutes les descriptions
      $(".descriptionpart").hide();
      // Afficher la description correspondante
      $(hirondelleId).show();
      if (!$('.hirondelle').find('#grue cendrée').length) {
        $('.hirondelle').text('L\'hirondelle rustique, également connue sous le nom d\'hirondelle de cheminée (Hirundo rustica), est un petit oiseau migrateur qui se nourrit principalement d\'insectes, tels que des mouches, des moustiques, des libellules et des papillons. Elle chasse en volant à haute vitesse et en attrapant les insectes en plein vol avec son bec. Elle peut vivre jusqu\'à 8 ans en moyenne, bien que certains individus puissent vivre jusqu\'à 10 ans.');
     
    }

      });
    });
  });