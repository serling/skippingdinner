import React from 'react';

import Page from '../components/page';
import Heading from '../components/heading';
import Text from '../components/text';
import Link from '../components/link';
import Title from '../components/title';
import Row from '../components/row';
import Transform from '../components/transform';

const Home = () => (
  <Page>
    <Row>
      <Row.Content>
        <div>
          <Title>Skipping Dinner Improv</Title>
          <Transform>
            <Text theme={Text.themes.handwritten}>we make comedy</Text>
          </Transform>
        </div>
      </Row.Content>
    </Row>
    <Row>
      <Row.Content column={Row.columns.two}>
        <div>
          <Heading>
            Who <span className="heading__italic">are</span> we?
          </Heading>
          <Text>
            We are a group of versatile Norwegian improvisers and comedians born
            out of the improv theater community at Chateu Neuf in Oslo. Our
            style is spontaneous, with an endless affection for comedy,
            silliness and fun. We perform in both English og norsk. And
            sometimes gibberish.
          </Text>
        </div>
      </Row.Content>
    </Row>
    <Row>
      <Row.Content column={Row.columns.two}>
        <div>
          <Heading>
            What's our <span className="heading__bloated">deal</span>?
          </Heading>
          <Text>
            We offer tailored comedy shows, primarily through improv theater,
            stand-up, and presentations. Great for bringing friends together
            outside or in the workplace — at a conference, event or party. You
            might even learn a little something about yourself. Or not.
          </Text>
        </div>
      </Row.Content>
    </Row>
    <Row background={Row.backgrounds.primary}>
      <Row.Content>
        <Text theme={Text.themes.quote} quoteSource="HR, Shortcut">
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
            How can we <span className="heading__crooked">make</span> this
            happen?
          </Heading>
          <Text>
            Our business is flexible by nature, and requires very little on your
            part. We do the heavy lifting, whether you need a 30-minute spot
            next month or a full evening of comedy this coming week. Send us a
            message or buy us a cup of coffee. Either way,{' '}
            <Link
              href="mailto:skippingdinnerimprov@gmail.com"
              text="let's talk"
              icon="➞"
              theme={Link.themes.underlined}
            />
          </Text>
        </div>
      </Row.Content>
    </Row>
  </Page>
);

export default Home;
