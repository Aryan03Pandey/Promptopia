'use client';

import Feed from "@components/Feed"
import { useState, useEffect } from "react";

const Home = () => {
  
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }
  
  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');

    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <section className="w-full flex flex-col flex-center">
        <h1 className="head_text text-center">Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>

        <p className="desc text-center">Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>

        {/* Feed component */}
        <Feed 
          posts={posts}
          handleSearchChange={handleSearchChange}
          searchText={searchText}
        />
    </section>
  )
}

export default Home