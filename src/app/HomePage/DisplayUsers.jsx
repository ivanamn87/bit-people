import ListItem from "./ListItem";

export const DisplayUsers = ({bitPeopleList}) => {
  return (
    <div className="container my-5 py-3">
      <div className="row">
        {bitPeopleList.map((person) =>
          <ListItem person={person} key={person.login.uuid} />
        )}
      </div>
    </div>
  );
};