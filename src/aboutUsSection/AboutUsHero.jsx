import { Firma1, Firma2, Firma3, Firma4 } from '../assets/images';

const aboutUsHero = () => {
  return (
    <section>
      <div>
        <p className="text-4xl font-semibold mb-8 ml-16">Über uns</p>
        <br />
      </div>

      <div className="grid grid-cols-1 gap-4 flex-left">
        
        <div className="flex flex-row-reverse items-center">
          <div className="flex flex-col items-end">
            <p className="ml-4 mt-4 mb-11 font-bold text-3xl">Das Familienunternehmen Gebr. Muratidis-Meisterbetrieb für
              Akustik-& Trockenbau wurde 1993 gegründet. Zwei der Gebrüder, Sam und Savvas Muratidis, waren bereits seit
              1981 im Trockenbau tätig und im Jahr 1993 beschloss dann auch der dritte im Bunde, Symeon Muratidis, seine
              Brüder zu unterstützen. Die jahrelange Erfahrung auf dem Gebiet des Trockenbaus und der vollständige Zusammenschluss
              der Gebrüder legte den Gedanken nah sich mit einem Familienunternehmen selbständig zu machen.</p>
          </div>
          <div className="ml-16">
            <img
              src={Firma1}
              alt="Firma1"
              className="w-[100%] h-[100%] border-2 object-cover the-images2"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse items-center">     
          <p className="ml-4 mt-4 mb-11 font-bold text-3xl">Seit dieser Zeit ist das Familienunternehmen erfolgreich im Trockenbau tätig,
            seit 2002 ein Meisterbetrieb und seit 2010 sogar ein Lehrbetrieb, das auf 16 Mitarbeiter heranwachsen konnte.</p>          
          <div className="ml-16">
            <img
              src={Firma3}
              alt="Firma3"
              className="border-2 object-cover the-images2"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse items-center">
          <p className="ml-4 mt-4 mb-11 font-bold text-3xl">Der Erfolg des Familienunternehmens beruht zum Einen auf der Erfahrung der
            Gebrüder Muratidis im vielfältigen Bereich des Trockenbaus, einer ständigen Aktualisierung der neuesten Erkenntnisse
            und Trends in diesen Bereichen und zum Anderen auf dem Zusammenhalt der Familienmitglieder und Mitarbeiter des Unternehmens,
            welcher alljährlich bei einer typisch griechischen Feier ausgelassen zelebriert und gefestigt wird.</p>          
          <div className="ml-16">
            <img
              src={Firma2}
              alt="Firma2"
              className="border-2 object-cover the-images2"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse items-center">
        <p className="ml-4 mt-4 mb-11 font-bold text-3xl">Eine Pause muss auch mal sein.</p>       
          <div className="ml-16">
            <img
              src={Firma4}
              alt="Firma4"
              className="border-2 object-cover the-images2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUsHero;