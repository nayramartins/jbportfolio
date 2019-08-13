import { gql } from 'apollo-boost'

export default gql`
  {
    allHome_pages {
      edges {
        node {
          body {
            ... on Home_pageBodyHero_banner {
              type
              label
              primary {
                banner_title
                banner_text
                banner_image
              }
            }
            ... on Home_pageBodyText {
              type
              label
              primary {
                text
              }
            }
            __typename
          }
        }
      }
    }
  }
`
