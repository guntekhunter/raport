import HomeAdmin from "./component/home/HomeAdmin";
import { getUsers } from "./fetch/getUsers";

export default function Home() {
  const users = getUsers();
  console.log(users);
  return (
    <div>
      <HomeAdmin users={users} />
    </div>
  );
}
