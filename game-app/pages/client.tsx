import React from 'react';
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { ADD_BUTTON_COUNT } from '../apollo/queries/cs'

const ClientPage = () => {
  const [addButtonCount] = useMutation(ADD_BUTTON_COUNT)

  return (
    <Wrapper>
      <OrangeButton onClick={()=> addButtonCount({ variables: { name: 'orange'}})}> - </OrangeButton>
      <BlueButton onClick={()=> addButtonCount({ variables: { name: 'blue'}})}> + </BlueButton>
    </Wrapper>
  )
}

export default ClientPage

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 550px) { 
    flex-direction column;
  }
`

const OrangeButton = styled.button `
  cursor: pointer;
  border-radius: 50%;
  border-width: 0;
  color: #fff;
  background-color: #ff9559;
  font-size: 50px;
  height: 250px;
  width: 250px;
`

const BlueButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border-width: 0;
  color: #fff;
  background-color: blue;
  font-size: 50px;
  height: 250px;
  width: 250px;
  margin-left: 30px;
  @media (max-width: 550px) { 
    margin-left: 0;
    margin-top: 30px;
  }
`