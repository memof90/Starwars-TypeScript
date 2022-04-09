import React from 'react';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <p>
        Developed by
        {' '}
        <a href="https://www.linkedin.com/in/guillermo-andr%C3%A9s-figueredo-aranguren-814465127">Memo Figueredo</a>
        .
        {' '}
        <br />
        All rights reserved
        {' '}
        <a href="https://swapi.dev/">SWAPI</a>
        .
      </p>
    </Container>
  );
}
