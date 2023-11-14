import { ListItem } from "components/ListItem/ListItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";


export const ContactsList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
    return <ul>
        {filteredContacts.map(contact => 
          <ListItem key={contact.id} name={contact.name} number={contact.number} id={contact.id}></ListItem>
          )}
      </ul>
  }