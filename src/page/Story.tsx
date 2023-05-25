import React, { FC, useContext } from 'react';
import { GraphQLContext } from '../hooks/useApolloClient';

export const Story: FC = () => {
  const data = useContext(GraphQLContext);

  console.log(data);

  return <div>story page</div>;
};
