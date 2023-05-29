import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import NotionBlock from "@/app/components/cms/notion/NotionBlock";
import { fetchClientBySlug, fetchClients } from "@/lib/notion";

export interface ClientPageProps {
  params: { slug: string };
}

const ClientPage = async ({ params }: ClientPageProps) => {
  const client = await fetchClientBySlug(params.slug);

  return (
    <>
      <header className="max-w-screen-xl mx-auto px-4 pt-40 pb-24">
        <Link
          href="/"
          className="text-gray-400 flex flex-row items-center gap-2 transition-colors hover:text-indigo-400"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          Home
        </Link>
        <div className="flex flex-row items-center gap-4 my-4">
          <div
            className={clsx(
              "relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-md overflow-clip flex-none",
              !client.meta.icon &&
                "bg-blue-500 flex items-center justify-center font-bold"
            )}
          >
            {client.meta.icon ? (
              <Image
                src={client.meta.icon}
                alt={`${client.meta.name}'s icon`}
                fill
              />
            ) : (
              client.meta.name[0]
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            {client.meta.name}
          </h1>
        </div>
        <p className="text-gray-200 lg:text-lg leading-relaxed">
          {client.meta.description}
        </p>
      </header>
      <div className="prose prose-invert prose-headings:mb-4 prose-headings:mt-10 prose-headings:scroll-my-20 lg:prose-lg lg:prose-headings:mt-12 max-w-screen-xl mx-auto px-4">
        {client.blocks.map((block, i) => (
          <NotionBlock block={block} key={i} />
        ))}
      </div>
    </>
  );
};

export default ClientPage;

export const generateStaticParams = async () => {
  const clients = await fetchClients(100);
  return clients.map(({ slug }) => ({ slug }));
};
