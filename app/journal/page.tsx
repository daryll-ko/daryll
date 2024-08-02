import JP from "@/components/JP";

export default function Journal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <h1 className="text-xl">Journal</h1>
      <JP className="text-xl">
        こんにちは！<span className="text-yellow-200">ゆい</span>
        と言います。このサイトへようこそ！
      </JP>
    </main>
  );
}
