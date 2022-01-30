import { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/client";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./menu/Home";
import About from "./menu/About";
import Blogs from "./menu/Blogs";
import Help from "./menu/Help";
import FAQs from "./menu/FAQs";
import Community from "./menu/Community";
import Contact from "./menu/Contact";
import Login from "./account/Login";
import AdminLogin from "./admin/AdminLogin";
import Signup from "./account/SignUp";
import Welcome from "./account/Welcome";
import MainProfile from "./account/MainProfile";
import EditProfile from "./account/EditProfile";
import ChangeIcon from "./account/ChangeIcon";
import ChangePass from "./account/ChangePass";
import TestResults from "./account/TestResults";
import GenDesc from "./generaltest/GenDesc";
import GenTest from "./generaltest/GenTest";
import GenResults from "./generaltest/GenResults";
import GenCourses from "./generaltest/GenCourses";
import SpecDesc from "./spectest/SpecDesc";
import BSCompSci from "./spectest/BSCompSci";
import BAComms from "./spectest/BAComms";
import BAEnglish from "./spectest/BAEnglish";
import BAJournalism from "./spectest/BAJournalism";
import BSAccountancy from "./spectest/BSAccountancy";
import BSEntrep from "./spectest/BSEntrep";
import BSIT from "./spectest/BSIT";
import BSManAccount from "./spectest/BSManAccount";
import BSMarketing from "./spectest/BSMarketing";
import BSPsychology from "./spectest/BSPsychology";

import SpecResults1 from "./spectest/SpecResults1";
import SpecTest2 from "./spectest/SpecTest2";
import SpecResults2 from "./spectest/SpecResults2";
import SpecTest3 from "./spectest/SpecTest3";
import SpecResults3 from "./spectest/SpecResults3";
import Footer from "./components/Footer";
import AdminDashBoard from "./admin/AdminDashboard";
import AdminUserAccounts from "./admin/AdminUserAccounts";
import CustomizeGenTest from "./admin/CustomizeGenTest";
import AddGenTestSet from "./admin/AddGenTestSet";

// import ForgotPassword from "./components/ForgotPassword";

import { useDispatch, useSelector } from "react-redux";
import { setAccountDetails } from "./store/actions/header";
import { GET_CURRENT_USER } from "./account/Graphql/Mutation";
import EditGenTestSetsList from "./admin/EditGenTestSetsList";
import EditGenTestSet from "./admin/EditGenTestSet";
import CustomizeSpecTest from "./admin/CustomizeSpecTest";
import ChooseSpecTestProgram from "./admin/ChooseSpecTestProgram";
import AddSpecTestSet from "./admin/AddSpecTestSet";
import EditSpecTestProgramList from "./admin/EditSpecTestProgramList";
import EditSpecTestSet from "./admin/EditSpecTestSet";
import EditSpecialTestSetList from "./admin/EditSpecialTestSetList";

function App() {
  const dispatch = useDispatch();
  const [getCurrentUser, { data, error }] = useMutation(GET_CURRENT_USER);
  const header = useSelector((state) => state.header);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getCurrentUser({
        variables: { id: JSON.parse(localStorage.getItem("user")).id },
      }).then((data) => {
        localStorage.setItem(
          "user",
          JSON.stringify(data.data?.getCurrentUser?.user)
        );
      });
      dispatch(
        setAccountDetails(JSON.parse(localStorage.getItem("user")).username)
      );
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faqs" component={FAQs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/help" component={Help} />
        {localStorage.getItem("user") || header ? (
          <>
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/mainprofile" component={MainProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/changeicon" component={ChangeIcon} />
            <Route exact path="/changepass" component={ChangePass} />
            <Route exact path="/testresults" component={TestResults} />
            <Route exact path="/gendesc" component={GenDesc} />
            <Route exact path="/gentest" component={GenTest} />
            <Route exact path="/genresults" component={GenResults} />
            <Route exact path="/gencourses" component={GenCourses} />
            <Route exact path="/specdesc" component={SpecDesc} />
            <Route exact path="/special-test" component={BSCompSci} />
            <Route exact path="/bsenterprice" component={BSEntrep} />
            <Route exact path="/spectest2" component={SpecTest2} />
            <Route exact path="/spectest3" component={SpecTest3} />
            <Route exact path="/specresults1" component={SpecResults1} />
            <Route exact path="/specresults2" component={SpecResults2} />
            <Route exact path="/specresults3" component={SpecResults3} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/admin-dashboard" component={AdminDashBoard} />
            
            <Route
              exact
              path="/admin-user-accounts"
              component={AdminUserAccounts}
            />
            <Route
              exact
              path="/customize-gen-test"
              component={CustomizeGenTest}
            />
            <Route exact path="/add-gen-test-set" component={AddGenTestSet} />
            <Route
              exact
              path="/edit-gen-test-sets-list"
              component={EditGenTestSetsList}
            />
            <Route exact path="/edit-gen-test-set" component={EditGenTestSet} />
            <Route
              exact
              path="/customize-spec-test"
              component={CustomizeSpecTest}
            />
            <Route
              exact
              path="/choose-spec-test-program"
              component={ChooseSpecTestProgram}
            />
            <Route exact path="/add-spec-test-set" component={AddSpecTestSet} />
            <Route
              exact
              path="/edit-spec-test-program-list"
              component={EditSpecTestProgramList}
            />
            <Route
              exact
              path="/edit-spec-test-program-sets"
              component={EditSpecialTestSetList}
            />
            <Route
              exact
              path="/edit-spec-test-set"
              component={EditSpecTestSet}
            />
            {/* <Route exact path="/forgotpass" component={ForgotPassword} /> */}
          </>
        ) : (
          <>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/adminlogin" component={AdminLogin} />
          </>
        )}

        <div className="push"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
