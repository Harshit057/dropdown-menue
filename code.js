document.addEventListener("DOMContentLoaded", function() {
    const dropdownHeader = document.getElementById("dropdown-header");
    const dropdownList = document.getElementById("dropdown-list");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
  
    // Toggle dropdown on header click
    dropdownHeader.addEventListener("click", function() {
      dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
      dropdownHeader.classList.toggle("active");
    });
  
    // Select an item from the list
    dropdownItems.forEach(function(item) {
      item.addEventListener("click", function() {
        const selectedItem = item.textContent;
  
        // Set the selected item text in the dropdown header
        dropdownHeader.textContent = selectedItem;
  
        // Remove 'selected' class from all items and add it to the clicked item
        dropdownItems.forEach(i => i.classList.remove("selected"));
        item.classList.add("selected");
  
        // Close the dropdown
        dropdownList.style.display = "none";
        dropdownHeader.classList.remove("active");
      });
    });
  
    // Close the dropdown if clicked outside of it
    document.addEventListener("click", function(event) {
      if (!event.target.closest(".dropdown")) {
        dropdownList.style.display = "none";
        dropdownHeader.classList.remove("active");
      }
    });
  });
  