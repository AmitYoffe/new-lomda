import type { ComponentProps } from "react";
import { useState } from "react";
import { Box, Button, Link, Paper, Switch, Typography } from "@mui/material";
import orevIconSrc from "~/images/orev-icon-portrait.png";

type SideBarItems = {
  name: Tab;
  href: string;
  icon: JSX.Element;
};

type Tab = "למידה" | "מפעל השיעורים" | "פרופיל";

const sideBarItems: SideBarItems[] = [
  {
    name: "למידה",
    href: "/learn",
    icon: (
      <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
        <path
          d="M24.5852 25.2658C24.2883 26.8243 22.9257 27.9519 21.3392 27.9519H10.6401C9.05354 27.9519 7.69094 26.8243 7.39408 25.2658L4.98096 12.5969L15.9001 4.52225L26.9988 12.5941L24.5852 25.2658Z"
          fill="#FFC800"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1558 23.1111C13.1558 22.522 13.6333 22.0444 14.2224 22.0444H18.4891C19.0782 22.0444 19.5558 22.522 19.5558 23.1111C19.5558 23.7002 19.0782 24.1778 18.4891 24.1778H14.2224C13.6333 24.1778 13.1558 23.7002 13.1558 23.1111Z"
          fill="#945151"
        />
        <path
          d="M19.4785 16.2998C19.4785 18.2208 17.9212 19.778 16.0002 19.778C14.0792 19.778 12.522 18.2208 12.522 16.2998C12.522 14.3788 14.0792 12.8215 16.0002 12.8215C17.9212 12.8215 19.4785 14.3788 19.4785 16.2998Z"
          fill="#945151"
        />
        <path
          d="M16.1685 2.84462C16.6431 2.84231 17.1233 2.98589 17.5361 3.28558L17.5368 3.2861L29.9455 12.2319C30.9781 12.9822 31.207 14.4275 30.4568 15.4601C29.7067 16.4924 28.262 16.7215 27.2294 15.9719L27.2286 15.9714L16.1602 7.99185L5.09208 15.9712L5.09121 15.9719C4.05865 16.7213 2.61395 16.4923 1.86391 15.4599C1.11367 14.4273 1.34258 12.982 2.3752 12.2318L2.37679 12.2306L14.7839 3.28596L14.7846 3.28544C15.2022 2.98229 15.6887 2.83889 16.1685 2.84462Z"
          fill="#FF4B4B"
        />
      </svg>
    ),
  },
  {
    name: "פרופיל",
    href: "/profile",
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.1826 5.00195C14.3461 5.00195 7.18262 12.1654 7.18262 21.002V21.9375C4.21918 23.4102 2.18262 26.4682 2.18262 30.002C2.18262 34.9725 6.21206 39.002 11.1826 39.002H35.1826C40.1532 39.002 44.1826 34.9725 44.1826 30.002C44.1826 26.4682 42.1461 23.4102 39.1826 21.9375V21.002C39.1826 12.1654 32.0192 5.00195 23.1826 5.00195Z"
          fill="#9069CD"
        />
        <path
          d="M11.1826 21.002C11.1826 14.3745 16.5552 9.00195 23.1826 9.00195C29.81 9.00195 35.1826 14.3745 35.1826 21.002V29.002C35.1826 35.6294 29.81 41.002 23.1826 41.002C16.5552 41.002 11.1826 35.6294 11.1826 29.002V21.002Z"
          fill="#F3AD6D"
        />
        <path
          d="M7.18262 24.502C7.18262 22.0167 9.19734 20.002 11.6826 20.002H34.6826C37.1679 20.002 39.1826 22.0167 39.1826 24.502C39.1826 26.9872 37.1679 29.002 34.6826 29.002H11.6826C9.19734 29.002 7.18262 26.9872 7.18262 24.502Z"
          fill="#F3AD6D"
        />
        <path
          d="M18.1826 20.502C18.1826 19.6735 18.8542 19.002 19.6826 19.002C20.511 19.002 21.1826 19.6735 21.1826 20.502V24.502C21.1826 25.3304 20.511 26.002 19.6826 26.002C18.8542 26.002 18.1826 25.3304 18.1826 24.502V20.502Z"
          fill="#BF8034"
        />
        <path
          d="M24.1826 20.502C24.1826 19.6735 24.8542 19.002 25.6826 19.002C26.511 19.002 27.1826 19.6735 27.1826 20.502V24.502C27.1826 25.3304 26.511 26.002 25.6826 26.002C24.8542 26.002 24.1826 25.3304 24.1826 24.502V20.502Z"
          fill="#BF8034"
        />
        <path
          d="M17.1826 29.0445C17.1826 28.4687 17.6494 28.002 18.2252 28.002H27.1401C27.7159 28.002 28.1826 28.4687 28.1826 29.0445V29.502C28.1826 32.5395 25.7202 35.002 22.6826 35.002C19.6451 35.002 17.1826 32.5395 17.1826 29.502V29.0445Z"
          fill="white"
        />
        <path
          d="M7.18262 21.0062V21.002C7.18262 12.1654 14.3461 5.00195 23.1826 5.00195C26.0199 5.00195 28.6847 5.74049 30.9953 7.0358C29.7326 15.5 22.2386 22.002 13.1826 22.002C11.0788 22.002 9.05929 21.6511 7.18262 21.0062Z"
          fill="#9069CD"
        />
      </svg>
    ),
  },
  {
    //TODO: if user role is admin ONLY!
    name: "מפעל השיעורים",
    href: "/lesson-factory",
    icon: (
      <svg width="44" height="44" viewBox="0 0 512 512" fill="none">
        <path
          style={{ fill: "#792A18" }}
          d="M478.242,71.455h-67.517l33.758,360.088h33.758c18.644,0,33.758-15.115,33.758-33.758V105.213 C512,86.57,496.885,71.455,478.242,71.455z"
        />
        <path
          style={{ fill: "#95341D" }}
          d="M210.989,70.33L256,464.176c18.645,0,33.758-15.114,33.758-33.758h154.725V70.33H210.989z"
        />
        <path
          style={{ fill: "#AB5D4A" }}
          d="M33.758,70.33C15.115,70.33,0,85.444,0,104.088v292.571c0,18.644,15.115,33.758,33.758,33.758 h188.484c0,18.645,15.114,33.758,33.758,33.758V70.33H33.758z"
        />
        <polygon
          style={{ fill: "#A99E9B" }}
          points="421.978,340.396 433.231,396.659 478.242,396.659 478.242,362.901 "
        />
        <path
          style={{ fill: "#C1B8B5" }}
          d="M233.495,340.396L256,422.537v7.88c0-18.567,15.191-33.758,33.758-33.758h141.785v-56.264H233.495z"
        />
        <path
          style={{ fill: "#D8D1D0" }}
          d="M33.758,362.901v33.758h188.484c18.567,0,33.758,15.191,33.758,33.758V329.143L33.758,362.901z"
        />
        <polygon
          style={{ fill: "#E26142" }}
          points="391.066,475.429 417.775,464.176 444.484,475.429 444.484,340.396 391.066,340.396 "
        />
        <polygon
          style={{ fill: "#C1B8B5" }}
          points="433.231,36.571 399.473,199.736 433.231,362.901 478.242,362.901 478.242,36.571 "
        />
        <path
          style={{ fill: "#D8D1D0" }}
          d="M289.758,36.571C271.191,36.571,256,51.763,256,70.33l-33.758,163.165L256,388.782v7.877 c0-18.567,15.191-33.758,33.758-33.758h143.473V247.557l-22.506-71.734l22.506-71.735V36.571H289.758z"
        />
        <path
          style={{ fill: "#F0EBEA" }}
          d="M222.242,36.571H33.758v326.33h188.484c18.567,0,33.758,15.191,33.758,33.758V70.33 C256,51.763,240.809,36.571,222.242,36.571z"
        />
        <rect
          x="301.011"
          y="104.088"
          style={{ fill: "#FFFFFF" }}
          width="132.22"
          height="143.473"
        />
        <g>
          <path
            style={{ fill: "#7F7774" }}
            d="M210.989,303.824H78.769c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44C219.429,300.047,215.651,303.824,210.989,303.824z"
          />
          <path
            style={{ fill: "#7F7774" }}
            d="M210.989,256H78.769c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44S215.651,256,210.989,256z"
          />
          <path
            style={{ fill: "#7F7774" }}
            d="M210.989,208.176H78.769c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44S215.651,208.176,210.989,208.176z"
          />
          <path
            style={{ fill: "#7F7774" }}
            d="M210.989,160.352H78.769c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44S215.651,160.352,210.989,160.352z"
          />
          <path
            style={{ fill: "#7F7774" }}
            d="M210.989,112.527H78.769c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44C219.429,108.75,215.651,112.527,210.989,112.527z"
          />
        </g>
        <path
          style={{ fill: "#554F4E" }}
          d="M433.231,303.824h-132.22c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44C441.67,300.047,437.893,303.824,433.231,303.824z"
        />
      </svg>
    ),
  },
  // maybe add in the future a settings page about page and so on
];

const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="#CE82FF"
        stroke="#CE82FF"
        strokeWidth="2"
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
};

export const SideBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const [moreMenuShown, setMoreMenuShown] = useState(false);
  const [isDarkModeChecked, setisDarkModeChecked] = useState(false);

  const handleChange = () => {
    setisDarkModeChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <Box
        sx={{
          right: 0,
          top: 0,
          width: "230px",
          height: "100%",
          backgroundColor: "#f0dfbf",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 1,
            height: "80px",
            borderBottom: "2px solid #e5e5e5",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.7rem",
              fontWeight: "900",
              color: "orange",
              wordWrap: "break-word",
              width: "120px",
              textAlign: "left",
              paddingLeft: 4,
            }}
          >
            לומדת עורב
          </Typography>
          <Link href="/" sx={{ paddingLeft: 2, margin: "auto" }}>
            <img
              src={orevIconSrc}
              alt="orev logo"
              width={"78px"}
              height={"78px"}
            />
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {sideBarItems.map((item) => (
            <Box key={item.href}>
              <Link
                href={item.href}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingY: "0.25rem",
                  gap: "1rem",
                  alignItems: "center",
                  border: "2px solid #e5e5e5",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  color: "#9CA3AF",
                  "&:hover": { backgroundColor: "#F3F4e6" },
                  ...(selectedTab === item.name
                    ? {
                        borderColor: "#84d8ff",
                        background: "#ddf4ff",
                      }
                    : {}),
                }}
              >
                {item.icon}
                <Typography>{item.name}</Typography>
              </Link>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              paddingY: "0.25rem",
              paddingX: "0.5rem",
              gap: "0.75rem",
              alignItems: "center",
              borderRadius: "0.75rem",
              color: "#9CA3AF",
              cursor: "default",
              "&:hover": { backgroundColor: "#F3F4e6" },
            }}
            onMouseEnter={() => setMoreMenuShown(true)}
            onMouseLeave={() => setMoreMenuShown(false)}
            role="button"
            tabIndex={0}
          >
            {/* More info tab */}
            <LeftBarMoreMenuSvg />
            <Typography sx={{ fontSize: "1rem" }}>לעוד</Typography>
            <Paper
              sx={{
                position: "absolute",
                top: 250,
                left: 220,
                minWidth: "270px",
                borderRadius: "2xl",
                display: moreMenuShown ? "block" : "none",
                "&:hover": {
                  display: "block",
                },
              }}
              onMouseEnter={() => setMoreMenuShown(true)}
              onMouseLeave={() => setMoreMenuShown(false)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#D1D5DB",
                }}
              >
                <Button
                  sx={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "right",
                    "&:hover": { backgroundColor: "#2e1d02" },
                  }}
                  // onClick={() => setLoginScreenState("SIGNUP")}
                >
                  צור פרופיל
                </Button>
                <Button
                  sx={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "right",
                    "&:hover": { backgroundColor: "#2e1d02" },
                  }}
                  // href={loggedIn ? "/settings/account" : "/settings/sound"}
                >
                  הגדרות
                </Button>
                <Button
                  sx={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "right",
                    "&:hover": { backgroundColor: "#2e1d02" },
                  }}
                  // onClick={() => setLoginScreenState("LOGIN")}
                >
                  התחברות
                </Button>
                <Button
                  sx={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "right",
                    "&:hover": { backgroundColor: "#2e1d02" },
                  }}
                  // onClick={logOut}
                >
                  התנתקות
                </Button>
                {/* added state for darkmode, now i need to apply it on different components */}
                <Box
                  sx={{
                    marginTop: "auto",
                    paddingX: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "1rem", fontWeight: "normal" }}>
                      מצב
                    </Typography>
                    {isDarkModeChecked ? (
                      <Typography
                        sx={{
                          color: "#784c06",
                          marginRight: 2,
                          fontWeight: "medium",
                        }}
                      >
                        לילה
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: "#ffb238",
                          marginRight: 2,
                          fontWeight: "medium",
                        }}
                      >
                        יום
                      </Typography>
                    )}
                  </Box>
                  <Switch
                    defaultChecked={isDarkModeChecked}
                    color="warning"
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};
