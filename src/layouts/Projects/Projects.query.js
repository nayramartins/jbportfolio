import { gql } from 'apollo-boost'

export const TITLE_QUERY = gql`
 query allProjects_pages {
    allProjects_pages {
      edges {
        node {
          body {
            __typename
            ... on Projects_pageBodyProject_title {
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