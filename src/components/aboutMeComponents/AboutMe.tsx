export default function AboutMe() {
  return (
    <div
      className="bg-golden flex flex-col justify-center gap-25 px-3 py-15 text-center text-white lg:px-[20%]"
      id="co_delam"
    >
      <h1 className="text-[2rem] md:text-[3rem]">Co dělám</h1>
      <article className="text-[1.5rem] md:text-[1.8rem]">
        <p>
          Při svých masážích používám <b>techniky</b> těchto masáží:{" "}
          <b>aromaterapeutická</b>, <b>klasická</b>, <b>relaxační</b>,{" "}
          <b>sportovní</b>, <b>měkké techniky..</b>
        </p>
      </article>
      <article className="text-[1.5rem] md:text-[1.8rem]">
        <p>
          k masážím používám bio panenské oleje lisované za studena a
          bioesenciální oleje
        </p>
      </article>
    </div>
  );
}
