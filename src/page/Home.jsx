import { useState, useEffect } from "react";
import Orang from "../asset/images/illustration-working.svg";
import BgMobile from "../asset/images/bg-shorten-mobile.svg";
import BgDesktop from "../asset/images/bg-shorten-desktop.svg";

export default function Home() {
  const [user, setUser] = useState(false);
  const [dataInput, setDataInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const short = async (shortly) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer 1c1d7d2d9b8445ca14c823503b7f814b3771fe3f`
    );
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      long_url: `${shortly}`,
      domain: "bit.ly",
      group_guide: "Ba1bc23dE4F",
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setLoading(true);
    const api = await fetch(
      "https://api-ssl.bitly.com/v4/shorten",
      requestOptions
    );
    if (!api) {
      return;
    }
    const resp = await api.json();
    setResult(resp.link);
    setLoading(false);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (dataInput.length == 0) {
      setUser(!user);
    }
    if (dataInput.length != 0) {
      setUser(false);
    }
    return short(dataInput);
  };

  return (
    <section className={head}>
      <div className={divImg}>
        <img src={Orang} alt="illustration-working" />
      </div>

      <div className={divTextHead}>
        <h1 className={h1}>More than just shorter links</h1>
        <p className={p}>
          Build your brand's recognition and get detaild insights on how your
          links are performing
        </p>
        <button className={btn}>Get Started</button>
      </div>

      <form className={form} onSubmit={handleForm}>
        <div className='grid gap-2 w-full'>
          <span className="text-xs px-1">ex: https://google.com</span>
          <input
            className={!user ? `${input}` : `${inputErr}`}
            onChange={(e) => setDataInput(e.target.value)}
            name="input"
            type="text"
            placeholder="Shorten a link here..."
          />
          <label
            className={!user ? `hidden` : `inline text-red text-xs`}
            htmlFor="input"
          >
            please input a valid url!
          </label>
        </div>
        <button className={btnInput} type="submit">
          Shorten It!
        </button>
      </form>

      {loading && (
        <p className="w-full text-white p-5 bg-darkViolet rounded-md mt-5 font-bold text-center animate-pulse">
          loading...
        </p>
      )}
      {!loading && !!result && (
        <p className="w-full text-white p-5 bg-darkViolet rounded-md mt-5 font-bold text-center">
          {result}
        </p>
      )}
    </section>
  );
}

const head = "mt-20 z-10";
const divImg = "w-80 mx-auto";

const divTextHead = "mt-5 text-center flex flex-col gap-5";
const h1 = "text-3xl text-veryDarkViolet font-pop";
const p = "text-sm font-normal text-gray sm:px-12";
const btn = "bg-cyan w-[170px] mx-auto py-4 font-pop rounded-full text-[#fff]";

const form =
  "mt-20 bg-darkViolet flex flex-col gap-3 p-5 rounded-lg md:flex-row items-center";
const input = "p-3 bg-[#fff] text-gray rounded-lg outline-none md:w-full";
const inputErr =
  "p-3 bg-[#fff] text-red border-2 border-red rounded-lg outline-none md:w-full";
const btnInput =
  "bg-cyan text-[#fff] rounded-lg py-3 outline-none font-pop w-full md:w-60 md:h-14";

const hidden = "hidden";
