# how to start

```
docker-compose up -d
```

# graphql-server

* graphql endpoint :4000/graphql

need to add blue and orange button at the first time

```
mutation {
  addButtonCount(name: "blue") {
    id
    name
    value
  }
}
```

* Create testing db to do the api test
```
docker-compose exec postgres createdb -U postgres keyteo-db-test
```

# game-app

* game dashboard endpoint :3000/dashboard

* game client endpoint :3000/client

