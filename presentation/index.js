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
    Text,
    S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg"),
    city2: require("../assets/anders-lq.jpg"),
    logo: require("../assets/itea-logo.png"),
    mr47Logo: require("../assets/mr47.png"),
    markdown: require("../assets/markdown.png"),
    iteaLogo: require("../assets/itea-logo.png"),
    github: require("../assets/mr47-github.png"),
    smash: require("../assets/building-up-tearing-down_500x400.png"),
    oneComponent: require("../assets/6e55696340d29634cae64f5c544e0e70.jpg"),
    reactNative: require("../assets/react-native-example.jpg"),
    nativeScript: require("../assets/cross-platform-rendering-angular.png"),
    uxGif: require("../assets/image_2928.gif")
};

preloader(images);

const theme = createTheme({
    primary: "#F2C031",
    secondary: "white",
    third: "#5b74f2"
}, {
    primary: "Helvetica",
    secondary: {name: "Droid Serif", googleFont: true, styles: ["400", "700i"]}
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
                        <Layout style={{justifyContent: "center", alignItems: "center"}}>
                            <Fill>
                                <Image src={images.github.replace("/", "")} style={{width: "43vw"}}/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading size={1} fit caps lineHeight={1}>
                            <Text>1,077</Text> <span style={{color: "white"}}>contributions</span>
                        </Heading>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary"
                           notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
                            <Appear>
                                <Heading size={4} capss textColor="third">
                                    Frameworks:
                                </Heading>
                            </Appear>
                            <Appear>
                                <ListItem>Angular 2</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>React</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Vue</ListItem>
                            </Appear>
                        </List>
                        <List>
                            <Appear>
                                <Heading size={4} caps textColor="third">
                                    JavaScript:
                                </Heading>
                            </Appear>
                            <Appear>
                                <ListItem>Flow</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>TypeScript</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <List>
                            <Appear>
                                <Heading size={4} capss textColor="black">
                                    Еще горячее:
                                </Heading>
                            </Appear>
                            <Appear><ListItem>Yarn</ListItem></Appear>
                            <Appear><ListItem>Next.js</ListItem></Appear>
                            <Appear><ListItem>Styled-components</ListItem></Appear>
                            <Appear><ListItem>gl-React</ListItem></Appear>
                            <Appear><ListItem>Flexible Layouts</ListItem></Appear>
                            <Appear><ListItem>Webpack 2</ListItem></Appear>
                            <Appear><ListItem>GraphQL</ListItem></Appear>
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
                            <Appear><ListItem>Скорость разработки</ListItem></Appear>
                            <Appear><ListItem>Универсальность</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Магия которая покорила нас:
                        </Heading>
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/jquery.example")}
                            margin="20px auto"
                        />
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

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>UI/UX become is more and more important</Quote>
                            <Cite>«UI / UX становятся все более и более важным»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.uxGif.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading caps fit size={1} textColor="white">
                            NativeScript
                        </Heading>
                        <Heading caps fit size={1} textColor="black">
                            React Native
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.nativeScript.replace("/", "")} height="500px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.reactNative.replace("/", "")} height="500px"/>
                    </Slide>

                    <Slide transition={["slide","fade"]} bgColor="secondary" textColor="primary">
                        <List>
                            <Appear><ListItem>Следите за трендами, а не следуйте</ListItem></Appear>
                            <Appear><ListItem>Изучайте больше</ListItem></Appear>
                            <Appear><ListItem>Отдыхайте</ListItem></Appear>
                            <Appear><ListItem>Курсы хороший способ начать</ListItem></Appear>
                            <Appear><ListItem>KISS</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["zoom", "slide"]} bgColor="black">
                        <Link href="http://itea.ua"><Image width="100%" src={images.iteaLogo}/></Link>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
