export const getProductsQuery = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          descriptionHtml
          status
          variants(first: 1) {
            edges {
              node {
                price
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export const getProductQuery = `
  query getProduct($handle: String) {
    products(first: 1, query: $handle) {
      edges {
        node {
          id
          title
          handle
          descriptionHtml
          status
          variants(first: 10) {
            edges {
              node {
                id
                title
                inventoryQuantity
                price
              }
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;
