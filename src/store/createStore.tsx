import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
})

export function createStore() {
  return configureStore({ reducer: rootReducer })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
