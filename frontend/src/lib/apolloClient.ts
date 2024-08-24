import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.HASHURA_URL || "http://localhost:8080/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        process.env.HASHURA_ADMIN_SECRET || "<your-hasura-admin-secret>", // Add only if your Hasura instance requires it
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
