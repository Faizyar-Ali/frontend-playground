import type { Client } from "../types/client";


function ClientRow({client}:{client:Client}){
    return(
        <div className="clientlist">
          <h4>{client.name}</h4>
          <h4>{client.email}</h4>
          <h4>{client.country}</h4>
        </div>
    )
}

export default ClientRow;  