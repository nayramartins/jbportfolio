import { gql } from 'apollo-boost'

export default gql`
  query allMenus {
    allMenus {
      edges {
        node {
					items {
            link {
              _linkType
                ... on Page {
                  _meta {
                    uid
                  }
                }
                ... on Project_page {
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
            text
          }
        }
      }
    }
  }
`