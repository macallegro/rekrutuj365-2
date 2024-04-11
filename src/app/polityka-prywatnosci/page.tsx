
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencja zatrudnienia Rekrutuj365 - Blog | Polityka prywatności",
  description: "Zapoznaj się z polityką prywatności Rekrutuj365",
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
                Polityka prywatności
                </h2>
            
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Twoja prywatność jest dla nas ważna. Niniejsza Polityka Prywatności wyjaśnia, jakie informacje zbieramy od użytkowników naszej strony internetowej oraz w jaki sposób te dane są wykorzystywane i chronione.
                  </p>
                  

                  <h3 className="mb-8 text 2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">Jakie informacje zbieramy?</h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Podczas korzystania z naszej strony internetowej możemy zbierać różne rodzaje informacji, w tym:

      Dane osobowe: takie jak imię, nazwisko, adres e-mail, numer telefonu, adres zamieszkania, które użytkownik dobrowolnie podaje w formularzach kontaktowych lub rejestracyjnych.
      Dane dotyczące ruchu na stronie: takie jak adres IP, informacje o przeglądarce internetowej, czas spędzony na stronie, odwiedzone podstrony, które są gromadzone automatycznie przy użyciu technologii śledzenia, takiej jak pliki cookie.
                  </p>

                  <h3 className="mb-8 text 2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">Jak chronimy Twoje dane?
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Dbamy o bezpieczeństwo Twoich danych i stosujemy odpowiednie środki techniczne i organizacyjne, aby zapobiec nieautoryzowanemu dostępowi, utracie, uszkodzeniu lub ujawnieniu Twoich danych osobowych.                  
                  </p>
                  <h3 className="mb-8 text 2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">Pliki cookie
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Nasza strona internetowa może korzystać z plików cookie i podobnych technologii śledzenia w celu poprawy jakości usług oraz dostosowania ich do potrzeb użytkowników. Użytkownik może zarządzać ustawieniami plików cookie w swojej przeglądarce internetowej.                  
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
