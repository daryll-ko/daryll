import JP from "@/components/JP";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <JP className="text-4xl">
        <ruby>
          過去<rt>きのう</rt>
        </ruby>
        と
        <ruby>
          未来<rt>あした</rt>
        </ruby>
        、その境界線に立つ選択の数々。
      </JP>
    </main>
  );
}
