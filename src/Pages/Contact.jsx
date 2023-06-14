import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Contact.css'

const ContactDetails = gql`
  query ContactDetail {
    contactDetails {
      data {
        id
        attributes {
          Phone_Bold
          Email_Bold
          Address_Bold
          Phone_Normal
          Email_Normal
          Address_Normal_Text
          Phone_Image {
            data {
              attributes {
                url
              }
            }
          }
          Email_Image {
            data {
              attributes {
                url
              }
            }
          }
          Address_Image {
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

const ContactFooter = gql`
  query ContactFooter {
    contactFooters {
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

const ContactForm = gql`
  query ContactForm {
    contactForms {
      data {
        id
        attributes {
          Send_Button {
            Url
            Url_Name
          }
          Contact_Email
          Enter_A_Message
          Contact_Enter_Subject
          Contact_Enter_Your_Name
        }
      }
    }
  }
`;

const ContactHaveProject = gql`
  query ContactHaveProject {
    contactHaveProjects {
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

export default function Contact() {

  const { isLoading: loadingContact, error: errorContact, data: dataContact } = useQuery(['contactDetails'], () =>
    request('http://localhost:1337/graphql', ContactDetails)
  );
  const { isLoading: loadingContactFooter, error: errorContactFooter, data: dataContactFooter } = useQuery(['contactFooter'], () =>
    request('http://localhost:1337/graphql', ContactFooter)
  );
  const { isLoading: loadingContactForm, error: errorContactForm, data: dataContactForm } = useQuery(['contactForm'], () =>
  request('http://localhost:1337/graphql', ContactForm)
);
const { isLoading: loadingContactProject, error: errorContactProject, data: dataContactProject } = useQuery(['contactHaveProject'], () =>
request('http://localhost:1337/graphql', ContactHaveProject)
);


  if (loadingContact || loadingContactFooter || loadingContactForm || loadingContactProject) {
    return <p>Loading...</p>;
  }

  if (errorContact || errorContactFooter || errorContactForm || errorContactProject) {
    return <p>Error: {errorContact?.message || errorContactFooter?.message || errorContactForm?.message || errorContactProject?.message}</p>;
  }

  const backendURL = 'http://localhost:1337';

  return (
    <div>

<div className="contact-container">
  {dataContact.contactDetails.data.map((details) => (
    <div key={details.id} className="contact-details">
      <div className="contact-item">
        <img src={backendURL + details.attributes.Address_Image.data.attributes.url} alt="Address Image" />
        <p>
       <span><b>{details.attributes.Address_Bold}</b></span> <span>{details.attributes.Address_Normal_Text}</span>
        </p>
      </div>
      <div className="contact-item">
        <img src={backendURL + details.attributes.Phone_Image.data.attributes.url} alt="Phone Image" />
        <p>
         <span><b>{details.attributes.Phone_Bold}</b></span> <span>{details.attributes.Phone_Normal}</span>
        </p>
      </div>
      <div className="contact-item">
        <img src={backendURL + details.attributes.Email_Image.data.attributes.url} alt="Email Image" />
        <p>
        <span><b>{details.attributes.Email_Bold}</b></span> <span>{details.attributes.Email_Normal}</span>
        </p>
      </div>
      
    </div>
  ))}
</div>

<div className="contact-form-container">
      {dataContactForm.contactForms.data.map((form) => (
        <form key={form.id}>
          <div className="form-group">
            <input type="email" name="contactEmail" value={form.attributes.Contact_Email} readOnly />
          </div>
          <div className="form-group">
            <textarea name="message" rows="4" value={form.attributes.Enter_A_Message} readOnly />
          </div>
          <div className="form-group">
            <input type="text" name="subject" value={form.attributes.Contact_Enter_Subject} readOnly />
          </div>
          <div className="form-group">
            <input type="text" name="name" value={form.attributes.Contact_Enter_Your_Name} readOnly />
          </div>
          <button type="submit">Send</button>
        </form>
      ))}
    </div>
  );

<div className="gradient-card">
  {dataContactProject &&
    dataContactProject.contactHaveProjects &&
    dataContactProject.contactHaveProjects.data &&
    dataContactProject.contactHaveProjects.data.map((project) => (
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
  {dataContactFooter &&
    dataContactFooter.contactFooters &&
    dataContactFooter.contactFooters.data &&
    dataContactFooter.contactFooters.data.map((footer) => (
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
 