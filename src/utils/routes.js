import Biography from "../components/DrawerItems/Biography/Biography";
import Classics from "../components/DrawerItems/Classics/Classics";
import Fiction from "../components/DrawerItems/Fiction/Fiction";
import HistoryAndPolitics from "../components/DrawerItems/HistoryAndPolitics/HistoryAndPolitics";
import Lifestyle from "../components/DrawerItems/Lifestyle/Lifestyle";
import Poems from "../components/DrawerItems/Poems/Poems";
import ScienceFiction from "../components/DrawerItems/ScienceFiction/ScienceFiction";
import Science from "../components/DrawerItems/Science/Science";
import TravellingAndGeography from "../components/DrawerItems/TravellingAndGeography/TravellingAndGeography";
import LoginPage from "../components/LoginPage/LoginPage";
import About from "../components/About/About";
import SignupPage from "../components/SignupPage/SignupPage";

const routes = [
    {
        path: "/about",
        component: About
    },
    {
        path: "/login-page",
        component: LoginPage
    },
    {
        path: "/signup-page",
        component: SignupPage
    },
    {
        path: "/biography",
        component: Biography,
        name: "Biography"
    },
    {
        path: "/classics",
        component: Classics,
        name: "Classics"
    },
    {
        path: "/fiction",
        component: Fiction,
        name: "Fiction"
    },
    {
        path: "/history-and-politics",
        component: HistoryAndPolitics,
        name: "History and Politics"
    },
    {
        path: "/lifestyle",
        component: Lifestyle,
        name: "Lifestyle"
    },
    {
        path: "/poems",
        component: Poems,
        name: "Poems"
    },
    {
        path: "/science-fiction",
        component: ScienceFiction,
        name: "Science Fiction"
    },
    {
        path: "/science",
        component: Science,
        name: "Science"
    },
    {
        path: "/travelling-and-geography",
        component: TravellingAndGeography,
        name: "Traveling and Geography"
    },
];

export default routes;