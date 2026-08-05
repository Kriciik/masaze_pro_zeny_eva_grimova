export default function ContactInfo() {
  return (
    <div
      className="bg-golden flex w-full flex-col gap-15 px-5 pb-10 text-black lg:px-[20%]"
      id="kontakt"
    >
      <h2 className="pt-12 text-center text-[2rem] md:text-[3rem]">Kontakt</h2>
      <div className="flex flex-col gap-10 text-center text-[1.5rem] md:flex-row md:text-[1.7rem]">
        <div className="flex flex-col justify-center gap-10 md:gap-5">
          <span>
            Telefon:{" "}
            <a href="tel:+420775913087" className="underline">
              775 913 087
            </a>
          </span>
          <span>
            Email:{" "}
            <a href="mailto:e.grimova@gmail.com" className="underline">
              e.grimova@gmail.com
            </a>
          </span>
          <span>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61557696132211"
              className="underline"
            >
              Masáže pro ženy Eva Grimová{" "}
            </a>
          </span>
          <span>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/masaze_evagrimova/"
              className="underline"
            >
              @Masazeevagrimova
            </a>
          </span>
        </div>
        <div className="flex w-full justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.6165682503928!2d17.047635356649064!3d49.47349030692997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471259dad0a0dc8b%3A0x1be2fcaf85485a28!2zTWFzw6HFvmUgcHJvIMW-ZW55IEV2YSBHcmltb3bDoQ!5e0!3m2!1scs!2scz!4v1782459212779!5m2!1scs!2scz"
            className="h-100 w-full md:w-100"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="flex w-full flex-col gap-7 text-center text-[1.4rem] md:text-[1.7rem]">
        <span>
          Pokud nezvedám telefon - <b>Masíruji</b>. Napište mi prosím <b>SMS</b>{" "}
          nebo vám zpětně <b>Zavolám</b>.
        </span>
      </div>
    </div>
  );
}
