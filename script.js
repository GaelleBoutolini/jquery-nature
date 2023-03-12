$(document).ready(function() {
    $(".images5 img", ).click(function() {
      $(".descriptionpart5").toggle(1000);
    });
            $('button').click(function(){
                $('.descriptionpart5').animate({ width: '400px'},3000);
                $('.descriptionpart5').animate({ height: '320px'},3000);
                $(".nourriture").append("<p1>  Le Faucon pèlerin se nourrit principalement d'oiseaux, tels que des pigeons, des étourneaux, des moineaux et des corbeaux. Il chasse en piqué depuis les airs pour attraper sa proie et peut atteindre des vitesses allant jusqu'à 390 km/h..La durée de vie moyenne du Faucon pèlerin est d'environ 8 à 10 ans, bien que certains individus puissent vivre jusqu'à 15 ans.</p1>");

                $('.descriptionpart5').stop(true, true, 200);
            
                    
    $('.descriptionpart5').click(function() {
        resetDescriptionPart5();
      });
               
            });
            /*******************IMAGE4******************* */
        
        $(".images4 img", ).click(function() {
            $(".descriptionpart4").toggle(1000),
            $('.myBouton').click(function(){
                $('.descriptionpart4').animate({ width: '400px'},1000);
                $('.descriptionpart4').animate({ height: '320px'},1000);
                // $(".nourriture").append("<p1> </p1>");
    
            });
        });
            
    
         /*******************IMAGE3******************* */
    
        $(".images3 img", ).click(function() {
          $(".descriptionpart3").toggle(1000);
        });
    
         /*******************IMAGE2******************* */
    
        $(".images2 img", ).click(function() {
          $(".descriptionpart2").toggle(1000);
        });
    
         /*******************IMAGE1******************* */
    
        $(".images1 img", ).click(function() {
          $(".descriptionpart1").toggle(1000);
        // //   $(".descriptionpart1").toggle("fast");
          $(".descriptionpart5").fadeToggle();
        });
    
              });
       



  