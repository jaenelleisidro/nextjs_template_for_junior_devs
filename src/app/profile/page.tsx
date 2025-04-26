'use client';

import { useState, useEffect } from "react";
import simpleFetch from "../common/SimpleFetch";

export default function Profile() {

    const [user, setUser] = useState({ email: null })
    useEffect(() => {
        (async () => {
            const res = await simpleFetch('users/me');
            const user = res?.data;
            setUser(user);
            console.log(user)
        })();
    }, []);


    return (
        <h1> {user.email || ''}</h1>
    );
}