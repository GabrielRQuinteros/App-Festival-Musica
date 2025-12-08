export const MiddleTimeLine = () => {
  return (
    <div className="absolute top-0 left-1/2 w-4 -ml-2 h-full rounded-full bg-linear-to-b from-pink-300 to-pink-300 via-pink-100">
        <div className="sticky top-1/2 ">
          <div className="relative size-4 ">
            <div className="absolute size-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
            <div className="relative size-4 bg-rose-500 rounded-full "></div>
          </div>
        </div>
      </div>
  )
}
