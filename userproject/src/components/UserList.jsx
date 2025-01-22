import { useEffect, useState } from 'react';


export const UserList = () => {

    const [users, setUsers] = useState([]);
    const populateUserList = async () => {
        const response = await fetch('weatherforecast');
        if (response.ok) {
            const data = await response.json();
            setUsers(data);
        }
    }
     
    useEffect(() => {
        populateUserList();
    }, [])

    useEffect(() => {
        console.log(users)
    }, [users])
    return (
        <div style={{ width: '100%' }} >
            <h1>Users</h1>
            <div style={{ height: '100vh', backgroundColor: '#3d3d3d' }} >
                {users.map(user => {
                    return (
                        <>Hello</>
                    )
                })}
            </div>
        </div>
    )

}