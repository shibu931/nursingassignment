import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Article from './Article';
import SearchResult from './SearchResult';
import BlogsPage from './BlogsPage';



export default function BlogBanner() {
    const title = "NURSING ASSIGNMENT BLOG"
    const [searchQuery, setSearchQuery] = useState("");
    const [query, setQuery] = useState("");
    function setData(e) {
        setSearchQuery(e.target.value)
    }
    const handleSearch = (event) => {
        event.preventDefault();
        setQuery("Search Result: " + searchQuery)
    }
    let { articleTitle } = useParams();
    
    return (
        <div>
            <div className='blog-banner py-5 mb-5 '>
                <h1 className='display-5 fw-600 text-white text-center mt-4 mt-sm-5 mb-4'>{ query ? query : articleTitle ? articleTitle.replace(/-/g, ' ') : title}</h1>
                <p className='fs-5 text-light text-center mb-5 mb-sm-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, officiis?</p>
                <div className="container position-relative">
                    <p className='text-warning pb-4 d-none d-sm-block'><Link to="/" className='text-warning text-decoration-none'>Home</Link> <small><i className="fa-solid fa-chevron-right"></i></small> Blogs</p>
                    <div className="search-box">
                        <form action="" method="get" onSubmit={handleSearch}>
                            <div className="search-input">
                                <button type="submit" ><span><i className="fa-solid fa-magnifying-glass"></i></span></button>
                                <input type="text" name="squery" placeholder="Search Your Blog Here" value={searchQuery} onChange={setData} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* {
                query ?
                <SearchResult/>
                :articleTitle ? 
                <Article/>
                :<BlogsPage/>

            } */}
        </div>
    )
}
