import productImage from "@/assets/product-image.png"
import Image from "next/image"
import pyramidImage from  "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
export const ProductShowcase = () => {
  return (
    <section className=" overflow-x-clip bg-gradient-to-b from-[#fffff] to-[#02dcff] py-24  ">
      <div className="container">
        <div className=" section-heading ">
        <div className="flex justify-center">
<div className="tag">
  Boost your Productivity 
</div>
</div>
<h2 className=" section-title mt-5">A more effective way to track your progress </h2>
<p className="sectin-description mt-5 ">Effortlessly turn your ideas into a fully functionnal, responsive, SaaS website in just minutes with this templates
   </p>
   </div>
   <div className="relative">
   <Image
   src={productImage}
   alt="productimage "
   className="mt-10 "
   />

  <Image
  src={pyramidImage}
  alt="pyramid image"
  height={262}
  width={262}
  className=" hidden md:block absolute -right-36 -top-32 "
  />
<Image
src={tubeImage}
alt="tube image"
 
height={248}
className=" hidden md:block absolute  bottom-24 -left-36 "
/>
   </div>
      </div>
    </section>
  )
};
