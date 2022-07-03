function Users({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <b>{user.name}</b>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}
