import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Blog.css'

const BlogCategory = gql`
  query BlogCategory {
    blogCategories {
      data {
        id
        attributes {
          Name
          Name_Link
          Bold_Text
          N_Of_Posts
          blog_posts {
            data {
              attributes {
                Date
                Comments
                Bold_Text
                Description
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BlogFooter = gql`
    query BlogFooter {
      blogFooters {
        data {
          id
          attributes {
            Address
            Website
            Bottom_Text
            Bold_Title
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Links_1 {
              Url
              Url_Name
            }
            Links_2 {
              Url
              Url_Name
            }
            Links_3 {
              Url
              Url_Name
            }
            Links_4 {
              Url
              Url_Name
            }
            Links_5 {
              Url
              Url_Name
            }
          }
        }
      }
    }
  `;

  const BlogInstagram = gql`
  query BlogInstagram {
    blogInstagramFeeds {
      data {
        id
        attributes {
          Image_Link
          Images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const BlogNews = gql`
  query BlogNews {
    newsLetters {
      data {
        id
        attributes {
          Email
          Subscribe_Name
          Subscribe_Link
        }
      }
    }
  }
`;

const BlogRecentPost = gql`
  query BlogRecentPost {
    blogRecentPosts {
      data {
        id
        attributes {
          Bold_Text
          Posted_Date
          Bold_Text_Link
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const BlogSearch = gql`
  query BlogSearch {
    blogSearches {
      data {
        id
        attributes {
          Search_Icon {
            data {
              attributes {
                url
              }
            }
          }
          Search_Field
          Search_Button
        }
      }
    }
  }
`;

const BlogTag = gql`
  query BlogTag {
    blogTagClouds {
      data {
        id
        attributes {
          Tag_Name
          Name_Link
        }
      }
    }
  }
`;

export default function Blog() {
  
  
  const { isLoading: loadingBlogCategory, error: errorBlogCategory, data: dataBlogCategory } = useQuery(['BlogCategory'], () =>
    request('http://localhost:1337/graphql', BlogCategory)
    );
  
  
  const { isLoading: loadingBlogTag, error: errorBlogTag, data: dataBlogTag } = useQuery(['BlogTag'], () =>
    request('http://localhost:1337/graphql', BlogTag)
    );
  
  
  const { isLoading: loadingBlogFooter, error: errorBlogFooter, data: dataBlogFooter } = useQuery(['BlogFooter'], () =>
    request('http://localhost:1337/graphql', BlogFooter)
    );
  
  
  const { isLoading: loadingBlogInstagram, error: errorBlogInstagram, data: dataBlogInstagram } = useQuery(['BlogInstagram'], () =>
    request('http://localhost:1337/graphql', BlogInstagram)
    );
  
  
  const { isLoading: loadingBlogNews, error: errorBlogNews, data: dataBlogNews } = useQuery(['BlogNews'], () =>
    request('http://localhost:1337/graphql', BlogNews)
    );
  
  
  const { isLoading: loadingBlogRecentPost, error: errorBlogRecentPost, data: dataBlogRecentPost } = useQuery(['BlogRecentPost'], () =>
    request('http://localhost:1337/graphql', BlogRecentPost)
    );
  
  
  const { isLoading: loadingBlogSearch, error: errorBlogSearch, data: dataBlogSearch } = useQuery(['BlogSearch'], () =>
    request('http://localhost:1337/graphql', BlogSearch)
    );

  if ( loadingBlogCategory || loadingBlogTag || loadingBlogFooter || loadingBlogInstagram || loadingBlogNews || loadingBlogRecentPost || loadingBlogSearch ) {
    return <p>Loading...</p>;
  }

  if (errorBlogCategory || errorBlogTag || errorBlogFooter || errorBlogInstagram || errorBlogNews || errorBlogRecentPost || errorBlogSearch) {
    return (
      <p>
        Error: {errorBlogCategory?.message || errorBlogTag?.message || errorBlogFooter?.message || errorBlogInstagram?.message || errorBlogNews?.message || errorBlogRecentPost?.message || errorBlogSearch?.message}
      </p>
    );
  }

  const backendURL = 'http://localhost:1337';

  return (
    <div className="container">
      <div className="left-side">
        {dataBlogCategory.blogCategories.data.map((category) => (
          <div key={category.id} className="category">
            {category.attributes.blog_posts.data.map((post) => (
              <div key={post.id} className="blog-post">
                  <img src={backendURL + post.attributes.Image.data.attributes.url} alt="Blog Post Image" />
                <h2>{post.attributes.Bold_Text}</h2>
                <p>{post.attributes.Description}</p>
                <p>Date: {post.attributes.Date}</p>
                <p>Comments: {post.attributes.Comments}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="right-side">
      <div className="search-block">
  {dataBlogSearch.blogSearches.data.map((search) => (
    <div key={search.id} className="search-container">
      <input type="text" placeholder={search.attributes.Search_Field} />
      <img src={backendURL + search.attributes.Search_Icon.data.attributes.url} alt="Search Icon" />
    </div>
  ))}
</div>

{dataBlogCategory.blogCategories.data.map((category) => (
  <div key={category.id} className="category-info">
    <h1>{category.attributes.Bold_Text}</h1>
    <p>{category.attributes.Name} ({category.attributes.N_Of_Posts})</p>
  </div>
))}

{dataBlogRecentPost.blogRecentPosts.data.map((post) => (
  <div key={post.id} className="post-container">
    <img src={backendURL + post.attributes.Image.data.attributes.url} alt="Blog Post Image" />
    <div className="post-info">
      <h5>{post.attributes.Bold_Text}</h5>
      <p>Posted Date: {post.attributes.Posted_Date}</p>
      <a href={post.attributes.Bold_Text_Link}>Read More</a>
    </div>
  </div>
))}

<div>
  <h1>Instagram Feed</h1>
  <div className="image-container">
    {dataBlogInstagram.blogInstagramFeeds.data.map((feed) => (
      <img key={feed.id} src={backendURL + feed.attributes.Images.data.attributes.url} alt="Instagram Feed Image" />
    ))}
  </div>
</div>
        
<div>
  <h3>Blog Tags</h3>
          <ul>
            {dataBlogTag.blogTagClouds.data.map((tag) => (
              <li key={tag.id}>
                <a href={tag.attributes.Name_Link}>{tag.attributes.Tag_Name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="newsletter-form">
          <h1>Newsletter Subscription</h1>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-container">
        {dataBlogFooter &&
          dataBlogFooter.blogFooters &&
          dataBlogFooter.blogFooters.data &&
          dataBlogFooter.blogFooters.data.map((footer) => (
            <div key={footer.id} className="footer-item">
              <h2>{footer.attributes.Bold_Title}</h2>
              <p>{footer.attributes.Address}</p>
              <p>{footer.attributes.Website}</p>
  
              <ul>
                {footer.attributes.Links_1 && (
                  <li>
                    <a href={footer.attributes.Links_1.Url}>{footer.attributes.Links_1.Url_Name}</a>
                  </li>
                )}
                {footer.attributes.Links_2 && (
                  <li>
                    <a href={footer.attributes.Links_2.Url}>{footer.attributes.Links_2.Url_Name}</a>
                  </li>
                )}
                {footer.attributes.Links_3 && (
                  <li>
                    <a href={footer.attributes.Links_3.Url}>{footer.attributes.Links_3.Url_Name}</a>
                  </li>
                )}
                {footer.attributes.Links_4 && (
                  <li>
                    <a href={footer.attributes.Links_4.Url}>{footer.attributes.Links_4.Url_Name}</a>
                  </li>
                )}
                {footer.attributes.Links_5 && (
                  <li>
                    <a href={footer.attributes.Links_5.Url}>{footer.attributes.Links_5.Url_Name}</a>
                  </li>
                )}
              </ul>
            </div>
          ))}
      </div>
    </div>
  ); 
  
}
