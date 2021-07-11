import Head from 'next/head';
import { useSelector } from 'react-redux';

import Layout from '../src/client/components/Layout';
import Sidebar from '../src/client/components/Sidebar';
import About from '../src/client/components/About';
import Header from '../src/client/components/Header';
import Section from '../src/client/components/Section';
import ProjectCard from '../src/client/components/ProjectCard';
import Gallery from '../src/client/components/Gallery';
import { sidebar, about, header, projectCards, gallery } from '../src/client/data/data.json';

//! update <Head> and all needed info later

export default function Home() {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <div className={isDarkMode ? 'theme--dark' : 'theme--light'}>
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="main">
        <Layout>
          <Header
            heading={header.heading}
            subHeading={header.subHeading}
            text={header.text}
          />
          <Section heading="About Me">
            <About content={about.content} image={about.image} />
          </Section>
          <Section heading="Work">
            { projectCards.map((data, i) => (
              <ProjectCard
                key={data.title || i}
                title={data.title}
                description={data.description}
                tools={data.tools}
                links={data.links}
                image={data.image}
                showInverse={!!(i % 2)}
              />
            ))}
          </Section>
          <Section heading="Photography">
            <Gallery images={gallery} />
          </Section>
          <Section heading="Contact" />
        </Layout>
        <Sidebar
          navHeadings={sidebar.navHeadings}
          social={sidebar.social}
        />
      </main>
    </div>
  )
}
