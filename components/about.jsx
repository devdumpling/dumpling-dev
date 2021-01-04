import Avatar from "./avatar";
import SectionSeparator from "./section-separator";

export default function About({ author }) {
  return (
    <div className="flex-col flex justify-evenly">
      <h1 className="text-lg font-light text-accent-8">
        .about( <span className="text-accent-4 font-light">me</span> )
      </h1>
      <div className="flex-col md:flex-row flex md:p-4 justify-evenly md:justify-start items-center">
        <div className="shadow-2xl flex-shrink-0 mb-8 md:mb-0 md:mr-16 rounded-full">
          <Avatar name={author.name} picture={author.picture.url} />
        </div>
        <div className="flex-col text-left px-2">
          <h1 className="text-left text-accent-8 font-bold md:text-3xl text-3xl">
            Hi, I'm <span className="font-normal text-accent-7">Devon.</span>
          </h1>
          <p className="text-left md:text-xl py-4 mt-4 border-l-2 border-accent-7 pl-4 text-lg">
            {author.biography}                        
          </p>
        </div>
      </div>
      <SectionSeparator />
    </div>
  );
}
