import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/common/Main";
import LoginOrphanage from "./components/orphanage/login/LoginOrphanage";
import OrphanageDetails from "./components/user/OrphanageDetails"
import OrphanageRegister from "./components/orphanage/registration/OrphanageRegister";
import UpdateOrphanage from "./components/orphanage/update/updateOrphanage";
import DonateItem from "./components/user/donateItem";
import UserHistory from "./components/user/Userhistory";
import LoginUser from "./components/user/login/LoginUser";
import RegisterUser from "./components/user/registration/RegisterUser";
import SearchOrphanage from "./components/user/SearchOrphanage";
import UpdateUser from "./components/user/update/updateUser";
import OrphanageHistory from "./components/orphanage/OrphanageHistory";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Main />} />

            <Route path="/logorp" element={<LoginOrphanage />} />
            <Route path="/loguser" element={<LoginUser />} />

            <Route path="/regorp" element={<OrphanageRegister />} />
            <Route path="/reguser" element={<RegisterUser />} />


            <Route path="/updateorp" element={<UpdateOrphanage />} />

            <Route path="/search" element={<SearchOrphanage />} />
            <Route path="/userhistory" element={<UserHistory />} />
            <Route path="/updateuser" element={<UpdateUser />} />
            <Route path="/orpdet" element={<OrphanageDetails />} />
            <Route path="/donate" element={<DonateItem />} />

            <Route path="/orphanagehistory" element={<OrphanageHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* 
      <Main />

      <LoginOrphanage />
      <LoginUser />

      <OrphanageRegister />
      <RegisterUser />

      <SearchOrphanage />
      <UpdateUser />
      <History />

      <OrphanageDetails />
      <DonateItem /> */}


    </>
  );
}

export default App;
