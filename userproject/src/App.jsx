import { useEffect, useState } from 'react';
import './App.css';
import { UserList } from './components/UserList';

function App() {

    return (
        <>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <div style={{ display: 'flex', alignItems: 'start', width: '100%' }}>
                    <div style={{ width: '20%', textAlign: 'left' }}>Name</div>
                    <div style={{ width: '80%', textAlign: 'left', flex: 1 }}>
                        <input type='text' name="name" />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', width: '100%' }}>
                    <div style={{ width: '20%', textAlign: 'left' }}>Email Address</div>
                    <div style={{ width: '80%', textAlign: 'left', flex: 1 }}>
                        <input type='text' name="emailAdress" />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', width: '100%' }} >
                    <div style={{ width: '20%', textAlign: 'left' }}>Gender</div>
                    <div style={{ width: '80%', textAlign: 'left', flex: 1, display: 'flex' }}>
                        <input type="radio" id="html" name="gender" value="0" />
                        <label>Male</label>
                        <input type="radio" id="css" name="gender" value="1" />
                        <label>Female</label>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', width: '100%' }}>
                    <div style={{ width: '20%', textAlign: 'left' }}>Birthdate</div>
                    <div style={{ width: '80%', textAlign: 'left', flex: 1 }}>
                        <input type="date" id="birthdate" name="birthdate" />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', width: '100%' }}>
                    <button>Submit</button>
                    <button>Reset</button>
                </div>

            </form>
            <UserList />
        </>
    );

    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    if (response.ok) {
    //        const data = await response.json();
    //        setForecasts(data);
    //    }
    //}
}

export default App;