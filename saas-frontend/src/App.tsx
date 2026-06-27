import {useState,useEffect} from 'react'

type Client = {
  id: number,
  email: string,
  name: string,
  country: string,
};


function App(){
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function fetchClient(){
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/clients?user_id=1&limit=20&offset=0" 
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
  },[]);
  return (
    <div>
      <h1>Clients</h1>
    {loading ? (
      <p>Loading...</p>
    ):(
      clients.map((client) => (
        <div key={client.id} style={{ marginBottom: "10px" }}>
          <h3>{client.name}</h3>
          <p>{client.email}</p>
          <p>{client.country}</p>
        </div>
      ))
    )}
  </div>
  )
}
export default App