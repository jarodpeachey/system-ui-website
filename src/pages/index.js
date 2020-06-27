import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../components/theme';
import Hero from '../system-components/Hero';
import Section from '../system-components/Section';
import Button from '../system-components/Button';
import IconButton from '../system-components/IconButton';
import Row from '../system-components/Row';

import Heading from '../system-components/Heading';
import Alert from '../system-components/Alert';
import Code from '../system-components/Code';
import Info from '../system-components/Info';
import Container from '../system-components/Container';
import Layout from '../components/layout';
import SubTitle from '../system-components/SubTitle';
import Paragraph from '../system-components/Paragraph';
import Input from '../system-components/Input';
import Flex from '../system-components/Flex';

const App = ({}) => {
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
        <title>System - React UI Kit</title>
      </Helmet>
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      )`}
      >
        <Heading type="h1" background="dark" className="center">
          React Development Made Easy
        </Heading>
        <SubTitle type="h4" className="center" customStyles="color: #ffffffcc;">
          A modern UI Kit built to speed up your development proccess, while
          still allowing you room to customize and grow.
        </SubTitle>
      </Hero>
      <Section spacing="small">
        <Container>
          <Alert
            color="success"
            variant="light"
            icon={<FontAwesomeIcon icon="question-circle" />}
            style={{ maxWidth: 780, margin: '0 auto' }}
          >
            <strong>Did you know?</strong> This website is built completely with
            System. Not a shred of custom CSS!
          </Alert>
        </Container>
      </Section>
      <Section className="pt-none" spacing="large">
        <Container>
          <Heading
            display="title"
            type="h5"
            color="primary"
            className="center mt-none"
          >
            Built For You
          </Heading>
          <Heading type="h2" className="center mt-3">
            What is System?
          </Heading>
          <Container size="sm">
            <Paragraph className="center" style={{ maxWidth: 780 }}>
              System is a UI Kit like none other. It's dead-simple to get up and
              running, and offers advanced customization options that are easier
              than most other UI kits.
            </Paragraph>
            <Paragraph className="center mb-7" style={{ maxWidth: 780 }}>
              With System, you can easily create a website for your product,
              without spending the time and money to do it. System allows you to
              focus on developing and marketing your product.
            </Paragraph>
          </Container>
          <Row spacing={[24, 32]} breakpoints={[769, 960]}>
            <div widths={[6, 4]}>
              <Info
                title="Drop-in Components"
                color="primary"
                icon={<FontAwesomeIcon icon="boxes" />}
              >
                <Paragraph>
                  System comes with a variety of components that require no
                  custom setup, so you can get up and running in no time.
                </Paragraph>
                <Paragraph>
                  In fact, this entire website is built using System: no custom
                  code added!
                </Paragraph>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                title="Custom Theming"
                color="primary"
                icon={<FontAwesomeIcon icon="palette" />}
              >
                <Paragraph>
                  With custom theming options, you can make System your own.
                </Paragraph>
                <Paragraph>
                  Customize everything from font size, colors, spacing, box
                  shadow, border radius and more.
                </Paragraph>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                title="Style Overrides"
                color="primary"
                icon={<FontAwesomeIcon icon="cog" />}
              >
                <Paragraph>
                  Each System component accepts a customStyles prop, which
                  overrides any other styles you've defined. This gives you more
                  flexibility with your components.
                </Paragraph>
              </Info>
            </div>

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
          <Flex>
            <span id="sign-up" />
            <Button className="mt-4" color="primary" link="/components">
              View Components
            </Button>
          </Flex>
        </Container>
      </Section>
      {/* <Section background={`${theme.color.error}10`}>
      <Container>
        <Heading
          type="h3"
          className="mt-none"
          customStyles={`color: ${theme.color.error};`}
        >
          <FontAwesomeIcon
            icon="exclamation-circle"
            style={{ marginRight: 10 }}
          />
          Construction Notice
        </Heading>
        <Paragraph className="mb-5" style={{ color: theme.color.error }}>
          System UI Kit is still in development, but feel free to browse the
          site and look at the components I've already completed!
        </Paragraph>
        <Button link="/components" color="error">
          See Components
        </Button>
      </Container>
    </Section> */}
      <Section spacing="large" background={`${theme.color.gray.one}`}>
        <Container>
          <Heading type="h2" className="mt-none center">
            Join the waiting list!
          </Heading>
          {!submitError && !submitSuccess ? (
            <>
              <SubTitle
                className="mb-5 center"
                style={{ color: theme.color.error }}
              >
                Sign up to be notified when System is launched, and get a nice
                discount to go with it!
              </SubTitle>
              <Container size="sm">
                <Row spacing={[8, 8]} breakpoints={[576, 800]}>
                  <div widths={[9, 10]}>
                    <Input
                      state={error ? 'error' : null}
                      color={error ? 'error' : 'primary'}
                      size="large"
                      fullWidth
                      placeholder="user@mail.com"
                      onChange={onChange}
                    />
                  </div>
                  <div widths={[3, 2]}>
                    <Button
                      onClick={onSubmit}
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Join
                    </Button>
                  </div>
                </Row>
              </Container>
            </>
          ) : submitError ? (
            <Alert
              color="error"
              icon={<FontAwesomeIcon icon="exclamation-circle" />}
            >
              Ah, snap! There was an error signing you up. If you'd still like
              to subscribe, you can email me at jarodpeachey@gmail.com and I'll
              add you manually.
            </Alert>
          ) : (
            <Alert color="success" icon={<FontAwesomeIcon icon="check" />}>
              You've been successfully signed up! Check your email for a
              confirmation link, and then you're good to go!
            </Alert>
          )}
        </Container>
      </Section>
      <Section className="py-3" background={theme.color.heading}>
        <Container>
          <Flex hAlign="space-between">
            <span style={{ color: 'white' }}>
              Built by <strong>Jarod Peachey</strong>
            </span>
            <span>
              <IconButton
                link="https://twitter.com/jarod_peachey"
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
