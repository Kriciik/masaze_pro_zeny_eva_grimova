import { PhotoView } from "react-photo-view";
interface DescriptionSectionI {
  text: string;
  img: string;
  index: number;
}

export default function DescriptionSection({
  text,
  img,
  index,
}: DescriptionSectionI) {
  return (
    <div className="flex flex-col gap-10 text-center text-[1.4rem] md:text-[1.6rem]">
      <span>{text}</span>
      <div className="flex w-full justify-center px-4">
        <PhotoView src={img}>
          <img
            className="w-full max-w-150 rounded-md"
            src={img}
            alt={`foto studia č. ${index}`}
          />
        </PhotoView>
      </div>
    </div>
  );
}
