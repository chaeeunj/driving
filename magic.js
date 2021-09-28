$(document).ready(function(){

    // variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/Img_05.png', './assets/Img_06.png']
    
    // keypress event
    $(document).on('keypress', function(e){
        if(e.which==13){
            $($surface).toggleClass('movieRight');
            $($car).toggleClass('movieRight');
        }
    })

    $(document).on('keypress', function(e){
        if(e.which==119) {
            if(flag) {
                flag = false;
                $img.atr('src', cars[0]);
            } else {
                flag = true;
                $img.atr('src', cars[1]);
            }
        }
    })
});

