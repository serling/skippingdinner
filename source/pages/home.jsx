import React from 'react';

import Page from '../components/page';
import Heading from '../components/heading';
import Text from '../components/text';
import Link from '../components/link';
import List from '../components/list';
import Row from '../components/row';
import Transform from '../components/transform';
import Snippet from '../components/snippet';
// import Background from '../components/background';

const Home = () => (
  <Page>
    <Row>
      <Row.Content column={Row.columns.two}>
        <div>
          <Heading>
            Who <Snippet theme={Snippet.themes.slanted}>are</Snippet> we?
          </Heading>
          <Text>
            We are a group of versatile Norwegian improvisers and comedians born
            out of the improv theater community at Chateu Neuf in Oslo. Our
            style is spontaneous, with an endless affection for comedy,
            silliness and fun. We perform in both English og norsk. And
            sometimes gibberish.
          </Text>
          <Transform rotate={-2} translate={{ x: '0.5em', y: '0' }}>
            <Link href="#" icon="—>" theme={Link.themes.handwritten}>
              check us out
            </Link>
          </Transform>
        </div>
      </Row.Content>
    </Row>
    <Row>
      <Row.Content column={Row.columns.two}>
        {/* <div>
          <Transform translate={{ x: '-24rem', y: 'calc(6rem + 4px)' }}>
            <Background imageSrc={'../assets/more-people.jpg'} />
          </Transform>
        </div> */}
        <div>
          <Heading>
            What's our <Snippet theme={Snippet.themes.bloated}>deal</Snippet>?
          </Heading>
          <Text>
            We offer tailored comedy shows, primarily through improv theater,
            stand-up, and presentations. Great for bringing friends together
            outside or in the workplace — at a conference, event or party. You
            might even learn a little something about yourself.{' '}
            <Snippet theme={Snippet.themes.handwritten}>Or not...</Snippet>
          </Text>
          <List>
            <Link href="#testimonials" theme={Link.themes.button} icon="➞">
              Testimonials
            </Link>
          </List>
        </div>
      </Row.Content>
    </Row>
    <Row background={Row.backgrounds.primary}>
      <Row.Content>
        <Text theme={Text.themes.quote} quoteSource="Ola Nordmann, Bedrift">
          The fact that the themes linked the corporate world and comedy
          together, was a magnificent reinforcement of the vital role humour
          plays within the workplace. The improv comedy session created some
          hilarious and unforgettable moments.
        </Text>
      </Row.Content>
    </Row>
    <Row>
      <Row.Content column={Row.columns.two}>
        <div>
          <Heading>
            How can we <Transform rotate={-5}>make</Transform> this happen?
          </Heading>
          <Text>
            Our business is flexible by nature. We do the heavy lifting, whether
            you need a 30-minute spot next month or a full evening of comedy
            this coming week. Send us a message or invite us for a cup of
            coffee. Either way, lets talk!
          </Text>
          <List>
            <Link href="#contact" theme={Link.themes.button} icon="➞">
              Contact us
            </Link>
          </List>
        </div>
      </Row.Content>
    </Row>
  </Page>
);

export default Home;
