import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FC } from 'react'
import { GetStaticProps } from "next";
type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}
const inter = Inter({ subsets: ['latin'] })

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
        
          {props.posts.map((post) =>
            <ul key={post.id}>
              <li>{post.id}.</li>
              <li>{post.title}</li>
            </ul>
          )}
        
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;
