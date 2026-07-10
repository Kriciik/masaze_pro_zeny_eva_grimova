import "./App.css";
import NavigationBar from "./components/navigationComponents/NavigationBar";
import ParallexBackground from "./components/ParallexBackground";
import AboutMe from "./components/aboutMeComponents/AboutMe";
import TypesOfMassages from "./components/massagesComponents/TypesOfMassages";
import Pricing from "./components/pricingComponents/Pricing";
import ContactInfo from "./components/contactInfoComponents/ContactInfo";
import MyStudio from "./components/myStudioComponents/MyStudio";

export default function App() {
  return (
    <div className="font-family-primary w-full">
      <NavigationBar />
      <main className="h-fit w-full">
        <ParallexBackground />
        <div className="relative z-20 h-fit w-full bg-white">
          <h2 className="px-7 py-20 text-center text-[2rem] text-black md:py-10">
            Masáže pro spojení těla i duše.
          </h2>
          <AboutMe />
          <TypesOfMassages />
          <Pricing />
          <MyStudio />
          <ContactInfo />
        </div>
      </main>
    </div>
  );
}
