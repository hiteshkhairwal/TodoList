$('ul').on('click','li',function(){
    $(this).toggleClass('strike');
});


$('input').keypress(function(event){
    if(event.which==13){
        var add=$(this).val();
        $('ul').append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span>"+add+"</li>");
        $('input').val("");
    }
});


$('ul').on('click','.delete',function(event){
    $(this).parent().fadeOut(500,function(){
         $(this).remove();
    })
   
    event.stopPropagation();
});



$('.fa-plus').on('click',function(){
    $('input').fadeToggle();
});