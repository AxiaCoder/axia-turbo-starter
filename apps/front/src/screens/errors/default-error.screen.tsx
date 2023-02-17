import React from 'react';
import { useRouteError } from 'react-router-dom';

export const DefaultError: React.FC = () => {
  const error = useRouteError() as Error;

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorryyyy, an unexpected error has occurred.</p>
      <p>{error.message}</p>
    </>
  );
};
