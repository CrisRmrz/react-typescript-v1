import { useState } from 'react';

interface User {
    uid: String,
    name: String
}

const tempUser: User = {
    uid: "porDefecto",
    name: "porDefecto"
}

export const Usuario = () => {

    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Cris',
        })
    }

    return (
        <div className='mt-5' >
            <h3>Usuario: useState</h3>

            <button className='btn btn-outline-primary' onClick={login} >
                Login
            </button>

            <pre> {JSON.stringify(user)} </pre>
        </div>
    )
}
