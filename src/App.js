import {BrowserRouter} from 'react-router-dom';
import {Routes, Route, Navigate} from 'react-router-dom';

import {Form} from "./components/form/Form";
import {CardsList} from "./components/cardsList/CardsList";
import {MainLayout} from "./layouts/MainLayout/MainLayout";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'form'} element={<Form/>}/>
                <Route path={'comments'} element={<CardsList/>}/>

                <Route index element={<Navigate to={'form'}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>);
}

export default App;