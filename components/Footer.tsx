"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link href="/" className=" hover:text-primary">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/usluge" className=" hover:text-primary">
                  Usluge
                </Link>
              </li>

              <li>
                <Link href="/kontakt" className=" hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+38160 000 000">
                <p className="hover:text-primary">Telefon: +38160 000 000</p>
              </a>
            </div>
            <div>
              <a href="mailto:" target={"_blank"}>
                <p className="text-wrap  hover:text-primary">
                  Email: starter mail
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" target={"_blank"} className="hover:text-primary">
                <Facebook />
              </a>
              <a href="#" target={"_blank"} className="hover:text-primary">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              starter naslov
            </h3>

            <p className=" font-bold ">starter poruka</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 _________. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold text-primary"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
