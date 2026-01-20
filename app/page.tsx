"use client";
import { useState, useEffect, useMemo } from "react";

export default function PhoneStepper() {
  // --- Data ---
  const day1: string[] =
  [
    "9617909033",
"9615315936",
"9612507853",
"9612507860",
"9612410129",
"9612240180",
"9612832563",
"9612832504",
"9612203810",
"9612599495",
"9610591590",
"9612492451",
"9685721263",
"9682689055",
"9686128009",
"9614554868",
"9610724745",
"9610550373",
"9616633749",
"9610949183",
"9623551859",
"9610269771",
"9610486248",
"9685866357",
"9623551856",
"9610490581",
"9623639964",
"9622819401",
"09464450662",
"09639213645",
"09306227213",
"09817499095",
"09639771979",
"09464167105",
"09303565622",
"09634882395",
"09811727139",
"09639766085",
"09637391606",
"09639213641",
"09630314198",
"09639329571",
"09464124082",
"09104826284",
"09519716255",
"09639426514",
"09104839041",
"09634882391",
"09104826290",
"09510993918",
"09812027932",
"09630128229",
"09639771972",
"09636291249",
"09106586209",
"09104839624",
"09639433836",
"09106586220",
"09614775266",
"9931328413",
"9931328409",
"9931328405",
"9931328420",
"9931328414",
"9931328418",
"9931328410",
"9931328406",
"9931328412",
"9931328408",
"9931328416",
"9931328421",
"9931328407",
"9931328419",
"9931328417",
"9930212319",
"9930212269",
"9930212268",
"9930212264",
"9930212259",
"9930212267",
"9930212273",
"9930212261",
"9940620952",
"9930212262",
"9930212263",
"9930212258",
"9930212272",
"9930212320",
"9930212270",
"9930212260",
"9930212271",
"9930954355",
"9930954356",
"9930954352",
"9930954351",
"9930954354",
"9930954348",
"9930954357",
"9930954359",
"9935645202",
"9935644978",
"9935644898",
"9935644938",
"9935644877",
"9935645108",
"9935645194",
"9935645092",
"9935645146",
"9935644996",
"9935644903",
"9935645094",
"9935644922",
"9935644916",
"9935645142",
"9935645098",
"9935644962",
"9935645076",
"9935645079",
"9935644900",
"9935645101",
"9935645186",
"9935644930",
"9935644918",
"9935645143",
"9935644906",
"9935644882",
"9935645058",
"9935645010",
"9935645127",
"9935644886",
"9935645181",
"9935645175",
  ];
  const day2: string[] = 
  [
    "9930954349",
"9930954358",
"9930954361",
"9930954347",
"9930954350",
"9930954353",
"9930954360",
"9930954346",
"9940459386",
"9940459388",
"9940459387",
"9940459396",
"9940459390",
"9940459385",
"9940459460",
"9940459398",
"9940459383",
"9940459392",
"9940459384",
"9940459391",
"9940459466",
"9940459389",
"9930208563",
"9930208567",
"9930208562",
"9930208547",
"9930208571",
"9930208566",
"9930208570",
"9930208561",
"9930208463",
"9930208564",
"9930208556",
"9930208554",
"9930208551",
"9930208569",
"9930208552",
"9930208553",
"9930208568",
"9940459397",
"9940783806",
"9940783814",
"9940783811",
"9940783807",
"9940783812",
"9940783805",
"9940783818",
"9940783795",
"9940783810",
"9940783815",
"9940783816",
"9940783808",
"9940783794",
"9940459232",
"9940459233",
"9940459221",
"9940459254",
"9940459253",
"9940459237",
"9940459223",
"9940459255",
"9940459256",
"9940459263",
"9940459234",
"9940459064",
"9940459252",
"9940459065",
"9940459262",
"9940459242",
"9940459235",
"9940459463",
"9940616312",
"9940616318",
"9940616307",
"9940616314",
"9940616315",
"9940616319",
"9940616306",
"9940616309",
"9940616311",
"9940616317",
"9940616310",
"9940616320",
"9940620966",
"9940620967",
"9940620968",
"9940620964",
"9940620950",
"9940620941",
"9940620944",
"9940620945",
"9940620965",
"9940620949",
"9940620958",
"9940620942",
"9940620943",
"9940620955",
"9940620957",
"9940621109",
"9940620951",
"9935644902",
"9935645095",
"9935645124",
"9935645156",
"9935645082",
"9935645149",
"9935645044",
"9938408410",
"9938408257",
"9938408394",
"9938408443",
"9938408272",
"9938408428",
"9938408393",
"9938408432",
"9938408379",
"9938408346",
"9938408396",
"9938408250",
"9938408411",
"9938408304",
"9938408412",
"9938408427",
"9938408259",
"9938408261",
"9938408433",
"9938408406",
"9938408436",
"9938408401",
"9938408300",
"9938408309",
"9938408387",
"9938408389"
  ];
  const day3: string[] = 
  [
    "9940620961",
"9940620940",
"9306165275",
"9603853376",
"9108594284",
"9487884993",
"9815179748",
"9488998235",
"9684648557",
"09487906091",
"9483181632",
"9104452448",
"9083160132",
"9858387189",
"09519259309",
"9296617089",
"9487912635",
"9083743610",
"9631160943",
"9083592966",
"9104402711",
"9083396545",
"9295631027",
"9692200383",
"9627478163",
"9128132029",
"9104596926",
"9649785314",
"9604359706",
"9086890330",
"9083433009",
"9081046302",
"09519531570",
"09487906857",
"9487876970",
"9282891286",
"9103811378",
"9858269897",
"9311397017",
"9283031412",
"9518159512",
"9087330855",
"9083531812",
"9487884704",
"9516021695",
"9082701721",
"9083902324",
"9487877360",
"9081537998",
"9488747712",
"9108495114",
"9858580665",
"9295471087",
"9083704827",
"9487071617",
"9109816186",
"9104615996",
"9488681152",
"9293431438",
"9311449248",
"9105529621",
"9083217673",
"9684065796",
"9486593196",
"9483163358",
"9480571726",
"9083074716",
"9603853389",
"9292451622",
"9104430258",
"9486892106",
"9104565481",
"9480593559",
"9503567188",
"9082876773",
"9306949396",
"9858580660",
"9193272255",
"9515780728",
"9075649428",
"9945507036",
"9083903762",
"9083597891",
"9083744152",
"9193272619",
"9687644264",
"9075048118",
"9109849428",
"9083368850",
"9631161656",
"9938408324",
"9938408323",
"9938408307",
"9938408438",
"9938408404",
"9938408448",
"9938408251",
"9938408305",
"9938408400",
"9938408395",
"9938408403",
"9938408252",
"9938408420",
"9938408442",
"9938408409",
"9938408345",
"9938408380",
"9938408441",
"9938408421",
"9938408273",
"9934686684",
"9938408385",
"9934686709",
"9934686648",
"9934686645",
"9934686732",
"9934686651",
"9934686764",
"9934686715",
"9934686923",
"09934686725",
"9934686712",
"9934686792",
"9081728118",
"9109813484",
"9649785315",
"9307034527",
"9641602286",
"9294014709",
"9071970321",
"9511880781",
"9083823403",
"9083903766"
  ];

  const groups: Record<number, string[]> = { 1: day1, 2: day2, 3: day3 };

  // --- State ---
  const [day, setDay] = useState<number>(1);
  const [index, setIndex] = useState<number>(0);
  const [toast, setToast] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const currentList = groups[day];

  // --- Theme Logic ---
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  // --- Helpers ---
  const totalNumbers = useMemo(() => day1.length + day2.length + day3.length, [day1, day2, day3]);

  const getGlobalNumber = () => {
    let offset = 0;
    if (day > 1) offset += day1.length;
    if (day > 2) offset += day2.length;
    return offset + index + 1;
  };

  const copyNumber = async () => {
    await navigator.clipboard.writeText(currentList[index]);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all active:scale-90"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Copy Toast */}
      <div className={`fixed top-8 transform transition-all duration-500 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white shadow-xl ${
        toast ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      }`}>
        <span className="text-sm font-bold tracking-wide">Copied!</span>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-slate-800 transition-all">
        
        <header className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
            Viewer
          </h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </header>

        <div className="space-y-8">
          
          {/* Day Dropdown */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">
              Batch Selection
            </label>
            <select
              onChange={(e) => { setDay(Number(e.target.value)); setIndex(0); }}
              value={day}
              className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border-none ring-1 ring-slate-200 dark:ring-slate-700 text-slate-700 dark:text-slate-200 font-semibold focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer appearance-none"
            >
              <option value={1}>DAY 1</option>
              <option value={2}>DAY 2</option>
              <option value={3}>DAY 3</option>
            </select>
          </div>

          {/* Phone Display */}
          <div className="relative pt-4">
             <div className="absolute -top-1 left-6 px-3 py-0.5 bg-blue-500 rounded-full text-[9px] font-black text-white uppercase tracking-tighter z-10 shadow-sm">
              Active Number
            </div>
            <div className="w-full py-8 px-4 text-3xl font-mono font-bold text-center rounded-3xl bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-blue-400 shadow-inner group transition-all">
              {currentList[index]}
            </div>
          </div>

          {/* Progress & Stats */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex justify-between w-full text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Progress</span>
              <span className="text-blue-500 dark:text-blue-400">{index + 1} / {currentList.length}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-500 h-full transition-all duration-500 ease-out" 
                style={{ width: `${((index + 1) / currentList.length) * 100}%` }}
              />
            </div>
            <div className="text-[10px] font-medium text-slate-400 mt-2">
              GLOBAL ENTRY: <span className="text-slate-900 dark:text-slate-100 font-bold">{getGlobalNumber()}</span> <span className="opacity-50">OF</span> {totalNumbers}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <button
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
              className="flex items-center justify-center h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-20 disabled:grayscale transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={copyNumber}
              className="flex items-center justify-center h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/40 transition-all active:scale-95 font-black text-sm uppercase tracking-widest"
            >
              Copy
            </button>

            <button
              onClick={() => setIndex(index + 1)}
              disabled={index === currentList.length - 1}
              className="flex items-center justify-center h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-20 disabled:grayscale transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}