import JP from "@/components/JP";

export default function Home() {
  return (
    <div className="flex h-80 flex-col items-center justify-center text-2xl gap-5">
      <p>
        Hello! I&apos;m <span className="text-yellow-200">Daryll</span>.
      </p>
      <JP className="flex flex-col items-center md:block">
        <span>
          こんにちは！<span className="text-yellow-200">ゆい</span>
          と言います。
        </span>
        <span>このサイトへようこそ！</span>
      </JP>
    </div>
  );
}
