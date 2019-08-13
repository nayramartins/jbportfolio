import { gql } from 'apollo-boost'

export default gql`
  query allPages {
    allPages {
      edges {
        node {
          body {
            __typename
            ... on PageBodyProject_title {
              type
              label
              primary {
                title
                subtitle
                image
              }
            }
            ... on PageBodyHero_banner {
              type
              label
              primary {
                banner_title
                banner_text
                banner_image
              }
            }
            ... on PageBodyText {
              type
              label
              primary {
                text
              }
            }
          }
        }
      }
    }
  }
`