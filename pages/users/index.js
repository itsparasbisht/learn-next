import Link from "next/link";

function UsersList({ users }) {
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`} passHref>
            <div>
              <b>{user.id}</b>
              <span>{user.name}</span>
              <hr />
            </div>
          </Link>
        </div>
      ))}
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
