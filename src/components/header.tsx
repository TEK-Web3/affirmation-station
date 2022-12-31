export default function Header() {
  return (
    <div className="flex flex-row w-full justify-center items-center text-xs gap-3 p-2 opacity-30 mb-5">
      Powered by:
      <img
        src="/open-ai-logo.png"
        width="80px"
        className="m-0"
        alt="Powered By Open AI"
      />
    </div>
  );
}
