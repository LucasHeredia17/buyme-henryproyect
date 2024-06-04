import Link from "next/link";
import { FaInstagramSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Contact: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center 2xl:w-1/2 xl:w-2/3 w-4/5 my-8 bg-white p-12 rounded border-2 border-secondary">
        <h1 className="text-4xl font-extrabold underline hover:text-secondaryColor mb-8">
          Si estas interesado en contactar conmigo puedes hacerlo aqui:
        </h1>
        <div className="flex flex-row items-center justify-center mb-4">
          <FaMailBulk className="w-8 h-8 mr-2 text-secondaryColor hover:text-textColorBlack" />
          <p className="text-lg font-medium">Mail: heredialucas@gmail.com</p>
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          <Link href="https://github.com/LucasHeredia17" target="_blank">
            <FaSquareGithub className="w-8 h-8 mr-2 text-secondaryColor hover:text-textColorBlack" />
          </Link>
          <p className="text-lg font-medium">
            GitHub:{" "}
            <Link
              className="hover:text-secondaryColor"
              href="https://github.com/LucasHeredia17"
              target="_blank"
            >
              Lucas Heredia
            </Link>
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          <Link
            href="https://www.linkedin.com/in/heredialucas1/"
            target="_blank"
          >
            <FaLinkedin className="w-8 h-8 mr-2 text-secondaryColor hover:text-textColorBlack" />
          </Link>
          <p className="text-lg font-medium">
            LinkedIn:{" "}
            <Link
              className="hover:text-secondaryColor"
              href="https://www.linkedin.com/in/heredialucas1/"
              target="_blank"
            >
              Lucas Heredia
            </Link>
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link href="https://www.instagram.com/lucas_hdia/" target="_blank">
            <FaInstagramSquare className="w-8 h-8 mr-2 text-secondaryColor hover:text-textColorBlack" />
          </Link>
          <p className="text-lg font-medium">
            Instagram:{" "}
            <Link
              className="hover:text-secondaryColor"
              href="https://www.instagram.com/lucas_hdia/"
              target="_blank"
            >
              @lucas_hdia
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
