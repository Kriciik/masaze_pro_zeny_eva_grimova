interface PricesI {
  text: string;
  price: string;
}
export default function Prices({ text, price }: PricesI) {
  return (
    <div className="flex flex-row justify-between text-[1.5rem] md:text-[1.7rem]">
      <span>{text}</span>
      <span>{price}</span>
    </div>
  );
}
