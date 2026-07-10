import { PhotoView, PhotoProvider } from "react-photo-view";
import voucher from "../../assets/poukaz.png";
import Prices from "./Prices";

const pricing_items = [
  {
    text: "45 minut",
    price: "550,-",
  },
  {
    text: "60 minut ",
    price: "650,-",
  },
  {
    text: "90 minut ",
    price: "900,-",
  },
];

export default function Pricing() {
  return (
    <div
      className="bg-golden flex w-full flex-col gap-20 px-6 pb-10 text-white md:gap-40 lg:px-[20%]"
      id="cenik"
    >
      <h2 className="pt-12 text-center text-[2rem] md:text-[3rem]">Ceník</h2>
      <div className="flex flex-col gap-6 text-[1.4rem] md:text-[1.6rem]">
        {pricing_items.map((item, index) => (
          <Prices key={index} price={item.price} text={item.text} />
        ))}
        <div className="pt-10 text-center">
          Platit lze pouze <b>hotovostí</b> a <b>QR kódem</b>.
        </div>
      </div>
      <div className="flex flex-col gap-8 text-[1.4rem] md:text-[1.6rem]">
        <div className="w-full text-center">
          Dárkové poukazy lze objednat v <b>libovolné hodnotě</b> na{" "}
          <b>libovolné masáže</b>.
        </div>
        <div className="flex w-full justify-center px-2">
          <PhotoProvider>
            <PhotoView src={voucher}>
              <img
                src={voucher}
                alt="voucher_masaze"
                className="max-h-100 rounded-md"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <span className="text-center">
          Možnost objednat <b>telefonicky</b> i na <b>místě</b>.
        </span>
      </div>
    </div>
  );
}
