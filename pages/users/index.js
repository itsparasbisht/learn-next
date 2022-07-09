function UsersList({ users }) {
  console.log(users);
  return (
    <div>
      <h1>jiji</h1>
      {users.map((user) => {
        <div key={user.id}>
          <b>{user.id}</b>
          <span>{user.name}</span>
          <hr />
        </div>;
      })}
    </div>
  );
}

export default UsersList;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}