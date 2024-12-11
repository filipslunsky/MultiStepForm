import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: "",
        email: "",
        phone: "",
    },
    plan: {
        plan: "",
        yearly: false,
    },
    addOns: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitUserInfo: (state, action) => {},
        submitPlanInfo: (state, action) => {},
        submitAddOnsInfo: (state, action) => {},
    },
});

export const { submitUserInfo, submitPlanInfo, submitAddOnsInfo } = formSlice.actions;
export default formSlice.reducer;