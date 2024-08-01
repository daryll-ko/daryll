import JP from "@/components/JP";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <p className="text-xl">
        Hello! I&apos;m <span className="font-bold">Daryll</span>.
      </p>
      <JP className="text-xl">
        こんにちは！<span className="font-bold">ゆい</span>
        と言います。このサイトへようこそ！
      </JP>
    </main>
  );
}
