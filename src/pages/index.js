import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../components/theme';
import Hero from '../system-components/Hero';
import Section from '../system-components/Section';
import Button from '../system-components/Button';
import IconButton from '../system-components/IconButton';
import { Row, Column } from '@react-tiny-grid/core';

import H1 from '../system-components/H1';
import H2 from '../system-components/H2';
import Span from '../system-components/Span';
import Card from '../system-components/Card';
import Alert from '../system-components/Alert';
import Info from '../system-components/Info';
import Container from '../system-components/Container';
import Layout from '../components/layout';
import Paragraph from '../system-components/Paragraph';
import Input from '../system-components/Input';
import Flex from '../system-components/Flex';

const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = async (e) => {
    setSubmittedOnce(true);
    setError(false);
    if (regex.test(email)) {
      const res = await fetch('/.netlify/functions/signup', {
        method: 'post',
        body: JSON.stringify({
          email,
        }),
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log('data from function', data);
          setSubmitSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setSubmitError(true);
        });
    } else {
      setError(true);
    }
  };

  const onChange = (e) => {
    if (!regex.test(e.target.value) && submittedOnce) {
      setError(true);
    } else {
      setError(false);
    }
    setEmail(e.target.value);
  };

  return (
    <Layout>
      <Helmet>
        <title>SystemUI - Custom UI kits for your brand</title>
      </Helmet>
      <Hero
        background="#ffffff"
        customStyles="padding-top: 24px; text-align: center; @media(min-width: 769px){text-align: left;}"
      >
        <Row spacing={[12]} breakpoints={[769]}>
          <Column widths={[8]}>
            <H1
              display
              customStyles="text-align: center; @media(min-width: 769px){text-align: left;}"
            >
              Create a <Span color="primary">fully-custom</Span> UI kit for your
              brand
            </H1>
            <Paragraph
              customStyles="text-align: center; @media(min-width: 769px){text-align: left;}"
              size="lg"
            >
              SystemUI lets you generate your own UI kit that doesn't limit your
              brand with hard-to-style components. Perfect for startups and
              small businesses.
            </Paragraph>
          </Column>
        </Row>
        <br />
        <Paragraph size="sm">
          Sign up to be notified when SystemUI is released.
        </Paragraph>

        {!submitError && !submitSuccess ? (
          <>
            <Flex
              hAlign="flex-start"
              customStyles="@media(max-width: 768px){flex-direction: column; margin: 0 auto;} max-width: 400px;"
            >
              <Input
                state={error ? 'error' : null}
                color={error ? 'error' : 'primary'}
                fullWidth
                placeholder="user@mail.com"
                customStyles="height: 46px;"
                placeholder="user@mail.com"
                onChange={onChange}
              />
              <Button
                customStyles="height: 46px; padding-top: 0; padding-bottom: 0; margin-left: 16px; @media(max-width: 768px){width: 100%; margin-top: 12px; margin-left: 0;} white-space: nowrap;"
                color="primary"
                onClick={onSubmit}
              >
                Deal me in!
              </Button>
            </Flex>
          </>
        ) : submitError ? (
          <Alert
            color="error"
          >
            Ah, snap! There was an error signing you up. If you'd still like to
            subscribe, you can email me at jarodpeachey@gmail.com and I'll add
            you manually.
          </Alert>
        ) : (
          <Alert color="success">
            You've been successfully signed up! Check your email for a
            confirmation link, and then you're good to go!
          </Alert>
        )}
      </Hero>
      <Section background={theme.color.gray.one}>
        <Container>
          <Row spacing={[16]} breakpoints={[769, 960]}>
            <Column widths={[10, 8]} offsets={[1, 2]}>
              <H2 className="center">Take control of your UI kit</H2>
              <Paragraph className="center" customStyles="margin-bottom: 16px;">
                Whether you want to customize a few things or create your own
                fully-functional UI kit, System UI has you covered. Some of
                SystemUI's features include:
              </Paragraph>
            </Column>
          </Row>
          <Row spacing={[16]} breakpoints={[576, 1100]}>
            <Column widths={[6, 4]}>
              <Card>
                <Info
                  title="Prebuilt Components"
                  color="primary"
                  icon={<FontAwesomeIcon icon="boxes" />}
                >
                  <Paragraph>
                    SystemUI comes with 100+ components out of the box, making
                    creating your MVP easier than ever.
                  </Paragraph>
                  <Paragraph>
                    In fact, this entire website is built using SystemUI: no
                    custom code added!
                  </Paragraph>
                </Info>
              </Card>
            </Column>
            <Column widths={[6, 4]}>
              <Card>
                <Info
                  title="Custom Theming"
                  color="primary"
                  icon={<FontAwesomeIcon icon="palette" />}
                >
                  <Paragraph>
                    Unlike other UI kits, SystemUI doesn't just let you
                    customize some colors; it lets you create your own UI kit.
                  </Paragraph>
                  <Paragraph>
                    Change everything from shadows, text, border radius,
                    backgrounds and more to make your UI kit fit your brand.
                  </Paragraph>
                </Info>
              </Card>
            </Column>
            <Column widths={[6, 4]}>
              <Card>
                <Info
                  title="Instance Customization"
                  color="primary"
                  icon={<FontAwesomeIcon icon="cog" />}
                >
                  <Paragraph>
                    Can't get something to look right? SystemUI makes it easy to
                    customize each individual element at the source, allowing
                    you to create a pixel-perfect layout, every time.
                  </Paragraph>
                </Info>
              </Card>
            </Column>

            {/* <div widths={[6, 4]}>
            <Info
              title="Native Behavior"
              color="primary"
              icon={<FontAwesomeIcon icon="mouse-pointer" />}
            >
              <Paragraph>
                System allows you to pass custom event functions to each and
                every component, just as you would with native HTML.
              </Paragraph>
              <Paragraph>
                You can also add custom classes to each component, if you've got
                custom CSS you'd like to use.
              </Paragraph>
            </Info>
          </div> */}
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row spacing={[16]} breakpoints={[769, 960]}>
            <Column widths={[10, 8]} offsets={[1, 2]}>
              <H2 className="center">Ready to create your own UI kit?</H2>
              {!submitError && !submitSuccess && (
                <Paragraph
                  className="center"
                  customStyles="margin-bottom: 16px;"
                >
                  SystemUI is still in development. Sign up to be notified when
                  it's released, and recieve a discount!
                </Paragraph>
              )}
            </Column>
          </Row>
          {!submitError && !submitSuccess ? (
            <>
              <Row spacing={[8, 8]} breakpoints={[576, 800]}>
                <div widths={[9, 10]}>
                  <Input
                    state={error ? 'error' : null}
                    color={error ? 'error' : 'primary'}
                    size="large"
                    fullWidth
                    placeholder="user@mail.com"
                    customStyles="height: 56px;"
                    placeholder="user@mail.com"
                    onChange={onChange}
                  />
                </div>
                <div widths={[3, 2]}>
                  <Button
                    customStyles="height: 56px; padding-top: 0; padding-bottom: 0;"
                    size="large"
                    fullWidth
                    color="primary"
                    onClick={onSubmit}
                  >
                    Join
                  </Button>
                </div>
              </Row>
            </>
          ) : submitError ? (
            <Alert
              color="error"
            >
              Ah, snap! There was an error signing you up. If you'd still like
              to subscribe, you can email me at jarodpeachey@gmail.com and I'll
              add you manually.
            </Alert>
          ) : (
            <Alert color="success">
              You've been successfully signed up! Check your email for a
              confirmation link, and then you're good to go!
            </Alert>
          )}
        </Container>
      </Section>
      <Section spacing={12} background={theme.color.gray.six}>
        <Container>
          <Flex hAlign="space-between">
            <span style={{ color: 'white' }}>
              Built by <strong>Jarod Peachey</strong>
            </span>
            <span>
              <IconButton
                link="https://twitter.com/jarodpeachey"
                external
                circle
                color="white"
                variant="plain"
              >
                <FontAwesomeIcon
                  style={{
                    fontSize: 24,
                    position: 'relative',
                    top: 1,
                    left: 1,
                  }}
                  icon={['fab', 'twitter']}
                />
              </IconButton>
              <IconButton
                link="https://jarodpeachey.netlify.app"
                external
                circle
                color="white"
                variant="plain"
              >
                <FontAwesomeIcon
                  style={{
                    fontSize: 24,
                    position: 'relative',
                    top: 1,
                    left: 1,
                  }}
                  icon="globe"
                />
              </IconButton>
            </span>
          </Flex>
        </Container>
      </Section>
    </Layout>
  );
};

export default App;
