// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to the button and block elements
//     var toggleButton = document.getElementById("toggleButton");
//     var toggleBlock = document.getElementById("toggleBlock");

//     // Add a click event listener to the button
//     toggleButton.addEventListener("click", function() {
//         // Toggle the "hidden" class on the block element
//         if (toggleBlock.style.display=="none") {
//             toggleBlock.style.display="block";
//         } else {
//             toggleBlock.style.display="none";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    // Get references to all toggle buttons and toggle blocks
    var toggleButtons = document.querySelectorAll('[id*="toggleButton"]');
    var toggleBlocks = document.querySelectorAll('[id*="toggleBlock"]');

    console.log(toggleButtons);
    console.log(toggleBlocks);

    // Add a click event listener to each toggle button
    toggleButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            // Toggle the "hidden" class on the corresponding toggle block
            // toggleBlocks[index].classList.toggle("hidden");

            // if (toggleBlocks[index].style.display=="none") {
            //     toggleBlocks[index].style.display="block";
            //     button.textContent = "Abstract−"; // this minus sign is of equal length as +  
            // } else {
            //     toggleBlocks[index].style.display="none";
            //     button.textContent = "Abstract+";
            // }
            if (toggleBlocks[index].style.maxHeight){
                toggleBlocks[index].style.maxHeight = null;
                button.innerHTML = "Abstract <i class='fas fa-chevron-down' style='font-size:10px'></i>"; // this − minus sign is of equal length as +  
              } else {
                toggleBlocks[index].style.maxHeight = toggleBlocks[index].scrollHeight + "px";
                button.innerHTML = "Abstract <i class='fas fa-chevron-up' style='font-size:10px'></i>"; 
              }
          
        });
    });
});