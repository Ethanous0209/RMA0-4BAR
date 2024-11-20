document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rendezvous-form');
    const rendezvousList = document.getElementById('rendezvous-list');
    let rendezvous = [];

    // Événement pour le formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const titre = document.getElementById('titre').value.trim();
        const date = document.getElementById('date').value;

        if (!titre || !date) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Vérifier que la date est valide
        const rendezvousDate = new Date(date);
        if (isNaN(rendezvousDate)) {
            alert("La date saisie est invalide.");
            return;
        }

        // Créer un objet rendez-vous
        const rdv = { titre, date };
        rendezvous.push(rdv);

        // Vérifier si le rendez-vous est pour aujourd'hui
        const today = new Date();
        if (rendezvousDate.toDateString() === today.toDateString()) {
            alert(`Rendez-vous pour aujourd'hui : ${titre} à ${rendezvousDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
        }

        afficherRendezvous();
        form.reset();
    });

    // Fonction pour afficher les rendez-vous
    function afficherRendezvous() {
        rendezvousList.innerHTML = ''; // Réinitialiser la liste
        rendezvous.forEach((rdv, index) => {
            const div = document.createElement('div');
            div.className = 'rdv';

            const rdvText = document.createElement('span');
            rdvText.textContent = `${rdv.titre} - ${new Date(rdv.date).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}`;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.textContent = 'Supprimer';
            deleteButton.onclick = () => supprimerRendezvous(index);

            div.appendChild(rdvText);
            div.appendChild(deleteButton);
            rendezvousList.appendChild(div);
        });
    }

    // Fonction pour supprimer un rendez-vous
    function supprimerRendezvous(index) {
        rendezvous.splice(index, 1); // Retirer le rendez-vous du tableau
        afficherRendezvous(); // Mettre à jour l'affichage
    }
});
