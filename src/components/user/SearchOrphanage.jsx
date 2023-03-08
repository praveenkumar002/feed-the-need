import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/searchOrp.module.css";
import {
  User,
  Envelope,
  Phone,
  House,
  ClockCounterClockwise,
  SignOut,
  PencilSimple,
  MagnifyingGlass,
  PaperPlaneRight,
  List,
  X,
} from "phosphor-react";
import logo from "C:/Users/prave/Desktop/feed-the-need/src/images/logoI.png";
import { useState } from "react";
import UserHistory from "./Userhistory";
import { useNavigate } from "react-router-dom";

function SearchOrphanage() {
  const navigate = useNavigate();

  const [orphanage, setOrphanage] = useState([
    { OrphanageName: "abc", city: "xyz", item: "food" },
    { OrphanageName: "abc", city: "xyz", item: "food" },
    { OrphanageName: "abc", city: "xyz", item: "food" },
    { OrphanageName: "abc", city: "xyz", item: "food" },
  ]);
  const [isShown, setIsShown] = useState(false);
  const [filterValue, setFilterValue] = useState("donation")
console.log(filterValue);
  const menuOpFun = () => {
    document.getElementById("menuBut").style.display = "none";
    document.getElementById("closeBut").style.display = "block";
    document.getElementById("aside").style.display = "flex";
    document.getElementById("section").style.display = "none";
    document.getElementById("history").style.display = "none";
  };

  const menuClFun = () => {
    document.getElementById("menuBut").style.display = "block";
    document.getElementById("closeBut").style.display = "none";
    document.getElementById("aside").style.display = "none";
    document.getElementById("section").style.display = "flex";
  };

  const updateAcc = (event) => {
    event.preventDefault();
    navigate("/updateuser");
  };
  const logOutAcc = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const visitOrp = (event) => {
    event.preventDefault();
    navigate("/orpdet", { state: { item: filterValue } });
  };

  const clickHistory = () => {
    setIsShown(!isShown);
    document.getElementById("menuBut").style.display = "block";
    document.getElementById("closeBut").style.display = "none";
    if (window.matchMedia("(max-width: 600px)").matches) {
      document.getElementById("aside").style.display = "none";
    }
  };
  return (
    <>
      <div className={styles.menuBut}>
        <List
          id="menuBut"
          size={32}
          color="#030303"
          weight="bold"
          onClick={() => menuOpFun()}
        />
      </div>
      <div className={styles.divSo}>
        <aside id="aside" className={styles.asideSo}>
          <div className={styles.closeBut}>
            <X
              id="closeBut"
              size={32}
              color="#030303"
              weight="bold"
              onClick={() => menuClFun()}
            />
          </div>
          <img
            src={logo}
            alt="logo"
            className={styles.imgSo}
            style={{ height: "85px", marginBottom: "5px", alignSelf: "center" }}
          />
          <hr
            style={{ height: "1px", backgroundColor: "black", color: "black" }}
          />
          <div className={styles.asideTitleSo}>Welcome, userName</div>
          <ul className={styles.asideListSo}>
            <li className={styles.asideListItemSo}>
              <User size={64} color="#666666" weight="bold" />
            </li>
            <li className={styles.asideListItemSo}>praveen kumar</li>
            <li className={styles.asideListItemSo}>
              <Envelope size={19.5} color="#030303" />
              praveengovind76@gmail.com
            </li>
            <li className={styles.asideListItemSo}>
              <Phone size={19.5} color="#030303" weight="bold" />
              9361323737
            </li>
            <li className={styles.asideListItemSo}>
              <House size={19.5} color="#030303" backgroundColor="blue" />
              Dharapuram
            </li>
            <button onClick={updateAcc} className={styles.asideListButtSo}>
              <PencilSimple size={16} color="#030303" />
              &nbsp; Manage&nbsp;account
            </button>
            <hr
              style={{
                width: "100%",
                boreder: "none",
                padding: "0.6px",
                backgroundColor: "#272727",
                color: "black",
                marginTop: "10px",
              }}
            />
            <div className={styles.asideListDivSo}>
              <button onClick={clickHistory} className={styles.asideListButtSo}>
                {isShown ? (
                  <>
                    <MagnifyingGlass size={16} color="#030303" />
                    &nbsp; Search
                  </>
                ) : (
                  <>
                    <ClockCounterClockwise size={16} color="#030303" />
                    &nbsp; History
                  </>
                )}
              </button>
              <button onClick={logOutAcc} className={styles.asideListButtSo}>
                <SignOut size={16} color="#030303" />
                &nbsp;logout
              </button>
            </div>
          </ul>
        </aside>

        {isShown ? (
          <UserHistory id="history" />
        ) : (
          <section id="section" className={styles.sectionSo}>
            <form className={styles.sectionFormSo}>
              <input
                className={styles.sectionCitySo}
                type="text"
                placeholder="City"
              />
              <button className={styles.SectionButtSo}>
                <MagnifyingGlass size={16} color="white" weight="bold" />
                &nbsp; Search
              </button>
            </form>
            <hr />
            <div className={styles.sectionFilterSo}>
              <label>Filter the need of orphanage</label>
              <select className={styles.sectionFilterSelSo} onChange={(event) => setFilterValue(event.target.value)}>
                <option value="donation">Donation</option>
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
              </select>
            </div>

            {orphanage.length > 0 ? (
              orphanage.map((orp) => (
                <div className={styles.sectionSearchDetSo}>
                  <p className={styles.sectionSearchNamSo}>
                    {orp.OrphanageName}
                  </p>
                  <p className={styles.sectionSearchCitSo}>{orp.city}</p>
                  <p className={styles.sectionSearchItmSo}>{orp.item}</p>
                  <button onClick={visitOrp} className={styles.SectionButtSo}>
                    <PaperPlaneRight size={16} color="white" weight="bold" />
                    &nbsp;Visit
                  </button>
                </div>
              ))
            ) : (
              <h1>No orphanages in selected city</h1>
            )}
          </section>
        )}
      </div>
    </>
  );
}

export default SearchOrphanage;
