import { Tab } from "bootstrap"
import AddUserForm from "./AddUserForm"
import Header from "./Header"
import TableUser from "./TableUser"


const Home = (props) => {
    return (
        <>
            <Header />
            <AddUserForm />
            <TableUser />
        </>
    )
}
export default Home