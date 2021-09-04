import { hideMail, formatDate } from "../../utilities/function";

import './customColor.css';

const GridCard = ({ person }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="border rounded-2">
        <div className="card p-0 border-0">
          <img src={person.picture.large} className="card-img-top img-fluid" alt="..." />
          <div className="card-img-overlay d-flex align-items-end">
            <h5 className="card-title text-light">{person.name.first}</h5>
          </div>
        </div>
        <div className={`card card-body border-0 ${person.gender === "female" && "bg-pink"}`}>
          <p className="card-text m-0">email: {hideMail(person.email)}</p>
          <p className="card-text m-0">Birth date: {formatDate(person.dob.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
