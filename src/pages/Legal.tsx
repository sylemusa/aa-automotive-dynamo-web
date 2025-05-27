import ScrollAnimation from '../components/ScrollAnimation';
interface LegalProps {
  type: 'impressum' | 'datenschutz';
}
const Legal = ({
  type
}: LegalProps) => {
  return <div className="pt-20">
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
                  <h2 className="text-2xl font-bold text-white mb-6">Impressum</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Unternehmensangaben</h3>
                    <p className="text-gray-300">
                      AA-Automobile e.U.<br />
                      Gewerbestr. 4<br />
                      4072 Alkoven<br />
                      Österreich
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Kontaktdaten</h3>
                    <p className="text-gray-300">
                      Telefon: <a href="tel:+436601907710" className="text-aa-turquoise hover:underline">+43 660 1907710</a><br />
                      E-Mail: <a href="mailto:office@aa-automobile.at" className="text-aa-turquoise hover:underline">office@aa-automobile.at</a><br />
                      Website: www.aa-automobile.at
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Unternehmensgegenstand</h3>
                    <p className="text-gray-300">
                      Kraftfahrzeughandel, Kraftfahrzeugreparatur, Kraftfahrzeugvermietung<br />
                      Gewerbe: Kraftfahrzeughandel und Kraftfahrzeugreparatur
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Aufsichtsbehörde/Gewerbebehörde</h3>
                    <p className="text-gray-300">
                      Bezirkshauptmannschaft Eferding<br />
                      Berufsbezeichnung: Kraftfahrzeughändler<br />
                      Verleihungsstaat: Österreich
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Anwendbares Recht</h3>
                    <p className="text-gray-300">
                      Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen des internationalen Privatrechts und unter Ausschluss des UN-Kaufrechts.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Gerichtsstand</h3>
                    <p className="text-gray-300">
                      Gerichtsstand ist, soweit gesetzlich zulässig, das sachlich zuständige Gericht in Eferding, Österreich.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Online-Streitbeilegung</h3>
                    <p className="text-gray-300">
                      Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS) für Verbraucher: 
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-aa-turquoise hover:underline ml-1">
                        https://ec.europa.eu/consumers/odr/
                      </a><br />
                      Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Haftungsausschluss</h3>
                    <p className="text-gray-300">
                      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Alle Angaben erfolgen ohne Gewähr. Änderungen und Irrtümer vorbehalten.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Urheberrecht</h3>
                    <p className="text-gray-300">
                      Die Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">Datenschutzerklärung</h2>
                  
                  <div className="mb-8">
                    <p className="text-gray-300">
                      Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website und unserer Dienstleistungen.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher</h3>
                    <p className="text-gray-300">
                      Verantwortlicher im Sinne der DSGVO ist:
                    </p>
                    <p className="text-gray-300 mt-4">
                      AA-Automobile e.U.<br />
                      Gewerbestr. 4<br />
                      4072 Alkoven<br />
                      Österreich<br />
                      Tel.: <a href="tel:+436601907710" className="text-aa-turquoise hover:underline">+43 660 1907710</a><br />
                      E-Mail: <a href="mailto:office@aa-automobile.at" className="text-aa-turquoise hover:underline">office@aa-automobile.at</a><br />
                      Website: www.aa-automobile.at
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">2. Kontakt zum Datenschutzbeauftragten</h3>
                    <p className="text-gray-300">
                      Bei Fragen zum Datenschutz können Sie sich direkt an uns wenden:<br />
                      E-Mail: <a href="mailto:office@aa-automobile.at" className="text-aa-turquoise hover:underline">office@aa-automobile.at</a>
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">3. Speicherung von Zugriffsdaten</h3>
                    <p className="text-gray-300">
                      Wir bzw. unser Webhostinganbieter erheben aufgrund unseres berechtigten Interesses Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören:
                    </p>
                    <ul className="text-gray-300 mt-4 list-disc list-inside">
                      <li>Name der abgerufenen Webseite</li>
                      <li>Datei, Datum und Uhrzeit des Abrufs</li>
                      <li>übertragene Datenmenge</li>
                      <li>Meldung über erfolgreichen Abruf</li>
                      <li>Browsertyp nebst Version</li>
                      <li>das Betriebssystem des Nutzers</li>
                      <li>Referrer URL (die zuvor besuchte Seite)</li>
                      <li>IP-Adresse und der anfragende Provider</li>
                    </ul>
                    <p className="text-gray-300 mt-4">
                      Diese Daten werden aus Sicherheitsgründen für maximal 7 Tage gespeichert und danach automatisch gelöscht.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">4. Cookies</h3>
                    <p className="text-gray-300">
                      Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Ihr Browser ruft diese Dateien ab. Die Verwendung von Cookies erhöht die Benutzerfreundlichkeit und Sicherheit unserer Website.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Wir weisen jedoch darauf hin, dass die Nutzung unserer Website dann eingeschränkt sein kann.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">5. Kontaktformular und E-Mail-Kontakt</h3>
                    <p className="text-gray-300">
                      Bei der Kontaktaufnahme mit uns (per Kontaktformular oder E-Mail) werden die von Ihnen mitgeteilten Daten von uns gespeichert, um Ihre Fragen zu bearbeiten und um mögliche Anschlussfragen zu beantworten. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) zur Bearbeitung von Anfragen und zur Anbahnung von Geschäftsbeziehungen.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">6. Speicherdauer</h3>
                    <p className="text-gray-300">
                      Personenbezogene Daten werden nur solange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig gelöscht.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">7. Ihre Rechte</h3>
                    <p className="text-gray-300">
                      Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                    </p>
                    <p className="text-gray-300 mt-4">
                      In Österreich ist dies die Datenschutzbehörde:<br />
                      Österreichische Datenschutzbehörde<br />
                      Wickenburggasse 8<br />
                      1080 Wien<br />
                      Telefon: +43 1 52 152-0<br />
                      E-Mail: dsb@dsb.gv.at
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">8. Datensicherheit</h3>
                    <p className="text-gray-300">
                      Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">9. Änderungen der Datenschutzerklärung</h3>
                    <p className="text-gray-300">
                      Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                    </p>
                    <p className="text-gray-300 mt-4">
                      Stand: {new Date().toLocaleDateString('de-AT')}
                    </p>
                  </div>
                </div>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>;
};
export default Legal;
