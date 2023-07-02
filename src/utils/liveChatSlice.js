import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./constant";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        msgs: [],
    },
    reducers: {
        addMsg: (state, action) => {
            state.msgs.splice(LIVE_CHAT_OFFSET, 1);
            state.msgs.unshift(action.payload);
        },
    },
});

export const { addMsg } = liveChatSlice.actions;
export default liveChatSlice.reducer;
