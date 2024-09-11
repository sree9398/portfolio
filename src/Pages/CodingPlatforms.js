import React from "react";
import CodingPlatformsRender from "../Components/CodingPlatformsRender";
import { codingplatforms } from "../Details";

function CodingPlatforms() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Coding Platforms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            codingplatforms.map(
              ({ title, link,image }) => (
                <CodingPlatformsRender
                  title={title}
                  link={link}
                  image={image}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default CodingPlatforms;
