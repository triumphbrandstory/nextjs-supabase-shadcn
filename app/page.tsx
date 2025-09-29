import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Link href="/login">
        <button className="cursor-pointer text-white">Login</button>
      </Link>
    </div>
  );
}
