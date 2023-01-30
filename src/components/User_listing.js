import React, { useEffect, useState } from 'react'

export default function User_listing() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(response=>response.json())
        .then(res=>{
            // console.table(res.data)
            var records = res.data;
            var rows = [];
            for(let i = 0;i<records.length;i++){
                rows.push(records[i]);
            }
            setUsers(rows);
        })
    })
  return (
    <div>
        <table class="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Avatar</th>
            </tr>
            {
                users.map((val)=>{
                    return(
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.email}</td>
                            <td>{val.first_name} {val.last_name}</td>
                            <td><img src={val.avatar} /></td>
                        </tr>
                    )

                    
                })
            }
        </table>
    </div>
  )
}
