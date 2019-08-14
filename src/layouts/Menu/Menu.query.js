import { gql } from 'apollo-boost'

export default gql`
  query allMenus {
    allMenus {
      edges {
        node {
          body {
            ... on MenuBodyNav_item {
              type
              label
              primary {
                label
                link {
                  ... on Page {
                    _meta {
                      uid
                    }
                  }
                  ... on Projects_page {
                    _meta {
                      uid
                    }
                  }
                  ... on Home_page {
                    _meta {
                      uid
                    }
                  }
                  ... on _FileLink {
                    name
                    url
                    size
                  }
                  ... on _ExternalLink {
                    url
                  }
                  ... on _ImageLink {
                    name
                    url
                    size
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`