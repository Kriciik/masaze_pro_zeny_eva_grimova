import { useState } from "react";

const types_of_massages = [
  {
    name: "Klasická",
    text: "Klasická masáž je jedna z nejrozšířenějších forem masáží, která kombinuje různé techniky, jako jsou hnětení, tření, tepání a vibrace. Zaměřuje se na uvolnění svalového napětí, zlepšení krevního oběhu a celkové regenerace těla.",
  },
  {
    name: "Relaxační",
    text: "Relaxační masáž je jemná a plynulá masáž, která pomáhá tělu i mysli dosáhnout hlubokého uvolnění. Je zaměřená na odstranění stresu, napětí a únavy. Provádí se pomalými a hladkými tahy, které navozují pocit pohody a harmonie. ",
  },
  {
    name: "Sportovní",
    text: "Sportovní masáž je dynamická a intenzivnější forma masáže, která je zaměřena na regeneraci svalů, zvýšení výkonu a prevenci zranění. Je vhodná nejen pro aktivní sportovce, ale i pro lidi s fyzicky náročnou prací nebo jednostrannou svalovou zátěží.",
  },
  {
    name: "Aroma terapeutická",
    text: "Aromaterapeutická masáž spojuje blahodárné účinky klasické masáže s terapeutickými vlastnostmi esenciálních olejů. Pomocí jemných, plynulých pohybů dochází k uvolnění svalů i mysli, zatímco vonné oleje podporují relaxaci a harmonizaci organismu.  ",
  },
];

export default function TypesOfMassages() {
  const [selectedMassage, setSelectedMassage] = useState<number>(0);

  return (
    <div className="flex flex-col gap-5 pb-10 md:pb-30" id="masaze">
      <h2 className="pt-12 pb-10 text-center text-[2rem] md:text-[3rem]">
        Typy masáží
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 border-b shadow-xl md:grid-cols-4 md:grid-rows-1 md:gap-0">
        {types_of_massages.map((massage, index) => {
          return (
            <button
              key={index}
              className={`flex flex-col items-center transition-all duration-100 ${selectedMassage === index ? "bg-golden text-white" : ""} justify-center gap-2 p-4 text-center`}
              onClick={() => setSelectedMassage(index)}
            >
              <h3 className="text-[1.4rem]">{massage.name}</h3>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-15 lg:px-[20%]">
        <article className="flex flex-col gap-4 px-3 py-10">
          <p className="text-center text-[1.3rem] md:text-[1.7rem]">
            {types_of_massages[selectedMassage].text}
          </p>
        </article>
        <article className="h-full w-full px-2 text-center text-[1.4rem]">
          <p>
            Na všechny typy masáží jsou využívány <b>panenské bio oleje</b>{" "}
            lisované za studena a <b>bioesenciální oleje</b>.
          </p>
        </article>
      </div>
    </div>
  );
}
