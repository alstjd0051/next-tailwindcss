import Head from "next/head";
import Link from "next/link";

function Plans() {
  return (
    <div>
      <Head>
        <title>영화광의 재밌는 세상</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414] ">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button className="text-lg font-medium hover:underline">
          Sign Out
        </button>
      </header>
    </div>
  );
}

export default Plans;
