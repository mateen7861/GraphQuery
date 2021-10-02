import IGraphQuery from "./IGraphQuery";

export default class GremlinQuery implements IGraphQuery {
  getPerson(id) {
    return {
        lang:"gremlin",
      id: "123",
      name: "Mateen Mustafa",
      age: 18,
      city: "Sialkot",
    };
  }

  getAllPersons() {
    return [
      {
        lang:"gremlin",
        id: "123",
        name: "Mateen Mustafa",
        age: 18,
        city: "Sialkot",
      },
      {        lang:"gremlin",

        id: "123",
        name: "Mateen Mustafa",
        age: 18,
        city: "Sialkot",
      },
      {
        lang:"gremlin",
        id: "123",
        name: "Mateen Mustafa",
        age: 18,
        city: "Sialkot",
      },
    ];
  }
}
