import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: "",
        email: "",
        phone: "",
    },
    plan: {
        plan: "Arcade",
        yearly: false,
        planPrice: 9,
    },
    addOns: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    },
    submitted: false,
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
            if (action.payload.plan === 'Arcade') state.plan.planPrice = 9;
            if (action.payload.plan === 'Advanced') state.plan.planPrice = 12;
            if (action.payload.plan === 'Pro') state.plan.planPrice = 15;

        },
        submitAddOnsInfo: (state, action) => {
            state.addOns.onlineService = action.payload.onlineService;
            state.addOns.largerStorage = action.payload.largerStorage;
            state.addOns.customizableProfile = action.payload.customizableProfile;
        },
        submitForm: (state, action) => {
            state.submitted = action.payload.submitted;
        },
    },
});

export const { submitUserInfo, submitPlanInfo, submitAddOnsInfo, submitForm } = formSlice.actions;
export default formSlice.reducer;