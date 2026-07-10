import img1 from "../../assets/relexacni_masaz.webp";
import img2 from "../../assets/arometerapeuticka_masaz.webp";
import img3 from "../../assets/židle_masaz.webp";
import img4 from "../../assets/arometerapeuticka_masaz.webp";

import DescriptionSection from "./DesriptionSection";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const section_items = [
  {
    text: "Studio se nachází v Mostkovicích v okrese Prostějov. Snoubí se zde harmonie, klid a péče o vaše tělo i mysl.",
    image: img1,
  },
  {
    text: "Studio je navrženo tak, aby vám poskytlo maximální pohodlí a relaxaci. Je zde útulná atmosféra a příjemné moderní prostředí.",
    image: img2,
  },
  {
    text: "Je vybaveno širokým výběrem relaxační hudby, krásným designem a příjemným tlumeným osvětlením. Součástí je také aroma difuzér se zásobou esenciálních olejů či opravdová tibetská zpívající miska. ",
    image: img3,
  },
  // TODO: možná 4 odstavec
];
export default function MyStudio() {
  return (
    <div id="studio" className="bg-white pb-20 text-black lg:px-[20%]">
      <h2 className="pt-12 pb-10 text-center text-[2rem] md:text-[3rem]">
        Mé studio
      </h2>
      <PhotoProvider>
        <div className="flex flex-col items-center gap-30 px-3">
          {section_items.map((item, index) => (
            <DescriptionSection
              text={item.text}
              img={item.image}
              index={index}
              key={index}
            />
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
