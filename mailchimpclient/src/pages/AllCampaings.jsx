import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AllCompaings.css";
import axios from "axios";
const AllCampaings = () => {
  const [allcomapings, setAllComapings] = useState([]);
  const [currentscreen, setCurrentScreen] = useState("list");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleourhidPages = () => {
    navigate("/hidepages");
  };
  useEffect(() => {
    const fetchAllcompaings = async () => {
      try {
        setLoading(true);
        //https://latest-mail-chimp-server.vercel.app/
        const allComaingsdata = await axios.get(
          "https://latest-mail-chimp-server.vercel.app/api/newcompaing"
        );
        setAllComapings(allComaingsdata.data);
        setLoading(false);
        console.log(allComaingsdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllcompaings();
  }, []);
  const handleEditClick = (id) => {
    navigate(`/editcompaing/${id}`);
  };
  useEffect(() => {
    const fetchAllcompaings = async () => {
      try {
        setLoading(true);
        const allComaingsdata = await axios.get(
          "https://latest-mail-chimp-server.vercel.app/api/newcompaing"
        );
        setAllComapings(allComaingsdata.data);
        setLoading(false);
        console.log(allComaingsdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllcompaings();
  }, []);
  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const today = new Date();

  // Format today's date as "Today, Month Day, Year"
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long", // Adds the day of the week, like "Monday"
    month: "long", // Month as full name, e.g., "April"
    day: "numeric", // Day of the month, e.g., "5"
    year: "numeric", // Full year, e.g., "2024"
  });
  console.log("currentall compaings", allcomapings);
  return (
    <div>
      <div
        className="animation-theme snipcss0-0-0-1 snipcss-zRclk"
        cz-shortcut-listen="true"
      >
        <div id="root" aria-hidden="true" className="snipcss0-1-1-5">
          <div className="redesignNavigationExpandedRRClosed-1Pz4X snipcss0-2-5-6">
            <div className="metaTop-XCUCj snipcss0-3-6-7"></div>
            <div className="headerTop-2Y-yB snipcss0-3-6-18">
              <div className="wink snipcss0-4-18-19">
                <nav className="app-header-1maWO universal-search-29i1W snipcss0-5-19-20">
                  <div className="content-R4qGr universal-search-29i1W handle-live-help-1vaaS snipcss0-6-20-21">
                    <div className="align-left-S-hBc snipcss0-7-21-22">
                      <button
                        type="button"
                        role="link"
                        className="root-1mTPe snipcss0-8-22-23"
                        aria-label="Home"
                      >
                        <Link to="/">
                          <div className="freddieContainer-3BkOH snipcss0-9-23-24">
                            <img
                              className="freddie-2UE1a snipcss0-10-24-25"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAySDkuNTAyYzIuNzM0IDYuMyA4LjgwOCAxMC4wMTcgMTYuMDE2IDEwLjM3MmwuMjg1LjAxMnYuMDAyaC4wMDd2LS4wMDJjNy43MTQuMjczIDE0LjQ1NC0zLjQ1NCAxNy4yMTktMTAuMDc4LjM0OC0uODk2IDIuMjktNi4yNzUtLjY5MS03LjAzNnptLTMyLjIzMiA0Ljk2Yy0uMjM5LjA0LS40ODIuMDU2LS43MjguMDUtMi4zNzMtLjA2My00LjkzNy0yLjItNS4xOTItNC43MzQtLjI4MS0yLjggMS4xNS00Ljk1NiAzLjY4NC01LjQ2N2E0LjMxMyA0LjMxMyAwIDAxMS4wNjQtLjA3NmMxLjQyLjA3OCAzLjUxMSAxLjE2OCAzLjk5IDQuMjYuNDIzIDIuNzQtLjI1IDUuNTI4LTIuODE4IDUuOTY2em0tMi42Ni0xMS44MjVsLjAxLS4wMDJjMS45NTMtNS4zNDcgNS4zNi0xMC4zNTYgOS43OTgtMTMuNzczLjA4NC0uMDcuMTctLjE0LjI2LS4yMSAyLjE4Ny0xLjc4NSA0LjQyOC0zLjMwNSA2LjU4NS00LjUwOCAwIDAtMS45MTMtMi4yMTgtMi40OS0yLjM4MUMxOC4wNTYuODUgMTAuMzggNi4xNDMgNS40NzkgMTMuMTM2Yy0xLjk4MiAyLjgzLTQuODIgNy44NC0zLjQ2MyAxMC40MTguMTY3LjMyIDEuMTE0IDEuMTQgMS42MjIgMS41NjQuODUtMS4yMzUgMi4xNS0yLjEgMy44MDgtMi40MzR6bTkuMDQtOS41NTNjMS43NDYtMi4wMjMgMy45LTMuNzgzIDUuODI5LTQuNzcuMDY2LS4wMzQuMTM3LjAzOC4xLjEwMy0uMTUzLjI4LS40NS44NzgtLjU0MSAxLjMyOC0uMDEzLjA2Ni4wNi4xMTQuMTE2LjA3NiAxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3LTEuODM2LjUyNy00LjMyLjkzMi03LjA5MS43NjctLjMwMi0uMDI0LS41ODQtLjA2MS0uODQ1LS4wOTUtMS4wNjgtLjE0LTEuNzg1LS4yMzQtMi4wOTMuNzY1YTUuMTM3IDUuMTM3IDAgMDAuMjkyLjExYy4xNDMuMDQ4LjI5LjA5My40MzguMTM1YTE1LjAzMSAxNS4wMzEgMCAwMDEuODIuNDAxYy4zMDguMDQ5LjYxNy4wOTMuOTI4LjEyNWExNC41MDMgMTQuNTAzIDAgMDAxLjQwMi4wOCAxMy4wOTIgMTMuMDkyIDAgMDAxLjExNS0uMDJjLjA5OC0uMDA0LjE5Ni0uMDA4LjI5NC0uMDE0LjMxMy0uMDIyLjYyNi0uMDUuOTQyLS4wODFhLjEzMS4xMzEgMCAwMS4wNjQuMjVsLS4wMDkuMDA0Yy0uMzAyLjEyOC0uNjE1LjIzLS45MzMuMzFhOC4zODQgOC4zODQgMCAwMS0xLjQ1Ny4yMjYgMTQuNDEgMTQuNDEgMCAwMS0xLjQ3Ny4wMTkgMTMuODIyIDEzLjgyMiAwIDAxLS45ODMtLjA3NiAxNS43NDUgMTUuNzQ1IDAgMDEtMS40Ni0uMjQ3IDEwLjA3NiAxMC4wNzYgMCAwMS0xLjA3NC0uMzA3Yy4xMjUgMS4wNjQgMS4xNjIgMS41NDEgMS42NTggMS43MzRhNy40NzggNy40NzggMCAwMDEuMzA2LjM1NGM1LjYyLjk2NyAxMC44NzUtMi4yNDYgMTIuMDU4LTMuMDU2LjA4OC0uMDYuMTQ3LS4wMDEuMDc2LjEwNmExLjk2IDEuOTYgMCAwMS0uMTE2LjE2NWMtMS40NDggMS44NjgtNS4zNCA0LjAzLTEwLjQwNCA0LjAzLTIuMjEgMC00LjQxNy0uNzc5LTUuMjI3LTEuOTc0LTEuMjU4LTEuODU1LS4wNjItNC41NjMgMi4wMzMtNC4yODEuMDAyIDAgLjcxNy4wOC45MTguMTA0IDQuNDA4LjQ5MyA5LjczLS45NTkgMTIuMDk0LTMuMTQybC4xMTYtLjA4M2MuODE5LS43NzIgMS4yMzYtMS41NyAxLjEwMi0yLjI3MWExLjcgMS43IDAgMDAtLjQ5My0uOTY3Yy0uNTEzLS41MDMtMS4zMjgtLjg5NC0yLjcwMi0xLjI4bC0uMTE0LS4wMzItLjE0NS0uMDRjLS4zMi0uMDktLjU3LS4xNTktLjgzNS0uMjQ2LS41OS0uMTk0LS44ODItLjM1LS45NDgtMS40Ni0uMDMtLjQ4Ni0uMTE0LTIuMTc2LS4xNDQtMi44NzUtLjA1NC0xLjIyNC0uMjAxLTIuODk4LTEuMjQtMy41ODhhMS43NCAxLjc0IDAgMDAtLjg4Ny0uMjg0Yy0uMjU1LS4wMTItLjQwNS4wMjMtLjQ4NS4wNDJsLS4wNDIuMDFjLS41Ni4wOTQtLjkwNC4zODItMS4zMS43MmwtLjA3LjA2Yy0xLjI5NSAxLjA3OS0yLjM4OSAxLjI1NS0zLjYwNCAxLjIwMy0uMzgtLjAxNi0uNzctLjA1NC0xLjE4My0uMDk1LS4zNzgtLjAzNy0uNzc0LS4wNzYtMS4xOTctLjEwMWwtLjEtLjAwNmMtLjEzOS0uMDA4LS4yNzctLjAxNy0uNDE2LS4wMjQtMi4wMzYtLjEwNC00LjIyIDEuNjU1LTQuNTg0IDQuMTUzLS40MDUgMi43ODcgMS4xMzMgNC40OTQgMi4xMzMgNS42MDUuMjQ4LjI3NS40NjIuNTEzLjYwNy43MjJhLjc1Ni43NTYgMCAwMS0uMDYuOTdsLjAwMS4wMDFjLTIuMDc4IDIuMTM3LTIuNzQyIDUuNTMyLTEuOTYgOC4zNi4wOTkuMzU0LjIyMi42OTIuMzcgMS4wMTQgMS44MzYgNC4yOTQgNy41MzUgNi4yOTMgMTMuMTAzIDQuNDc0YTEzLjY3NyAxMy42NzcgMCAwMDIuMTE1LS44OTMgMTEuMTEyIDExLjExMiAwIDAwMy4yNC0yLjQyem0tNi41Ni0xNi4wMzdjLjM0LS4wNC42NjctLjA0Mi45NjcgMCAuMTczLS4zOTguMjAzLTEuMDg0LjA0Ny0xLjgzMS0uMjMyLTEuMTExLS41NDYtMS43ODMtMS4xOTUtMS42NzgtLjY1LjEwNC0uNjczLjkwOS0uNDQxIDIuMDIuMTMuNjI0LjM2MyAxLjE1OS42MjIgMS40OXptLTUuNTcyLjg4Yy0xLjAwMS0uNDMyLTEuNzc3LS41NjUtMy4yNC0uMDk0bC0uMTE1LjAzOGMtLjI5MS4wOTUtLjQ5NC4xNjEtLjYyMy4xNTVhLjI2LjI2IDAgMDEtLjA0LS4wMDVjLS4wNjktLjAxNC0uMTE2LS4wNTctLjEzLS4xMTktLjA0Mi0uMTkxLjI1My0uNTA3LjU2NC0uNzM0Ljk0LS42NzcgMi4xNi0uODIzIDMuMTg0LS4zODMuNS4yMTMuOTcxLjU5MyAxLjIuOTY3LjExMS4xODEuMTMzLjMyMS4wNjEuMzk1LS4xMTIuMTE4LS4zMzUuMDE3LS43NC0uMTY2aC0uMDAxbC0uMTItLjA1NXptLS45MzUuNTMyYy0uMDk0LjAxLS4xODEuMDMtLjI2Ni4wNWwtLjAwNi4wMDFhNC45NTIgNC45NTIgMCAwMS0uMDc1LjAxNyAyLjAxIDIuMDEgMCAwMC0uODA1LjQxM2MtLjE4My4xNi0uMjk2LjMzNi0uMjk1LjQ2IDAgLjA2LjAyNi4wOTMuMDQ2LjExLjAyOC4wMjUuMDYuMDM2LjEuMDM4LjA4My4wMDQuMTk2LS4wMzYuMzUxLS4wOWwuMDkxLS4wMzJhMy43NzcgMy43NzcgMCAwMTEuOTEtLjIwN2wuMDM4LjAwNWMuMjc5LjAzMy40NDcuMDUzLjUxNC0uMDUyLjAyLS4wMy4wNDQtLjA5NS0uMDE3LS4xOTMtLjE0Mi0uMjMtLjc1My0uNjE4LTEuNTg2LS41MnptNS42MzUgMS43OGMtLjE0Ny4zLS42LjM3OS0xLjAxLjE3Ny0uNDEtLjIwMi0uNjI0LS42MDgtLjQ3Ny0uOTA3LjE0Ny0uMy42LS4zOCAxLjAxLS4xNzcuNDEuMjAxLjYyNC42MDguNDc3LjkwN3ptMS42My0yLjEzYy0uMzMzLS4wMDYtLjYxLjM2LS42MTguODE4LS4wMDguNDU4LjI1Ny44MzMuNTkuODM5LjMzNC4wMDYuNjEtLjM2LjYxOC0uODE4LjAwOC0uNDU4LS4yNTYtLjgzMy0uNTktLjgzOXptLTIyLjc2MSA4LjIwOGMuMTMyLS4wMy4yNjgtLjA2Mi4zNTEuMDQyLjAzLjAzNC4wNzguMTEzLjAyMi4yNDItLjA5NS4yMi0uNDY4LjUyLTEuMDAyLjUtLjU1LS4wNDMtMS4xNi0uNDQzLTEuMjQ0LTEuNDM3LS4wNC0uNDkuMTQ1LTEuMDg5LjI2LTEuNDAxLjIyLS42MDUuMDItMS4yMzgtLjQ5Ni0xLjU3N2ExLjM0IDEuMzQgMCAwMC0xLjg1OC4zODdjLS4xNTguMjQ3LS4yNTUuNTU1LS4zMDYuNzItLjAxNC4wNDUtLjAyNS4wOC0uMDM0LjEwMi0uMTE2LjMxMy0uMzAyLjQwNS0uNDI3LjM4OC0uMDYtLjAwOC0uMTQyLS4wNDgtLjE5NC0uMTkxLS4xNDMtLjM5Mi0uMDI3LTEuNS43MS0yLjMxNGEyLjIzMyAyLjIzMyAwIDAxMS45MTUtLjY5Yy43NDIuMDk0IDEuMzU5LjU0MyAxLjczNyAxLjI2My41MDMuOTU4LjA1NSAxLjk2My0uMjEyIDIuNTYzbC0uMDA1LjAxYTguNSA4LjUgMCAwMC0uMDc0LjE2OWMtLjE2Ny4zOTgtLjE3Ni43NDYtLjAyNC45OC4xMTcuMTc5LjMyNC4yODQuNTcuMjg4LjExNC4wMDIuMjE4LS4wMjIuMzEtLjA0M2guMDAxeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
                              alt=""
                            />
                          </div>
                        </Link>
                      </button>
                    </div>
                    <div className="align-center-1O1Ww snipcss0-7-21-26">
                      <form className="root-1WdPk handle-live-help-_OgMK snipcss0-8-26-27">
                        <button
                          className="search-button-1spEe snipcss0-9-27-28"
                          type="button"
                        >
                          <span
                            aria-hidden="true"
                            className="search-icon-YhRw5 snipcss0-10-28-29"
                          ></span>
                          <span className="button-text-2V1Gs snipcss0-10-28-30">
                            Search Mailchimp
                          </span>
                        </button>
                      </form>
                    </div>
                    <div className="align-right-3B6pa cluster-3D5Qr nowrap-34OZ- snipcss0-7-21-31">
                      <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing6-zD2QG snipcss0-8-31-32">
                        <button
                          className="root-sBgFt container-3-bH7 primary-33czz liveExpertHelpBtn-3ju2V appHeaderliveExpertHelpBtn-1RFSO snipcss0-9-32-33"
                          data-id="ipd-appHeader-liveExpertHelpBtn"
                          type="button"
                        >
                          <span className="temporarySpan-2iF2p snipcss0-10-33-34">
                            <div className="cluster-3D5Qr nowrap-34OZ- snipcss0-11-34-35">
                              <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe snipcss0-12-35-36">
                                <div className="online-xMPbD snipcss0-13-36-37"></div>
                                <span className="snipcss0-13-36-38">
                                  Live expert help
                                </span>
                              </div>
                            </div>
                          </span>
                        </button>
                        <div
                          className="avatarRoot-3kLoc snipcss0-9-32-39"
                          data-testid="app-header-avatar-menu"
                          data-id="ipd-appHeader-accountMenuIcon"
                          data-pendo-target="account-menu"
                        >
                          <div className="identityGroup-2kpTi snipcss0-10-39-40">
                            <div className="identityRoot-3EJCo snipcss0-11-40-41">
                              <div className="container-3dbgU snipcss0-12-41-42">
                                <button
                                  id="account-settings-btn"
                                  data-analytics-tag="AppHeader-Identity"
                                  type="button"
                                  className="btn-2N1xe snipcss0-13-42-43"
                                  aria-controls="mc:2"
                                  aria-expanded="false"
                                  aria-label="account settings button"
                                >
                                  <div className="avatar-2-CVF snipcss0-14-43-44">
                                    <img
                                      alt="Signed in as Ali Next Web Lines, Account Menu"
                                      className="avatarImage-1YlIs snipcss0-15-44-45"
                                      src="https://secure.gravatar.com/avatar/e3800de5ea2a43b65900d9b3df447f9c.jpg?s=300&amp;d=https%3A%2F%2Fcdn-images.mailchimp.com%2Ficons%2Fletter-avatars%2Fa-avatar.png"
                                    />
                                  </div>
                                </button>
                                <span className="root-3ALOt default-3A6wB notificationBadge-2RFjU snipcss0-13-42-46">
                                  <span className="wink-visually-hidden snipcss0-14-46-47">
                                    (
                                  </span>
                                  2
                                  <span className="wink-visually-hidden snipcss0-14-46-48">
                                    )
                                  </span>
                                </span>
                                <span className="wink-visually-hidden snipcss0-13-42-49">
                                  {" "}
                                  notifications
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="light snipcss0-10-39-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="wink snipcss0-3-6-51">
              <div className="theme-1OLRx snipcss0-4-51-52">
                <div className="light snipcss0-5-52-53">
                  <div
                    data-testid="LeftNavigation"
                    className="root-kjeIf shellNavigationLeftNav-3iPdf snipcss0-6-53-54"
                  >
                    <nav className="navItems-1Kfmk snipcss0-7-54-55">
                      <ul className="stack-1qp4V spacing4-1xt6w navItems-1Kfmk minHeightNav-2mej_ snipcss0-8-55-56">
                        <li className="createItem-1mIzO snipcss0-9-56-57">
                          <Link
                            style={{ outline: "1px solid #1b8a95" }}
                            className="root-sBgFt container-3-bH7 secondary-1_P2K createButton-1NK_y snipcss0-10-57-58"
                            to="/newcomaping"
                          >
                            <span className="temporarySpan-2iF2p snipcss0-11-58-59">
                              <span className="createIcon-qJ3Qk snipcss0-12-59-60"></span>
                              Create
                            </span>
                          </Link>
                        </li>
                        <li
                          data-analytics-tag="Nav-Campaigns"
                          className="navItem-GOmDa snipcss0-9-56-61"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-61-62"
                            aria-controls="mc:4"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy campaigns-3-h-u expanded-222wz snipcss0-11-62-63"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-62-64">
                              <span
                                className="label-30mF1 snipcss0-12-64-65"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Campaigns
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-64-66">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-66-67"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-61-68">
                            <div
                              className="snipcss0-11-68-69 style-Rtn1I"
                              id="style-Rtn1I"
                            >
                              <ul id="mc:4" className="snipcss0-12-69-70">
                                <li
                                  data-analytics-tag="SecondaryNav-All campaigns"
                                  className="snipcss0-13-70-71"
                                >
                                  <Link
                                    to="/allcompaings"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        All campaigns
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Automations"
                          className="navItem-GOmDa snipcss0-9-56-75"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-75-76"
                            aria-controls="mc:6"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy automations-Vsn6O expanded-222wz snipcss0-11-76-77"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-76-78">
                              <span
                                className="label-30mF1 snipcss0-12-78-79"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Automations
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-78-80">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-80-81"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-75-82">
                            <div
                              className="snipcss0-11-82-83 style-FZrke"
                              id="style-FZrke"
                            >
                              <ul id="mc:6" className="snipcss0-12-83-84">
                                <li
                                  data-analytics-tag="SecondaryNav-Overview"
                                  className="snipcss0-13-84-85"
                                >
                                  <Link
                                    to="/automationoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        OverViews
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-All journeys"
                                  className="snipcss0-13-84-89"
                                >
                                  <Link
                                    to="/automationoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        All Journeys
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Pre-built journeys"
                                  className="snipcss0-13-84-93"
                                >
                                  <Link
                                    to="/automationoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-94-95">
                                      <span className="snipcss0-16-95-96">
                                        Pre-built journeys
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Transactional email"
                                  className="snipcss0-13-84-97"
                                >
                                  <Link
                                    to="/transactional"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-98-99">
                                      <span className="snipcss0-16-99-100">
                                        Transactional email
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Audience"
                          className="navItem-GOmDa snipcss0-9-56-101"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-101-102"
                            aria-controls="mc:11"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy audience-A6AiK expanded-222wz snipcss0-11-102-103"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-102-104">
                              <span
                                className="label-30mF1 snipcss0-12-104-105"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Audience
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-104-106">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-106-107"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-101-108">
                            <div
                              className="snipcss0-11-108-109 style-JdVoN"
                              id="style-JdVoN"
                            >
                              <ul id="mc:11" className="snipcss0-12-109-110">
                                <li
                                  data-analytics-tag="SecondaryNav-Audience dashboard"
                                  className="snipcss0-13-110-111"
                                >
                                  <Link
                                    to="/audiencedashboard"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-112-113">
                                      <span className="snipcss0-16-113-114">
                                        Audience dashboard
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-All contacts"
                                  className="snipcss0-13-110-115"
                                >
                                  <Link
                                    to="/allcontacts"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-116-117">
                                      <span className="snipcss0-16-117-118">
                                        All contacts
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Signup forms"
                                  className="snipcss0-13-110-119"
                                >
                                  <Link
                                    to="/signupforms"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-120-121">
                                      <span className="snipcss0-16-121-122">
                                        Signup forms
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Tags"
                                  className="snipcss0-13-110-123"
                                >
                                  <Link
                                    to="/tags"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-124-125">
                                      <span className="snipcss0-16-125-126">
                                        Tags
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Segments"
                                  className="snipcss0-13-110-127"
                                >
                                  <Link
                                    to="/segments"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-128-129">
                                      <span className="snipcss0-16-129-130">
                                        Segments
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Surveys"
                                  className="snipcss0-13-110-131"
                                >
                                  <Link
                                    to="/mailchimpsurvy"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-132-133">
                                      <span className="snipcss0-16-133-134">
                                        Surveys
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Subscriber preferences"
                                  className="snipcss0-13-110-135"
                                >
                                  <a
                                    aria-label="Subscriber preferences"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-135-136"
                                    role="link"
                                    aria-describedby="mc:53"
                                    href="#"
                                  >
                                    <div className="snipcss0-15-136-137">
                                      <span className="snipcss0-16-137-138">
                                        Subscriber preferences
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Inbox"
                                  className="snipcss0-13-110-139"
                                >
                                  <a
                                    aria-label="Inbox"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-139-140"
                                    role="link"
                                    aria-describedby="mc:54"
                                    href="#"
                                  >
                                    <div className="snipcss0-15-140-141">
                                      <span className="snipcss0-16-141-142">
                                        Inbox
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Analytics"
                          className="navItem-GOmDa snipcss0-9-56-143"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-143-144"
                            aria-controls="mc:20"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy analytics-3SiQv expanded-222wz snipcss0-11-144-145"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-144-146">
                              <span
                                className="label-30mF1 snipcss0-12-146-147"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Analytics
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-146-148">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-148-149"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-143-150">
                            <div
                              className="snipcss0-11-150-151 style-GtTVY"
                              id="style-GtTVY"
                            >
                              <ul id="mc:20" className="snipcss0-12-151-152">
                                <li
                                  data-analytics-tag="SecondaryNav-Marketing dashboard"
                                  className="snipcss0-13-152-153"
                                >
                                  <Link
                                    to="/marketingdashboard"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-154-155">
                                      <span className="snipcss0-16-155-156">
                                        Marketing dashboard
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Audience"
                                  className="snipcss0-13-152-157"
                                >
                                  <Link
                                    to="/audienceanalytics"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-158-159">
                                      <span className="snipcss0-16-159-160">
                                        Audience
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Reports"
                                  className="snipcss0-13-152-161"
                                >
                                  <Link
                                    to="/reports"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-162-163">
                                      <span className="snipcss0-16-163-164">
                                        Reports
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Custom reports"
                                  className="snipcss0-13-152-165"
                                >
                                  <a
                                    aria-label="Custom reports"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-165-166"
                                    role="link"
                                    aria-describedby="mc:58"
                                    href="/analytics/custom-reports"
                                  >
                                    <div className="snipcss0-15-166-167">
                                      <span className="snipcss0-16-167-168">
                                        Custom reports
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Website"
                          className="navItem-GOmDa snipcss0-9-56-169"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-169-170"
                            aria-controls="mc:25"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy websites-39YWq expanded-222wz snipcss0-11-170-171"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-170-172">
                              <span
                                className="label-30mF1 snipcss0-12-172-173"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Website
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-172-174">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-174-175"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-169-176">
                            <div
                              className="snipcss0-11-176-177 style-EgfMh"
                              id="style-EgfMh"
                            >
                              <ul id="mc:25" className="snipcss0-12-177-178">
                                <li
                                  data-analytics-tag="SecondaryNav-Website"
                                  className="snipcss0-13-178-179"
                                >
                                  <Link
                                    to="/websiteoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-180-181">
                                      <span className="snipcss0-16-181-182">
                                        Website
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Settings"
                                  className="snipcss0-13-178-183"
                                >
                                  <Link
                                    to="/websitesetting"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-184-185">
                                      <span className="snipcss0-16-185-186">
                                        Settings
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Reports"
                                  className="snipcss0-13-178-187"
                                >
                                  <Link
                                    to="/websitereports"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-188-189">
                                      <span className="snipcss0-16-189-190">
                                        Reports
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Content"
                          className="navItem-GOmDa snipcss0-9-56-191"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-191-192"
                            aria-controls="mc:29"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy contentStudio-1mjjE expanded-222wz snipcss0-11-192-193"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-192-194">
                              <span
                                className="label-30mF1 snipcss0-12-194-195"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Content
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-194-196">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-196-197"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-191-198">
                            <div
                              className="snipcss0-11-198-199 style-rY2xm"
                              id="style-rY2xm"
                            >
                              <ul id="mc:29" className="snipcss0-12-199-200">
                                <li
                                  data-analytics-tag="SecondaryNav-Creative Assistant"
                                  className="snipcss0-13-200-201"
                                >
                                  <Link
                                    to="/creativeassistant"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-202-203">
                                      <span className="snipcss0-16-203-204">
                                        Creative Assistant
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-My files"
                                  className="snipcss0-13-200-205"
                                >
                                  <a
                                    aria-label="My files"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-205-206"
                                    role="link"
                                    aria-describedby="mc:63"
                                    href="/content/#myfiles"
                                  >
                                    <div className="snipcss0-15-206-207">
                                      <span className="snipcss0-16-207-208">
                                        My files
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Email templates"
                                  className="snipcss0-13-200-209"
                                >
                                  <Link
                                    to="/"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-210-211">
                                      <span className="snipcss0-16-211-212">
                                        Email templates
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Integrations"
                          className="navItem-GOmDa snipcss0-9-56-213"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-213-214"
                            aria-controls="mc:33"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy integrations-1x251 expanded-222wz snipcss0-11-214-215"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-214-216">
                              <span
                                className="label-30mF1 snipcss0-12-216-217"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Integrations
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-216-218">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-218-219"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-213-220">
                            <div
                              className="snipcss0-11-220-221 style-bVLoe"
                              id="style-bVLoe"
                            >
                              <ul id="mc:33" className="snipcss0-12-221-222">
                                <li
                                  data-analytics-tag="SecondaryNav-Discover"
                                  className="snipcss0-13-222-223"
                                >
                                  <Link
                                    to="/integrationdiscover"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-224-225">
                                      <span className="snipcss0-16-225-226">
                                        Discover
                                      </span>
                                      <span className="root-3ALOt new-1T1aO badge_padding-2UxcF snipcss0-16-225-227">
                                        <span className="wink-visually-hidden snipcss0-17-227-228">
                                          (
                                        </span>
                                        New
                                        <span className="wink-visually-hidden snipcss0-17-227-229">
                                          )
                                        </span>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Manage"
                                  className="snipcss0-13-222-230"
                                >
                                  <Link
                                    to="/integrationmanage"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-231-232">
                                      <span className="snipcss0-16-232-233">
                                        Manage
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="account-3ri0E appHeaderNotCollapsed-311nL scrollBorderBottom-2LDg0 snipcss0-8-55-234">
                        <div className="collapseIcon--FJm2 snipcss0-9-234-235">
                          <button
                            type="button"
                            data-testid="collapse-icon-button"
                            className="collapse-2FuQj snipcss0-10-235-236"
                            aria-label="Collapse navigation"
                          >
                            <span className="icon-1HgY2 snipcss0-11-236-237"></span>
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="wink snipcss0-3-6-238">
              <div className="root-35Mg8 snipcss0-4-238-239">
                <ul className="stack-1qp4V spacing1-2v2JO root-3AJ2b supportButtons-1wLtK snipcss0-5-239-240">
                  <li className="snipcss0-6-240-241">
                    <div className="root-2SOqc snipcss0-7-241-242">
                      <button
                        onClick={handleourhidPages}
                        className="root-1khsy helpMenuButton-10MYH snipcss0-8-242-243"
                        id="mc:38"
                        aria-expanded="false"
                        type="button"
                        aria-haspopup="true"
                      >
                        <span className="wink-visually-hidden snipcss0-9-243-244">
                          Help
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          aria-hidden="true"
                          className="wink-icon snipcss0-9-243-245"
                        >
                          <path d="M10.92 15.2h2.24v-.64c.06-1.12 1.02-1.94 1.96-2.84.9-.88 1.76-1.8 1.76-3.22 0-1.94-1.34-3.5-4.2-3.5C10 5 8.14 6.64 8 9.26h2.32c.14-1.38 1-2.26 2.24-2.26 1.22 0 1.78.66 1.78 1.68 0 .879-.66 1.52-1.4 2.26-.96.94-2.02 1.92-2.02 3.5v.76zm1.1 4.44c.88 0 1.6-.68 1.6-1.54 0-.88-.72-1.56-1.6-1.56-.9 0-1.64.68-1.64 1.56 0 .86.74 1.54 1.64 1.54z"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <main id="content" className="body-1uBId snipcss0-3-6-246">
              <div className="frame-1q4n0 snipcss0-4-246-247">
                <div className="loading-_VrqD snipcss0-5-247-248"></div>
                <br />
                <header class="root-1rj4d standard-2H4cn header-3IL6q overViewHeaderContainer-2A4X0 snipcss-kC5cZ">
                  <div class="cluster-3D5Qr nowrap-34OZ-">
                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                      <div class="stack-1qp4V style-eticP" id="style-eticP">
                        <h1 class="heading-3-eDQNF root-PihPG">
                          All campaigns
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div class="actions-1bN9W cluster-3D5Qr">
                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                      <button
                        style={{ border: "1px solid #007C89" }}
                        class="root-sBgFt container-3-bH7 secondary-1_P2K"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p">View analytics</span>
                      </button>
                      <button
                        style={{ backgroundColor: "#007C89", color: "white" }}
                        class="root-sBgFt container-3-bH7 primary-33czz"
                        data-testid="createCampaignButton"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p">Create</span>
                      </button>
                    </div>
                  </div>
                </header>
                {/* listview here */}
                <div
                  role="tablist"
                  class="tabList-JX8Ln tabList-2ZCac snipcss-o6YMC"
                >
                  <span
                    onClick={() => setCurrentScreen("list")}
                    class="root-TPnFr large-1lNYH"
                    role="tab"
                    style={{
                      color: "#007c89",
                      display: "flex",
                      alignItems: "center",
                      borderBottom:
                        currentscreen === "list" ? "5px solid #007C89" : "",
                    }}
                    id="mc:48:tabs:0"
                    tabindex="0"
                    aria-selected="true"
                    aria-controls="mc:48:tabs:0:panel"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      focusable="false"
                      aria-hidden="true"
                      class="wink-icon tabIcon-2tRyq"
                    >
                      <path d="M5 8a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4zm2 4a2 2 0 11-4 0 2 2 0 014 0zM21 5H9v2h12V5zM9 11h12v2H9v-2zm12 6H9v2h12v-2z"></path>
                    </svg>
                    List
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom:
                        currentscreen === "calender" ? "5px solid #007C89" : "",
                    }}
                    onClick={() => setCurrentScreen("calender")}
                    class="root-TPnFr large-1lNYH"
                    role="tab"
                    id="mc:48:tabs:1"
                    tabindex="-1"
                    aria-selected="false"
                    aria-controls="mc:48:tabs:1:panel"
                    data-id="ipd-allCampaigns-calendarViewTab"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      focusable="false"
                      aria-hidden="true"
                      class="wink-icon tabIcon-2tRyq"
                    >
                      <path d="M7 13a1 1 0 100-2 1 1 0 000 2zm0 5a1 1 0 100-2 1 1 0 000 2zm6-6a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2zm6-6a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 1a2 2 0 00-2 2v20h22V3a2 2 0 00-2-2H3zm18 7H3v13h18V8z"
                      ></path>
                    </svg>
                    Calendar
                  </span>
                </div>
                <br />
                {currentscreen === "list" && (
                  <>
                    <div
                      style={{
                        marginLeft: "30px",
                        display: "flex",
                        alignItems: "center",
                      }}
                      class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-RhPVa"
                    >
                      <div class="root-TXRyV">
                        <label id="mc:33" for="mc:32" class="">
                          Type:
                        </label>
                        <div class="listbox-1KRYD">
                          <span
                            style={{ color: "#007c89" }}
                            tabindex="0"
                            class="selectedValue-1AZV5"
                            id="mc:34-trigger"
                            aria-labelledby="mc:33"
                            data-id="ipd-allCampaigns-typeFilter"
                            role="combobox"
                            aria-autocomplete="none"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                          >
                            <span class="audienceSelectInline-245gP">All</span>
                            <span
                              style={{ color: "#007c89" }}
                              class="indicator-1Co1h"
                            >
                              <svg
                                style={{ color: "#007c89" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon"
                              >
                                <path
                                  style={{ color: "#007c89" }}
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="root-TXRyV">
                        <label
                          style={{ fontSize: "14px" }}
                          id="mc:36"
                          for="mc:35"
                          class=""
                        >
                          Status:
                        </label>
                        <div class="listbox-1KRYD">
                          <span
                            tabindex="0"
                            class="selectedValue-1AZV5"
                            id="mc:37-trigger"
                            aria-labelledby="mc:36"
                            data-id="ipd-allCampaigns-filterBarHeader"
                            role="combobox"
                            aria-autocomplete="none"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            style={{ color: "#007c89", fontSize: "14px" }}
                          >
                            All
                            <span class="indicator-1Co1h">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                      <button
                        class="root-sBgFt root-22EAH triggerButton-3JwWK"
                        data-testid="all-campaigns-folder-filter-dropdown-trigger"
                        data-id="ipd-allCampaigns-folderFilterDropdown"
                        tabindex="0"
                        aria-expanded="false"
                        type="button"
                      >
                        <div class="triggerText-2XTUy">Folder: </div>
                        <div
                          class="dropdownLabel-3HasS"
                          style={{ color: "#007c89" }}
                        >
                          All
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          aria-hidden="true"
                          class="wink-icon"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        class="root-sBgFt root-22EAH triggerButton-3tOrh"
                        data-testid="all-campaigns-date-filter-dropdown-trigger"
                        tabindex="0"
                        aria-expanded="false"
                        type="button"
                      >
                        <div class="triggerText-1Y4Hy">Date: </div>
                        <div
                          data-testid="all-campaigns-date-filter-dropdown-label"
                          class="dropdownLabel-2F7iI"
                          style={{ color: "#007c89" }}
                        >
                          All
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          aria-hidden="true"
                          class="wink-icon"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        class="root-sBgFt root-22EAH clearFilterButton-1FfQC"
                        tabindex="0"
                        type="button"
                      >
                        <span>Clear</span>
                      </button>
                      <div class="cluster-3D5Qr nowrap-34OZ-">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                          <div class="root-TXRyV">
                            <label
                              style={{ color: "black", fontSize: "14px" }}
                              id="mc:43"
                              for="mc:42"
                              class=""
                            >
                              Sort by:
                            </label>
                            <div class="listbox-1KRYD">
                              <span
                                tabindex="0"
                                class="selectedValue-1AZV5"
                                id="mc:44-trigger"
                                aria-labelledby="mc:43"
                                data-id="ipd-allCampaigns-sortDropdown"
                                data-testid="campaign-sort-dropdown"
                                role="combobox"
                                aria-autocomplete="none"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                              >
                                <span
                                  style={{ color: "#007C89" }}
                                  class="selectInline-3cDyn"
                                >
                                  Date edited
                                </span>
                                <span class="indicator-1Co1h">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    aria-hidden="true"
                                    class="wink-icon"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                          <button
                            class="root-1khsy directionArrow-3M7t6"
                            data-testid="sort-direction-arrow-DESC"
                            aria-describedby="mc:45"
                            type="button"
                          >
                            <span class="wink-visually-hidden">
                              Sort direction toggle
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              class="wink-icon"
                            >
                              <path d="M12.782 17.403L13 3h-2l.218 14.402-6.036-5.633-1.364 1.462L12 20.868l8.182-7.637-1.364-1.462-6.036 5.634z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div style={{ marginLeft: "50px", marginBottom: "0" }}>
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                        class="slatHeader-DwUpr slatHeaderRec-3dinu snipcss0-0-0-1 snipcss-oS9dl"
                        data-id="ipd-allCampaigns-slatsHeader"
                      >
                        <th
                          style={{ marginRight: "290px" }}
                          scope="col"
                          class="snipcss0-1-1-2"
                        >
                          <div class="root-1olwd checkbox-2UQgU snipcss0-2-2-3">
                            <input
                              class="input-2v40B noMargin-2qkhq snipcss0-3-3-4"
                              id="mc:46"
                              type="checkbox"
                              indeterminate="false"
                              aria-checked="false"
                              tabindex="0"
                            />
                            <div class="text-vFMr3 snipcss0-3-3-5">
                              <label
                                id="mc:47"
                                for="mc:46"
                                class="wink-visually-hidden snipcss0-4-5-6"
                              >
                                Select all 25 on page
                              </label>
                            </div>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="statusContainerV2-2k0I- snipcss0-1-1-11"
                        >
                          <div class="slatHeaderItem-2DwOS snipcss0-2-11-12">
                            <p class="root-3TDqk small-secondary-3_Rq2 snipcss0-3-12-13">
                              Status
                            </p>
                          </div>
                        </th>
                        <th
                          style={{ marginLeft: "140px" }}
                          scope="col"
                          class="audienceContainerV2-3aq1c snipcss0-1-1-14"
                        >
                          <div class="slatHeaderItem-2DwOS snipcss0-2-14-15">
                            <p class="root-3TDqk small-secondary-3_Rq2 snipcss0-3-15-16">
                              Audience
                            </p>
                          </div>
                        </th>
                        <th
                          scope="col"
                          style={{ marginLeft: "140px" }}
                          class="analytics-ATHdM analyticsContainerV2-H5c4j snipcss0-1-1-17"
                        >
                          <div class="slatHeaderItem-2DwOS snipcss0-2-17-18">
                            <p class="root-3TDqk small-secondary-3_Rq2 snipcss0-3-18-19">
                              Analytics
                            </p>
                          </div>
                        </th>
                        <th
                          style={{ marginLeft: "250px" }}
                          scope="col"
                          class="snipcss0-1-1-7"
                        >
                          <div class="slatHeaderItem-2DwOS snipcss0-2-7-8">
                            <p class="root-3TDqk small-secondary-3_Rq2 name-3FsBc snipcss0-3-8-9">
                              Actions
                            </p>
                          </div>
                        </th>
                      </tr>
                    </div>
                    <div
                      style={{ marginLeft: "20px" }}
                      className="mainpareonecontainer"
                    >
                      <div style={{ display: "flex" }}>
                        <div className="comapingdetaissl">
                          {loading
                            ? "loading...."
                            : allcomapings?.map((item) => (
                                <>
                                  <div className="comapingdetail">
                                    <div>
                                      <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="emailsection">
                                      {/* icon is here  */}
                                      <p
                                        className="mail"
                                        style={{ fontWeight: 500 }}
                                      >
                                        {item?.comapingemail}
                                      </p>
                                      <p
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                        className="regularemail"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          focusable="false"
                                          aria-hidden="true"
                                          class="wink-icon detailIcon-1_cym snipcss-kXU9S"
                                          data-testid="regular-icon"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                                          ></path>
                                        </svg>{" "}
                                        <span style={{ marginLeft: "6px" }}>
                                          Regular · peektipss
                                        </span>
                                      </p>
                                      <p
                                        style={{ fontSize: "12px" }}
                                        className="largeid"
                                      >
                                        Last Edit{" "}
                                        <span>
                                          {formatDate(item?.sendtime)}
                                        </span>{" "}
                                        by
                                        <br />
                                        usama ahmad
                                      </p>
                                    </div>
                                    <div className="draftnewuilder">
                                      <p
                                        style={{
                                          backgroundColor: "#D8EACC",
                                          fontWeight: "400",
                                          fontSize: "13px",
                                          color: "#004e56",
                                          padding: "0px 8px",
                                        }}
                                      >
                                        Sent
                                      </p>
                                      <br />
                                      <span style={{ fontSize: "12px" }}>
                                        Mon June 3, 2024 4:51 pm
                                      </span>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        fontSize: "12px",
                                        marginLeft: "45px",
                                      }}
                                    >
                                      <span style={{ fontWeight: "500" }}>
                                        selani media
                                      </span>
                                      <span>11 recipients</span>{" "}
                                    </div>
                                    <div
                                      style={{ marginLeft: "100px" }}
                                      className="clickonpend"
                                    >
                                      <div>
                                        <div
                                          style={{ fontSize: "12px" }}
                                          className="oneone"
                                        >
                                          {item?.vistitPercentage}%
                                        </div>
                                        <div className="two">
                                          {item?.visits}
                                        </div>
                                        <div style={{ fontSize: "12px" }}>
                                          Opened
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          style={{ fontSize: "12px" }}
                                          className="oneone"
                                        >
                                          {item?.clickPercentage}%
                                        </div>
                                        <div className="two">
                                          {item?.clicks}
                                        </div>
                                        <div style={{ fontSize: "12px" }}>
                                          Clicked
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        onClick={() =>
                                          navigate(`/allcompaings/${item._id}`)
                                        }
                                      >
                                        View Report
                                      </button>
                                    </div>
                                    {/* Edit */}
                                  </div>
                                  <hr />
                                </>
                              ))}
                        </div>
                      </div>
                    </div>
                    {/* Pagination */}
                    <br />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                        class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-6cxgP"
                      >
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          class="resultsContainer-1yPT2 cluster-3D5Qr"
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe"
                          >
                            <span class="root-3TDqk medium-3AcAC">
                              Showing results{" "}
                            </span>
                            <p
                              style={{ marginTop: "16px" }}
                              class="root-3TDqk medium-bold-2nZ0J"
                            >
                              1 - 4 of 4
                            </p>
                          </div>
                        </div>
                        <div class="buttonContainer-BXxQ3">
                          <button
                            class="root-1khsy"
                            disabled=""
                            tabindex="0"
                            type="button"
                          >
                            <span class="wink-visually-hidden">
                              Go to first page
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              class="wink-icon"
                            >
                              <path d="M9 6H7v12h2V6zm8.707 1.707l-1.414-1.414L10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path>
                            </svg>
                          </button>
                          <button
                            class="root-1khsy"
                            disabled=""
                            tabindex="0"
                            type="button"
                          >
                            <span class="wink-visually-hidden">
                              Go to previous page
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              class="wink-icon"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                              ></path>
                            </svg>
                          </button>
                          <span class="root-3TDqk medium-3AcAC">Page</span>
                          <div class="inputContainer-1-mZv">
                            <div class="root-2RFjU inputNumber-2Ooz5">
                              <div class="before-2EDUs">
                                <label
                                  class="mcds-label-default wink-visually-hidden"
                                  id="mc:84"
                                  for="mc:83"
                                >
                                  Pagination input
                                </label>
                              </div>
                              <input
                                value={1}
                                style={{
                                  width: "10px",
                                  height: "20px",
                                  border: "1px solid gray",
                                  marginTop: "20px",
                                }}
                                type="text"
                              />
                            </div>
                          </div>
                          <span class="root-3TDqk medium-3AcAC"> of 1</span>
                          <button
                            class="root-1khsy"
                            disabled=""
                            tabindex="0"
                            type="button"
                          >
                            <span class="wink-visually-hidden">
                              Go to next page
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              class="wink-icon"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.586 12L9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707-1.414-1.414L13.586 12z"
                              ></path>
                            </svg>
                          </button>
                          <button
                            class="root-1khsy"
                            disabled=""
                            tabindex="0"
                            type="button"
                          >
                            <span class="wink-visually-hidden">
                              Go to last page
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              class="wink-icon"
                            >
                              <path d="M15 6h2v12h-2zM6.293 7.707L10.586 12l-4.293 4.293 1.414 1.414L13.414 12 7.707 6.293z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentscreen === "calender" && (
                  <>
                    <div
                      style={{ margin: "30px" }}
                      class="tabContent-1usFA snipcss-hBmLB"
                    >
                      <div class="clusterContainer-3znJw cluster-3D5Qr">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                          <div class="root-TXRyV">
                            <label id="mc:97" for="mc:96" class="">
                              Holidays:
                            </label>
                            <div class="listbox-1KRYD">
                              <span
                                tabindex="0"
                                class="selectedValue-1AZV5"
                                id="mc:98-trigger"
                                aria-labelledby="mc:97"
                                role="combobox"
                                aria-autocomplete="none"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                              >
                                <p
                                  style={{
                                    color: "#007c89",
                                    marginTop: "10px",
                                  }}
                                  class="root-3TDqk small-bold-6R-6E"
                                >
                                  None
                                </p>
                                <span class="indicator-1Co1h">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    aria-hidden="true"
                                    class="wink-icon"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="calendarV2-_nFeP">
                        <div class="calendarHeaderV2-23E7R">
                          <div class="navigationV2-3meU5">
                            <button class="root-1khsy" type="button">
                              <span class="wink-visually-hidden">
                                Previous month
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                                ></path>
                              </svg>
                            </button>
                            <button class="root-1khsy" type="button">
                              <span class="wink-visually-hidden">
                                Next month
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.586 12L9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707-1.414-1.414L13.586 12z"
                                ></path>
                              </svg>
                            </button>
                            <div
                              class="currentTimePeriodV2-1pWfM"
                              id="calendarheader"
                            >
                              <span class="root-3TDqk large-bold-3R9__">
                                September 2024
                              </span>
                            </div>
                          </div>
                          <div class="headerRightV2-3J00J">
                            <div class="todayLink-rVV2v">
                              <span
                                style={{ color: "#007c89" }}
                                class="root-3TDqk medium-bold-2nZ0J"
                                tabindex="0"
                                role="link"
                              >
                                Today
                              </span>
                            </div>
                            <div class="viewDropdown-2712q">
                              <div class="root-TXRyV">
                                <label
                                  id="mc:100"
                                  for="mc:99"
                                  class="wink-visually-hidden"
                                >
                                  Select the view of the calendar
                                </label>
                                <select id="mc:99">
                                  <option value="day">Day</option>
                                  <option
                                    value="month"
                                    style={{ color: "#007c89" }}
                                  >
                                    Month
                                  </option>
                                  <option value="week">Week</option>
                                </select>
                                <span
                                  data-testid="selectedValue"
                                  class="selectedValue-1AZV5"
                                  aria-hidden="true"
                                  style={{ color: "#007c89" }}
                                >
                                  Month
                                  <span class="indicator-1Co1h">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="sdoToggleV2-10_Fa">
                              <div class="root-3VS64 hideLabel-1M2Ld">
                                <div class="content-1vvD0">
                                  <div id="mc:101" class="wink-visually-hidden">
                                    Optimize dates:
                                  </div>
                                </div>
                                <div class="toggleGroup-3QVDw">
                                  <button
                                    class="toggle-2Rjco"
                                    type="button"
                                    aria-pressed="false"
                                    aria-labelledby="mc:101"
                                    data-pendo-target="sdo"
                                  >
                                    <span class="knob-iNyaw"></span>
                                  </button>
                                </div>
                              </div>
                              <button class="root-1khsy" type="button">
                                <span class="wink-visually-hidden">
                                  Optimize dates info
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm1-16.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM9 12v-1l2-1h2v6l2 1v1H9v-1l2-1v-4H9z"
                                  ></path>
                                </svg>
                              </button>
                              <span role="status" aria-atomic="true">
                                <span class="wink-visually-hidden"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          role="grid"
                          aria-labelledby="calendarheader"
                          class="calendarBody-3rONN"
                        >
                          <div role="rowgroup">
                            <div class="calendarWeek-9yu4r" role="row">
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Sunday</p>
                              </div>
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Monday</p>
                              </div>
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Tuesday</p>
                              </div>
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Wednesday</p>
                              </div>
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Thursday</p>
                              </div>
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Friday</p>
                              </div>
                              <div class="dayOfWeek-1UE3n" role="columnheader">
                                <p class="root-3TDqk medium-3AcAC">Saturday</p>
                              </div>
                            </div>
                          </div>
                          <div class="calendarGrid-2BVQr" role="rowgroup">
                            <div class="calendarWeek-9yu4r" role="row">
                              <div
                                class="dayCell-3T-bc style-9mybX"
                                data-calendar-event-anchor="anchor-2024-9-1"
                                data-testid="dayCell"
                                data-day-timestamp="1725130800000"
                                role="gridcell"
                                id="style-9mybX"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">1</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-nNB5k"
                                data-calendar-event-anchor="anchor-2024-9-2"
                                data-testid="dayCell"
                                data-day-timestamp="1725217200000"
                                role="gridcell"
                                id="style-nNB5k"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">2</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-Z4own"
                                data-calendar-event-anchor="anchor-2024-9-3"
                                data-testid="dayCell"
                                data-day-timestamp="1725303600000"
                                role="gridcell"
                                id="style-Z4own"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">3</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-fsl4e"
                                data-calendar-event-anchor="anchor-2024-9-4"
                                data-testid="dayCell"
                                data-day-timestamp="1725390000000"
                                role="gridcell"
                                id="style-fsl4e"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">4</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-7sRB8"
                                data-calendar-event-anchor="anchor-2024-9-5"
                                data-testid="dayCell"
                                data-day-timestamp="1725476400000"
                                role="gridcell"
                                id="style-7sRB8"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">5</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-EFood"
                                data-calendar-event-anchor="anchor-2024-9-6"
                                data-testid="dayCell"
                                data-day-timestamp="1725562800000"
                                role="gridcell"
                                id="style-EFood"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">6</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-oXlew"
                                data-calendar-event-anchor="anchor-2024-9-7"
                                data-testid="dayCell"
                                data-day-timestamp="1725649200000"
                                role="gridcell"
                                id="style-oXlew"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">7</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                            </div>
                            <div class="calendarWeek-9yu4r" role="row">
                              <div
                                class="dayCell-3T-bc style-kVb21"
                                data-calendar-event-anchor="anchor-2024-9-8"
                                data-testid="dayCell"
                                data-day-timestamp="1725735600000"
                                role="gridcell"
                                id="style-kVb21"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">8</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-CcgBO"
                                data-calendar-event-anchor="anchor-2024-9-9"
                                data-testid="dayCell"
                                data-day-timestamp="1725822000000"
                                role="gridcell"
                                id="style-CcgBO"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">9</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-Rt29R"
                                data-calendar-event-anchor="anchor-2024-9-10"
                                data-testid="dayCell"
                                data-day-timestamp="1725908400000"
                                role="gridcell"
                                id="style-Rt29R"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">10</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-b5WhC"
                                data-calendar-event-anchor="anchor-2024-9-11"
                                data-testid="dayCell"
                                data-day-timestamp="1725994800000"
                                role="gridcell"
                                id="style-b5WhC"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">11</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-73WRS"
                                data-calendar-event-anchor="anchor-2024-9-12"
                                data-testid="dayCell"
                                data-day-timestamp="1726081200000"
                                role="gridcell"
                                id="style-73WRS"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">12</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-PwByI"
                                data-calendar-event-anchor="anchor-2024-9-13"
                                data-testid="dayCell"
                                data-day-timestamp="1726167600000"
                                role="gridcell"
                                id="style-PwByI"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">13</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-USbG7"
                                data-calendar-event-anchor="anchor-2024-9-14"
                                data-testid="dayCell"
                                data-day-timestamp="1726254000000"
                                role="gridcell"
                                id="style-USbG7"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">14</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                            </div>
                            <div class="calendarWeek-9yu4r" role="row">
                              <div
                                class="dayCell-3T-bc style-WEw4K"
                                data-calendar-event-anchor="anchor-2024-9-15"
                                data-testid="dayCell"
                                data-day-timestamp="1726340400000"
                                role="gridcell"
                                id="style-WEw4K"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">15</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-5VJwT"
                                data-calendar-event-anchor="anchor-2024-9-16"
                                data-testid="dayCell"
                                data-day-timestamp="1726426800000"
                                role="gridcell"
                                id="style-5VJwT"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">16</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-DU3jS"
                                data-calendar-event-anchor="anchor-2024-9-17"
                                data-testid="dayCell"
                                data-day-timestamp="1726513200000"
                                role="gridcell"
                                id="style-DU3jS"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">17</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-FJy3V"
                                data-calendar-event-anchor="anchor-2024-9-18"
                                data-testid="dayCell"
                                data-day-timestamp="1726599600000"
                                role="gridcell"
                                id="style-FJy3V"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">18</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-NZmo4"
                                data-calendar-event-anchor="anchor-2024-9-19"
                                data-testid="dayCell"
                                data-day-timestamp="1726686000000"
                                role="gridcell"
                                id="style-NZmo4"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">19</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-VYHPj"
                                data-calendar-event-anchor="anchor-2024-9-20"
                                data-testid="dayCell"
                                data-day-timestamp="1726772400000"
                                role="gridcell"
                                id="style-VYHPj"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">20</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-x38KK"
                                data-calendar-event-anchor="anchor-2024-9-21"
                                data-testid="dayCell"
                                data-day-timestamp="1726858800000"
                                role="gridcell"
                                id="style-x38KK"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">21</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                            </div>
                            <div class="calendarWeek-9yu4r" role="row">
                              <div
                                class="dayCell-3T-bc style-iUsXD"
                                data-calendar-event-anchor="anchor-2024-9-22"
                                data-testid="dayCell"
                                data-day-timestamp="1726945200000"
                                role="gridcell"
                                id="style-iUsXD"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">22</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-rKFoo"
                                data-calendar-event-anchor="anchor-2024-9-23"
                                data-testid="dayCell"
                                data-day-timestamp="1727031600000"
                                role="gridcell"
                                id="style-rKFoo"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">23</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-CRAk5"
                                data-calendar-event-anchor="anchor-2024-9-24"
                                data-testid="dayCell"
                                data-day-timestamp="1727118000000"
                                role="gridcell"
                                id="style-CRAk5"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">24</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-l7NmP"
                                data-calendar-event-anchor="anchor-2024-9-25"
                                data-testid="dayCell"
                                data-day-timestamp="1727204400000"
                                role="gridcell"
                                id="style-l7NmP"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">25</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-z1DSk"
                                data-calendar-event-anchor="anchor-2024-9-26"
                                data-testid="dayCell"
                                data-day-timestamp="1727290800000"
                                role="gridcell"
                                id="style-z1DSk"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">26</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-cpiCV"
                                data-calendar-event-anchor="anchor-2024-9-27"
                                data-testid="dayCell"
                                data-day-timestamp="1727377200000"
                                role="gridcell"
                                id="style-cpiCV"
                              >
                                <div class="day-z-9Mo isToday-2xkBi">
                                  <p class="root-3TDqk small-bold-6R-6E">27</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc style-Nat8w"
                                data-calendar-event-anchor="anchor-2024-9-28"
                                data-testid="dayCell"
                                data-day-timestamp="1727463600000"
                                role="gridcell"
                                id="style-Nat8w"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">28</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                            </div>
                            <div class="calendarWeek-9yu4r" role="row">
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-PP3Fk"
                                data-calendar-event-anchor="anchor-2024-9-29"
                                data-testid="dayCell"
                                data-day-timestamp="1727550000000"
                                role="gridcell"
                                id="style-PP3Fk"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">29</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-lJzVd"
                                data-calendar-event-anchor="anchor-2024-9-30"
                                data-testid="dayCell"
                                data-day-timestamp="1727636400000"
                                role="gridcell"
                                id="style-lJzVd"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">30</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-Z9ONG"
                                data-calendar-event-anchor="anchor-2024-10-1"
                                data-testid="dayCell"
                                data-day-timestamp="1727722800000"
                                role="gridcell"
                                id="style-Z9ONG"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">1</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-3W4TB"
                                data-calendar-event-anchor="anchor-2024-10-2"
                                data-testid="dayCell"
                                data-day-timestamp="1727809200000"
                                role="gridcell"
                                id="style-3W4TB"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">2</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-l1iSn"
                                data-calendar-event-anchor="anchor-2024-10-3"
                                data-testid="dayCell"
                                data-day-timestamp="1727895600000"
                                role="gridcell"
                                id="style-l1iSn"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">3</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-QzHsi"
                                data-calendar-event-anchor="anchor-2024-10-4"
                                data-testid="dayCell"
                                data-day-timestamp="1727982000000"
                                role="gridcell"
                                id="style-QzHsi"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">4</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                              <div
                                class="dayCell-3T-bc lastRow-q_EYk style-ddBQe"
                                data-calendar-event-anchor="anchor-2024-10-5"
                                data-testid="dayCell"
                                data-day-timestamp="1728068400000"
                                role="gridcell"
                                id="style-ddBQe"
                              >
                                <div class="day-z-9Mo">
                                  <p class="root-3TDqk small-bold-6R-6E">5</p>
                                </div>
                                <div role="list" class="eventList-1MNcv"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <br />
                <br />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaings;
