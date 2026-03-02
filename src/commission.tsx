const Commission = () => {
  return (
    <main className="my-10 flex flex-col items-center justify-between px-3 md:px-10 xl:my-20 xl:h-screen xl:flex-row">
      <section className="h-full basis-2/3">
        <p className="body-text text-2xl leading-14 font-medium uppercase lg:text-6xl xl:text-start xl:leading-20">
          Commission a piece crafted exclusively for your space, where material,
          proportion, and purpose are considered with precision.
        </p>

        <div className="group border-foreground/30 mt-10 h-10 w-fit overflow-clip rounded-full border xl:mt-20">
          <button className="bg-dark text-foreground block h-full cursor-pointer rounded-full px-6 py-0.5 font-medium transition-all duration-200 ease-in-out group-hover:-translate-y-full group-hover:scale-75 lg:py-1">
            Make an Inquiry
          </button>

          <button className="bg-foreground text-dark block h-full scale-75 cursor-pointer rounded-full px-6 py-0.5 font-medium transition-all duration-200 ease-in-out group-hover:-translate-y-full group-hover:scale-100 lg:py-1">
            Make an Inquiry
          </button>
        </div>
      </section>

      <section className="my-10 h-full basis-1/5 xl:my-10">
        <p className="body-text text-justify">
          At Chêne, each commission is a dialogue between form, material, and
          space. We partner with architects, designers, and private clients to
          develop furniture that integrates seamlessly into its environment;
          thoughtful in proportion, precise in detail. <br />
          <br />
          Share your vision. <br /> Let's begin.
        </p>
      </section>
    </main>
  );
};

export default Commission;
