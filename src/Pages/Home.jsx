import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/home.css'

const We_Collect_Data = gql`
  query HomeWeCollect {
    homeWeCollects {
      data {
        id
        attributes {
          Bold_Text
          Main_Image {
            data {
              attributes {
                url
              }
            }
          }
          Description
          We_Collect_Button {
            Url
            Name
          }
        }
      }
    }
  }
`;

const Home_Business = gql`
  query HomeBusiness {
    homeBusinessBlocks {
      data {
        id
        attributes {
          Bold_Title
          Business_1 {
            Url
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

const Home_Digital_Product = gql`
  query HomeDigitalProduct {
    homeDigitalProductBlocks {
      data {
        id
        attributes {
          Bold_Text
          Description
          We_Collect_Button {
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

const Home_New_Customer = gql`
  query HomeNewCustomer {
    homeNewCustomers {
      data {
        id
        attributes {
          Bold_Title
          New_Customers_1 {
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
          New_Customers_2 {
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
          New_Customers_3 {
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
          New_Customers_4 {
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


const Home_Pricing_Plan = gql`
  query HomePricingPlan {
    homePricingPlans {
      data {
        id
        attributes {
          Bold_Title
          Pricing_Plan_1 {
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
          Pricing_Plan_2 {
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
          Pricing_Plan_3 {
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

const Home_Awesome_Stuff = gql`
  query HomeAwesomeStuff {
    homeAwesomeStuffs {
      data {
        id
        attributes {
          Bold_Text
          Block_1 {
            Url
            Name
            Url_Name
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Block_2 {
            Url
            Name
            Url_Name
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Block_3 {
            Url
            Name
            Url_Name
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Block_4 {
            Url
            Name
            Url_Name
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

const Home_Footer = gql`
  query HomeFooter {
    homeFooters {
      data {
        id
        attributes {
          Address
          Website
          Bottom_Text
          Bold_Title
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

const HomeTip = gql`
  query HomeTip {
    homeTips {
      data {
        id
        attributes {
          Bold_Title
          Tips_Sub_Block_1 {
            Url
            Description
            Url_Name
            Bold_Text
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Tips_Sub_Block_2 {
            Url
            Description
            Url_Name
            Bold_Text
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Tips_Sub_Block_3 {
            Url
            Description
            Url_Name
            Bold_Text
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

const HomeHaveProject = gql`
  query HomeHaveProject {
    homeHaveProjects {
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

const HomeWhatClient = gql`
  query HomeWhatClient {
    homeWhatClients {
      data {
        id
        attributes {
          Bold_Title
          Description
          Client_Name
          Client_Position
          Client_Image {
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

export default function Home() {

  const queryClient = useQueryClient();


  const { isLoading: loadingWeCollectData, error: errorWeCollectData, data: dataWeCollectData } = useQuery(['wecollectdata'], () =>
  request('http://localhost:1337/graphql', We_Collect_Data)
  );
  
  
  const { isLoading: loadingHomeBusiness, error: errorHomeBusiness, data: dataHomeBusiness } = useQuery(['homebusiness'], () =>
    request('http://localhost:1337/graphql', Home_Business)
);
  
  
  const { isLoading: loadingDigitalProduct, error: errorDigitalProduct, data: dataDigitalProduct } = useQuery(['homedigitalproduct'], () =>
    request('http://localhost:1337/graphql', Home_Digital_Product)
    );
  
  
  const { isLoading: loadingNewCustomer, error: errorNewCustomer, data: dataNewCustomer } = useQuery(['homenewcustomer'], () =>
    request('http://localhost:1337/graphql', Home_New_Customer)
    );
  
  
  const { isLoading: loadingPricingPlan, error: errorPricingPlan, data: dataPricingPlan } = useQuery(['homepricingplan'], () =>
    request('http://localhost:1337/graphql', Home_Pricing_Plan)
    );
  
  
  const { isLoading: loadingAwesomeStuff, error: errorAwesomeStuff, data: dataAwesomeStuff } = useQuery(['hpmeawesomestuff'], () =>
    request('http://localhost:1337/graphql', Home_Awesome_Stuff)
    );
  
  
  const { isLoading: loadingFooter, error: errorFooter, data: dataFooter } = useQuery(['homefooter'], () =>
    request('http://localhost:1337/graphql', Home_Footer)
    );
  
  
  const { isLoading: loadingHomeTip, error: errorHomeTip, data: dataHomeTip } = useQuery(['hometip'], () =>
    request('http://localhost:1337/graphql', HomeTip)
    );
  
  
  const { isLoading: loadingHomeProject, error: errorHomeProject, data: dataHomeProject } = useQuery(['homehaveproject'], () =>
    request('http://localhost:1337/graphql', HomeHaveProject)
    );
  
  
  const { isLoading: loadingHomeClient, error: errorHomeClient, data: dataHomeClient } = useQuery(['homewhatclient'], () =>
    request('http://localhost:1337/graphql', HomeWhatClient)
    );

  if (loadingWeCollectData || loadingHomeBusiness || loadingDigitalProduct || loadingNewCustomer || loadingPricingPlan || loadingAwesomeStuff || loadingFooter || loadingHomeTip || loadingHomeProject || loadingHomeClient) return <p>Loading...</p>;
  if (errorWeCollectData || errorHomeBusiness || errorDigitalProduct || errorNewCustomer || errorPricingPlan ||errorAwesomeStuff || errorFooter || errorHomeTip || errorHomeProject || errorHomeClient) return <p>Error: {errorWeCollectData?.message || errorHomeBusiness?.message || errorDigitalProduct?.message || errorNewCustomer?.message || errorPricingPlan?.message || errorAwesomeStuff?.message || errorFooter?.message || errorHomeTip?.message || errorHomeProject?.message || errorHomeClient?.message}</p>;

  const backendURL = 'http://localhost:1337'; 

  return (
    <>
{dataWeCollectData && dataWeCollectData.homeWeCollects && dataWeCollectData.homeWeCollects.data.map((item) => {
  const boldTextParts = item.attributes.Bold_Text.split(' ');
  const firstPart = boldTextParts.slice(0, 2).join(' ');
  const secondPart = boldTextParts.slice(2).join(' ');

  return (
    <div
      key={item.id}
      className="home-we-collect-data" 
    >
      <div style={{ flex: '1' }}>
        <h1 className="font-weight-bold">
          <span>{firstPart}</span>
          <br></br>
          <span>{secondPart}</span>
        </h1>
        <p>{item.attributes.Description}</p>
        <a className="btn btn-primary" href={item.attributes.We_Collect_Button.Url}>
          {item.attributes.We_Collect_Button.Name}
        </a>
      </div>
      {item.attributes.Main_Image && (
        <img
          src={backendURL + item.attributes.Main_Image.data.attributes.url}
          alt="Awesome Image"
        />
      )}
    </div>
  );
})}

<div>
{dataHomeBusiness && dataHomeBusiness.homeBusinessBlocks && dataHomeBusiness.homeBusinessBlocks.data.map((block) => (
        <div key={block.id} style={{ marginBottom: '20px' }}>
          <h2
            style={{
              fontWeight: 'bold',
              fontSize: '60px',
              textAlign: 'center',
              marginBottom: '100px',
            }}
          >
            {block.attributes.Bold_Title}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', marginLeft: '300px' }}>
            {block.attributes.Business_1 && (
              <div className="card">
                <div className="card-body">
                  <div className="business-box">
                    {block.attributes.Business_1.Image && (
                      <img
                        src={backendURL + block.attributes.Business_1.Image.data.attributes.url}
                        alt="Business 1 Image"
                      />
                    )}
                    <h3>{block.attributes.Business_1.Bold_Text}</h3>
                    <p>{block.attributes.Business_1.Description}</p>
                    <a href={block.attributes.Business_1.Url}>Get Started</a>
                  </div>
                </div>
              </div>
            )}

            {block.attributes.Business_2 && (
              <div className="card">
                <div className="card-body">
                  <div className="business-box">
                    {block.attributes.Business_2.Image && (
                      <img
                        src={backendURL + block.attributes.Business_2.Image.data.attributes.url}
                        alt="Business 2 Image"
                      />
                    )}
                    <h3>{block.attributes.Business_2.Bold_Text}</h3>
                    <p>{block.attributes.Business_2.Description}</p>
                    <a href={block.attributes.Business_2.Url}>Get Started</a>
                  </div>
                </div>
              </div>
            )}

            {block.attributes.Business_3 && (
              <div className="card">
                <div className="card-body">
                  <div className="business-box">
                    {block.attributes.Business_3.Image && (
                      <img
                        src={backendURL + block.attributes.Business_3.Image.data.attributes.url}
                        alt="Business 3 Image"
                      />
                    )}
                    <h3>{block.attributes.Business_3.Bold_Text}</h3>
                    <p>{block.attributes.Business_3.Description}</p>
                    <a href={block.attributes.Business_3.Url}>Get Started</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {dataDigitalProduct &&
  dataDigitalProduct.homeDigitalProductBlocks &&
  dataDigitalProduct.homeDigitalProductBlocks.data.map((item) => (
    <div key={item.id} className="home-we-collect-data">
      {item.attributes.Main_Image && (
        <img
          src={backendURL + item.attributes.Main_Image.data.attributes.url}
          alt="Digital Product Image"
          className="home-we-collect-data-image"
        />
      )}
      <div className="home-we-collect-data-content">
        <h1>{item.attributes.Bold_Text}</h1>
        <p>{item.attributes.Description}</p>
        <a href={item.attributes.We_Collect_Button.Url}>
          {item.attributes.We_Collect_Button.Name}
        </a>
      </div>
    </div>
  ))}

{dataNewCustomer &&
  dataNewCustomer.homeNewCustomers &&
  dataNewCustomer.homeNewCustomers.data &&
  dataNewCustomer.homeNewCustomers.data.map((item, index) => (
    <div key={item.id} className="new-customer-container">
      <h2>{item.attributes.Bold_Title}</h2>
      <div className="new-customer-blocks">
        {item.attributes.New_Customers_1 && (
          <div className="new-customer-block">
            <h3>{item.attributes.New_Customers_1.Bold_Text}</h3>
            <p>{item.attributes.New_Customers_1.Description}</p>
            {item.attributes.New_Customers_1.Image && (
              <img
                src={backendURL + item.attributes.New_Customers_1.Image.data.attributes.url}
                alt="New Customer 1 Image"
              />
            )}
          </div>
        )}
        {item.attributes.New_Customers_2 && (
          <div className="new-customer-block">
            <h3>{item.attributes.New_Customers_2.Bold_Text}</h3>
            <p>{item.attributes.New_Customers_2.Description}</p>
            {item.attributes.New_Customers_2.Image && (
              <img
                src={backendURL + item.attributes.New_Customers_2.Image.data.attributes.url}
                alt="New Customer 2 Image"
              />
            )}
          </div>
        )}
        {item.attributes.New_Customers_3 && (
          <div className="new-customer-block">
            <h3>{item.attributes.New_Customers_3.Bold_Text}</h3>
            <p>{item.attributes.New_Customers_3.Description}</p>
            {item.attributes.New_Customers_3.Image && (
              <img
                src={backendURL + item.attributes.New_Customers_3.Image.data.attributes.url}
                alt="New Customer 3 Image"
              />
            )}
          </div>
        )}
        {item.attributes.New_Customers_4 && (
          <div className="new-customer-block">
            <h3>{item.attributes.New_Customers_4.Bold_Text}</h3>
            <p>{item.attributes.New_Customers_4.Description}</p>
            {item.attributes.New_Customers_4.Image && (
              <img
                src={backendURL + item.attributes.New_Customers_4.Image.data.attributes.url}
                alt="New Customer 4 Image"
              />
            )}
          </div>
        )}
      </div>
    </div>
  ))}

{dataPricingPlan &&
  dataPricingPlan.homePricingPlans &&
  dataPricingPlan.homePricingPlans.data &&
  dataPricingPlan.homePricingPlans.data.map((item) => (
    <div key={item.id}>
      <h2 className="bold-title">{item.attributes.Bold_Title}</h2>
      
      <div className="pricing-cards">
      {item.attributes.Pricing_Plan_1 && (
        <div className="pricing-card">
            {item.attributes.Pricing_Plan_1.Image && (
            <img
              src={backendURL + item.attributes.Pricing_Plan_1.Image.data.attributes.url}
              alt="Pricing Plan 1 Image"
            />
          )}
          <h3>{item.attributes.Pricing_Plan_1.Bold_Text}</h3>
          <p>{item.attributes.Pricing_Plan_1.Description}</p>
        
        </div>
      )}

      {item.attributes.Pricing_Plan_2 && (
        <div className="pricing-card">
             {item.attributes.Pricing_Plan_2.Image && (
            <img
              src={backendURL + item.attributes.Pricing_Plan_2.Image.data.attributes.url}
              alt="Pricing Plan 2 Image"
            />
          )}
          <h3>{item.attributes.Pricing_Plan_2.Bold_Text}</h3>
          <p>{item.attributes.Pricing_Plan_2.Description}</p>
       
        </div>
      )}

      {item.attributes.Pricing_Plan_3 && (
        <div className="pricing-card">
              {item.attributes.Pricing_Plan_3.Image && (
            <img
              src={backendURL + item.attributes.Pricing_Plan_3.Image.data.attributes.url}
              alt="Pricing Plan 3 Image"
            />
          )}
          <h3>{item.attributes.Pricing_Plan_3.Bold_Text}</h3>
          <p>{item.attributes.Pricing_Plan_3.Description}</p>
      
        </div>
      )}
      </div>
    </div>
  ))}

<div className="awesome-stuff-container">
  {dataAwesomeStuff &&
    dataAwesomeStuff.homeAwesomeStuffs &&
    dataAwesomeStuff.homeAwesomeStuffs.data &&
    dataAwesomeStuff.homeAwesomeStuffs.data.map((item) => (
      <div key={item.id} className="awesome-stuff-block">
        <h2 className="bold-title">{item.attributes.Bold_Text}</h2>

        <div className="block">
          {item.attributes.Block_1 && (
            <div>
              {item.attributes.Block_1.Image && (
                <img
                  src={backendURL + item.attributes.Block_1.Image.data.attributes.url}
                  alt="Block 1 Image"
                />
              )}
              <a className="link" href={item.attributes.Block_1.Url}>{item.attributes.Block_1.Url_Name}</a>
              <h3>{item.attributes.Block_1.Name}</h3>
            </div>
          )}

          {item.attributes.Block_2 && (
            <div>
              {item.attributes.Block_2.Image && (
                <img
                  src={backendURL + item.attributes.Block_2.Image.data.attributes.url}
                  alt="Block 2 Image"
                />
              )}
              <a className="link" href={item.attributes.Block_2.Url}>{item.attributes.Block_2.Url_Name}</a>
              <h3>{item.attributes.Block_2.Name}</h3>
            </div>
          )}

          {item.attributes.Block_3 && (
            <div>
              {item.attributes.Block_3.Image && (
                <img
                  src={backendURL + item.attributes.Block_3.Image.data.attributes.url}
                  alt="Block 3 Image"
                />
              )}
              <a className="link" href={item.attributes.Block_3.Url}>{item.attributes.Block_3.Url_Name}</a>
              <h3>{item.attributes.Block_3.Name}</h3>
            </div>
          )}

          {item.attributes.Block_4 && (
            <div>
              {item.attributes.Block_4.Image && (
                <img
                  src={backendURL + item.attributes.Block_4.Image.data.attributes.url}
                  alt="Block 4 Image"
                />
              )}
              <a className="link" href={item.attributes.Block_4.Url}>{item.attributes.Block_4.Url_Name}</a>
              <h3>{item.attributes.Block_4.Name}</h3>
            </div>
          )}
        </div>
      </div>
    ))}
</div>

{dataHomeClient &&
  dataHomeClient.homeWhatClients &&
  dataHomeClient.homeWhatClients.data &&
  dataHomeClient.homeWhatClients.data.map((client) => (
    <div key={client.id}>
      <h1 className="bold-title">{client.attributes.Bold_Title}</h1>
      <div className="client-info">
        <p className="description">{client.attributes.Description}</p>
        <div className="client-details">
          <img src={backendURL + client.attributes.Client_Image.data.attributes.url} alt="Client Image" />
          <div className="client-data">
            <p className="client-name">{client.attributes.Client_Name}</p>
            <p>{client.attributes.Client_Position}</p>
          </div>
        </div>
      </div>
    </div>
  ))}

<div className="awesome-stuff-container">
  {dataHomeTip &&
    dataHomeTip.homeTips &&
    dataHomeTip.homeTips.data &&
    dataHomeTip.homeTips.data.map((tip) => (
      <div key={tip.id} className="awesome-stuff-block">
        <h1 className="bold-title">{tip.attributes.Bold_Title}</h1>

        <div className="block">
          <div className="tips-sub-block">
            <h2>{tip.attributes.Tips_Sub_Block_1.Bold_Text}</h2>
            <p>{tip.attributes.Tips_Sub_Block_1.Description}</p>
            <img src={backendURL + tip.attributes.Tips_Sub_Block_1.Image.data.attributes.url} alt="Tips Sub Block 1 Image" />
            <a href={tip.attributes.Tips_Sub_Block_1.Url} className="url-name">{tip.attributes.Tips_Sub_Block_1.Url_Name}</a>
          </div>

          <div className="tips-sub-block">
            <h2>{tip.attributes.Tips_Sub_Block_2.Bold_Text}</h2>
            <p>{tip.attributes.Tips_Sub_Block_2.Description}</p>
            <img src={backendURL + tip.attributes.Tips_Sub_Block_2.Image.data.attributes.url} alt="Tips Sub Block 2 Image" />
            <a href={tip.attributes.Tips_Sub_Block_2.Url} className="url-name">{tip.attributes.Tips_Sub_Block_2.Url_Name}</a>
          </div>

          <div className="tips-sub-block">
            <h2>{tip.attributes.Tips_Sub_Block_3.Bold_Text}</h2>
            <p>{tip.attributes.Tips_Sub_Block_3.Description}</p>
            <img src={backendURL + tip.attributes.Tips_Sub_Block_3.Image.data.attributes.url} alt="Tips Sub Block 3 Image" />
            <a href={tip.attributes.Tips_Sub_Block_3.Url} className="url-name">{tip.attributes.Tips_Sub_Block_3.Url_Name}</a>
          </div>
        </div>
      </div>
    ))}
</div>

<div className="gradient-card">
  {dataHomeProject &&
    dataHomeProject.homeHaveProjects &&
    dataHomeProject.homeHaveProjects.data &&
    dataHomeProject.homeHaveProjects.data.map((project) => (
      <div key={project.id}>
        <h1 className="bold-titleHave">{project.attributes.Bold_Title}</h1>
        <p className="descHave">{project.attributes.Description}</p>
        <div className="contact-button-container">
          <a href={project.attributes.Contact.Url} className="contact-button">
            {project.attributes.Contact.Name}
          </a>
        </div>
      </div>
    ))}
</div>

<div className="footer-container">
  {dataFooter &&
    dataFooter.homeFooters &&
    dataFooter.homeFooters.data &&
    dataFooter.homeFooters.data.map((footer) => (
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
    </>
  );
}

                    