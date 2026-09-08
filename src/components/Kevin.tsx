export default function Kevin() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-8 py-32">
      <div className="max-w-5xl text-center">
        <p className="uppercase tracking-[0.3em] text-gray-400 mb-10">
          Executive Intelligence System
        </p>

        <h2 className="text-6xl md:text-8xl font-bold leading-tight">
          Kevin gave me
          <br />
          my mornings back.
        </h2>

        <p className="mt-10 text-3xl text-gray-300">
          And my mornings gave me back everything else.
        </p>

        <a
          href="https://www.youtube.com/watch?v=n52CXHAbqKE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 rounded-full bg-white text-black px-8 py-4 text-lg hover:opacity-90 transition"
        >
          Watch Kevin in Action →
        </a>
      </div>
    </section>
  );
}