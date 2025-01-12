import Image from "next/image";

import productImage from "@/assets/product-image.png";
// import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="tag">Unbreakable Security</div>
            <h2 className="section-title">
              Manage Cloud Seamlessly
            </h2>

            <p className="section-desc">
              We empower UK organizations to thrive in the cloud with secure
              platforms for innovation and growth. We empower UK organizations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src={productImage} alt="productImage" className="mt-10" />
          {/* <Image
            src={pyramidImage}
            height={262}
            width={262}
            alt="pyramidImage"
            className="hidden md:block absolute -right-36 -top-10"
          />
          <Image
            src={tubeImage}
            height={248}
            width={248}
            alt="tubeImage"
            className="hidden md:block absolute bottom-24 -left-36"
          /> */}
        </div>
      </div>
    </section>
  );
};
export default ProductShowcase;
