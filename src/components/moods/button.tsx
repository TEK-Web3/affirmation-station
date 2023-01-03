export default function MoodButton({
  color,
  isActive,
  emoji,
}: {
  color: string;
  isActive: boolean;
  emoji: string;
}) {
  return (
    <div
      className={`${color} focus:${color} rounded-lg w-full h-full p-0 active:scale-95 transition ease-in-out duration-75 cursor-pointer relative`}
    >
      <div
        className="absolute top-1/2 left-1/2 -mt-3"
        style={{ marginLeft: -10 }}
      >
        {emoji}
      </div>
      <div
        className={`w-full h-full rounded-lg ${
          isActive ? "bg-black/10" : "bg-white/5"
        } p-3 md:p-4`}
      >
        <div
          className={`w-full h-full rounded-lg ${
            isActive ? "bg-black/20" : "bg-white/30"
          } p-3 md:p-4`}
        >
          <div
            className={`w-full h-full rounded-lg ${
              isActive ? "bg-black/20" : "bg-white/50"
            } p-2.5 sm:p-3 md:p-4`}
          >
            <div
              className={`w-full h-full rounded-lg ${
                isActive ? "bg-black/10" : "bg-white/50"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
