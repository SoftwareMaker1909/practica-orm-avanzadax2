const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { importSchema } = require('graphql-import');

const app = express();

// Carga el esquema GraphQL desde GitHub
const schemaString = importSchema('https://github.com/SoftwareMaker1909/practica-orm-avanzadax2/blob/8765830e2d8ec77ab88cd617d80746fe2cd3ed2e/schema.graphql');

// Define los resolvers para tus consultas y mutaciones
const resolvers = {
  Query: {
    inventory: async () => {
      // Implementa la lógica para obtener todos los inventarios aquí.
      // Puedes usar consultas a la base de datos u otras fuentes de datos.
    },
    // Define resolvers para otras consultas aquí
  },
  // Define resolvers para las mutaciones aquí
};

// Conecta los resolvers al esquema GraphQL
const schema = makeExecutableSchema({ typeDefs: schemaString, resolvers });

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor GraphQL en ejecución en el puerto ${PORT}`));
