import { ListPage } from "./components/ListPage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { LoginForm } from "./components/login";
import { Edit } from "./components/Edit";

export const App=()=>{
    return(<BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/listpage" element={<ListPage/>}></Route>
        <Route path="/listpage/edit/:id" element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>);
}