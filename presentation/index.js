// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  city2: require("../assets/anders-2.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/itea-logo.png"),
  mr47Logo: require("../assets/mr47.png"),
  markdown: require("../assets/markdown.png"),
  iteaLogo: require("../assets/itea-logo.png"),
  github: require("../assets/mr47-github.png"),
  smash: require("../assets/building-up-tearing-down_500x400.png"),
  oneComponent: require("../assets/6e55696340d29634cae64f5c544e0e70.jpg")
};

preloader(images);

const theme = createTheme({
    primary: "#F2C031",
    secondary: "white"
}, {
    primary: "Helvetica",
    secondary: { name: "Droid Serif", googleFont: true, styles: [ "400", "700i" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Frontend
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              beyond
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Тренды JS разработки и не только.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.iteaLogo.replace("/", "")} margin="0px auto 40px" height="300px"/>
          </Slide>
          <Slide transition={["slide"]}>
              <Appear fid="1">
                  <Image src={images.mr47Logo.replace("/", "")} margin="0px auto 40px" height="300px"/>
              </Appear>
              <Appear fid="2">
                  <Heading size={1} fit caps lineHeight={1}>
                      Dmitry Poddubniy
                  </Heading>
              </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
              <Layout style={{ justifyContent: "center", alignItems: "center" }}>
                  <Fill>
                      <Image src={images.github.replace("/", "")} style={{ width: "43vw" }}/>
                  </Fill>
              </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} fit caps lineHeight={1}>
                React based presentation.
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>

        <Slide transition={["slide"]} bgImage={images.city2.replace("/", "")} bgDarken={0.75}>
                <Appear fid="1">
                    <Heading size={1} caps fit textColor="primary">
                        Что же будет актульно в
                    </Heading>
                </Appear>
                <Appear fid="2">
                    <Heading size={1} caps fit textColor="tertiary">
                        2K17
                    </Heading>
                </Appear>
                <Appear fid="3">
                    <Heading size={1} caps fit textColor="primary">
                        и прямо сейчас ?
                    </Heading>
                </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
             <List>
                 <Appear><ListItem>Angular 2</ListItem></Appear>
                 <Appear><ListItem>React</ListItem></Appear>
                 <Appear><ListItem>Next.js</ListItem></Appear>
                 <Appear><ListItem>Universal Apps</ListItem></Appear>
                 <Appear><ListItem>Flexible Layouts</ListItem></Appear>
                 <Appear><ListItem>Webpack 2</ListItem></Appear>
                 <Appear><ListItem>And ... </ListItem></Appear>
                 <Appear><ListItem>React?</ListItem></Appear>
             </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
                <Quote>WTF?</Quote>
                <Cite>«Че?»</Cite>
            </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
                <Fill>
                    <Heading size={4} caps textColor="primary" bgColor="white" margin={10}>
                        FLEX
                    </Heading>
                </Fill>
                <Fill>
                    <Heading size={4} caps textColor="primary" bgColor="white" margin={10}>
                        GRID
                    </Heading>
                </Fill>
            </Layout>
        </Slide>

          <Slide transition={["slide"]} bgColor="black">
             <BlockQuote>
               <Quote>Реакт это jQuery 2007?</Quote>
               <Cite>«и да и нет.»</Cite>
             </BlockQuote>
          </Slide>
            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="primary">
                    Что же дал jQuery когда появился :
                </Heading>
                <List>
                    <Appear><ListItem>Удобство</ListItem></Appear>
                    <Appear><ListItem>Скорость</ListItem></Appear>
                    <Appear><ListItem>Универсальность</ListItem></Appear>
                </List>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
                <Heading size={1} fit caps lineHeight={1}>
                    Магия которая покорили нас:
                </Heading>
                <CodePane
                    lang="js"
                    source={require("raw!../assets/jquery.example")}
                    margin="20px auto"
                />
            </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
                <Quote>Keep it simple, stupid</Quote>
                <Cite>«делай это проще, дурачок»</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
                <Image src={images.smash.replace("/", "")} margin="0px auto 40px" height="400px"/>
          </Slide>

            <Slide transition={["slide"]} bgColor="black">
                <BlockQuote>
                    <Quote>One component to rule them all!</Quote>
                    <Cite>«Один компонент чтобы править ими всеми!»</Cite>
                </BlockQuote>
            </Slide>

            <Slide transition={["slide"]} bgColor="white">
                <Image src={images.oneComponent.replace("/", "")} margin="0px auto 40px" height="400px"/>
            </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
