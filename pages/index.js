import React from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import Link from 'next/link';

function HomePage(posts) {
  return (
    <Layout>
      <Link href="/" as="/">
        <a>
          <h1 className="Title">ZEYREKLER</h1>
        </a>
      </Link>
      <List tractors={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://zeyreklerliste.herokuapp.com/tractors');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
