import { AnyAction, Dispatch, createSlice } from '@reduxjs/toolkit'

const BASE_URL = 'https://appevent.ru/dev/task1/catalog'

export interface ProductInterface {
  id: number
  image?: string
  name: string
  price: number
}

interface ProductState {
  entities: ProductInterface[] | null
  isLoading: boolean
  dataLoaded: boolean
  error: string | null
  value: number
}

const initialState: ProductState = {
  entities: null,
  isLoading: true,
  dataLoaded: false,
  error: null,
  value: 0,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productRequested: (state) => {
      state.isLoading = true
    },
    productReceved: (state, action) => {
      state.entities = action.payload
      state.dataLoaded = true
      state.isLoading = false
    },
    productRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: productReducer, actions } = productSlice
const { productRequested, productReceved, productRequestFiled } = actions

export const loadProductList = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(productRequested())
  try {
    const response = await fetch(BASE_URL)
    const { items } = await response.json()
    dispatch(productReceved(items))
  } catch (error) {
    dispatch(productRequestFiled((error as Error).message))
  }
}

export const getProduct = () => (state: { product: ProductState }) =>
  state.product.entities

export default productReducer
