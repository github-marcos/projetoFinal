import { useState } from "react";
import AddEmployee from "./AddEmployee";
import { IEmployee, dummyEmployeeList, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList"; 
import "./Home.style.css";

const Home = () => {

    const [employeeList, setemployeeList] = useState(
        dummyEmployeeList as IEmployee[]
        );

        const [shownpage, setshownpage] = useState(PageEnum.list);

        const onAddEmployeeClickHnd = () => {
            setshownpage(PageEnum.add);
        }

        const showListPage = () => {
            setshownpage(PageEnum.list)
        }

    return ( 
        <>
            <article>
                <header className="article-header">
                    <h1>
                        React: Simple CRUD Application
                    </h1>
                </header>
            </article>

            <section className="section-content">
                {shownpage === PageEnum.list && (
                <>< input type ="button" value="Add employee" onClick={onAddEmployeeClickHnd} />
                    <EmployeeList list={employeeList}/></>
                )}
                {shownpage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage}/>}
            </section>
        </>
     );
}
 
export default Home;