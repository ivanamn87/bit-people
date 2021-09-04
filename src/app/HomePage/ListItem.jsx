import { FaBirthdayCake } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const ListItem = (props) => {
  return (
    <div className="px-3">
      <div className="border d-flex justify-content-start p-2">
        <div className="mt-1">
          <img
            className="rounded-circle"
            src={props.person.picture.thumbnail}
            alt=""
          />
        </div>
        <div className="ps-3">
          <p className="m-0">
            {props.person.name.first} {/*props.peerson.name.last*/}
          </p>
          <p className="m-0">
            <HiOutlineMail />
            email: {props.person.email}
          </p>
          <p className="m-0">
            <FaBirthdayCake />
            date of birth: {props.person.dob.date}
          </p>
        </div>
      </div>
    </div>
  );
};
