import React from "react";

const CenterImageSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        
        <img
          src="./img/valueAdded.webp" 
          alt="Centered"
          className="
            w-full 
            max-w-xs 
            sm:max-w-md 
            md:max-w-lg 
            lg:max-w-xl 
            xl:max-w-2xl
            h-auto 
            object-contain
          
          "
        />

      </div>
    </section>
  );
};

export default CenterImageSection;