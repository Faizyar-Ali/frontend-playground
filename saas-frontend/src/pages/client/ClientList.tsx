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
    {loading?(
      <p>Loading...</p>
    ):(
    <div>
        <ClientTable clients={clients} />
    </div>
      )}
    </div>
    );
  }
export default ClientList;
