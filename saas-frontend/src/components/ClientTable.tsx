import type { Client } from "../types/client";


function ClientTable({client}:{client:Client}){
    return(
    <div>
        <div className="clientlist">
          <h4>{client.name}</h4>
          <h4>{client.email}</h4>
          <h4>{client.country}</h4>
        </div>
  </div>
    )
}

export default ClientTable;  