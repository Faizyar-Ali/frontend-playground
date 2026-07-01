import { useState,useEffect } from "react";
import type { Client } from "../../types/client"
import ClientTable from "../../components/ClientTable";

function ClientList(){
const [clients, setClients] = useState<Client[]>([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{
    async function fetchClient(){
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/clients?user_id=2&limit=20&offset=0" 
        );
        const data = await res.json();
        setClients(data);
      }catch (err){
        console.log("Error fetching clients: ",err);
      }finally{
        setLoading(false);
      }
    }
    fetchClient();
  },[])
  return(
    <div>
      <h1>Clients</h1>
            <div className="clientheader">
              <h4>Name</h4>
              <h4>Email</h4>  
              <h4>Country</h4>
        </div>
    {loading?(
      <p>Loading...</p>
    ):(
        clients.map((client)=>(
        <ClientTable key={client.id} client={client} />
        ))
      )}
    </div>
    );
  }
export default ClientList;
