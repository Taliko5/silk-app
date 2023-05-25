import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

export const GraphQLContext = createContext<any | null>(null);

export const fetchData = async () => {
  try {
    const res = await client.query({
      query: gql`
        query GetScalves {
          scalves {
            data {
              id
              attributes {
                name
                discription
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          homepage {
            data {
              id
              attributes {
                title
                about
                contact
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    const { homepage, scalves } = res.data;
    console.log(homepage.data.attributes, scalves.data);
    return {
      homepage: homepage.data.attributes,
      scalves: scalves.data,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

// TODO formatting data later when the data structure is finished
export const createTidyUpData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error('Error tidying up data');
  }
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [tidiedData, setTidiedData] = useState<any | null>(null);

  useEffect(() => {
    createTidyUpData()
      .then((data) => setTidiedData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ApolloProvider client={client}>
      <GraphQLContext.Provider value={tidiedData}>
        {children}
      </GraphQLContext.Provider>
    </ApolloProvider>
  );
};
