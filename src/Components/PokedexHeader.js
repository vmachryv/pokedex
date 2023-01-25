import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react'

const PokedexHeader = ({author,name}) => {
  return (
    <Segment basic inverted padded='very' vertical>
      <Header as='h1'>This is a Header for {name} Pokedex!</Header>
      <Image src={'logo512.png'} size={'small'} centered/>
      <Header as='h3'>Author: {author}</Header>
    </Segment>
  )
}

export default PokedexHeader