import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button asChild>
      <Link href='/'>
        <LuTent className='w-6 h-6' />
      </Link>
    </Button>
  );
};

export default Logo;
