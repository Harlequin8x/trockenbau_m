const Hero = () => {
    const paragraphs = [
      "Willkommen auf der Website des Trockenbau-Meisterbetriebs der Gebrüder Muratidis aus Salzgitter.",
      "Erkundigen Sie sich über unsere Fachbereiche Wärmeschutz, Brandschutz, Altbausanierung, Akustikbau, Schallschutz und Lichtakzente. Informieren Sie sich auch über Neues aus unserem Betrieb und unsere Referenzen.",
      "Für Fragen warten wir auf Ihren Anruf oder eMail!",
      "Ihre Gebrüder Muratidis",
    ];
  
    return (
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  };
  
  export default Hero;