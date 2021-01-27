# Graphql + Express

Uses:
- [GraphQL](https://graphql.org/learn/)
- [express-graphql](https://github.com/graphql/express-graphql) + [graphql-tools](https://github.com/apollographql/graphql-tools) + [merge-graphql-schemas](https://github.com/okgrow/merge-graphql-schemas)
- [Express](https://expressjs.com/) + [Mongoose](https://mongoosejs.com/)
- inspired by [this tutorial](https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474)
- and this [example](https://github.com/leonardomso/graphql-mongodb-server)

Under the hood:
- [ts-node](https://www.npmjs.com/package/ts-node)
- [mocha](https://github.com/mochajs/mocha)
- [chai](https://github.com/chaijs/chai)
- [nyc](https://github.com/istanbuljs/nyc)


## WARNING: This code is not maintained

Very obvious - but due - WARNING: check the links above for the state of the art. It's probably easier to start from scrath than to use this as a boilerplate ;-)

## Getting started

If you don't have a local `mongod` instance start/stop a docker one with `npm run mongo:start` and `npm run mongo:stop`

```bash
npm install
npm run start
```

## Queries and Mutations

Open GraphQL interface at http://localhost:4000/graphql

The following examples should work out of the box.

```graphql
mutation {
  createUser(user: {name: "Andre", email: "andre@andre.com"}) {
    _id,
    name,
    email
  }
}

query {
  users {
    _id,
    name,
    email
  }
}

query {
  user(_id: "5ca14f895f0e0255a395631c") {
   	_id,
    name,
    email
  }
}
```

## Other scripts

```bash
npm run start-dev
npm run build
npm run coverage
```


## [MIT License](LICENSE-MIT)

[Copyright (c) 2019 Andre Torgal](http://andrezero.mit-license.org/2019)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
