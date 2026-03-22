'use client'
import styles from '../ui/Footer.module.css' 
import { useDispatch, useSelector } from "react-redux"
import { buyLemon, sellLemonade } from "../redux/LemonadeSlice"

export default function Footer(){
  const dispatch = useDispatch()
  const cash = useSelector(state => state.lemonade.cash)
  const profit = useSelector(state => state.lemonade.revenue - state.lemonade.cost) 

  return(
    <footer className={styles.footer}>
      <div className={styles.div}>
        <p>Din kurv</p>
      </div>

      <div> 
        <button onClick={() => dispatch(buyLemon())}>
         Køb citron
        </button>          
        <button onClick={() => dispatch(sellLemonade())}>
       Sælg Citron
        </button>
      </div>

      <p>Cash: {cash}</p>
      <p>Profit: {profit}</p>
    </footer>
  )
}