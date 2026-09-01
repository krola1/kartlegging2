export default function Card({ name, age, email, city }) {
  return (
    <div className="wrapper">
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}
