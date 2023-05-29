import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Client, formatClientRange } from "@/lib/cms";

export interface ClientCardProps {
  client: Client;
}

const ClientCard = ({ client }: ClientCardProps) => (
  <Link
    className="p-6 border border-gray-700 hover:bg-fuchsia-900/10 hover:scale-[102%] transition-all rounded-lg"
    href={`/clients/${client.slug}`}
    role="button"
    rel="noreferrer"
  >
    <div className="flex flex-row items-center gap-4 mb-4">
      <div
        className={clsx(
          "relative w-8 h-8 rounded-md overflow-clip flex-none",
          !client.icon &&
            "bg-blue-500 flex items-center justify-center font-bold"
        )}
      >
        {client.icon ? (
          <Image src={client.icon} alt={`${client.name}'s icon`} fill />
        ) : (
          client.name[0]
        )}
      </div>
      <h3 className="font-semibold flex-1">{client.name}</h3>
      <span className="text-sm text-gray-300">{formatClientRange(client)}</span>
    </div>
    <p className="text-gray-200">{client.description}</p>
  </Link>
);

export default ClientCard;
