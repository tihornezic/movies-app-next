# MoviesApp

## Project tech stack info:
- Next.js
- Tailwind CSS
- Docker Compose
- [TMDB API](https://developer.themoviedb.org/docs/getting-started)

### How to run the project with docker

#### Prerequisites

- make sure you have Docker and Docker Compose installed on your system
  - you can do so by running `docker -v` and `docker-compose -v`

<br>

#### Running the project

- in order to run the project, you will need to generate an API key from [TMDB.org](https://www.themoviedb.org/settings/api)
- then make sure to create a .env at the project root and copy the contents of .env.example and make sure to replace `replace-with-your-real-tmdb-token-here` with your generated API key from previous step
- to build and run the docker container run `docker-compose up --build`