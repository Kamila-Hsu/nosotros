
const $toppings = $('#toppingsItem .toppings-item img');

let x = 0;

$('#scrollLeft').click(function(){
    if(x >= 1){
        x = x - 1;
        $toppings.stop(0, 1).animate({left:"+=92px"},300);
    }else{
        x = 0 ;
        $toppings.stop(0, 1).animate({left:"+=0px"},300);
    }
    console.log(x);

});

$('#scrollRight').click(function(){

    if(x < 9){
        x = x + 1;
        $toppings.stop(0, 1).animate({left:"-=92px"},300);
    }else{
        x = 9;
        $toppings.stop(0, 1).animate({left:"-=0"},300);
    }
    console.log(x);

});



const smItem = $('#smItem .pd-sm-item');
const lgItem = $('#lgItem .lg-item');


smItem.click(function(){
    x = 0;
    let order =  $(this).index();
    lgItem.eq(order).show().siblings().hide();
    // console.log(order);
})





