// useUser .js
import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const MyUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return user;
};

export default MyUser;
