import ProfileGallery from "../components/profileGallery/ProfileGallery";
import { HiSparkles } from "react-icons/hi2";
/*import pulls code from another file or library
we are importing links from tanstack, which is
react component for page navigation withoujt having to reload page */

export default function Home() {
  return (
    <div className="flex-col">
      <div className="text-white [text-shadow:2px_2px_3px_#4a4a4a]">
        <h1 className="flex justify-center text-4xl pb-5">
          <>
            <HiSparkles className="fill-white"></HiSparkles>
          </>
          hi! sample text
          <>
            <HiSparkles className="fill-white"></HiSparkles>
          </>
        </h1>
        <p className="flex justify-center pt-5 pb-10">
          some filler text will go here after i create a bio{" "}
        </p>
      </div>

      <div className="py-4 rounded-2xl">
        <ProfileGallery />
      </div>
    </div>
  );
}
