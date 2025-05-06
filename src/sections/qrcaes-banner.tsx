import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function QrCaesBanner() {
  return (
    <div className="bg-purple-600 p-2 flex">
      <div className="container flex items-center justify-center gap-2 mx-auto">
        <Image
          alt="qrcães logo"
          src="/qrcaes.jpg"
          height={42}
          width={42}
          className="rounded-2xl"
        />

        <div className="flex flex-col">
          <h4 className="text-xl font-bold">
          Conheça o QRCães
          </h4>
          <p className="text-neutral-200 text-sm">
            Gerador de Identificador QRCode para animais de estimação
          </p>
        </div>

        <Link href="https://www.qrcaes.com.br/">
          <Button variant="ghost" size="sm" className="cursor-pointer">
            <ArrowRight/>
          </Button>
        </Link>

      </div>
    </div>
  )
}