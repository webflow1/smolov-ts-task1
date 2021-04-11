
interface CartItem <T> {  
  item:<T>{
    id: number;
    title: string; 
    variantId: T;
  }
  
}
const addToCart = <T>(item: {id: number, title: string, variantId}) => {
  console.log(`Adding "${item.title}" to cart.`);
}



addToCart({id: 1, title: 'Concrete shoes'});