import React from "react";
import { CUSINES } from "../constants/index";

export default function Expertise() {
  return (
    <section id="kitchen">
      <h2 className="my-8 text-center text-3xl tracking-tight lg:text-4xl">
        Наша кухня
      </h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            <div className="w-1/3 flex-shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tight text-rose-300">{cusine.title}</h3>
              <p className="mt-4 text-lg tracking-tight">{cusine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
