import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Pracuj z nami"
            paragraph="Specjalizujemy się w łączeniu utalentowanych kandydatów z renomowanymi firmami, zapewniając kompleksową obsługę rekrutacyjną. Dzięki naszemu doświadczeniu i szerokiemu zakresowi usług, zapewniamy efektywne dopasowanie kwalifikacji oraz potrzeb pracodawców i pracowników. Skorzystaj z naszej pomocy, aby znaleźć drogę do sukcesu zawodowego!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
