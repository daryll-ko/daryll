export default function TopBar() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-white bg-yellow-500/80 rounded-full px-3 py-1 flex flex-row gap-10 shadow-md">
        <p>daryll.ko</p>
        <p>07/09/24</p>
        <button>open (icon)</button>
      </div>
      <div className="bg-yellow-500/60 rounded-md p-3 grid grid-cols-3 grid-rows-2">
        <div>About</div>
        <div>Anime</div>
        <div>Chat</div>
        <div>Code</div>
        <div>Journal</div>
        <div>Settings</div>
      </div>
    </div>
  );
}
