import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

function MainHeader() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // console.log(user);
  return (
    <div>
      MainHeader
      <Link href='/api/auth/login'>Login</Link>
      <Link href='/api/auth/logout'>Logout</Link>
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default MainHeader;
