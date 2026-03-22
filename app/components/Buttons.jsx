'use client'
import { useDispatch } from 'react-redux'
import { buyLemon, sellLemonade } from '../redux/LemonadeSlice'
import styles from '../ui/Footer.module.css'

export default function Buttons() {
  const dispatch = useDispatch()

  return (
    <div className={styles.buttons}>
      <button onClick={() => dispatch(buyLemon())}>Køb citron</button>
      <button onClick={() => dispatch(sellLemonade())}>Sælg citron</button>
    </div>
  )
}
