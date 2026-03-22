'use client'
import { useSelector } from 'react-redux'
import styles from './Footer.module.css'
// denne er for at se mine egen stands udrengninger, anvedes ikke i projekt da jeg opdager for sent at jeg burde havde lavet det som komponent:D
export default function CartInfo() {
  const cash = useSelector(state => state.lemonade.cash)
  const profit = useSelector(state => state.lemonade.revenue - state.lemonade.cost)
  const lemonades = useSelector(state => state.lemonade.lemonades)
  const sold = useSelector(state => state.lemonade.sold)

  return (
    <div className={styles.cartInfo}>
      <p>Din kurv</p>
      <p>Cash: {cash}</p>
      <p>Profit: {profit}</p>
      <p>Lemonader på lager: {lemonades}</p>
      <p>Solgte: {sold}</p>
    </div>
  )
}