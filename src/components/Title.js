import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;

  h4 {
    color: var(--primaryColor);
    letter-spacing: 7px;
    text-align: center;
  }

  .title {
    color: var(--mainBlack);
  }

  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default Title
