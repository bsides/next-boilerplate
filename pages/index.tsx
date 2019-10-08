import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const index = () => (
  <>
    <Title>Next Example Project</Title>
    <p>
      Check out this{' '}
      <Link href={`/products/${getRandomInt(543)}`}>
        <a>product page!</a>
      </Link>{' '}
      <br />
      <small>
        it will render a product page with a random id just so you see how it
        works
      </small>
    </p>
  </>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default index
