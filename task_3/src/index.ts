
interface CardItem {
  id: number;
  title: string;
  variantId?: number;
}

const addToCart = (item: CardItem) => {
  console.log(`Adding "${item.title}" to cart.`);
}



addToCart({id: 1, title: 'Concrete shoes'});
addToCart({id: 1, title: 'Concrete shoes', variantId: 15});
