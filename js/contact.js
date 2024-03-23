const tab = $('#tab .tab');
const content = $('#content .content');


tab.click(function(){
    let order =  $(this).index();
    content.eq(order).show().siblings().hide();
    // console.log(order);
})

