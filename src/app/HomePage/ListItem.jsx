import { hideMail } from "../../utilities/function";
export const ListItem = (props) => {
  return (
    <div className="px-3">
      <div className="border d-flex justify-content-start p-2">
        <div className="mt-1">
          <img className="rounded-circle" src={props.person.picture.thumbnail} alt="" />
        </div>
        <div className="ps-3">
          <p className="m-0">name: {props.person.name.first} {/*props.peerson.name.last*/}</p>
          <p className="m-0">email: {hideMail(props.person.email)}</p>
          <p className="m-0">date of birth: {props.person.dob.date}</p>
        </div>
      </div>
    </div>
  );
}
