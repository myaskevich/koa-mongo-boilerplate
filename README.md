# koa-mongo-boilerplate

## Prerequisites

 * Docker
 * Docker Compose v3

## Running

`docker-compose up --build`

## Usage

* Create one `curl -X POST localhost:3000/hello -d "name=John"`
* Get all `curl localhost:3000/hello`
* Get one `curl localhost:3000/hello/John`
* Delete `curl -X DELETE localhost:3000/hello/John`
