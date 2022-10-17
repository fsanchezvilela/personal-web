// import { HeaderPropsType } from "./types";

import Link from "next/link";
import Image from "next/image";
import { BrandSVG, LinkAnchorNavigation } from "./constants";
import { Button } from "../../components/atoms";

const Header = () => {
  return (
    <header className="flex justify-between align-middle py-4">
        <Image src={BrandSVG} className='bg-keppel-tint rounded-full border-charcoal filter transition ease-in-out hover:rotate-180 transform-gpu hover:sepia' objectFit='scale-down' width="64" height="64"  alt='brand-logo-svg'/>
      <section>
        {LinkAnchorNavigation.map(({ hash, id, label }) => <Link key={id} href={hash}><Button buttonStyle="tertiary">{label}</Button></Link>)}
      </section>

    </header>
  )
}

Header.displayName = 'Header';

export default Header