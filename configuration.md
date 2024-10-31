### Notice de Configuration pour la Gestion des Branches Git

Afin de bien organiser votre projet et suivre votre progression à travers les épisodes, nous allons utiliser Git pour gérer les différentes versions de votre code. Chaque épisode sera poussé sur une branche différente suivant la convention de nommage `episode_1`, `episode_2`, etc. Voici une notice détaillée pour configurer et gérer votre projet avec Git :

#### Prérequis

- Git doit être installé sur votre machine. Si ce n'est pas le cas, suivez les instructions sur [le site officiel de Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

#### Configuration Initiale

1. **Initialiser le dépôt Git :**

   Si ce n'est pas déjà fait, initialisez un nouveau dépôt Git dans votre répertoire de projet :
   ```sh
   git init
   ```

2. **Ajouter le dépôt distant :**

   Ajoutez un dépôt distant (par exemple, sur GitHub) où vous pousserez vos branches :
   ```sh
   git remote add origin https://github.com/votre-utilisateur/votre-projet.git
   ```

#### Gestion des Branches pour chaque Épisode

1. **Créer et basculer sur une nouvelle branche :**

   Pour chaque épisode, vous devez créer une nouvelle branche en utilisant la convention de nommage `episode_X` où `X` est le numéro de l'épisode.
   ```sh
   git checkout -b episode_X
   ```

2. **Ajouter vos modifications :**

   Après avoir terminé les modifications pour un épisode, ajoutez vos fichiers modifiés à l'index Git :
   ```sh
   git add .
   ```

3. **Committer vos modifications :**

   Enregistrez vos modifications avec un message de commit descriptif :
   ```sh
   git commit -m "Ajout des modifications pour l'épisode X"

4. **Pousser la branche sur le dépôt distant :**

   Poussez votre branche `episode_X` vers le dépôt distant :
   ```sh
   git push -u origin episode_X
   ```

#### Exemple Complet pour un Épisode

Prenons l'exemple de l'épisode 1 :

1. **Créer et basculer sur la branche `episode_1` :**
   ```sh
   git checkout -b episode_1
   ```

2. **Ajouter vos modifications :**
   ```sh
   git add .
   ```

3. **Committer vos modifications :**
   ```sh
   git commit -m "Ajout des modifications pour l'épisode 1"
   ```

4. **Pousser la branche sur le dépôt distant :**
   ```sh
   git push -u origin episode_1
   ```

#### Gestion des Épisodes Suivants

Pour chaque nouvel épisode, répétez les étapes ci-dessus en remplaçant `X` par le numéro de l'épisode correspondant.

- **Épisode 2 :**
  ```sh
  git checkout -b episode_2
  git add .
  git commit -m "Ajout des modifications pour l'épisode 2"
  git push -u origin episode_2
  ```

- **Épisode 3 :**
  ```sh
  git checkout -b episode_3
  git add .
  git commit -m "Ajout des modifications pour l'épisode 3"
  git push -u origin episode_3
  ```

Et ainsi de suite pour chaque épisode.

#### Revenir à une Branche Précédente

Si vous avez besoin de revenir à une branche précédente pour y apporter des modifications, utilisez la commande suivante pour basculer vers la branche souhaitée :
```sh
git checkout episode_X
```

#### Fusionner des Branches (Optionnel)

Si vous souhaitez fusionner les modifications d'une branche d'épisode dans la branche principale (par exemple, `main`), vous pouvez utiliser les commandes suivantes :

1. **Basculez sur la branche `main` :**
   ```sh
   git checkout main
   ```

2. **Fusionner la branche `episode_X` :**
   ```sh
   git merge episode_X
   ```

3. **Pousser les modifications sur le dépôt distant :**
   ```sh
   git push origin main
   ```

En suivant cette notice, vous serez en mesure de gérer efficacement votre projet Pokémon en utilisant Git et en maintenant une organisation claire et structurée de votre code. Bonne chance dans votre aventure de développement !