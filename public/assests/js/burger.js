// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-state").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("newstate");
  
      var newState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("Devoured it", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
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
          console.log("add new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  