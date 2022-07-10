function User({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>{user.email}</h5>
      <p>{user.phone}</p>
      <span>{user.website}</span>
    </div>
  );
}

export default User;

export async function getServerSideProps(context) {
  const { params } = context;
  const { userId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}
