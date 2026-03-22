import { createSlice } from '@reduxjs/toolkit'

const lemonadeSlice = createSlice({
    name: 'lemonade',
    initialState: {

        buyPrice: 10,
        sellPrice: 15,
        lemonades: 120,
        sold: 0,
        cash: 30,
        cost: 10,
        revenue: 0,   //hvor mang 

        cocktails: [],    
        loading: false,    
        error: null,       
    },
    reducers: {
        buyLemon(state){
            if(state.cash < state.buyPrice) return
            state.lemonades += 1
            state.cash -= state.buyPrice //min cash går ned med den buyprice
            state.cost += state.buyPrice //min cost går op med buyPrice (og cost er samlet sum af alle penge pbrugt på køb)
        },
        sellLemonade(state){
            if (state.lemonades <= 0) return
            state.lemonades -= 1 //der en lemonade/citron som ryger
            state.sold += 1 
            state.cash += state.sellPrice //cash går op med den salgspris 
            state.revenue += state.sellPrice //,om revanue går på med sellPrice
        },
        resetStand(state){
            state.lemonades = 0
            state.sold = 0
            state.cash = 0
            state.cost = 0
            state.revenue = 0
        },

        setLoading(state, action) {
            state.loading = action.payload 
        },
        setCocktails(state, action) {
            state.cocktails = action.payload  
        },
        setError(state, action) {
            state.error = action.payload  
        },
    }
});

export const { 
    buyLemon, 
    sellLemonade, 
    resetStand,
    setLoading,     
    setCocktails,    
    setError         
} = lemonadeSlice.actions

export default lemonadeSlice.reducer