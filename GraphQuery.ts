import CypherQuery from "./CypherQuery";
import GremlinQuery from "./GremlinQuery";

export default class GraphQueryFactory{
    instantiateQuery(lang:string){
        if(lang === "gremlin"){
            return new GremlinQuery();
        }
        else if(lang === "cypher"){
            return new CypherQuery();
        }
    }
}