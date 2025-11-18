interface product {
    id: string | number;
    name: string;
    price: number;
    category: string;
  }
  
  interface productReview {
    productId: number | string;
    reviewer: string;
    rating: number;
    comment: string;
  }
  
  const getProductDetails = new Promise<product>((resolve, reject) => {
    setTimeout(() => {
      console.log("Product Details");
      resolve(
        { id: 1, name: "dog", price: 4.99, category: 'pet' },
      );
    }, 1000);
  });
  
  const getProductReviews = new Promise<productReview[]>((resolve, reject) => {
    setTimeout(() => {
      console.log("Product Reviews");
      resolve([
        {
          productId: 1,
          reviewer: "Tishana",
          rating: 2,
          comment: "Do not recommend.",
        },
        { productId: 1, reviewer: "Bryan", rating: 4, comment: "It was aight." },
      ]);
    }, 1000);
  });
  
  const getRelatedProducts = new Promise<product[]>((resolve, reject) => {
    setTimeout(() => {
      console.log("Related products");
      resolve([
        {
          id: 3,
          name: "fish",
          price: 0.99,
          category: 'pet'
        },
        {
          id: 3,
          name: "hamster",
          price: 5.99,
          category: 'pet'
        }
      ]);
    }, 1000);
  });
  
  getProductDetails
  .then(p => getProductReviews )
  .then( r => getRelatedProducts)
  .catch((e) => {
      console.error(e)
  })