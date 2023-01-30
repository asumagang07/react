import React from 'react'
import styled from 'styled-components'

function MainDiv(props) {
  return (
    <StyledDiv className='maindiv relative flex flex-row overflow-y-auto'>
        {props.children}
    </StyledDiv>
  )
}

export default MainDiv

const StyledDiv = styled.div`
height: calc(100vh - 96px) ;
max-height: calc(100vh - 96px);
`