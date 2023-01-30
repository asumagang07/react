import React from 'react'
import styled from 'styled-components'

function MainDiv(props) {
  return (
    <StyledDiv className='relative flex flex-row'>
        {props.children}
    </StyledDiv>
  )
}

export default MainDiv

const StyledDiv = styled.div`
height: calc(100vh - 96px) ;
`