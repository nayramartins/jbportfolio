import { gql } from 'apollo-boost'

export default gql`
  query allProject_pages($uid: String) {
    allProject_pages(uid: $uid) {
      edges {
        node {
          body {
            __typename
            ... on Project_pageBodyProject_title {
              type
              label
              primary {
                title
                subtitle
                image
              }
            }
            ... on Project_pageBodyText {
              type
              label
              primary {
                text
              }
            }
            ... on Project_pageBodyImage {
              type
              label
              primary {
                image
              }
            }
            ... on Project_pageBodyImage_gallery {
              type
              label
              fields {
                image_captions
                gallery_image
              }
            }
          }
        }
      }
    }
  }
`