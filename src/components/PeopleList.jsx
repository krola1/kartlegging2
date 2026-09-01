import Card from "./Card";
import { people } from "../data/people";
export default function PeopleList() {
  return (
    <>
      {people.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </>
  );
}
