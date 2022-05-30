import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { split, ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition, offsetLimitPagination } from '@apollo/client/utilities';
import { environment } from 'src/environments/environment';

const uri = `${environment.graphQLUrl}/graphql`; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // Create an http link:
  const http = httpLink.create({
    uri,
    withCredentials: true
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: `${environment.graphQLWsUrl}/graphql`,
    options: {
      reconnect: true
    }
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const data = getMainDefinition(query);
      return data.kind === 'OperationDefinition' && data.operation === 'subscription';
    },
    ws,
    http
  );

  return {
    link: link,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            feed: offsetLimitPagination()
          }
        }
      }
    }),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      }
    }
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
