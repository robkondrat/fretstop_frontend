export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.guitar) return tally;
    return tally + cartItem.quantity * cartItem.guitar.price;
  }, 0);
}
