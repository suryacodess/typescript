// Class in Ts
// Classes are blueprint for the objects
class Product {
  id: string | number;
  private productName: string;
  productPrice: string | number;
  inCart: boolean;
  constructor(
    id: string | number,
    productName: string,
    productPrice: string | number,
    inCart: boolean
  ) {
    this.id = id;
    this.inCart = inCart;
    (this.productName = productName), (this.productPrice = productPrice);
  }

  productInCart(): string {
    if (this.inCart) {
      return "Product is in cart";
    } else {
      return "Product is not in cart";
    }
  }

  getProductName(): string {
    return this.productName;
  }
}

interface product {
  id: string | number;
  productName: string;
  productPrice: string | number;
  inCart: boolean;
}
const productDetails: product = {
  id: 0,
  productName: "Iphone 17",
  productPrice: "$1800",
  inCart: false,
};
const product1 = new Product(
  productDetails.id,
  productDetails.productName,
  productDetails.productPrice,
  productDetails.inCart
);
console.log("product name:", product1.getProductName());
console.log(product1.productInCart());
