import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from "./redux/userSlice";
import movieReducer from "./redux/movieSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store