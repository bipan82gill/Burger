$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bur").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log(newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#devoureBtn").on("click", function (event) {
    console.log("hello !!!")
    var id = $(this).data("id");
    // var newDevour = $(this).data("value");
    var newDevourValue = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourValue
    }).then(
      function () {       
        location.reload();
      }
    );
  });
  
    $("#deleteBtn").on("click", function (event){
      console.log("delete me")
      var id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function () {
             location.reload(); 
          }
        );
    });
  });
  
   

  