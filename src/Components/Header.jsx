import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'; 

const Home_Navigation = gql`
  query HomeNavigation {
    homeNavigations {
      data {
        id
        attributes {
          Menu_Item_Label_1
          Menu_Item_Label_2
          Menu_Item_Label_3
          Menu_Item_Label_4
          Menu_Item_Label_5
          Url_Slug_1
          Url_Slug_2
          Url_Slug_3
          Url_Slug_4
          Url_Slug_5
          Contact {
            Url
            Name
          }
          Main_Image {
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

export default function Header() {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(['homeNavigation'], () =>
    request('http://localhost:1337/graphql', Home_Navigation)
  );

  if (isLoading) return <p>Loading navigation...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const backendURL = 'http://localhost:1337';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center header-container">
            <a className="navbar-brand" href={data.homeNavigations.data[0].attributes.Contact.Url}>
              <img src={backendURL + data.homeNavigations.data[0].attributes.Main_Image.data.attributes.url} alt="Logo" height="80" />
            </a>
          </div>

          <div className="ml-auto d-flex align-items-center header-container">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href={data.homeNavigations.data[0].attributes.Url_Slug_1}>
                  {data.homeNavigations.data[0].attributes.Menu_Item_Label_1}
                </a>
              </li>
              <li className="nav-item nav-item-spacing">
                <a className="nav-link" href={data.homeNavigations.data[0].attributes.Url_Slug_2}>
                  {data.homeNavigations.data[0].attributes.Menu_Item_Label_2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={data.homeNavigations.data[0].attributes.Url_Slug_3}>
                  {data.homeNavigations.data[0].attributes.Menu_Item_Label_3}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={data.homeNavigations.data[0].attributes.Url_Slug_4}>
                  {data.homeNavigations.data[0].attributes.Menu_Item_Label_4}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={data.homeNavigations.data[0].attributes.Url_Slug_5}>
                  {data.homeNavigations.data[0].attributes.Menu_Item_Label_5}
                </a>
              </li>
            </ul>
            <a className="btn btn-primary ml-2" href={data.homeNavigations.data[0].attributes.Contact.Url}>
              {data.homeNavigations.data[0].attributes.Contact.Name}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
