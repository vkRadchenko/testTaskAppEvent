import { AnyAction, Dispatch, createSlice } from '@reduxjs/toolkit'
import { ProductInterface } from './productSlice'

export interface ProductCart {
  id: number
  price: number
  score: number
  totalPrice: number
  name: string
  image: string
}

interface CartState {
  entities: ProductCart[]
  totalScore: number
}

const storedEntities = localStorage.getItem('entities')
const storedTotalScore = localStorage.getItem('totalScore')

const items = storedEntities !== null ? JSON.parse(storedEntities) : []

const totalScore = storedTotalScore !== null ? JSON.parse(storedTotalScore) : 0

const initialState: CartState = {
  entities: items,
  totalScore: totalScore,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existItem = state.entities.find((item) => item.id === newItem.id)

      if (existItem) {
        existItem.score++
        existItem.totalPrice += newItem.price
      } else {
        state.entities.push({
          id: newItem.id,
          price: newItem.price,
          score: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        })
      }
      state.totalScore += 1
      localStorage.setItem(
        'entities',
        JSON.stringify(state.entities.map((item) => item))
      )
      localStorage.setItem('totalScore', JSON.stringify(state.totalScore))
    },
    removeToCart: (state, action) => {
      const id = action.payload
      const existingItem = state.entities.find((item) => item.id === id)

      if (existingItem && existingItem.score === 1) {
        state.entities = state.entities.filter((item) => item.id !== id)
        state.totalScore--
      } else if (existingItem) {
        existingItem.score--
        existingItem.totalPrice -= existingItem.price
        state.totalScore--
      }
      localStorage.setItem(
        'entities',
        JSON.stringify(state.entities.map((item) => item))
      )
      localStorage.setItem('totalScore', JSON.stringify(state.totalScore))
    },
  },
})

const { reducer: cartReducer, actions } = cartSlice

const { addToCart, removeToCart } = actions

export const addProductToCart =
  (payload: ProductInterface) => (dispatch: Dispatch<AnyAction>) => {
    dispatch(addToCart(payload))
  }
export const removeProductCart =
  (payload: number) => (dispatch: Dispatch<AnyAction>) => {
    dispatch(removeToCart(payload))
  }
export const getCart = () => (state: { cart: CartState }) => {
  return state.cart.entities
}
export const getTotalScore = () => (state: { cart: CartState }) => {
  return state.cart.totalScore
}
export const getTotalPrice = () => (state: { cart: CartState }) => {
  if (state.cart.entities !== null) {
    return state.cart.entities.reduce((acc, item) => acc + item.totalPrice, 0)
  }
}
export default cartReducer
