import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import Layout from '../components/Layout';
import { FC } from 'react';

const Title = () => {
  	return (
		<div className={styles.titleWrapper}>
	  		<h1 className={styles.title}>Adam Sadeg</h1>
	  		<h3 className={styles.titleFields}>Node.js and python developer</h3>
		</div>
  	);
}

const text1 = `
I'm a self taught fullstack developer with react, mysql, typescript and next.js! I
also have experience in game development as well as python programming.`;
const text2 = `
My goals are to focus on software engineering with react and electron whilst doing
some python projects on the side.`;
const text3 = `If you are intrested in my life or want to learn more about me, i
have a blogs page.`;

interface infoSectionProps {
	heading:string;
	text:string;
	classname:string;
}

const InfoSection = (props:infoSectionProps) => {
	return (
		<div className={`${styles.section} ${props.classname}`}>
			<h2 className={styles.sectionHeading}>{props.heading}</h2>
			<p className={styles.sectionPara}>{props.text}</p>
		</div>
	);
}

export default function Home() {
	return (
		<Layout classname={styles.root}>
			<Head>
				<title>Home page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Title />
			<div className={styles.infoSections}>
				<InfoSection 
					heading="about me"  
					text={text1}
					classname={styles.aboutSection}
				/>
				<InfoSection 
					heading="current goals" 
					text={text2} 
					classname={styles.currentSection}
				/>
				<InfoSection 
					heading="my stories" 
					text={text3} 
					classname={styles.storiesSection}
				/>
			</div>
		</Layout>
	);
}
