export const Calendar = () => {
  const days = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="py-12 px-12 text-center">
      <h1 className="text-4xl mb-6 text-yellow-800 font-bold">10</h1>
      <div className="grid grid-cols-7 gap-2 mb-6 text-yellow-800">
        {weekdays.map((weekday, i) => (
          <p key={i + 1}>{weekday}</p>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4">
        <p className="text-stone-300">25</p>
        <p className="text-stone-300">26</p>
        <p className="text-stone-300">27</p>
        <p className="text-stone-300">28</p>
        <p className="text-stone-300">29</p>
        <p className="text-stone-300">30</p>
        <p className="bg-yellow-400/50 rounded-full">1</p>
        {days.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </div>
    </div>
  );
};
