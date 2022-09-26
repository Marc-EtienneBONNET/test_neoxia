docker image prune --force
docker volume prune --force
docker network prune --force
docker system prune --volumes --force
docker-compose up --build -d