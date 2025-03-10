//we used "redux toolkit" so that we can have all the functions in slice and we link this slice reducer to store in "store.js"
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  pastes: localStorage.getItem("pastes")      //generally we store data in Mongodb but here we r storing out data in internal storage
    ? JSON.parse(localStorage.getItem("pastes")) //if we find localstorage data then we take it else we take empty array
    : []
}

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    //all the functions performed inside slice are listed down with logic inside reducers as:-addToPastes,updatePastes,removeFromPastes,resetPaste 
    addToPastes: (state, action) => {
      const paste = action.payload //in the action payload we will have the entire paste content sowe take that in one variable
      const index = state.pastes.findIndex((item) => item._id === paste._id)

      if (index >= 0) {
        // If the course is already in the Pastes, do not modify the quantity
        toast.error("Paste already exist")
        return
      }
      // If the course is not in the Pastes, add it to the Pastes
      state.pastes.push(paste)
      
      // Update to localstorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      // show toast
      toast.success("Paste added")
    },

    updatePastes: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id)

      if (index >= 0) {
        // If the course is found in the Pastes, update it
        state.pastes[index] = paste
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        // show toast
        toast.success("Paste updated")
      }
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload

      console.log(pasteId)
      const index = state.pastes.findIndex((item) => item._id === pasteId)

      if (index >= 0) {
        // If the course is found in the Pastes, remove it
        state.pastes.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        // show toast
        toast.success("Paste deleted")
      }
    },
    resetPaste: (state) => {
      state.pastes = []
      // Update to localstorage
      localStorage.removeItem("pastes")
    },
  },
})

export const { addToPastes, removeFromPastes, updatePastes } = pasteSlice.actions
//add, update, delete are the functions we r performing with actions inside pasteslice
export default pasteSlice.reducer
//after this we add this slice reduces to the store