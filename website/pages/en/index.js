/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react")

const CompLibrary = require("../../core/CompLibrary.js")
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + "/siteConfig.js")

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: "_self"
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
)

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
)

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
)

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || ""
    return (
      <SplashContainer>
        <Logo img_src={imgUrl("favicon.png")} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl("situations.html", language)}>
              Apprendre l'essentiel
            </Button>
            <Button href={docUrl("dictionary.html", language)}>
              Chercher un mot
            </Button>
            <Button href={docUrl("expressions.html", language)}>
              Voir des expressions cools
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
)

const CoursesSection = props => (
  <div className="productShowcaseSection paddingBottom">
    <h2>Envie de s'exercer progressivement ?</h2>
    <p>
      Retrouvez des cours comprenant des règles de base, un thème de
      conversation, suivis d'exercices
    </p>
    <div className="more-users">
      <a className="button" href={docUrl("courses.html", props.language)}>
        Accéder aux cours
      </a>
    </div>
  </div>
)

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: "Langage super cool à apprendre",
        image: imgUrl("fr.png"),
        imageAlign: "top",
        title: "Français"
      },
      {
        content:
          "Wepaje 🤓",
        image: imgUrl("hisp.png"),
        imageAlign: "top",
        title: "Latino"
      }
    ]}
  </Block>
)

const Vocabulary = props => (
  <div className="productShowcaseSection">
    <h2>Envie de parler français au quotidien ?</h2>
    <p>Découvrez le vocabulaire de la vie courante</p>
    <div>
      <a className="button" href={docUrl("food.html", props.language)}>
        C'est parti !
      </a>
    </div>
  </div>
)

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      )
    })

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  )
}

class Index extends React.Component {
  render() {
    let language = this.props.language || ""

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <CoursesSection />
          <Vocabulary />
          <Features />
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    )
  }
}

module.exports = Index
