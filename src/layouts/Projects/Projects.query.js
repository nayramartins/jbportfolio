import { gql } from 'apollo-boost'

export const PROJECTS_QUERY = gql`
  query allProjectPages {
    allProject_pages {
      edges {
        node {
          _meta {
            uid
          }
          body {
            ...on Project_pageBodyProject_title {
              type
              label
              primary {
                title
                subtitle
                image
              }
            }
          }
        }
      }
    }
  }
`