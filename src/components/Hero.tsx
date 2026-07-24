export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        <p className="text-lg text-gray-500 mb-6">
          Robert Carl Auguste
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Helping professionals
          <br />
          buy back their time.
        </h1>

        <p className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto">
          I build intelligent systems that eliminate repetitive work,
          simplify complex workflows, and give people more time to focus
          on what matters most.
        </p>

        <a
  href="#why"
  className="inline-block mt-12 rounded-full bg-black text-white px-8 py-4 text-lg hover:opacity-90 transition"
>
  Start the Journey
</a>
      </div>
    </section>
  );
}