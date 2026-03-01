import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavHashLink} smooth to="#top" className="logo-link">
            Villen sali sivu
            <span className="logo-bg"></span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavHashLink smooth className="nav-link" to="#perusliikkeet">
                Perusliikkeet
              </NavHashLink>
              <NavHashLink smooth className="nav-link" to="#treeniohjelma">
                Treeniohjelma
              </NavHashLink>
              <NavHashLink smooth className="nav-link" to="#palautuminen_ja_ravinto">
                Palautuminen ja ravinto
              </NavHashLink>
              <NavHashLink smooth className="nav-link" to="#yhteystiedot">
                Yhteystiedot
              </NavHashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ paddingTop: "50px" }}>

        <section id="top">
         <div className="hero">
          <div className="hero-text">
            <h2>Opas kuntosaliharjoittelun perusteisiin aloittelijoille</h2>
          </div>
        </div>
        </section>

        <section style={{ paddingTop: "20px" }}>
          <p>
          Kuntosaliharjoittelu on yksi tehokkaimmista tavoista kehittää lihasvoimaa, parantaa kehonhallintaa ja tukea kokonaisvaltaista hyvinvointia. Aloittelijalle kuntosali voi kuitenkin tuntua sekavalta: laitteita on paljon, liikkeiden nimet ovat vieraita ja harjoittelun aloittaminen saattaa jännittää. 
          Tämän sivuston tarkoituksena on tarjota selkeä ja helposti lähestyttävä kokonaisuus kuntosaliharjoittelun perusteista. Sisältö on suunniteltu erityisesti mobiilikäyttöön, jotta voit tarkistaa ohjeita ja vinkkejä myös salilla harjoituksen aikana. 
          Sivustolla käydään läpi tärkeimmät perusliikkeet, esimerkkejä harjoitusohjelmista sekä palautumisen ja ravinnon merkitystä osana kehittymistä. 
          </p>
        </section>

        <section id="perusliikkeet" >
          <h2>Perusliikkeet</h2>
        </section>

         <section className="kuvat1">
            <div className="image kuva1"></div>
            <div className="image kuva11"></div>
            <div className="image kuva111"></div>
          </section>
         <section style={{ paddingTop: "20px" }}> 
          <p>  
          Perusliikkeet ovat voimaharjoittelun kulmakivi. Ne kuormittavat useita lihasryhmiä samanaikaisesti ja kehittävät kehoa kokonaisvaltaisesti. Aloittelijan kannalta perusliikkeet ovat erinomainen tapa rakentaa vahva pohja tulevalle harjoittelulle, sillä ne parantavat lihasvoiman lisäksi tasapainoa, koordinaatiota ja kehonhallintaa. 
          Yksi tärkeimmistä perusliikkeistä on kyykky. Kyykky aktivoi erityisesti alavartalon lihaksia, kuten reisilihaksia ja pakaroita, mutta vaatii myös keskivartalon tukea. Oikein suoritettuna kyykky kehittää koko kehoa ja auttaa parantamaan arjen liikkumista. Aloittelijan on tärkeää keskittyä liikeradan hallintaan ja rauhalliseen suoritukseen ennen painojen lisäämistä. 
          Penkkipunnerrus on klassinen ylävartalon perusliike, joka kohdistuu rintalihaksiin, hartioihin ja ojentajiin. Liike opettaa hallitsemaan painoa vakaasti ja kehittää ylävartalon työntövoimaa. Turvallisuuden kannalta oikea asento ja hallittu liike ovat olennaisia, erityisesti silloin, kun harjoitus tehdään vapailla painoilla. 
          Maastaveto on yksi tehokkaimmista koko kehoa kuormittavista liikkeistä. Se vahvistaa selkää, pakaroita ja jalkoja sekä opettaa oikeaa nostotekniikkaa. Maastaveto kehittää kehon kykyä tuottaa voimaa turvallisesti ja tukee hyvää ryhtiä. Aloittelijan kannattaa opetella liike aluksi kevyillä painoilla ja keskittyä neutraaliin selän asentoon. 
          Perusliikkeiden opettelu vaatii kärsivällisyyttä, mutta niiden hallinta luo vahvan perustan kaikelle myöhemmälle harjoittelulle. Kun tekniikka on kunnossa, harjoittelusta tulee turvallisempaa ja tulokset näkyvät nopeammin. 
          </p>
        </section>

        <section style={{paddingTop: "20px" }}>
          <h2>Kyykkytekniikka</h2>
          <div className="ratio ratio-16x9">
            <iframe width="1892" height="1074" src="https://www.youtube.com/embed/fE5BWPy7uRc" 
            title="How To PROPERLY Hack Squat With Proper Form" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </section>

        <section id="treeniohjelma" style={{ paddingTop: "20px" }}>
           <div className="kuva2">
            <div className="hero-text">
            <h2>Treeniohjelma</h2>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "20px"}}>
            <p> 
            Treeniohjelma auttaa tuomaan harjoitteluun rakennetta ja säännöllisyyttä. Ilman selkeää ohjelmaa harjoittelu voi jäädä satunnaiseksi, mikä hidastaa kehitystä ja heikentää motivaatiota. Aloittelijan kannalta yksinkertainen ja helposti noudatettava ohjelma on usein paras vaihtoehto. 
            Yksi suosituimmista ratkaisuista aloittelijoille on koko kehon treeniohjelma. Tällaisessa ohjelmassa harjoitetaan kaikkia suuria lihasryhmiä saman harjoituskerran aikana. Tämä mahdollistaa tehokkaan harjoittelun 2–3 kertaa viikossa ja tarjoaa riittävästi palautumisaikaa treenien välissä. 
            Treeniohjelmassa on tärkeää huomioida liikkeiden järjestys. Suuret ja raskaat liikkeet, kuten kyykky ja maastaveto, tehdään yleensä harjoituksen alussa, kun keho on vielä virkeä. Tämän jälkeen voidaan siirtyä kevyempiin apuliikkeisiin, jotka kohdistuvat yksittäisiin lihasryhmiin. 
            Progressiivinen kuormitus on keskeinen osa kehittymistä. Tämä tarkoittaa sitä, että harjoittelun haastavuutta lisätään vähitellen esimerkiksi painoja, toistoja tai sarjoja kasvattamalla. Muutokset tulee tehdä maltillisesti, jotta keho ehtii sopeutua ja loukkaantumisriski pysyy pienenä. 
            Hyvä treeniohjelma ei ole liian monimutkainen. Aloittelijan ei tarvitse käyttää tuntikausia salilla tai suorittaa kymmeniä eri liikkeitä. Säännöllisyys, hyvä tekniikka ja realistiset tavoitteet ovat avainasemassa pitkäaikaisen kehityksen kannalta. 
          </p>
        </section>

        <section id="palautuminen_ja_ravinto" >
          <h2>Palautuminen ja ravinto</h2>
        </section>

        <section className="kuvat2" style={{ paddingTop: "20px" }}>
          <div className="image kuva3"></div>
            <div className="image kuva4"></div>
        </section>

        <section style={{ paddingTop: "20px" }}>
          <p> 
            Palautuminen on olennainen osa voimaharjoittelua, vaikka se usein jää vähemmälle huomiolle. Harjoittelun aikana lihaksiin syntyy mikroskooppisia vaurioita, jotka korjaantuvat levon aikana. Juuri tämä palautumisprosessi mahdollistaa lihasten kasvun ja voiman lisääntymisen. 
            Riittävä uni on yksi tärkeimmistä palautumiseen vaikuttavista tekijöistä. Unen aikana keho erittää kasvuhormonia, joka tukee lihasten korjaantumista ja kehittymistä. Aloittelijan tulisi pyrkiä nukkumaan säännöllisesti ja riittävästi, jotta harjoittelun hyödyt maksimoituvat. 
            Ravinto tukee palautumista ja antaa keholle energiaa harjoitteluun. Erityisesti proteiini on tärkeää lihasten korjaantumiselle ja kasvulle. Hyviä proteiinin lähteitä ovat esimerkiksi kana, kala, maitotuotteet, palkokasvit ja kananmunat. Myös hiilihydraatit ovat tärkeitä, sillä ne täydentävät lihasten energiavarastoja. 
            Nesteytys vaikuttaa merkittävästi kehon suorituskykyyn ja palautumiseen. Riittävä veden juominen auttaa kehoa toimimaan optimaalisesti ja ehkäisee väsymystä. Harjoittelun jälkeen nestehukan korjaaminen on tärkeää, erityisesti intensiivisten treenien yhteydessä. 
            Palautumista tukevat myös kevyet liikkuvuusharjoitukset ja venyttely. Ne parantavat verenkiertoa ja auttavat vähentämään lihasjäykkyyttä. Aloittelijan kannattaa kuunnella omaa kehoaan ja antaa sille riittävästi aikaa toipua harjoituksista.
          </p>
        </section>
          
        <section id="yhteystiedot"  style={{ paddingTop: "20px" }}>
         <h2>Yhteystiedot</h2>
        <section/>

        <section className="yht" style={{ paddingBottom: "350px"}} > 
          <div className="yht-teksti">
            <p>
            Tässä vielä yhteystietoni, niin voit kysyä epäselväksi jääneitä seikkoja!
            </p>
            <h4>
              Puhelinnumero: +358401234567
            </h4>
            <h4>
              Sähköposti: etunimi.sukunimi@gmail.com
            </h4>
            <h4>
              Osoite: Kauppakatu 45, 70110 Kuopio
            </h4>
          </div>
          <div className="yht-media">
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1818.003979645696!2d27.6756475793457!3d62.89253789999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4684b089658d1c65%3A0xd03a8f4a4fbec3ea!2sKuopion%20Tori!5e0!3m2!1sfi!2sfi!4v1772376063420!5m2!1sfi!2sfi" 
              width="600" height="450" 
              style={{ border: 0 }} allowfullscreen="" 
              loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          <div className="yht-kuva"></div>
          </div>
          </section>

        </section>
      </Container>
    </Router>
  );
}

export default App;