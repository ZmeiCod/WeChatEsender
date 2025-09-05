import React from "react";
import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Контакты</h2>
      <div className="text-neutral-300">
        {CONTACT.map((deteil) => (
          <p
            key={deteil.key}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tight lg:text-3xl"
          >
            {deteil.value}
          </p>
        ))}
      </div>
    </section>
  );
}
