$(document).ready(function(){
    $("img").click(function(){
      $("#modalPhoto").modal("show");
    });
  });
  $(document).ready(function(){
    $("img").click(function(){
      $('#idModal1').modal("show");
    });
});


$(document).ready(function(){
  $("#album_title").validate({
    rules: {
      title: "required"
    },
    messages:{
      title: "please enter your title"
    }
  })
});

$(document).ready(function(){
  $(".edit_album").validate({
    //error place
    errorPlacement: function (error, element) {
      error.insertBefore(element);
    },
  //adding rule
    rules: {
    // username is required with max of 20 and min of 6
    "album[title]":{
      required: true
    }
    },
    // error messages
    messages: {
      title:{
        required: "Username is required."
    
      }
    }
  })
});
$(document).ready(function(){
  alert("dada");
});

console.log('Hello from My JS')