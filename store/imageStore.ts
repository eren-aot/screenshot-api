import { create } from "zustand";

export const imageStore = create((set) => ({
    screenshots: {
        screenshot: ""
    },
    updateScreenshot: (newScreenshot: any) => set((state: any) => ({
        screenshots: { ...state.screenshots, ...newScreenshot }
    }))
}))