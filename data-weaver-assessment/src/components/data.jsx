import React from "react";
import { useEffect, useState } from "react";
import "./data.css";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Posts from "./Post";

const Product = () => {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.products)
        // console.log(data.products)
      })
  
  }

  useEffect(() => {
    fetchData()
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  

  return (
  <main>
     <Navbar />
      <Posts users={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </main>
  );
}

export default Product