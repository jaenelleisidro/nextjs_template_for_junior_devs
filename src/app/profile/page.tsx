'use client';

import { useState, useEffect } from "react";
import api from "../common/Api";

export default function Profile() {

    const [user, setUser] = useState({ email: null })
    useEffect(() => {
        (async () => {
            const res = await api.get('users/me');
            const user = res?.data;
            setUser(user);
            console.log(user)
        })();
    }, []);


    return (
        <h1> {user.email || ''}</h1>
    );
}