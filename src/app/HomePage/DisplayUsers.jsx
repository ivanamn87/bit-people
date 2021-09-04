import { ListItem } from "./ListItem";
import GridCard from "./GridCard";

export const DisplayUsers = ({ isGridView, bitPeopleList }) => {
  return (
    <div className="container my-5 py-3">
      <div className={isGridView ? "row g-4" : "row"}>
        {bitPeopleList.map((person) =>
          isGridView ? <GridCard person={person} key={person.login.uuid} /> : <ListItem person={person} key={person.login.uuid} />
        )}
      </div>
    </div>
  );
};
