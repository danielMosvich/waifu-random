import { useState } from "react";
export default function SelectorType({
  setOption,
}: {
  setOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(92);
  const [optionPosition, setOptionPosition] = useState(0);

  type Data = Array<{ name: string; values: string[] }>;
  const data: Data = [
    {
      name: "versatil",
      values: [
        "random",
        "waifu",
        "maid",
        "marin-kitagawa",
        "mori-calliope",
        "raiden-shogun",
        "oppai",
        "selfies",
        "uniform",
      ],
    },
    {
      name: "NSFW",
      values: [
        "random",
        "ero",
        "ass",
        "hentai",
        "milf",
        "oral",
        "paizuri",
        "ecchi",
      ],
    },
  ];
  function handlePosition(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newPosition: number
  ) {
    setOptionPosition(0);
    setOption("random");
    const target = e.nativeEvent.target as HTMLDivElement;
    if (target.offsetWidth) {
      console.log(target.clientWidth);
      setWidth(target.clientWidth);
    }
    setPosition(newPosition);
  }
  function handleOptionPosition(newOptionPosition: number) {
    setOptionPosition(newOptionPosition);
    setOption(data[position].values[newOptionPosition]);
  }
  return (
    <div>
      <div className="bg-orange-800 flex p-2 rounded-xl relative items-center">
        <span
          style={{
            height: "calc(100% - 8px)",
            width: `${width}px`,
            transform: `translateX(${position > 0 ? width + 16 : 0}px)`,
            boxShadow: "inset 0px -1px 0px 2px rgb(255 237 213)",
          }}
          className={`bg-orange-300 absolute rounded-xl left-1 transition-all duration-300 flex justify-center items-center font-[600] text-orange-800 cursor-pointer`}
        >
          {data[position].name}
        </span>
        {data.map((val, index) => (
          <div
            className="py-2 px-5 flex items-center justify-center select-none cursor-pointer text-orange-300 font-[500]"
            key={val + String(index)}
            onClick={(e) => handlePosition(e, index)}
          >
            {val.name}
          </div>
        ))}
      </div>
      <div
        className="bg-orange-300 relative border-4 border-orange-800 font-[500] rounded-xl mt-3 overflow-hidden text-orange-800"
        style={{ boxShadow: "inset 0px 0px 0px 4px rgb(255 237 213)"}}
      >
        <span
          style={{ transform: `translateY(calc(40px * ${optionPosition}))`,width:"100%" }}
          className="bg-orange-800 text-orange-100 absolute left-0 top-0 p-3 flex items-center h-10 transition-all duration-200 ring-[3px] ring-orange-100"
        >
          {data[position].values[optionPosition]}
        </span>
        {data[position].values.map((val, index) => (
          <div
            className="h-10 p-3  flex items-center"
            key={val + String(index)}
            onClick={() => handleOptionPosition(index)}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}
