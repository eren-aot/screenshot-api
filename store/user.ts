import { create } from "zustand";

export const userStore = create((set) => ({
    user: {
        full_name: "Jalaj"
    },
    updateUser: (newUser: any) => set((state: any) => ({
        user: {...state.user, ...newUser}
    }))
}))