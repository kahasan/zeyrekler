import React from 'react';
import Layout from '../components/Layout';
import Details from '../components/Details';
import Link from 'next/link';

function HomePage(posts) {
  return (
    <Layout>
      <div className="Head">
        <Link href="/" as="/">
          <a>
            <h1 className="Title">ZEYREKLER</h1>
          </a>
        </Link>
        <Link href="/" as="/">
          <a className="Home">Ana Sayfa</a>
        </Link>
      </div>

      <Details tractor={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://zeyreklerliste.herokuapp.com/tractors');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://zeyreklerliste.herokuapp.com/tractors/${params.id}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
