import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencja zatrudnienia Rekrutuj365 - Blog | Informacje o naszej firmie",
  description: "Przeczytaj informacje o agencji pracy Rekrutuj365",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                O nas
                </h2>
                
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Naszą główną misją jest tworzenie synergii pomiędzy utalentowanymi jednostkami a przedsiębiorstwami, które poszukują profesjonalistów z pasją i kompetencjami. Nasza agencja pośrednictwa pracy to miejsce, gdzie doświadczenie spotyka się z ambicją, tworząc idealne warunki do rozwoju dla wszystkich zaangażowanych stron.                  
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/about/o-nas.jpg"
                        alt="Biuro pośrednictwa pracy"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <h3 className="mb-8 text 2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">Profesjonalizm</h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Nasz zespół składa się z doświadczonych ekspertów, którzy nie tylko posiadają głęboką wiedzę na temat rynku pracy, ale także angażują się w każdy projekt z zaangażowaniem i pasją. Działamy zgodnie z najwyższymi standardami etycznymi, zapewniając uczciwość, transparentność i pełną poufność.
                  </p>
                  <h3 className="mb-8 text 2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">Indywidualne podejście
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Rozumiemy, że każdy klient i kandydat ma inne potrzeby i oczekiwania. Dlatego też nasze podejście opiera się na indywidualnym podejściu, które pozwala nam dopasować nasze usługi do konkretnych potrzeb i sytuacji.                  
                  </p>
                  <h3 className="mb-8 text 2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">Innowacyjność
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Świat pracy stale się zmienia, dlatego też nieustannie poszukujemy nowych rozwiązań i metod, które pozwolą nam sprostać wyzwaniom współczesnego rynku. Dążymy do ciągłego doskonalenia naszych procesów, aby zapewnić naszym klientom najlepsze możliwe rezultaty.                  
                  </p>
                  
             
                  
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
