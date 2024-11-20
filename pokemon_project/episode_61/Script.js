
    // JavaScript pour gérer la soumission du formulaire
    document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Empêche l'envoi automatique du formulaire

      const password = document.getElementById("password").value;

      // Vérification du mot de passe
      if (password === "12345") { // Mot de passe attendu
        // Cache le formulaire et affiche la page de succès
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("successContainer").style.display = "block";
      } else {
        // Affiche un message d'erreur
        document.getElementById("errorMessage").style.display = "block";
      }
    });
