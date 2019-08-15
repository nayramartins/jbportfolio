import { gql } from 'apollo-boost'

export default gql`
  query allPages($uid: String) {
    allPages(uid: $uid) {
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
            ... on PageBodyText {
              type
              label
              primary {
                text
              }
            }
            ... on PageBodyImage {
              type
              label
              primary {
                image
              }
            }
          }
        }
      }
    }
  }
`