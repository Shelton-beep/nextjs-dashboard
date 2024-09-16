import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./font";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon width={44} height={44} />
      <p className="text-[44px]">Shutto</p>
    </div>
  );
}
