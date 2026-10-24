import { useId } from "react";

export default function EmployeeCard({
  imageUrl = "https://placehold.co/600x800/png",
  name = "Sarah Aileah",
  role = "Chief Creative Officer",
  bio = "Leads our creative vision across brand, product and campaigns. Fifteen years of turning loose ideas into work people remember.",
}) {
  const bioId = useId();

  return (
    <article
      tabIndex={0}
      aria-describedby={bioId}
      className="group relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl bg-primary px-5 pb-6 pt-16 shadow-xl outline-none focus-visible:ring-4 focus-visible:ring-white/70"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full border-28 border-white/5"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-16 h-24 w-24 rounded-full border-20 border-white/5"
      />

      {/* Polaroid frame */}
      <div className="relative bg-white px-3.5 pt-3.5 shadow-lg transition-transform duration-300 group-hover:-rotate-1 group-focus-visible:-rotate-1 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
        {/* "Window": same green as the card so the frame reads as see-through */}
        <div className="relative h-72 bg-primary">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            draggable={false}
            className="absolute bottom-0 left-1/2 h-[140%] w-[128%] max-w-none -translate-x-1/2 select-none object-contain object-bottom drop-shadow-[0_10px_12px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Caption */}
        <figcaption className="relative z-10 bg-white pb-5 pt-4 text-center">
          <h3 className="text-lg font-extrabold leading-tight tracking-tight text-neutral-950">
            {name}
          </h3>
          <p className="mt-0.5 text-sm text-neutral-700">{role}</p>

          <div
            id={bioId}
            className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 motion-reduce:transition-none"
          >
            <p className="overflow-hidden px-2 text-sm leading-relaxed text-neutral-600">
              <span className="mx-auto mb-3 mt-4 block h-px w-10 bg-neutral-300" />
              {bio}
            </p>
          </div>
        </figcaption>
      </div>
    </article>
  );
}
