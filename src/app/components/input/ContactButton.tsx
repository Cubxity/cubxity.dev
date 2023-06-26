import { EnvelopeIcon } from "@heroicons/react/20/solid";
import NextLink from "next/link";
import React, { FC } from "react";

const ContactButton: FC = () => {
  return (
    <NextLink
      href="/contact"
      role="button"
      className="flex flex-row items-center gap-2 rounded-md border border-gray-700 hover:border-indigo-600 px-4 py-2 text-sm font-medium transition-all"
    >
      <EnvelopeIcon className="w-5 h-5" />
      Contact
    </NextLink>
  );
};

export default ContactButton;
