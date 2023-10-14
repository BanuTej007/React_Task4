import Axios from "axios";
import { useEffect, useState } from "react";
import './style.css'

function Records()
{
    const [data,setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            setData(res.data.users);
        })
        .catch((err)=>alert(err));
    },[]);

    const Info = () => {
        return data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td><img class="img" src={val.image} alt="Profile" /></td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.username}</td>
              <td>{val.domain}</td>
              <td>{val.ip}</td>
              <td>{val.university}</td>
            </tr>
          ));
    }
    return(
        <div>
            <h1>Dummy data</h1>
            <table>
                <tr id='r1'>
                    <th id='r1'>Sno</th>
                    <th id='r1'>Profile Pic</th>
                    <th id='r1'>First Name</th>
                    <th id='r1'>Last Name</th>
                    <th id='r1'>Gender</th>
                    <th id='r1'>E-mail</th>
                    <th id='r1'>Username</th>
                    <th id='r1'>Domain</th>
                    <th id='r1'>IP</th>
                    <th id='r1'>University</th>
                </tr>
                {Info()}
            </table>
        </div>
    )
}
export default Records;
