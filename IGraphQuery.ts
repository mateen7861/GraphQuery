type Person={
    lang:string,
    id:string,
    name :string,
    age:number,
    city:string,
}
export default interface IGraphQuery{
    getPerson(id:string):Person; 
    getAllPersons():Person[];
}
