import { gql } from 'apollo-boost'

export default gql`
  query allHome_pages {
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
                subtitle
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
