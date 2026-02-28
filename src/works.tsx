const Works = () => {
  return (
    <main id="works" className="bg-dark text-foreground min-h-screen">
      {/* Row 1 */}
      <section className="border-b-foreground/30 flex flex-col border-b px-3 md:px-10 lg:min-h-72 lg:flex-row">
        <div className="border-foreground/30 flex basis-2/3 flex-col items-start justify-around border p-3 py-10 lg:border-b-0 lg:px-10">
          <p className="instrument-italic text-4xl font-bold lg:text-7xl">
            Nos Travaux
          </p>

          <p className="text-foreground/70 mt-5 text-sm lg:mt-0 lg:text-base">
            Designed in balance <br /> Crafted in oak <br /> Built to endure
          </p>
        </div>
        <div className="border-foreground/30 flex basis-1/3 items-center border-x p-3 py-10 lg:justify-center lg:border-b-0 lg:border-l-0">
          <p className="dm-sans text-foreground text-2xl lg:text-4xl">
            • Our Works •
          </p>
        </div>
      </section>

      {/* Row 2 */}
      <section className="border-b-foreground/30 flex flex-col border-b px-3 md:px-10 lg:flex-row">
        <div className="border-foreground/30 flex basis-1/3 flex-col justify-end border-x border-b p-3 py-10 lg:border-r lg:border-b-0 lg:p-10">
          <p className="instrument-italic text-2xl lg:text-4xl">
            Grise Velours
          </p>

          <p className="text-foreground/70 mt-5 text-xs lg:text-base">
            Defined by proportion and softened by tone, Grise explores the
            harmony between structure and comfort. Its muted grey palette
            enhances its sculptural form, allowing the silhouette to speak with
            subtle authority.
          </p>
        </div>
        <div className="border-foreground/30 flex basis-2/3 items-center justify-center border border-y-0 p-3 py-10 lg:border-l-0 lg:p-10">
          <img
            src={"/pic6.webp"}
            alt="sofa"
            className="hover:sc h-full rounded-lg"
          />
        </div>
      </section>

      {/* Row 3 */}
      <section className="border-b-foreground/30 bg-re flex flex-col border-b px-3 md:px-10 lg:flex-row">
        <div className="border-foreground/30 basis-1/3 border-x border-b p-3 py-10 lg:border-b-0 lg:p-10">
          <img src={"/pic5.webp"} alt="chair1" className="rounded-lg" />
        </div>

        <div className="border-foreground/30 flex basis-1/3 flex-col items-center justify-center border-x border-r border-b p-3 py-10 lg:border-b-0 lg:border-l-0">
          <p className="instrument-italic text-center text-2xl lg:text-4xl">
            Soft curves • Oak foundations •
          </p>
          <p className="text-foreground/60 my-5 text-center text-sm lg:my-10 lg:text-base">
            Our seating collection is designed to anchor a space with warmth and
            quiet confidence.
          </p>

          <div className="group border-foreground/30 h-10 overflow-clip rounded-full border">
            <button className="bg-foreground text-dark block h-full cursor-pointer rounded-full px-6 py-0.5 font-medium transition-all dela duration-200 ease-in-out group-hover:-translate-y-full group-hover:scale-75 lg:py-1">
              View Collection
            </button>

            <button className="bg-dark text-foreground block h-full scale-75 cursor-pointer rounded-full px-6 py-0.5 font-medium transition-all duration-200 ease-in-out group-hover:-translate-y-full group-hover:scale-100 lg:py-1">
              View Collection
            </button>
          </div>
        </div>

        <div className="border-foreground/30 basis-1/3 border-x border-r border-b p-3 py-10 lg:border-b-0 lg:border-l-0 lg:p-10">
          <img src={"/pic7.webp"} alt="chair2" className="rounded-lg" />
        </div>
      </section>

      {/* Row 4 */}
      <section className="border-b-foreground/30 ju flex flex-col border-b px-3 md:px-10 lg:flex-row">
        <div className="border-foreground/30 borer-b flex basis-1/3 flex-col items-start justify-end border p-3 py-10 lg:border-y-0 lg:border-l lg:p-10">
          <p className="instrument-italic text-2xl lg:text-4xl">
            Tabouret Tissé
          </p>

          <p className="text-foreground/70 mt-5 text-xs lg:text-base">
            Intricate weaving meets solid oak. This stool combines traditional
            craftsmanship with modern design, creating a piece that is both
            beautiful and functional.
          </p>
        </div>
        <div className="border-foreground/30 flex basis-1/3 flex-col justify-end border-x border-b p-3 py-10 lg:border-r lg:border-b-0 lg:border-l-0 lg:p-10">
          <img
            src="/pic8.webp"
            className="h-64 rounded-lg object-cover lg:h-96"
            alt="stools"
          />
        </div>
        <div className="border-r border-foreground/30 basis-1/3"/>
      </section>
    </main>
  );
};

export default Works;
