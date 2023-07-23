import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Logn</h1>
      <form action="">
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
