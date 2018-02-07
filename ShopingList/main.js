


$(document).ready(function(){


    $('#add-button').click(function(){
        var newItem = {
            name: $('#new-item-name').val(),
            completed: false,
        };
        addItem(newItem);
        $('#new-item-name').val('');
    });

    $(document).on('click', '#main-list li', function(event){
        event.stopPropagation();
        $(this).toggleClass('done');
    });

    $('#load-data').click(function(){
     $('#main-list').html('');
     $.get('actions.php?page=load', function(response){
          var data = JSON.parse(response);
            for(var itemKey in data) {
                console.info('Current key is' , itemKey);
                var item= data[itemKey];
                console.info('current item is ', item)
                addItem(item);
            }
    
     });

     $('#save-data').click(function(){
         var shopping_list_for_saveing =[]
       $('main-list li').each(function(item){
          var obj = {
              name: $(this).find('span').text(),
              completed: $(this).hasClass('done') ? true : false,
          }
          shopping_list_for_saveing(obj);
       });
      $.post('actions.php?page=save', "data_to_save=" + JSON.stringify(data), function(response){

       });
    });
});


    function addItem(item){
        li.html (item.name);
        if(item.comleted){
            li.addClass('done');
            var btn = $('<button<Delete</button>')
            li.append(btn);
        }
    };
});