import { motion } from "framer-motion";
import type { Route } from "./+types/welcome";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "playground" },
    { name: "description", content: "Welcome to playground" },
  ];
}

export default function Welcome() {
  return (
    <main>
      <div className="max-w-[1200px] py-32 px-4 mx-auto flex flex-row justify-between items-left">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">PLAYGROUND</h1>
          <p className="text-3xl">The best cryptocurrency explorer</p>
          <Link to="/explore">
            <Button className="!cursor-pointer">Explore Cryptocurrencies</Button>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-4 ml-2">
          <motion.img
            src="bitcoin.svg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-32 h-32"
          />
          <motion.img
            src="ethereum.svg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-32 h-32"
          />
          <motion.img
            src="solana.png"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-32 h-32"
          />
          <motion.img
            src="xrp.svg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-32 h-32"
          />
        </div>
      </div>
      <div className="bg-secondary min-w-full">
        <div className="max-w-2xl py-24 px-4 flex container mx-auto space-x-8">
          <img src="logo.svg" alt="Logo" className="hidden w-56 h-56 sm:block" />
          <div>
            <p className="text-4xl font-bold text-secondary-foreground">Why Playground?</p>
            <p className="text-secondary-foreground text-lg mt-2">
              Playground is a state-of-the-art cryptocurrency price explorer platform designed to help you navigate the dynamic world of digital assets. It provides real-time data, detailed analysis, and intuitive visualizations to track market trends and price fluctuations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}