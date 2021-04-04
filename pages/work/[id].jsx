import React from "react";
import movies from "../../util/movies.json";

export const getStaticPaths = async () => {
  const paths = movies.map((movie) => {
    return {
      params: { id: movie.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const movie = movies.filter((m) => m.id === params.id)[0];
  return {
    props: { movie: movie || null },
  };
};

export default function WorkDetail({ movie }) {
  if (movie) {
    return (
      <div>
        <h1>Work Detail</h1>
        <h2>Work Portfolio: {movie.title}</h2>
      </div>
    );
  }
  return <div>well</div>;
}
