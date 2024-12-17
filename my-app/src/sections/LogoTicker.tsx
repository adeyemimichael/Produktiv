import acmeLogo from "@/assets/logo-acme.png"
import quatumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import Purselogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
<div className="container">
  <div className="flex  overflow-hidden mask-image-[linear-gradient(to_right,transparent,black,transparent)]  ">
<div className=" flex gap-14 flex-none ">

  <Image 
  src={acmeLogo}
   alt="acmelogos" 
   className="logo-ticker-image"/>
  <Image
   src={quatumLogo} 
   alt="quatumlogos" 
   className="logo-ticker-image" />
  <Image 
  src={echoLogo} 
  alt="echologos" 
  className="logo-ticker-image" />
  <Image
   src={celestialLogo} 
   alt="celestiallogos" 
   className="logo-ticker-image" />
  <Image 
  src={Purselogo} 
  alt="purselogos" 
  className="logo-ticker-image" />
  <Image 
  src={apexLogo}
   alt="apexlogos" 
   className="logo-ticker-image" />

</div>
</div>
</div>

    </div>
  )
};
