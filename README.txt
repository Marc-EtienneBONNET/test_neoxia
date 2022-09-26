à ce niveau, j'ai mis en place l'architecture globale du projet avec son back et son front ainsi que la page client nécessaire pour commander.
J'ai aussi ajouté : 
    -la page de connexion au front et l'entité Restaurateur (dossier user) au back.
    -La page restaurateur, afin davoir la liste des commande qui on etait passer
    -J'ai jouté la fonctionnaliter permetant de suprimer les commandes (1 click = changement d'état de la commande (en attente -> en cours) et 2 click = supretion de la commande)
    -J'ai jouté la fonctionnaliter de filtrage par alliment a la liste des commande
    
Étant donné que la database est vide et que le site ne contient pas encore de bouton pour ajouter des aliments de garniture et donc pas non plus de prise de commande possible.
il vous faut aller directement dans le container Postgres pour y ajouter des aliments qui seront visibles depuis la page client.

compilation : 
    ./run.sh
