import React from "react"
import { graphql } from "gatsby"
import { SEO, Jumbo } from "../components"
import styled from 'styled-components'

export const query = graphql`
  query GET_DESCRIPTION{
    allSite{
      edges{
        node{
          siteMetadata{
            description
          }
        }
      }
    } 
  }
`

const Button = styled.button`
  with: 8rem;
  background-Color: #98ca3f;
  border: none;
  border-radius: 10px;
  color:${props=> props.color};
  &:hover{
    transform: scale(1.4)
  }
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
<Button color="gray"> Comprar </Button>
  </>
)

export default IndexPage
