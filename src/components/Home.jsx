import React,{ useState, useEffect } from 'react';
import UserCard from './UserCard';
import Navbar from './Navbar';

const Home = () => {
    const [apiData, setApiData] = useState(null);

    const getUsers = async () =>{
        try{
            const url = `https://jsonplaceholder.typicode.com/users`;
            const response = await fetch(url);
            const data = await response.json();
            setApiData(data);
        }catch(error){
            console.log("Error While Fetching Data...");
        }
    }

    useEffect(()=>{
        getUsers();
    }, []);

    return(
        <>
            <Navbar/>
            <div className="cards">
            {   
                apiData?apiData.map((val) => {
                    return(
                        <UserCard key={val["id"]} user_data={val}/>
                    )
                }):null 
            }
            </div>
        </>
    )
};

export default Home;