import { create } from 'zustand'

export const useData = create(
    (set) => ({
        username: "user12",
        password: "password0123",
        greetings: () => {
            console.log("Hello from zustand")
        }
    })
)