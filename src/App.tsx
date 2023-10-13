import { useState } from "react";
import "./App.css";
import "atropos/css";
import Atropos from "atropos/react";
import SelectorType from "./components/selectorType.tsx";
import FileSaver from "file-saver";
import Button from "./components/button.tsx";
type Data = {
  preview_url: string;
  extension: string;
  url: string;
  width: number;
};
function App() {
  const [dataApi, setData] = useState<Data | null>(null);
  const [option, setOption] = useState<string>("random");
  function getWaifu() {
    setData(null);
    fetch(
      option !== "random"
        ? `https://api.waifu.im/search?included_tags=${option}`
        : "https://api.waifu.im/search"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { preview_url, extension, url, width } = data.images[0];
        setData({ preview_url, extension, url, width });
        console.log({ extension, url, width });
      });
  }
  function download() {
    if (dataApi?.url) {
      FileSaver.saveAs(dataApi?.url, `image${dataApi.extension}`);
    }
  }
  return (
    <>
      <header className="min-h-screen gap-5 flex flex-col items-center justify-start">
        <div className="flex flex-col my-10">
          <h1 className="text-6xl text-center font-extrabold text-orange-800">
            Waifu Random
          </h1>
          <h3 className="text-2xl text-center font-bold text-orange-800">
            Get your waifu in one click!
          </h3>
        </div>

        <div className="grid grid-cols-2 items-start min-w-[900px] w-[900px] max-w-[900px] gap-5">
          <div className=" flex gap-5 justify-center">
            <SelectorType setOption={setOption} />
            <div className="translate-y-1 flex flex-col gap-5">
              <Button onClick={getWaifu}>Get some {option}</Button>
              <Button
                onClick={() => {
                  download();
                }}
                disabled={!dataApi ? true : false}
              >
                Download
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {dataApi && (
              <Atropos rotateXMax={5} rotateYMax={5} shadowScale={0.9}>
                <img
                  className="w-full object-cover rounded-2xl mb-10"
                  src={dataApi.url}
                />
              </Atropos>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
