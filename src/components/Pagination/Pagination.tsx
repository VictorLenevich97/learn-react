interface IPagination {
  pagesCount: number;
  onNext(): void;
  onPage(value: number): void;
  onPrev(): void;
  currentPage: number;
}

export const Pagination = ({
  pagesCount = 5,
  onNext,
  onPrev,
  onPage,
  currentPage,
}: IPagination) => {
  const buttonStyle =
    "p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-500 disabled:text-black disabled:cursor-not-allowed";

  return (
    <div className="flex items-center">
      <button
        disabled={currentPage === 1}
        onClick={onPrev}
        className={buttonStyle}
      >
        Prev
      </button>
      <div className="flex item-center w-[20rem] overflow-x-auto">
        {[...new Array(pagesCount)].map((_, index) => (
          <div
            key={index}
            onClick={() => onPage(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-30 text-gray-500"
            } p-4 px-6 m-1 rounded-xl pointer`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button
        disabled={currentPage === pagesCount}
        onClick={onNext}
        className={buttonStyle}
      >
        Next
      </button>
    </div>
  );
};
