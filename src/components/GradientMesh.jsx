/* Airia-inspired animated gradient mesh: a few large, blurred colour orbs
   that drift and merge behind dark sections. Pure CSS, no JS. */
export default function GradientMesh() {
  return (
    <div className="gradient-mesh" aria-hidden>
      <span className="mesh-orb mesh-orb--1" />
      <span className="mesh-orb mesh-orb--2" />
      <span className="mesh-orb mesh-orb--3" />
      <span className="mesh-orb mesh-orb--4" />
    </div>
  );
}
