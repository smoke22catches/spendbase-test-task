# Spendbase test task

## How to run project

Clone repository and run `docker compose up`, than open `http://localhost:3000/docs` to open Swagger.

## Important note

Some sensitive information is stored in docker-compose.yml file and code. It should be stored in environment variables and I understand that, but I made in such way just for simplicity of running the project. Also, there is no migrations also for simplicity, but usually I use them.

Another aspect is that I didn't implement `part` field because I was not sure what it should be and I didn't receive answer for my question about it.

## Todo list

- [x] Setup Dockerfile and docker-compose.yml
- [x] Setup Postgres database
- [x]Create POST and GET endpoints
- [x] Complete README.md
