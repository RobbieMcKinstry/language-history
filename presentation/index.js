// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} 
            transitionDuration={500} 
            theme={theme}>

        {/* Title */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The History of Digital <br/>Programming Languages
          </Heading>
        </Slide>

        {/* About me */}
        <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={2} textColor="secondary">
                Robbie McKinstry
            </Text>
            <Text size={2} textColor="secondary">
                HashiCorp
            </Text>
            <Text size={2} textColor="secondary">
                robbie@hashicorp.com
            </Text>
            <Text size={2} textColor="secondary">
                Pitt CS Class of 2017
            </Text>
        </Slide>

        {/* Overview */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Overview</Heading>
          <Text size={3} textColor="secondary" lineHeight={2}>
            Early Foundational Langs
          </Text>

          <Text size={3} textColor="secondary" lineHeight={2}>
            Structured Languages
          </Text>

          <Text size={3} textColor="secondary" lineHeight={2} >
            1970s-1980s Experimentation
          </Text>

        </Slide>

        {/* The Lambda Calculus */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>The Lambda Calculus</Heading>
          <Text size={1} fit textColor="secondary">
            A mathematical system for expressing functions
          </Text>
          <br/>
          <Text size={3} fit textColor="secondary">
            variable bindings, abstractions, and eventually types
          </Text>
        </Slide>

        {/* The Lambda Calculus 2 */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={1} fit textColor="secondary">
            Modern subset published in 1936 by Alonzo Church
          </Text>
            <br/>
          <Text size={1} fit fill  textColor="secondary">
            Same year Alan Turing defined the Turing Machine
          </Text>
        </Slide>

        {/* Church-Turing Thesis */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Church-Turing Thesis</Heading>
          <Text size={3} textColor="secondary">
            Showed the Lambda Calculus <br/> == <br/> Turing Machines
          </Text>
            <br/>
          <Text size={3} textColor="secondary">
            Showed computers could express any mathematical algorithm
          </Text>
        </Slide>

        {/* No computer */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={2} textColor="secondary" lineHeight={1}>
            No computer with programmable digital memory would exist for 6 years until Turing invented one to defeat the Nazis
          </Text>
        </Slide>
        
        {/* Language but no computer */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={3} textColor="secondary">
            We had a language, but no computer powerful enough to express it
          </Text> 
        </Slide>


        {/* Fortran Challenges */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">10 Years of Silence</Heading>
          <Text size={3} textColor="secondary">
            Computing time was expensive
          </Text> <br/>
          <Text size={3} textColor="secondary">
            Programmer labor was cheap
          </Text><br/>
          <Text size={3} textColor="secondary">
            Wide skepticism that computers could write efficient machine code
          </Text><br/>
        </Slide>


        {/* Fortran 2 */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">Fortran</Heading>
          <Text size={3} textColor="secondary">
            Released in 1956 at IBM by John Backus
          </Text><br/>
          <Text size={3} textColor="secondary">
            First efficient compiler
          </Text><br/>
          <Text size={3} textColor="secondary">
            Developed for scientists and mathematicians
          </Text><br/>
          <Text>
            First time programmers had a "for" loop
          </Text><br/>
        </Slide>


        {/* Dijkstra Quote 1 */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={72}>The sooner we can forget that Fortran ever existed the better.
            </Quote>
            <Text>
            Edsger W. Dijkstra, ACM 1972 Turing Award Speech
            </Text>
          </BlockQuote>
        </Slide>


        {/* Dijkstra Quote 2 */}
         <Slide transition={["fade"]} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={36}>
                Fortran&#39;s tragic fate has been its wide acceptance, mentally chaining thousands and thousands of programmers to our past mistakes. 
            </Quote>
            <Text>
            Edsger W. Dijkstra, ACM 1972 Turing Award Speech
            </Text>
          </BlockQuote>
        </Slide>

        {/* Dijkstra Quote 3 */}
         <Slide transition={["fade"]} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={36}>
                I pray daily that that more of my fellow-programmers may find the means of freeing themselves from the curse of compatibility.
            </Quote>
            <Text>
            Edsger W. Dijkstra, ACM 1972 Turing Award Speech
            </Text>
          </BlockQuote>
        </Slide>

        {/* Lisp */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Lisp</Heading>
          <br/>
          <Text size={3} fit textColor="secondary">
            Invented by John McCarthy (father of modern AI) in 1957
          </Text><br/>
 
          <Text size={3} fit textColor="secondary">
            Designed as an abstraction over the lambda calculus
          </Text> <br/>
          <Text size={1} fit fill textColor="secondary">
            Not implemented for years, though eventually</Text>
          <Text size={1} fit fill textColor="secondary" >given successful hardware support via "Lisp Machines"</Text>
          <br/>
        </Slide>

        {/* Lisp Features */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={3} fit textColor="secondary">
            Heavily used Linked List, Recursion
          </Text><br/>
 
          <Text size={3} fit fill textColor="secondary">
            Metaprogramming made easy with macros
          </Text><br/>

          <Text size={3} fit textColor="secondary">
            Everything is either a function or a linked-list node
          </Text><br/>
        </Slide>

        {/* ALGOL 60 */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">ALGOL 60</Heading>
          <br/>
          <Text size={3} textColor="secondary">
            Designed by commitee
          </Text><br/>
          <Text size={3} textColor="secondary">
            Introduced "scope"
          </Text><br/>
          <Text size={3} textColor="secondary">
            Father of all modern syntax
          </Text>
        </Slide>

        {/* APL */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Array Processing Language</Heading>
          <br/>
          <Text size={3} textColor="secondary">
            Python but for old hipsters
          </Text><br/>
          <Text size={3} textColor="secondary">
            all data is a multidimensional array, everything else is an operator
          </Text><br/>
          <Text size={3} textColor="secondary">
            overloading operators
          </Text>
        </Slide>

        {/* Pascal */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">Pascal, 1970</Heading><br/>
          <Text size={3} textColor="secondary">
            Record types
          </Text><br/>
          <Text size={3} textColor="secondary">
            Beautiful string encoding
          </Text><br/>
          <Text size={3} textColor="secondary">
            subroutines
          </Text><br/>
          <Text size={3} textColor="secondary">
            Apple II
          </Text>
        </Slide>

        {/* Metalanguage */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit fill textColor="secondary">Meta Language (ML)</Heading>
          <br/>
          <Text size={3} textColor="secondary">
            Father of OCaml, Haskell, Scala, F#, Elm
          </Text>
        </Slide>


        {/* ML vs C */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={72}>C and ML were both finished in 73. ML had first-class functions, GC, type inference, algebraic data types, pattern matching, and exceptions.
            </Quote>
            <Text size={3} textColor="secondary">
                Gary Bernhardt, May 20, 2015
            </Text>
          </BlockQuote>
        </Slide>

        {/* Smalltalk */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">Smalltalk, 1980</Heading><br/>
          <Text size={3} textColor="secondary">
            First Object-Oriented Language
          </Text><br/>
          <Text size={3} textColor="secondary">
            Alan Kay at Xerox PARC
          </Text><br/>
          <Text size={3} textColor="secondary">
            All other OOP languages are in some form a 
            bastardization of Kay&rsquo;s dream
          </Text><br/>
          <Text>
            "Message passing as encapsulation"
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={1} fit fill textColor="secondary">
            robbiemckinstry.github.io/language-history
          </Text>
        </Slide>
      </Deck>
    );
  }
}
        /*
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">

            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        */
