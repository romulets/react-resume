import React from 'react';
import Page from './Atoms/Page';
import Title from './Atoms/Title';
import Text from './Atoms/Text';
import Link from './Atoms/Link';
import ProfileImage from './Atoms/ProfileImage'

import List from './Atoms/List';
import ShrinkableSection from './Paritcles/ShrinkableSection';
import Separator from './Atoms/Separator';
import Footer from './Atoms/Footer';

class App extends React.Component {
  render() {
    return (
     <Page>
      <ProfileImage src="./images/profile.png" alt="Profile Image" />
      <Title>Rômulo Massaroth de Farias</Title>
      <Separator />

      <Text>
        Location: Curitiba, Paraná - Brazil <br />
        Address: Rua. Dr. Carlos Bruno Breithaupt, 198, 06 <br />
        Phones: +55 (41) 99674-0951 | +55 (41) 336576-45 <br />
        E-mail: <Link href="email:romulodefarias@gmail.com">romulodefarias@gmail.com</Link>
      </Text>

      <ShrinkableSection title="Javascript and I">
        <Text>My journey with JavaScript began in 2011 developing small websites and silly games, all done in the academy. I really liked to develop and I wanted more. So I ingressed a Full Stack Developer course, focused on PHP, JavaScript with JQuery and MySQL. After this course, I made some freelances (one blog and two landing pages) all using PHP and JavaScript with JQuery.</Text>
        <Text>In 2013 I got hired by a small company from Curitiba called WDS. It was my first interaction with a big projects and I learned a lot about the real world. All my work were done using JQuery.</Text>
        <Text>In 2015 I joined an agency called <Link href="https://polvo.com.br/" target="_blank">Polvo</Link>. There I participated in many projects and the best part of it was the freedom to use new technologies. There I worked with JQuery, Vue.js, Angular 1, Angular 2 and React. I developed some easy projects such as blogs, and more complex ones as e-commerce and specialist systems. The projects which I most contributed to will be listed below.</Text>
        <Text>During this period I started to get more involved in the open source world. Actually, I have never made a useful pull request to a repository, but I was always reading about, trying to contribute on <Link href="https://stackoverflow.com/users/5294057/r%C3%B4mulo-m-farias" target="_blank">StackOverflow</Link> threads, developing some projects on my own and pushing it to my <Link href="https://github.com/romulets" target="_blank">GitHub</Link>.</Text>
        <Text>Since the beginning of  2018, I am working at <Link href="https://www.contabilizei.com.br/" target="_blank">Contabilizei</Link> where we do some pretty cool stuff. We are a company of accountancy, which is pretty complicated in Brazil. The main frontend framework here is Vue.js. Our problems always rely on user experience. How do make such a complicated thing as accountancy easier? It's a hard thing to do.</Text>
        <Text>At the same time, I'm implementing a logistics project called Delivr. It's my Bachelor's Conclusion Work. The frontend is all implemented on React and the mobile is React Native.</Text>
      </ShrinkableSection>

      <ShrinkableSection title="React Projects">
        <List items={[
          {name: 'Prata Fina: Jewels E-commerce', link: 'https://www.pratafina.com.br/', linkDesc: 'e-commerce'},
          {name: 'ChatHub: Chat for github projects', link: 'https://github.com/romulets/ChatHub', linkDesc: 'code'},
          {name: 'Wso2 Example: Frontend development of this example', link: 'https://github.com/romulets/wso2is-example/tree/master/src/main/resources/web-client', linkDesc: 'code'},
          {name: 'Delivr Web: Logistcs system frontend', link: 'https://bitbucket.org/delivrdeliveries/delivr-front/src', linkDesc: 'code'},
          {name: 'Delivr Mobile: Logistcs system mobile', link: 'https://bitbucket.org/delivrdeliveries/delivr-mobile/src/master/', linkDesc: 'code'}
        ]} render={item => <Text>{item.name} - <Link href={item.link} target="_blank">{item.linkDesc}</Link></Text>}/>
      </ShrinkableSection>

      <Separator />

      <Footer>
        <Link href="https://github.com/romulets" target="_blank">Github</Link> | <Link href="https://stackoverflow.com/users/5294057/r%C3%B4mulo-m-farias" target="_blank">StackOverflow</Link> | <Link href="https://www.linkedin.com/in/romulomfarias/?locale=en_US" target="_blank">LinkedIn</Link>
      </Footer>

     </Page>
    );
  }
}

export default App;
