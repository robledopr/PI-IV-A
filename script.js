window.onload = () => {

    document.getElementById("searchButton").addEventListener("click", function() {
        let searchTerm = document.getElementById("searchTerm").value.toLowerCase();
        let sections = document.querySelectorAll("section");
        let found = false;
      
        sections.forEach(function(section) {
          let textContent = section.textContent.toLowerCase();
          
          if (textContent.includes(searchTerm)) {
            section.scrollIntoView({ behavior: "smooth" }); // Rola até a seção encontrada
            found = true;
          }
        });
      
        if (!found) {
          alert("Termo não encontrado!");
        }
      });


    const buttonDown = document.getElementById("button-down");
    buttonDown.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  };


  