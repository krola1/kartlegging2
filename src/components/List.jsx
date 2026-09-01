export default function List({ array }) {
  return (
    <>
      {array.map((item) => (
        <h2>{item}</h2>
      ))}
    </>
  );
}
