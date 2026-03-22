export default function CartList() {
  const cartItems = useSelector(state => state.cart.cartItems)

  if (cartItems.length === 0) {
    return <p>Din kurv er tom</p>
  }

  return (
    <div>
      <h2>Din Kurv ({cartItems.length} items)</h2>
      {cartItems.map(item => (
        <CartItem key={item.idDrink} item={item} />
      ))}
    </div>
  )
}