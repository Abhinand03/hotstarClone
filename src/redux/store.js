import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from './Slice/bannerSlice'

const store= configureStore({
    reducer:{
        chnageBanner:bannerReducer
    }
})

export default store