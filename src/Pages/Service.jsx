import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Service.css'

const ServiceBusiness = gql`
  query ServiceBusiness {
    serviceBusinesses {
      data {
        id
        attributes {
          Bold_Title
          Business_1 {
            Url
            Url_Name
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
          Business_2 {
            Url
            Url_Name
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
          Business_3 {
            Url
            Url_Name
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
          Business_4 {
            Url
            Url_Name
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
          Business_5 {
            Url
            Url_Name
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
          Business_6 {
            Url
            Url_Name
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
`;

const ServiceFooter = gql`
  query ServiceFooter {
    serviceFooters {
      data {
        id
        attributes {
          Address
          Website
          Bold_Title
          Bottom_Text
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

const ServiceHaveProject = gql`
  query ServiceHaveProject {
    serviceHaveProjects {
      data {
        id
        attributes {
          Bold_Title
          Description
          Contact {
            Url
            Name
          }
        }
      }
    }
  }
`;

const ServiceNewCustomer = gql`
  query ServiceNewCUstomer {
    serviceNewCUstomers {
      data {
        id
        attributes {
          Bold_Title
          New_Customer_1 {
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
          New_Customer_2 {
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
          New_Customer_3 {
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
          New_Customer_4 {
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
`;

export default function Service() {
  const {isLoading: loadingServiceBusiness, error: errorServiceBusiness, data: dataServiceBusiness } = useQuery(['ServiceBusiness'], () =>
    request('http://localhost:1337/graphql', ServiceBusiness)
    );
  
    const { isLoading: loadingServiceFooter, error: errorServiceFooter, data: dataServiceFooter } = useQuery(['ServiceFooter'], () =>
      request('http://localhost:1337/graphql', ServiceFooter)
      );
  
  
    const { isLoading: loadingServiceHaveProject, error: errorServiceHaveProject, data: dataServiceHaveProject } = useQuery(['ServiceHaveProject'], () =>
      request('http://localhost:1337/graphql', ServiceHaveProject)
      );
  
  
    const { isLoading: loadingServiceNewCustomer, error: errorServiceNewCustomer, data: dataServiceNewCustomer } = useQuery(['ServiceNewCustomer'], () =>
      request('http://localhost:1337/graphql', ServiceNewCustomer)
      );

  if (loadingServiceBusiness || loadingServiceFooter || loadingServiceHaveProject || loadingServiceNewCustomer) {
    return <p>Loading...</p>;
  }

  if (errorServiceBusiness || errorServiceFooter || errorServiceHaveProject || errorServiceNewCustomer) {
    return <p>Error: {errorServiceBusiness?.message || errorServiceFooter?.message || errorServiceHaveProject?.message || errorServiceNewCustomer?.message}</p>;
  }

  const backendURL = 'http://localhost:1337';

  return (
    <div>
   <div>
  {dataServiceBusiness &&
    dataServiceBusiness.serviceBusinesses &&
    dataServiceBusiness.serviceBusinesses.data.map((service) => (
      <div key={service.id} style={{ marginBottom: '20px' }}>
        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '60px',
            textAlign: 'center',
            marginBottom: '100px',
          }}
        >
          {service.attributes.Bold_Title}
        </h2>

        <div className="business-row">
          {service.attributes.Business_1 && (
            <div className="card">
              <div className="card-body">
                <div className="business-box">
                  {service.attributes.Business_1.Image && (
                    <img
                      src={backendURL + service.attributes.Business_1.Image.data.attributes.url}
                      alt="Business 1 Image"
                    />
                  )}
                  <h3>{service.attributes.Business_1.Bold_Text}</h3>
                  <p>{service.attributes.Business_1.Description}</p>
                  <a href={service.attributes.Business_1.Url}>Get Started</a>
                </div>
              </div>
            </div>
          )}

          {service.attributes.Business_2 && (
            <div className="card">
              <div className="card-body">
                <div className="business-box">
                  {service.attributes.Business_2.Image && (
                    <img
                      src={backendURL + service.attributes.Business_2.Image.data.attributes.url}
                      alt="Business 2 Image"
                    />
                  )}
                  <h3>{service.attributes.Business_2.Bold_Text}</h3>
                  <p>{service.attributes.Business_2.Description}</p>
                  <a href={service.attributes.Business_2.Url}>Get Started</a>
                </div>
              </div>
            </div>
          )}

          {service.attributes.Business_3 && (
            <div className="card">
              <div className="card-body">
                <div className="business-box">
                  {service.attributes.Business_3.Image && (
                    <img
                      src={backendURL + service.attributes.Business_3.Image.data.attributes.url}
                      alt="Business 3 Image"
                    />
                  )}
                  <h3>{service.attributes.Business_3.Bold_Text}</h3>
                  <p>{service.attributes.Business_3.Description}</p>
                  <a href={service.attributes.Business_3.Url}>Get Started</a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="business-row">
          {service.attributes.Business_4 && (
            <div className="card">
              <div className="card-body">
                <div className="business-box">
                  {service.attributes.Business_4.Image && (
                    <img
                      src={backendURL + service.attributes.Business_4.Image.data.attributes.url}
                      alt="Business 4 Image"
                    />
                  )}
                  <h3>{service.attributes.Business_4.Bold_Text}</h3>
                  <p>{service.attributes.Business_4.Description}</p>
                  <a href={service.attributes.Business_4.Url}>Get Started</a>
                </div>
              </div>
            </div>
          )}

          {service.attributes.Business_5 && (
            <div className="card">
              <div className="card-body">
                <div className="business-box">
                  {service.attributes.Business_5.Image && (
                    <img
                      src={backendURL + service.attributes.Business_5.Image.data.attributes.url}
                      alt="Business 5 Image"
                    />
                  )}
                  <h3>{service.attributes.Business_5.Bold_Text}</h3>
                  <p>{service.attributes.Business_5.Description}</p>
                  <a href={service.attributes.Business_5.Url}>Get Started</a>
                </div>
              </div>
            </div>
          )}

          {service.attributes.Business_6 && (
            <div className="card">
              <div className="card-body">
                <div className="business-box">
                  {service.attributes.Business_6.Image && (
                    <img
                      src={backendURL + service.attributes.Business_6.Image.data.attributes.url}
                      alt="Business 6 Image"
                    />
                  )}
                  <h3>{service.attributes.Business_6.Bold_Text}</h3>
                  <p>{service.attributes.Business_6.Description}</p>
                  <a href={service.attributes.Business_6.Url}>Get Started</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
</div>

{dataServiceNewCustomer &&
  dataServiceNewCustomer.serviceNewCUstomers &&
  dataServiceNewCustomer.serviceNewCUstomers.data &&
  dataServiceNewCustomer.serviceNewCUstomers.data.map((service, index) => (
    <div key={service.id} className="new-customer-container">
      <h2>{service.attributes.Bold_Title}</h2>
      <div className="new-customer-blocks">
        {service.attributes.New_Customer_1 && (
          <div className="new-customer-block">
            <h3>{service.attributes.New_Customer_1.Bold_Text}</h3>
            <p>{service.attributes.New_Customer_1.Description}</p>
            {service.attributes.New_Customer_1.Image && (
              <img
                src={backendURL + service.attributes.New_Customer_1.Image.data.attributes.url}
                alt="New Customer 1 Image"
              />
            )}
          </div>
        )}
        {service.attributes.New_Customer_2 && (
          <div className="new-customer-block">
            <h3>{service.attributes.New_Customer_2.Bold_Text}</h3>
            <p>{service.attributes.New_Customer_2.Description}</p>
            {service.attributes.New_Customer_2.Image && (
              <img
                src={backendURL + service.attributes.New_Customer_2.Image.data.attributes.url}
                alt="New Customer 2 Image"
              />
            )}
          </div>
        )}
        {service.attributes.New_Customer_3 && (
          <div className="new-customer-block">
            <h3>{service.attributes.New_Customer_3.Bold_Text}</h3>
            <p>{service.attributes.New_Customer_3.Description}</p>
            {service.attributes.New_Customer_3.Image && (
              <img
                src={backendURL + service.attributes.New_Customer_3.Image.data.attributes.url}
                alt="New Customer 3 Image"
              />
            )}
          </div>
        )}
        {service.attributes.New_Customer_4 && (
          <div className="new-customer-block">
            <h3>{service.attributes.New_Customer_4.Bold_Text}</h3>
            <p>{service.attributes.New_Customer_4.Description}</p>
            {service.attributes.New_Customer_4.Image && (
              <img
                src={backendURL + service.attributes.New_Customer_4.Image.data.attributes.url}
                alt="New Customer 4 Image"
              />
            )}
          </div>
        )}
      </div>
    </div>
  ))}

<div className="gradient-card">
  {dataServiceHaveProject &&
    dataServiceHaveProject.serviceHaveProjects &&
    dataServiceHaveProject.serviceHaveProjects.data &&
    dataServiceHaveProject.serviceHaveProjects.data.map((service) => (
      <div key={service.id}>
        <h1 className="bold-titleHave">{service.attributes.Bold_Title}</h1>
        <p className="descHave">{service.attributes.Description}</p>
        <div className="contact-button-container">
          <a href={service.attributes.Contact.Url} className="contact-button">
            {service.attributes.Contact.Name}
          </a>
        </div>
      </div>
    ))}
</div>

<div className="footer-container">
  {dataServiceFooter &&
    dataServiceFooter.serviceFooters &&
    dataServiceFooter.serviceFooters.data &&
    dataServiceFooter.serviceFooters.data.map((footer) => (
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
