'use client'

import { useDispatch, useSelector } from 'react-redux'
import { buyLemon, sellLemonade } from '../../redux/LemonadeSlice'
import { useState, useEffect } from 'react'

export default function Shop() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.lemonade.cash)
  const [name, setName] = useState('')
  const [cocktails, setCocktails] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
        const data = await response.json()
        setCocktails(data.drinks || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCocktails()
  }, [])

  return (
    <div style={{padding: '20px'}}>
      <h1>Shop</h1>
      
      <div style={{marginBottom: '20px'}}>
        <label>Full name</label>
        <input 
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          style={{display: 'block', padding: '8px', marginTop: '5px', width: '100%'}}
        />
      </div>

      <p>Cash: {cash}</p>
      
      <button onClick={() => dispatch(buyLemon())} style={{padding: '10px 20px', marginRight: '10px'}}>
        Buy Lemon
      </button>
      <button onClick={() => dispatch(sellLemonade())} style={{padding: '10px 20px'}}>
        Sell Lemonade
      </button>

      <h2 style={{marginTop: '30px'}}>Available Cocktails</h2>
      
      {loading && <p>Loading cocktails...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
        {cocktails.map((drink) => (
          <div key={drink.idDrink} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px'}}>
            <img 
              src={drink.strDrinkThumb} 
              alt={drink.strDrink}
              style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px'}}
            />
            <h3>{drink.strDrink}</h3>
            <p>{drink.strCategory}</p>
            <button style={{marginTop: '10px', padding: '8px 15px', backgroundColor: '#51CF66', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}