import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valueCat:0,
  sort:{
    name:'пополярности',
    sortProperty:'rating,'
  },
} 
   const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
      setValueCat(state,action) {
         state.valueCat = action.payload
      },
      
        setSort(state,action) {
          state.sort = action.payload
        }
    }
  })
  


export const { setValueCat } = filterSlice.actions;
export const { setSort} = filterSlice.actions;
export default filterSlice.reducer