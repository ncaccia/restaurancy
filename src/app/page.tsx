import api from "@/api";

export default async function HomePage() {
  const restaurantes = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurantes.map((r) => (
        <article key={r.id} className="">
          <img
            alt={r.name}
            className="mb-3 h-[300px] w-full rounded-lg object-cover"
            src={r.image}
          />
          <h2 className="inline-flex gap-2 text-lg font-bold">
            <span> {r.name}</span>
            <small className="inline-flex gap-1">
              <span>{r.score}</span>
              <span>⭐️</span>
              <span className="font-normal opacity-75">({r.ratings})</span>
            </small>
          </h2>

          <p className="opacity-90">{r.description}</p>
        </article>
      ))}
    </section>
  );
}
