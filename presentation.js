import React from "react";
import { render } from "react-dom";
import {
  Deck,
  Slide,
  Heading,
  Link,
  Text,
  Appear,
  Image,
  List,
  ListItem,
  Code
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import CanvasSlide from "./tools/CanvasSlide.js";
import CanvasSlide2 from "./tools/CanvasSlide2.js";
import midiControl from "./tools/midiControl.js";

const controls = midiControl("Launch Control MIDI 1");

const theme = createTheme(
  {
    primary: "#050505",
    secondary: "#fbfbfb",
    tertiary: "#fbfbfb",
    quarternary: "#fbfbfb"
  },
  {
    primary: "'DejaVu Sans', Helvetica, sans-serif"
  }
);

const defaultSlideProps = {
  align: "flex-start top",
  className: "default-slide"
};

function AppearingBlock(props) {
  return (
    <Appear {...props}>
      <div>{props.children}</div>
    </Appear>
  );
}

function SmallText(props) {
  let className = `small-text ${props.className}`;
  return (
    <Text {...props} className={className}>
      {props.children}
    </Text>
  );
}

function H1(props) {
  return (
    <Heading caps size={1} lineHeight={1.25} {...props}>
      {props.children}
    </Heading>
  );
}

function H2(props) {
  return (
    <Heading caps size={2} lineHeight={1.25} textAlign="left" {...props}>
      {props.children}
    </Heading>
  );
}

function H3(props) {
  return (
    <Heading size={3} lineHeight={1.25} textAlign="center" {...props}>
      {props.children}
    </Heading>
  );
}

const DEFAULT_VALUES_SIMPLE_DEMO = {
  EL_WIDTH: 200,
  EL_DEG: 24,
  EL_PADDING: 5,
  TOTAL_WIDTH: 625,
  TOTAL_HEIGHT: 150,
  EXTRA_HEIGHT_LOWER_BOUND: 0,
  EXTRA_HEIGHT_UPPER_BOUND: 0,
  COLUMN_HEIGHT_LOWER_BOUND: 70,
  SCALE_LOWER_BOUND: 1,
  SCALE_UPPER_BOUND: 1,
  COLOR_MODE: 0,
  NOISE: false
};

const DEFAULT_VALUES_SCALE_DEMO = {
  EL_WIDTH: 32,
  EL_DEG: 24,
  EL_PADDING: 5,
  TOTAL_WIDTH: 800,
  TOTAL_HEIGHT: 200,
  EXTRA_HEIGHT_LOWER_BOUND: 0,
  EXTRA_HEIGHT_UPPER_BOUND: 0,
  COLUMN_HEIGHT_LOWER_BOUND: 200,
  SCALE_LOWER_BOUND: 1,
  SCALE_UPPER_BOUND: 1,
  COLOR_MODE: 0,
  NOISE: false
};

const DEFAULT_VALUES_COLOR_DEMO = {
  EL_WIDTH: 32,
  EL_DEG: 24,
  EL_PADDING: 5,
  TOTAL_WIDTH: 1700,
  TOTAL_HEIGHT: 110,
  EXTRA_HEIGHT_LOWER_BOUND: 0,
  EXTRA_HEIGHT_UPPER_BOUND: 0,
  COLUMN_HEIGHT_LOWER_BOUND: 35,
  SCALE_LOWER_BOUND: 1,
  SCALE_UPPER_BOUND: 1,
  COLOR_MODE: 0,
  NOISE: false
};

const DEFAULT_VALUES_NOISE_DEMO = {
  EL_WIDTH: 32,
  EL_DEG: 24,
  EL_PADDING: 5,
  TOTAL_WIDTH: 1700,
  TOTAL_HEIGHT: 110,
  EXTRA_HEIGHT_LOWER_BOUND: 0,
  EXTRA_HEIGHT_UPPER_BOUND: 0,
  COLUMN_HEIGHT_LOWER_BOUND: 35,
  SCALE_LOWER_BOUND: 1,
  SCALE_UPPER_BOUND: 1,
  COLOR_MODE: 2,
  NOISE: false
};

function Presentation() {
  return (
    <Deck theme={theme} transition={[]} progress="none" controls={false}>
      <Slide {...defaultSlideProps} align="center center">
        <H1 textAlign="center">
          Hvordan lage millioner av unike grafiske elementer
        </H1>
        <SmallText>eller</SmallText>
        <Text>Intro til Generative Metoder for Grafikk</Text>
        <SmallText>&nbsp;</SmallText>
        <SmallText>Stian Veum Møllersen / @mollerse</SmallText>
        <SmallText>Digital Historieutvikling NRK</SmallText>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Generative Systemer</H2>
        <Text textAlign="left">
          Et generativt system er et system som genererer et resultat basert på
          et sett med regler.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Generativ grafikk</H2>
        <Text textAlign="left">
          Generativ grafikk, eller «procedural graphics», er en type generativt
          system.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Brukes i alt fra spill, film og grafikk til 3D-printing og lyd.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image src="assets/valg06.png" width="75%" />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image
          src="assets/valg03.jpeg"
          width="30%"
          style={{ margin: "auto 1.5%", float: "left" }}
        />
        <Image
          src="assets/valg04.jpg"
          width="30%"
          style={{ margin: "auto 1.5%", float: "left" }}
        />
        <Image
          src="assets/valg05.JPG"
          width="30%"
          style={{
            margin: "auto 1.5%",
            float: "left",
            transform: "rotate(90deg)"
          }}
        />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image
          src="assets/valg01.png"
          width="45%"
          style={{ margin: "auto 2.5%", float: "left" }}
        />
        <Image
          src="assets/valg02.png"
          width="45%"
          style={{ margin: "auto 2.5%", float: "left" }}
        />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image src="assets/valg10.png" width="100%" />
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        {/* Demoe basic parametre: antall + farger */}
        <CanvasSlide
          controls={controls}
          sketch={"profildemo"}
          defaultValues={DEFAULT_VALUES_SIMPLE_DEMO}
        />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Kombinatoriske Eksplosjoner</H2>
        <Text textAlign="left">
          Et generativt system er interessant på grunn av kombinatoriske
          eksplosjoner.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            En kombinatorisk eksplosjon oppstår når du kombinerer variable
            parametre på en måte som øker utfallsrommet eksponensielt.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        {/* Demoe fler parametere: Høyde, scale, margins */}
        <CanvasSlide
          controls={controls}
          sketch={"profildemo"}
          defaultValues={DEFAULT_VALUES_SCALE_DEMO}
        />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Parametre</H2>
        <Text textAlign="left">
          Å finne gode parametre er nøkkelen til gode generative systemer.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Hva er et godt parameter? Hvilke avgrensninger gir mening? Hvilke
            terkselverdier skal vi ha?
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Dette gjør generative systemer "Easy to learn, hard to master".</H3>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        {/* Demoe fler parametere: Farge-rekkefølger */}
        <CanvasSlide
          controls={controls}
          sketch={"profildemo"}
          defaultValues={DEFAULT_VALUES_COLOR_DEMO}
        />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Tilfeldigheter</H2>
        <Text textAlign="left">
          Vi kan også la datamaskinen velge ting for oss.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Datamaskinen er mye flinkere enn mennesker til å ta tilfeldige valg.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Tilfeldigheter</H2>
        <Text textAlign="left">
          Tilfeldighet er ikke alltid like enkelt. Spesielt ikke i en visuell
          kontekst. Mennesker liker ikke for mye kaos.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Derfor må vi være litt smarte i hvordan vi bruker tilfeldighet.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide2">
        <CanvasSlide2 controls={controls} sketch={"randomline"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Pseudorandom</H2>
        <Text textAlign="left">
          Det finnes heldigvis en løsning for dette: Pseudorandom Number
          Generators (PRNG).
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Dette er deterministiske funksjoner som gir oss interessant nok
            output gitt en input.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide2">
        <CanvasSlide2 controls={controls} sketch={"simplex"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Ken Perlin</H2>
        <Text textAlign="left">
          Opphavsmannen til den mest kjente metoden for pseudorandom innen
          grafikk: Perlin Noise.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Oppfunnet i 1982 til bruk i filmen Tron, som han også vant en
            Technical Achievement Oscar for i 1997.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Simplex Noise</H2>
        <Text textAlign="left">
          Arvtageren til Perlin Noise. Samme prinsipp, bare kjappere og med
          færre visuelle artefakter.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">Oppfunnet i 2001 av Ken Perlin.</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide2">
        <CanvasSlide2 controls={controls} sketch={"simplex"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Gradient noise</H2>
        <Text textAlign="left">
          Prinsippet bak Perlin og Simplex noise kalles gjerne gradient noise.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Generaliserer utrolig bra til flere dimensjoner.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide2">
        <CanvasSlide2 controls={controls} sketch={"2d"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Nyttig</H2>
        <Text textAlign="left">
          Dette kan brukes til utrolig mange ting. Fordi vi får verdier i{" "}
          <Code>[-1, 1]</Code> kan det mappes til nesten hva som helst.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Effekter</H2>
        <Text textAlign="left">
          Simplex noise kan utnyttes til å lage mer interessante effekter, feks
          linjer som ser mer naturlige ut.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            For å gjøre dette, låner vi noen triks fra additiv syntese.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide2">
        <CanvasSlide2 controls={controls} sketch={"simplexoctaves"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Naturlig</H2>
        <Text textAlign="left">
          Den forutsigbare oppførselen til Simplex noise lar oss øke den
          visuelle kompleksiteten, uten å miste det naturlige preget.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        {/* Demoe noisy */}
        <CanvasSlide
          controls={controls}
          sketch={"profildemo"}
          defaultValues={DEFAULT_VALUES_NOISE_DEMO}
        />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps} align="center center">
        <H3>Nå kan vi generere uendelig mange gøyale profil-elementer.</H3>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Så, hva nå?</H3>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Kurasjon</H2>
        <Text textAlign="left">
          Arbeidsflyten endrer seg fra å produsere design til å kurere design
          produsert av en datamaskin.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Da er det greit å ha basert seg på deterministiske PRNGer. Siden vi
            får muligheten til å gjenskape et resultat eksakt.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Image src="assets/valg07.png" height="100%" />
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Kompleksitet</H2>
        <Text textAlign="left">
          Det er utfordrende å slippe løs noe som kan lage et så stort spekter
          av ting.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Vi endte opp med å begrense systemet en del i hvilke typer output vi
            ville ha.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image src="assets/valg08.png" width="75%" />
        <Image src="assets/valg09.png" width="75%" />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image src="assets/valg11.png" width="75%" />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image src="assets/valg12.png" width="75%" />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image src="assets/valg13.png" width="75%" />
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Image
          src="assets/valg01.png"
          width="45%"
          style={{ margin: "auto 2.5%", float: "left" }}
        />
        <Image
          src="assets/valg02.png"
          width="45%"
          style={{ margin: "auto 2.5%", float: "left" }}
        />
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Kompleksitet</H2>
        <Text textAlign="left">
          Til tross for at vi ikke slapp det generative systemet 100% løst, var
          erfaringene fortsatt positive.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Nye verktøy</H2>
        <Text textAlign="left">
          Dette er fortsatt et ganske nytt verktøy for oss.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Det vil kreve endring i arbeidsmåte både for utviklere og designere
            hvis vi vil få mer ut av det.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Potensiale</H2>
        <Text textAlign="left">
          Generative systemer har et potensiale til å berike og informere
          designprosessen, uten å på noen måte erstatte den.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Text>En slags prosess</Text>
        <br />
        <List ordered>
          <Appear>
            <ListItem>Start enkelt</ListItem>
          </Appear>
          <Appear>
            <ListItem>Parametriser</ListItem>
          </Appear>
          <Appear>
            <ListItem>Multipliser</ListItem>
          </Appear>
          <Appear>
            <ListItem>Eksperimenter</ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Text textAlign="center">Bonus: </Text>
        <br />
        <Text textAlign="left">
          Siden vi har en måte å lage gøyale linjer, så burde vi jo gjøre noe
          kreativt med dem.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide2">
        <CanvasSlide2 controls={controls} sketch={"joydivision"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps} align="center center">
        <H3>Oppsummert:</H3>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Generative systemer er gøyale</H3>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Valg av parametre og grenseverdier er mesteparten av jobben</H3>
        <Appear>
          <Text>Noen ganger er det best å ikke parametrisere</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Kurasjon isteden for produksjon</H3>
        <Appear>
          <Text>Husk deterministiske PRNGer!</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Utviklere nærmer seg design</H3>
        <AppearingBlock>
          <H3>&amp;</H3>
        </AppearingBlock>
        <AppearingBlock>
          <H3>Designere nærmer seg utvikling</H3>
        </AppearingBlock>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <Text>(Hot tips: Kreativ Programmering)</Text>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H1>Takk for meg!</H1>
        <SmallText>Stian Veum Møllersen / @mollerse</SmallText>
        <SmallText>Digital Historieutvikling NRK</SmallText>
        <br />
        <SmallText>
          slides:{" "}
          <Link href="https://mollerse.github.io/prog-fag-2019-presentation/">
            mollerse.github.io/prog-fag-2019-presentation
          </Link>
        </SmallText>
      </Slide>
    </Deck>
  );
}
const mount = document.createElement("div");
document.body.appendChild(mount);
render(<Presentation />, mount);
