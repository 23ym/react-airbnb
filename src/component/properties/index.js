import "./index.css";

import Heading from "../heading";

import Box from "../box";
import ListItem from "../list-item"; 

export default function Properties({ rules, policy, transportation, languages, offers, instructions }) {
  return (

    <Box shadow className="properties">
      <div className="properties__header">
        <Heading border>Додаткові властивості:</Heading>
      </div>

      <List
        rules={rules}
        policy={policy}
        transportation={transportation}
        languages={languages}
        offers={offers}
        instructions={instructions}
      />
    </Box>
  );
}

function List({ rules, policy, transportation, languages, offers, instructions }) {
  return (
    <ul className="properties__list">
      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span>{policy}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span>{languages}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції">
        <span>{offers}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span>{instructions}</span>
        </ListItem>    
    </ul>
  );
}
