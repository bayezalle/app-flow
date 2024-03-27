import React from 'react'
import about1 from '../../assets/about1.webp'
import about2 from '../../assets/about2.webp'


const About = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-lime-700 p-4 text-4xl font-bolder">ANGEBOTE</h1>
      </div>
      <div className="container">
        <div className="row flex gap-2">
            <div className="col-md">
                <img src={about1} alt="" />
            </div>
            <div className="col-md">
                <img src={about2} alt="" />
            </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-lime-700 p-4 text-4xl font-bolder">DLV-SHOP - DER SHOP FÜR LAND UND NATUR</h1>
      </div>
      <div className="text-center">
        <p className="my-3">Der dlv Deutscher Landwirtschaftsverlag gilt als europaweit führender Fachverlag in den Bereichen Land- und Forstwirtschaft, Landleben, Jagd und Garten. Bereits seit Jahrzehnten überzeugt der dlv Deutscher Landwirtschaftsverlag
             durch die Fachkompetenz seiner Redakteure und die Aktualität seiner Fachmedien.
        </p >
        <p className="my-3">Zu unseren Fachzeitschriften zählen u.a. die beiden landwirtschaftlichen Wochenblätter LAND & FORST sowie das Bayerische Landwirtschaftliche Wochenblatt, das moderne Agrarmagazin agrarheute und die Jagd-Magazine PIRSCH, unsere Jagd, Niedersächsischer Jäger und Der Jagdgebrauchshund. Aber auch das Bio-Gartenmagazin kraut&rüben und das Magazin für Imker und Bienenfreunde bienen & natur stammen aus dem Hause dlv; ebenso wie das Landtechnik-Magazin traction
                 und AGRARTECHNIK, das Magazin für Landmaschinen-Händler.
        </p>
        <p className="my-3">Zusätzlich finden Sie im dlv-Shop noch die Forst-Zeitschriften Deutscher Waldbesitzer, Forst & Technik sowie 
            AFZ-DerWal
        </p>
        <p className="my-3">Neben Zeitschriften in gedruckter und digitaler Form bieten wir Ihnen in unserem Shop auch eine große Auswahl an Sonderheften, Büchern, Kalendern und Geschenktipps. Auch während Ihrer Ausbildung zum Jäger, Imker oder Agrartechniker begleiten wir Sie zuverlässig mit einem umfangreichen Angebot an Lehrmaterial. Als Zeitschriften-Abonnent erhalten Sie bei vielen dieser Produkte einen speziellen,
             vergünstigten Abonnentenpreis.
             </p>
      </div>
      <div className="footer-service py-12 px-5 md:px-10 max-w-screen-xl mx-auto bg-amber-900 text-white">
        <div className="md:grid grid-cols-4 gap-x-6 items-start">
        <div className="mb-10 flex items-start">
            
        </div>
        <div className="mb-10 flex items-start">
            <h1>Kostenloser Versand</h1>
            <span>für alle Abos sowie für Bücher & Produkte ab 30€ Bestellwert</span>
        </div>
        <div className="mb-10 flex items-start">
            <h1>Kompetenter Kundenservice</h1>
            <span>dank Ihres persönlichen Kundenkontos</span>
        </div>
        <div className="mb-10 flex items-start">
            <h1>SSL-DATENSCHUTZ</h1>
            <span>Ihre Daten werden sicher übertragen!</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
