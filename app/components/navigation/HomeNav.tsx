import Link from 'next/link'
import { BiHome } from 'react-icons/bi'
function HomeNav() {
  return (
      <Link href={"/"} className="text-foterText flex flex-col items-center mt-1 gap-1">
      <BiHome className="text-[21px]" />
      <p className="text-[11px]">خانه</p>
      </Link>
  )
}

export default HomeNav
