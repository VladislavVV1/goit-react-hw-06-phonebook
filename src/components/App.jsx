import { Section } from "./Section/section";
import { PhoneBookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
export const App = () =>{
  const contacts = useSelector(getContacts)
  return (
    <>
    <Section title={'Phonebook'}> 
      <PhoneBookForm></PhoneBookForm>
    </Section>
  <br/>
    <Filter></Filter>
  
  {contacts[0]&& 
    <Section title={'Contacts'}> 
      <ContactsList></ContactsList>
    </Section>}
    </>
  )
}
