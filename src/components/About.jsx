import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <Reveal className="mb-4 text-xs uppercase tracking-[0.35em] text-ink/50">
        (about)
      </Reveal>

      <Reveal
        as="h2"
        className="max-w-4xl text-3xl font-medium leading-snug tracking-tight text-ink md:text-5xl"
      >
        I'm a Forward Deployed Engineer at{" "}
        <span className="text-accent">Micro Turners</span>, sitting where the
        product meets the customer — shipping AI &amp; data tooling that turns
        raw SAP exports into decisions leadership can act on.
      </Reveal>

      <Reveal className="mt-10 grid max-w-3xl gap-6 text-base leading-relaxed text-ink/70 md:grid-cols-2">
        <p>
          CS @ VIT Vellore. McKinsey Forward Champion, BLC Manager, and
          Innovators Quest Chair — I like building things and the teams that
          build them. From data platforms to design systems, I care about the
          whole arc: model the problem, ship the interface, measure the impact.
        </p>
        <p>
          I work best embedded with a team, translating ambiguous business
          problems into working software fast. Equal parts engineer, product
          thinker, and designer — with a bias toward getting something real in
          front of people.
        </p>
      </Reveal>
    </section>
  );
}
