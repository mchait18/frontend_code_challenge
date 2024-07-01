import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home"
import SignupForm from "./SignupForm";
import AdminPage from "./AdminPage"

function RouteList() {
    return (
        <main>
            <Routes >
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignupForm />} />
                <Route exact path="/admin" element={<AdminPage />} />
            </Routes >
        </main>
    )
}
export default RouteList