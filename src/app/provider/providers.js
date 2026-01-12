"use client"
import { Provider } from "react-redux"
import { store } from "@/redux/store";
import { useEffect } from "react";
import { registerUser } from "@/redux/features/auth/authSlice";


export function Providers({ children }) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            store.dispatch(registerUser());
        }
    }, []);
    return <Provider store={store}>{children}</Provider>
}