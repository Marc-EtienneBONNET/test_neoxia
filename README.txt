à ce niveau, j'ai mis en place l'architecture globale du projet avec son back et son front ainsi que la page client nécessaire pour commander.
J'ai aussi ajouté la page de connexion au front et l'entité Restaurateur (dossier user) au back.

Étant donné que la database est vide et que le site ne contient pas encore de bouton pour ajouter des aliments de garniture.

il vous faut aller directement dans le container Postgres pour y ajouter des aliments qui seront visibles depuis la page client.
compilation : 
    ./run.sh


Vous devez créer un fichier .env : 
DATABASE_URL=postgres://user:password@postgres:5432/db

POSTGRES_DB=db
POSTGRES_USER=user
POSTGRES_PASSWORD=password