import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "../../components/RenderModel";
import AboutDetails from '../../../app/components/about/index.jsx'
import dynamic from 'next/dynamic'

const Hatt = dynamic(()=>import("../../components/models/Hatt"),{
  ssr:false,
})
export default function About() {
  return (
    <>
      <Image
      priority sizes='100vw'
        src={bg}
        alt="background-image"
        className="-z-50 h-full w-full fixed top-0 left-0 object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hatt />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <div className="absolute  flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold  text-3xl text-accent xs:text-4xl sm:text-5xl lg:text-6xl">Priyanka Kumari</h1>
          <p className="font-light  text-foreground text-ls">FullStack Developer</p>
        </div>
      </div>

<AboutDetails/>

    </>
  );
}
