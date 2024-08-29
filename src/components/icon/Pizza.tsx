import React from "react";
import Image from "next/image";
import PizzaLight from "../../../public/logo/PizzaLight.png";
import PizzaDark from "../../../public/logo/PizzaDark.png";

interface PizzaProps {
  theme: "dark" | "light";
  size: number;
}

export default function Pizza({ theme, size }: PizzaProps) {
  return (
    <>
      {theme === "dark" && (
        <Image src={PizzaLight} alt='pizza' width={size} height={size} />
      )}
      {theme === "light" && (
        <Image src={PizzaDark} alt='pizza' width={size} height={size} />
      )}
    </>
  );
}
