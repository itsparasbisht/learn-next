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
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Harry"]);
  const { userId } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
}
