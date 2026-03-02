const serviceLinks = [
  { title: "Contact", link: "#footer" },
  { title: "Manuals", link: "#footer" },
  { title: "Shipping", link: "#footer" },
  { title: "Returns", link: "#footer" },
];

const supportLinks = [
  { title: "Care Guide", link: "#footer" },
  { title: "Find retailer", link: "#footer" },
  { title: "FAQ", link: "#footer" },
];

const socialLinks = [
  { title: "Instagram", link: "#footer" },
  { title: "Twitter", link: "#footer" },
  { title: "LinkedIn", link: "#footer" },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-foreground flex flex-col px-3 pt-20 lg:px-10 xl:h-screen xl:pt-32"
    >
      <section className="flex flex-col justify-between xl:flex-row">
        <div className="basis-1/2">
          <a href="#" className="body-text">
            hello@chene.studio
          </a>
        </div>

        <div className="my-20 flex basis-1/2 xl:gap-x-20 gap-x-16 xl:my-0 xl:justify-end">
          {/* Service */}
          <div>
            <p className="body-text mb-5 text-sm font-bold">Service</p>
            {serviceLinks.map((link) => (
              <div
                className="group my-1 block h-6 overflow-clip"
                key={link.title}
              >
                <a
                  href={link.link}
                  className="body-text block h-full transition-all delay-5 duration-250 ease-in-out group-hover:-translate-y-full"
                >
                  {link.title}
                </a>
                <a
                  href={link.link}
                  className="group-hover:text-primary/70 block h-full transition-all delay-5 duration-250 ease-in-out group-hover:-translate-y-full"
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
          <div>
            <p className="body-text mb-5 text-sm font-bold">Support</p>
            {supportLinks.map((link) => (
              <div
                className="group my-1 block h-6 overflow-clip"
                key={link.title}
              >
                <a
                  href={link.link}
                  className="body-text block h-full transition-all delay-5 duration-250 ease-in-out group-hover:-translate-y-full"
                >
                  {link.title}
                </a>
                <a
                  href={link.link}
                  className="group-hover:text-primary/70 block h-full transition-all delay-5 duration-250 ease-in-out group-hover:-translate-y-full"
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
          {/* Socials */}
          <div>
            <p className="body-text mb-5 text-sm font-bold">Follow</p>
            {socialLinks.map((link) => (
              <div
                className="group my-1 block h-6 overflow-clip"
                key={link.title}
              >
                <a
                  href={link.link}
                  className="body-text block h-full transition-all delay-5 duration-250 ease-in-out group-hover:-translate-y-full"
                >
                  {link.title}
                </a>
                <a
                  href={link.link}
                  className="group-hover:text-primary/70 block h-full transition-all delay-5 duration-250 ease-in-out group-hover:-translate-y-full"
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="mt-auto flex items-end justify-between pb-4">
        <div className="flex items-center gap-x-2">
          <img src="/logo.webp" className="h-10" alt="" />
          <p className="instrument-italic text-6xl xl:text-8xl">Chêne</p>
        </div>

        <p className="text-text/70 text-sm font-medium">2026 Chêne, Inc.</p>
      </section>
    </footer>
  );
};

export default Footer;
