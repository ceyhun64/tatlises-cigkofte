import { Store, ExternalLink } from "lucide-react";

export default function FranchiseBanner() {
  return (
    <div className="bg-brand-gold/95 py-2 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
        <Store size={13} className="text-brand-red-dark shrink-0" />
        <p className="text-brand-red-dark text-[11px] font-bold">
          Bu site Tatlıses Çiğköfte&apos;nin Onikişubat / Kahramanmaraş yetkili franchise şubesine aittir.
        </p>
        <a
          href="https://www.tatlisescigkofte.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-brand-red-dark text-[11px] font-bold underline underline-offset-2 hover:opacity-75 transition-opacity"
        >
          Merkez site <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}
