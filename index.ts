import GraphQuery from "./GraphQuery"

(function main(){

    const queryClient = new GraphQuery()
    const g = queryClient.instantiateQuery("cypher");
    console.log(g.getAllPersons())
})()