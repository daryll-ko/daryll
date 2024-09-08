import JP from "@/components/JP";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <p className="text-xl">
        Hello! I&apos;m <span className="text-yellow-200">Daryll</span>.
      </p>
      <JP className="flex flex-col items-center md:block text-xl">
        <span>
          こんにちは！<span className="text-yellow-200">ゆい</span>
          と言います。
        </span>
        <span>このサイトへようこそ！</span>
      </JP>
    </main>
  );
}
