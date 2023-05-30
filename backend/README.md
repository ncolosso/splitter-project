# Splitter Backend

Implemented using Spring Boot

## Local Environment Setup

- cd into `splitter-project/backend/`
- Start the docker postgres container by running `docker-compose up -d`
- You will have to create the necessary databases in the postgres container
  - Connect to the container by running `docker exec -it splitter-postgress sh`
  - Connect to postgres by running `psql -U ncolosso`
  - Create the following databases:
    - `create database bills;`
- Start the Spring Boot application