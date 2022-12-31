export default function Modal({
  children,
  id,
  isLoading,
  closeHandler,
}: {
  children: React.ReactNode;
  id: string;
  closeHandler?: () => void;
  isLoading: boolean;
}) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-8">
          {children}
          {!isLoading && (
            <label
              onClick={closeHandler}
              id={id}
              htmlFor={id}
              className="absolute top-2 right-2 cursor-pointer  flex rounded-full p-2 px-3 btn btn-ghost bg-base-200 border-none normal-case text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          )}
        </div>
      </div>
    </>
  );
}
