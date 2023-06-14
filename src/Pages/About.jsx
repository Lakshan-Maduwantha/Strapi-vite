import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/About.css'


const AboutWeCollect = gql`
  query AboutWeCollect {
    aboutWeCollects {
      data {
        id
        attributes {
          Bold_Text
          Description
          Main_Image {
            data {
              attributes {
                url
              }
            }
          }
          We_Collect_Button {
            Url
            Name
          }
        }
      }
    }
  }
`;

const AboutAwesome = gql`
  query AboutAwesome {
    aboutAwesomeStuffs {
      data {
        id
        attributes {
          Bold_Text
          Visit_Sub_Block_1 {
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
          Visit_Sub_Block_2 {
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
          Visit_Sub_Block_3 {
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
          Visit_Sub_Block_4 {
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

const AboutFooter = gql`
  query About_Footer {
    aboutFooters {
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
            Url,
            Url_Name
          }
          Links_2 {
            Url,
            Url_Name
          }
          Links_3 {
            Url,
            Url_Name
          }
          Links_4 {
            Url,
            Url_Name
          }
          Links_5 {
            Url,
            Url_Name
          }
        }
      }
    }
  }
`;

const AboutHaveProjects = gql`
  query AboutHaveProjects {
    aboutHaveProjects {
      data {
        id
        attributes {
          Contact {
            Url
            Name
          }
          Bold_Title
          Description
        }
      }
    }
  }
`;

const AboutPricingPlan = gql`
  query AboutPricingPlan {
    aboutPricingPlans {
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

const AboutWhatClients = gql`
  query AboutWhatClients {
    aboutWhatClients {
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


export default function About() {
 
 
  const { isLoading: loadingWeCollect, error: errorWeCollect, data: dataWeCollect } = useQuery(['AboutWeCollect'], () =>
    request('http://localhost:1337/graphql', AboutWeCollect)
    );
 
 
  const { isLoading: loadingAwesome, error: errorAwesome, data: dataAwesome } = useQuery(['AboutAwesome'], () =>
    request('http://localhost:1337/graphql', AboutAwesome)
  );
 
 
  const { isLoading: loadingFooter, error: errorFooter, data: dataFooter } = useQuery(['AboutFooter'], () =>
    request('http://localhost:1337/graphql', AboutFooter)
    );
 
 
  const { isLoading: loadingHaveProject, error: errorHaveProject, data: dataHaveProject } = useQuery(['AboutHaveProjects'], () =>
    request('http://localhost:1337/graphql', AboutHaveProjects)
    );
 
 
  const { isLoading: loadingPricingPlan, error: errorPricingPlan, data: dataPricingPlan } = useQuery(['AboutPricingPlan'], () =>
    request('http://localhost:1337/graphql', AboutPricingPlan)
    );
 
 
  const { isLoading: loadingWhatClients, error: errorWhatClients, data: dataWhatClients } = useQuery(['AboutWhatClients'], () =>
    request('http://localhost:1337/graphql', AboutWhatClients)
    );

  if (loadingWeCollect || loadingAwesome || loadingFooter || loadingHaveProject || loadingPricingPlan  || loadingWhatClients) {
    return <p>Loading...</p>;
  }

if (errorWeCollect || errorAwesome || errorFooter || errorHaveProject  || errorWhatClients ) {
  return <p>Error: {errorWeCollect?.message || errorAwesome?.message || errorFooter?.message || errorHaveProject?.message || errorPricingPlan?.message || errorWhatClients?.message}</p>;
}

  const backendURL = 'http://localhost:1337';

  return (
    <div>
{dataWeCollect && dataWeCollect.aboutWeCollects && dataWeCollect.aboutWeCollects.data.map((item) => {
  const boldTextParts = item.attributes.Bold_Text.split(' ');
  const firstPart = boldTextParts.slice(0, 2).join(' ');
  const secondPart = boldTextParts.slice(2).join(' ');

  return (
    <div
      key={item.id}
      className="about-we-collect-data" 
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

{dataPricingPlan &&
  dataPricingPlan.aboutPricingPlans &&
  dataPricingPlan.aboutPricingPlans.data &&
  dataPricingPlan.aboutPricingPlans.data.map((item) => (
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
  {dataAwesome.aboutAwesomeStuffs.data.map((item) => (
    <div key={item.id} className="awesome-stuff-item">
      <h1>{item.attributes.Bold_Text}</h1>
      <div className="sub-block-container">
        {/* Render Visit_Sub_Block_1 */}
        <div className="sub-block">
        <img src={backendURL + item.attributes.Visit_Sub_Block_1.Image.data.attributes.url} alt="Sub Block Image 1" />
        <a href={item.attributes.Visit_Sub_Block_1.Url}>{item.attributes.Visit_Sub_Block_1.Url_Name}</a>
          <h2>{item.attributes.Visit_Sub_Block_1.Name}</h2>
        </div>

        {/* Render Visit_Sub_Block_2 */}
        <div className="sub-block">
        <img src={backendURL + item.attributes.Visit_Sub_Block_2.Image.data.attributes.url} alt="Sub Block Image 2" />
        <a href={item.attributes.Visit_Sub_Block_2.Url}>{item.attributes.Visit_Sub_Block_2.Url_Name}</a>
          <h2>{item.attributes.Visit_Sub_Block_2.Name}</h2>
        </div>

        {/* Render Visit_Sub_Block_3 */}
        <div className="sub-block">
        <img src={backendURL + item.attributes.Visit_Sub_Block_3.Image.data.attributes.url} alt="Sub Block Image 3" />
        <a href={item.attributes.Visit_Sub_Block_3.Url}>{item.attributes.Visit_Sub_Block_3.Url_Name}</a>
          <h2>{item.attributes.Visit_Sub_Block_3.Name}</h2>
        </div>

        {/* Render Visit_Sub_Block_4 */}
        <div className="sub-block">
        <img src={backendURL + item.attributes.Visit_Sub_Block_4.Image.data.attributes.url} alt="Sub Block Image 4" />
        <a href={item.attributes.Visit_Sub_Block_4.Url}>{item.attributes.Visit_Sub_Block_4.Url_Name}</a>
          <h2>{item.attributes.Visit_Sub_Block_4.Name}</h2>
        </div>
      </div>
    </div>
  ))}
</div>

{dataWhatClients &&
  dataWhatClients.aboutWhatClients &&
  dataWhatClients.aboutWhatClients.data &&
  dataWhatClients.aboutWhatClients.data.map((client) => (
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

  
<div className="gradient-card">
  {dataHaveProject &&
    dataHaveProject.aboutHaveProjects &&
    dataHaveProject.aboutHaveProjects.data &&
    dataHaveProject.aboutHaveProjects.data.map((project) => (
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
    dataFooter.aboutFooters &&
    dataFooter.aboutFooters.data &&
    dataFooter.aboutFooters.data.map((footer) => (
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
