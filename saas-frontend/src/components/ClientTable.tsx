import ClientRow from "./ClientRow"
import type { Client } from "../types/client";

function ClientTable({clients}:{clients:Client[]}){
  return (
    <div>
        <div className="clientheader">
        <h4>Name</h4>
        <h4>Email</h4>  
        <h4>Country</h4>
        </div>
        <div>{
            clients.map((client)=>(
                <ClientRow 
                    key={client.id}
                    client={client} 
                />
        ))}
        </div>
    </div>

  )
}

export default ClientTable;