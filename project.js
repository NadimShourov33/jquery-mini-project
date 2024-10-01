$(document).ready(function () {
  var totalPrice = 0;
  var selectedSeats = 0;
  var discount = 50;

  // Click event handler for seat selection buttons
  $(".btn").on("click", function () {
      // Check if already selected 4 seats
      if (selectedSeats >= 4) {
          alert("You have already selected 4 seats.");
          return;
      }

      // Get the text of the clicked button
      var seatName = $(this).text();
      var amount = 100; // Example amount
      var className = "Business"; // Example class name

      // Create a new row for the selected seat
      var newRow = $("<tr></tr>");
      var seatCell = $("<td></td>").text(seatName).addClass("w-50");
      var classCell = $("<td></td>").text(className).addClass("w-50");
      var amountCell = $("<td></td>").text(amount + " tk").addClass("w-25");

      newRow.append(seatCell);
      newRow.append(classCell);
      newRow.append(amountCell);
      $("#total-price").before(newRow);

      // Update total price
      totalPrice += amount;
      updateTotalPrice();

      // Increment selected seats count
      selectedSeats++;

      // Disable buttons after selecting 4 seats
      if (selectedSeats >= 4) {
          $(".btn").prop("disabled", true);
      }
  });

  // Function to update the total price
  function updateTotalPrice() {
      var customerName = $("#customerName").val().trim().toLowerCase();
      var finalPrice = totalPrice;

      if (customerName === "nadim") {
          finalPrice -= discount;
      }

      $(".show-price").text(finalPrice + " tk");
  }

  // Apply discount if customer name is "Nadim"
  $("#customerName").on("input", function () {
      updateTotalPrice();
  });
});

