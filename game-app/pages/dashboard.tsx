import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { parseGetButtonByName } from '../utils/parser'
import {
  GET_BUTTON_BY_NAME,
  RESET_BUTTON_COUNT
} from '../apollo/queries/cs'

interface IButton {
  name: string,
  value: number
}

interface IState {
  orangeButton: IButton,
  blueButton: IButton,
  chartData: Array<object>
}

const dashBoardPage = () => {
  // reset the button value when restart
  const [resetButtonCount] = useMutation(RESET_BUTTON_COUNT)
  useEffect(() => {
    resetButtonCount({ variables: { name: 'orange'}})
    resetButtonCount({ variables: { name: 'blue'}})
  }, [])

  const {
    data: orangeButtonData
  } = useQuery(GET_BUTTON_BY_NAME, {
    variables: {
      name: 'orange'
    },
    pollInterval: 5000,
  })

  const {
    data: blueButtonData
  } = useQuery(GET_BUTTON_BY_NAME, {
    variables: {
      name: 'blue'
    },
    pollInterval: 5000,
  })

  const [state, setState] = useState<IState | null>({
    orangeButton: parseGetButtonByName(orangeButtonData),
    blueButton: parseGetButtonByName(blueButtonData),
    chartData: []
  })

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      orangeButton: parseGetButtonByName(orangeButtonData),
      blueButton: parseGetButtonByName(blueButtonData),
      chartData: [
        parseGetButtonByName(orangeButtonData),
        parseGetButtonByName(blueButtonData)
      ]
    }))
  }, [blueButtonData, orangeButtonData])

  return (
    <>
      {state && state.chartData.length !== 0 &&
        <ChartWrapper>
          <BarChart width={250} height={350} data={state.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Clicks', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ChartWrapper>
      }
      <Wrapper>
        {state && state.orangeButton !== null &&
          <OrangeResult>{state.orangeButton.value}</OrangeResult>
        }
        {state && state.blueButton !== null &&
          <BlueResult>{state.blueButton.value}</BlueResult>
        }
      </Wrapper>
    </>
  )
}

export default dashBoardPage

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 550px) { 
    flex-direction column;
  }
`

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 550px) { 
    flex-direction column;
  }
`

const OrangeResult = styled.div `
  color: #fff;
  background-color: #ff9559;
  border-radius: 5%;
  font-size: 50px;
  margin-top: 25px;
  padding: 25px;
  text-align: center;
  width: 25%;
`

const BlueResult = styled.div`
  color: #fff;
  background-color: blue;
  border-radius: 5%;
  font-size: 50px;
  margin-top: 25px;
  padding: 25px;
  text-align: center;
  width: 25%;
  margin-left: 20px
`