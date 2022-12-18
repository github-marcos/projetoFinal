import React from "react";

const Home = () =>{
    return <h1>Home</h1>
};

export default Home;






/*import { useState } from "react";
import AddEmployee from "../../empoyee/AddEmployee";
import { IEmployee, dummyEmployeeList, PageEnum } from "../../Employee.type";
import EmployeeList from "../../List/EmployeeList"; 
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
*/