import IGraphQuery from "./IGraphQuery";

export default class CypherQuery implements IGraphQuery {
  getPerson(id) {
    return {
        lang:'cypher',
      id: "123",
      name: "Mateen Mustafa",
      age: 18,
      city: "Sialkot",
    };
  }

  getAllPersons() {
    return [
      {
        lang:'cypher',
        id: "123",
        name: "Mateen Mustafa",
        age: 18,
        city: "Sialkot",
      },
      {
        lang:'cypher',
        id: "123",
        name: "Mateen Mustafa",
        age: 18,
        city: "Sialkot",
      },
      {
        lang:'cypher',
        id: "123",
        name: "Mateen Mustafa",
        age: 18,
        city: "Sialkot",
      },
    ];
  }
}
