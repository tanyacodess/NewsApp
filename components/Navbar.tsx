import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const addActiveClasses = (pathname: string, classes: string) => {
    return pathname !== router.pathname ? "" : classes;
  };

  return (
    <nav className="w-full flex justify-end pt-4 mb-10 relative bg-black border-b border-slate-50/5 backdrop-blur-md">
      <ul className="list-none md:w-1/2 mb-0 mr-6 w-full flex justify-between items-center md:text-2xl text-lg text-white">
        <li
          onClick={() => router.push("/")}
          className={`cursor-pointer font-bold ${addActiveClasses("/", "border-blue-600 border-b-4")}`}
        >
          NewsX
        </li>
       
        
      </ul>
    </nav>
  );
};

export default Navbar;
