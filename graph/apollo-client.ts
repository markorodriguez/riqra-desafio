import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
    uri: process.env.BASEURL,
    cache: new InMemoryCache(),
})

