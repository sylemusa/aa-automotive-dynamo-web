
import ScrollAnimation from '../components/ScrollAnimation';

const Legal = ({ type }) => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="section-title text-center">
              {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-aa-dark-gray p-8 rounded-xl shadow-lg">
            <ScrollAnimation>
              {type === 'impressum' ? (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">Angaben gemäß § 5 TMG</h2>
                  
                  <div className="mb-8">
                    <p className="text-gray-300">
                      AA Automobile<br />
                      Max Mustermann<br />
                      Musterstraße 1<br />
                      12345 Musterstadt
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Telefon: +49 123 456789<br />
                      E-Mail: info@aa-automobile.de
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Umsatzsteuer-ID</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                      DE123456789
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Berufsbezeichnung: KFZ-Handel<br />
                      Zuständige Kammer: Industrie- und Handelskammer Musterstadt<br />
                      Verliehen in: Deutschland
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Streitschlichtung</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-aa-turquoise hover:underline">
                        https://ec.europa.eu/consumers/odr/
                      </a>.<br />
                      Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Haftung für Inhalte</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                      Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
                      überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                      Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
                      von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Haftung für Links</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                      fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                      Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
                      Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                      Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Urheberrecht</h3>
                  <div>
                    <p className="text-gray-300">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                      jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
                      Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">Datenschutzerklärung</h2>
                  
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Wir freuen uns über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der 
                      AA Automobile. Eine Nutzung der Internetseiten der AA Automobile ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. 
                      Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch 
                      eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für 
                      eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">1. Begriffsbestimmungen</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Die Datenschutzerklärung der AA Automobile beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber 
                      beim Erlass der Datenschutz-Grundverordnung (DSGVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als 
                      auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die 
                      verwendeten Begrifflichkeiten erläutern.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden 
                      Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist:
                    </p>
                    <p className="text-gray-300 mt-4">
                      AA Automobile<br />
                      Max Mustermann<br />
                      Musterstraße 1<br />
                      12345 Musterstadt<br />
                      Deutschland<br />
                      Tel.: +49 123 456789<br />
                      E-Mail: datenschutz@aa-automobile.de<br />
                      Website: www.aa-automobile.de
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">3. Cookies</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Die Internetseiten der AA Automobile verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem 
                      abgelegt und gespeichert werden.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige 
                      Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden 
                      können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser der 
                      betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die 
                      eindeutige Cookie-ID wiedererkannt und identifiziert werden.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">4. Erfassung von allgemeinen Daten und Informationen</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Die Internetseite der AA Automobile erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System 
                      eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. 
                      Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die 
                      Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über 
                      ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) 
                      eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und 
                      Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">5. Kontaktmöglichkeit über die Internetseite</h3>
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Die Internetseite der AA Automobile enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu 
                      unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten 
                      elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für 
                      die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. 
                      Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten 
                      werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser 
                      personenbezogenen Daten an Dritte.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">6. Rechte der betroffenen Person</h3>
                  <div>
                    <p className="text-gray-300">
                      Jede betroffene Person hat das Recht auf Auskunft, das Recht auf Berichtigung, das Recht auf Löschung, das Recht auf Einschränkung der 
                      Verarbeitung, das Recht auf Datenübertragbarkeit, das Recht auf Widerspruch gegen die Verarbeitung und das Recht auf Widerruf einer 
                      Einwilligung.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an: datenschutz@aa-automobile.de
                    </p>
                  </div>
                </div>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
