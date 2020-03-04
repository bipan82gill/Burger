$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $(".create-form[name=burger_name]").val().trim(),
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

  $("#devourBtn").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("value");
    var newDevourValue = {
      devoured: newDevour
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
    // $(".change-state").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newState = $(this).data("newState");
  
    //   var newState = {
    //     devoured: 1
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: newState
    //   }).then(
    //     function() {
    //       console.log("Devoured it", newState);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
    $("#deleteBtn").on("click", function (event){
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
  
   

  