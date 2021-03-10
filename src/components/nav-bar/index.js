import React, { useState }  from "react";
import "./index.css";

const data = [
  {
    id: 1,
    tabName: 'Home',
    title: 'HOME PAGE'
  },
  {
    id: 2,
    tabName: 'News',
    title: 'NEWS PAGE'
  },
  {
    id: 3,
    tabName: 'Contact',
    title: 'CONTACT PAGE'
  },
  {
    id: 4,
    tabName: 'About',
    title: 'ABOUT PAGE'
  },
];

export default function NavBar() {
  const [active, setActive] = useState(data[0]);

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
        {
          data.map((item) =>
            <button key={item.id} onClick={() => setActive(item)} className={active === item ? 'active' : ''}>{item.tabName}</button>
          )
        }
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>{active.title}</span>
        </section>
      </div>
    </div>
  );
}