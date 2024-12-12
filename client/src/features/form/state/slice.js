import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: "",
        email: "",
        phone: "",
    },
    plan: {
        plan: "arcade",
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
        submitUserInfo: (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.phone = action.payload.phone;
        },
        submitPlanInfo: (state, action) => {
            state.plan.plan = action.payload.plan;
            state.plan.yearly = action.payload.yearly;
        },
        submitAddOnsInfo: (state, action) => {
            state.addOns.onlineService = action.payload.onlineService;
            state.addOns.largerStorage = action.payload.largerStorage;
            state.addOns.customizableProfile = action.payload.customizableProfile;
        },
    },
});

export const { submitUserInfo, submitPlanInfo, submitAddOnsInfo } = formSlice.actions;
export default formSlice.reducer;