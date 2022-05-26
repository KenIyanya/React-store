
import React, { useEffect, useState } from 'react'

const Teammembers = () => {
    const [teammembers, setTeammembers] = useState([])

    const url = 'https://fakerapi.it/api/v1/persons?_quantity=5';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTeammembers(data.data))
   
    }, [])
    
    console.log(teammembers)


  return (
    <div className="settings_members">
            <div className="settings_members-table">

             <div  className="settings_members-table-main">

                 <table>
                     <thead>
                         <tr>
                             <th> FULL NAME</th>
                             <th> EMAIL</th>
                             <th> PHONE NO</th>
                             <th> GENDER</th>
                             <th> IMAGE</th>
                         </tr>
                     </thead>

                     <tbody>

                         {
                             teammembers ? teammembers?.map((teammember, idx) => (
                            <tr key={idx}>
                             <td> 
                                 <p>
                                     <span> {teammember.firstname}</span>
                                     <span> {teammember.lastname}</span>
                                 </p>
                                 
                                </td>
                             <td> {teammember.email}</td>
                             <td> {teammember.phone}</td>
                             <td> {teammember.gender}</td>
                             <td><img src = {teammember.image} width={60}/></td>
                         </tr>
                             ) ) : null
                         }
                         
                     </tbody>
                 </table>
                        
             </div>
            </div>
    </div>
  )
}

export default Teammembers