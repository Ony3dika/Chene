const About = () => {
  return (
    <main
      id="about"
      className="my-20 flex min-h-screen flex-col items-center justify-between px-3 py-10 lg:px-10 xl:my-40 xl:flex-row"
    >
      <section className="flex h-full basis-[66%] flex-col rounded-lg p-3">
        <p className="body-text text-4xl lg:text-7xl">About</p>

        <p className="body-text my-10 text-justify text-lg leading-10 lg:text-3xl lg:leading-12">
          <span className="instrument-italic"> Chêne</span> is a French
          furniture workshop based in Lyon, France. <br /> We specialize in
          creating high-quality, handcrafted wooden furniture for the modern
          home. Our pieces are designed to be both beautiful and functional;
          each silhouette is considered, each material chosen for its honesty
          and longevity.
        </p>

        <p className="body-text text-lg leading-12 italic lg:text-3xl">
          • Form • Design • Furniture •
        </p>
      </section>

      <section className="h-2/3 basis-[30%] overflow-clip rounded-lg">
        <img
          src="/pic10.webp"
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </section>
    </main>
  );
};

export default About;
