import type { Client } from "../types/client";


function ClientTable({clients}:{clients:Client[]}){
    return(
    <div>
        <div className="clientheader">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Country</h4>
        </div>
    {
      clients.map((client)=>(
        <div key={client.id} className="clientlist">
          <h4>{client.name}</h4>
          <h4>{client.email}</h4>
          <h4>{client.country}</h4>
        </div>
      ))
    }
  </div>
    )
}

export default ClientTable;  