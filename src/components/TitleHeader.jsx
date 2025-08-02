const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h1 className="font-semibold md:text-5xl text-3xl inline-block relative">
          {title}
          <span className="block h-[3px] w-full bg-indigo-500 mt-2 rounded-full shadow-[0_0_12px_3px_rgba(99,102,241,0.7)]" />
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
