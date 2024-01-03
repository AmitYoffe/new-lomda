// import { type NextPage } from "next";
// import Link from "next/link";
// import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
// import { BottomBar } from "~/components/BottomBar";
import { SideBar } from "~/components/SideBar";
// import { LoginScreen, useLoginScreen } from "~/components/LoginScreen";
// import { RightBar } from "~/components/RightBar";
import {
  ActiveBookSvg,
  ActiveDumbbellSvg,
  ActiveTrophySvg,
  CheckmarkSvg,
  FastForwardSvg,
  GoldenBookSvg,
  GoldenDumbbellSvg,
  GoldenTrophySvg,
  GuidebookSvg,
  LessonCompletionSvg0,
  LessonCompletionSvg1,
  LessonCompletionSvg2,
  LessonCompletionSvg3,
  LockSvg,
  LockedBookSvg,
  LockedDumbbellSvg,
  LockedTrophySvg,
  PracticeExerciseSvg,
  StarSvg,
  UpArrowSvg
} from "~/components/Svgs";
import Box from '@mui/material/Box';
// import { TopBar } from "~/components/TopBar";
// import { useBoundStore } from "~/hooks/useBoundStore";
import type { Tile, TileType, Unit } from "~/utils/units";
import { units } from "~/utils/units";
import { Button, Link, Typography } from "@mui/material";

type TileStatus = "LOCKED" | "ACTIVE" | "COMPLETE";

const tileStatus = (tile: Tile, lessonsCompleted: number): TileStatus => {
  const lessonsPerTile = 4;
  const tilesCompleted = Math.floor(lessonsCompleted / lessonsPerTile);
  const tiles = units.flatMap((unit) => unit.tiles);
  const tileIndex = tiles.findIndex((t) => t === tile);

  if (tileIndex < tilesCompleted) {
    return "COMPLETE";
  }
  if (tileIndex > tilesCompleted) {
    return "LOCKED";
  }
  return "ACTIVE";
};

const TileIcon = ({
  tileType,
  status,
}: {
  tileType: TileType;
  status: TileStatus;
}): JSX.Element => {
  switch (tileType) {
    case "star":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "book":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "dumbbell":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      );
    case "fast-forward":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <FastForwardSvg />
      );
    case "trophy":
      return status === "COMPLETE" ? (
        <GoldenTrophySvg />
      ) : status === "ACTIVE" ? (
        <ActiveTrophySvg />
      ) : (
        <LockedTrophySvg />
      );
  }
};

// const tileLeftClassNames = [
//   "left-0",
//   "left-[-45px]",
//   "left-[-70px]",
//   "left-[-45px]",
//   "left-0",
//   "left-[45px]",
//   "left-[70px]",
//   "left-[45px]",
// ] as const;

// type TileLeftClassName = (typeof tileLeftClassNames)[number];

// const getTileLeftClassName = ({
//   index,
//   unitNumber,
//   tilesLength,
// }: {
//   index: number;
//   unitNumber: number;
//   tilesLength: number;
// }): TileLeftClassName => {
//   if (index >= tilesLength - 1) {
//     return "left-0";
//   }

//   const classNames =
//     unitNumber % 2 === 1
//       ? tileLeftClassNames
//       : [...tileLeftClassNames.slice(4), ...tileLeftClassNames.slice(0, 4)];

//   return classNames[index % classNames.length] ?? "left-0";
// };

const tileTooltipLeftOffsets = [140, 95, 70, 95, 140, 185, 210, 185] as const;

type TileTooltipLeftOffset = (typeof tileTooltipLeftOffsets)[number];

const getTileTooltipLeftOffset = ({
  index,
  unitNumber,
  tilesLength,
}: {
  index: number;
  unitNumber: number;
  tilesLength: number;
}): TileTooltipLeftOffset => {
  if (index >= tilesLength - 1) {
    return tileTooltipLeftOffsets[0];
  }

  const offsets =
    unitNumber % 2 === 1
      ? tileTooltipLeftOffsets
      : [
        ...tileTooltipLeftOffsets.slice(4),
        ...tileTooltipLeftOffsets.slice(0, 4),
      ];

  return offsets[index % offsets.length] ?? tileTooltipLeftOffsets[0];
};

const getTileColors = ({
  tileType,
  status,
  defaultColors,
}: {
  tileType: TileType;
  status: TileStatus;
  defaultColors: `border-${string} bg-${string}`;
}): `border-${string} bg-${string}` => {
  switch (status) {
    case "LOCKED":
      if (tileType === "fast-forward") return defaultColors;
      return "border-[#b7b7b7] bg-[#e5e5e5]";
    case "COMPLETE":
      return "border-yellow-500 bg-yellow-400";
    case "ACTIVE":
      return defaultColors;
  }
};

const TileTooltip = ({
  selectedTile,
  index,
  unitNumber,
  tilesLength,
  description,
  status,
  closeTooltip,
}: {
  selectedTile: number | null;
  index: number;
  unitNumber: number;
  tilesLength: number;
  description: string;
  status: TileStatus;
  closeTooltip: () => void;
}) => {
  const tileTooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containsTileTooltip = (event: MouseEvent) => {
      if (selectedTile !== index) return;
      const clickIsInsideTooltip = tileTooltipRef.current?.contains(
        event.target as Node
      );
      if (clickIsInsideTooltip) return;
      closeTooltip();
    };

    window.addEventListener("click", containsTileTooltip, true);
    return () => window.removeEventListener("click", containsTileTooltip, true);
  }, [selectedTile, tileTooltipRef, closeTooltip, index]);

  const unit = units.find((unit) => unit.unitNumber === unitNumber);
  const activeBackgroundColor = unit?.backgroundColor ?? "bg-green-500";
  const activeTextColor = unit?.textColor ?? "text-green-500";

  return (
    <div
      className={[
        "relative h-0 w-full",
        index === selectedTile ? "" : "invisible",
      ].join(" ")}
      ref={tileTooltipRef}
    >
      <div
        className={[
          "absolute z-30 flex w-[300px] flex-col gap-4 rounded-xl p-4 font-bold transition-all duration-300",
          status === "ACTIVE"
            ? activeBackgroundColor
            : status === "LOCKED"
              ? "border-2 border-gray-200 bg-gray-100"
              : "bg-yellow-400",
          index === selectedTile ? "top-4 scale-100" : "-top-14 scale-0",
        ].join(" ")}
        style={{ left: "calc(50% - 150px)" }}
      >
        <div
          className={[
            "absolute left-[140px] top-[-8px] h-4 w-4 rotate-45",
            status === "ACTIVE"
              ? activeBackgroundColor
              : status === "LOCKED"
                ? "border-l-2 border-t-2 border-gray-200 bg-gray-100"
                : "bg-yellow-400",
          ].join(" ")}
          style={{
            left: getTileTooltipLeftOffset({ index, unitNumber, tilesLength }),
          }}
        ></div>
        <div
          className={[
            "text-lg",
            status === "ACTIVE"
              ? "text-white"
              : status === "LOCKED"
                ? "text-gray-400"
                : "text-yellow-600",
          ].join(" ")}
        >
          {description}
        </div>
        {status === "ACTIVE" ? (
          <Link
            href="/lesson"
            className={[
              "flex w-full items-center justify-center rounded-xl border-b-4 border-gray-200 bg-white p-3 uppercase",
              activeTextColor,
            ].join(" ")}
          >
            להתחלה 10+ נקודות
          </Link>
        ) : status === "LOCKED" ? (
          <button
            className="w-full rounded-xl bg-gray-200 p-3 uppercase text-gray-400"
            disabled
          >
            נעול
          </button>
        ) : (
          <Link
            href="/lesson"
            className="flex w-full items-center justify-center rounded-xl border-b-4 border-yellow-200 bg-white p-3 uppercase text-yellow-400"
          >
            Practice +5 XP
          </Link>
        )}
      </div>
    </div>
  );
};

const UnitSection = ({ unit }: { unit: Unit }): JSX.Element => {
  // const router = useRouter();

  const [isHovered, setHovered] = useState(false);
  const [selectedTile, setSelectedTile] = useState<null | number>(null);

  useEffect(() => {
    const unselectTile = () => setSelectedTile(null);
    window.addEventListener("scroll", unselectTile);
    return () => window.removeEventListener("scroll", unselectTile);
  }, []);

  const closeTooltip = useCallback(() => setSelectedTile(null), []);

  // const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  // const increaseLessonsCompleted = useBoundStore(
  //   (x) => x.increaseLessonsCompleted
  // );

  //added by yoffe himself.
  const lessonsCompleted = 2

  return (
    <>
      <UnitHeader
        unitNumber={unit.unitNumber}
        description={unit.description}
        backgroundColor={unit.backgroundColor}
        borderColor={unit.borderColor}
      />
      <Box sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        maxWidth: '42rem',
      }}>
        {unit.tiles.map((tile, i): JSX.Element => {
          const status = tileStatus(tile, lessonsCompleted);
          return (
            <Fragment key={i}>
              {(() => {
                switch (tile.type) {
                  case "star":
                  case "book":
                  case "dumbbell":
                  case "trophy":
                  case "fast-forward":
                    if (tile.type === "trophy" && status === "COMPLETE") {
                      return (
                        <Box className="relative">
                          <TileIcon tileType={tile.type} status={status} />
                          <Typography sx={{
                            display: 'flex',
                            position: 'absolute',
                            right: 0,
                            left: 0,
                            top: '1.5rem',
                            justifyContent: 'center',
                            fontSize: '1.125rem',
                            fontweight: 700,
                            color: '#B45309',
                          }}>
                            {unit.unitNumber}
                          </Typography>
                        </Box>
                      );
                    }
                    return (
                      <Button
                      // className={[
                      //   "relative -mb-4 h-[93px] w-[98px]",
                      //   getTileLeftClassName({
                      //     index: i,
                      //     unitNumber: unit.unitNumber,
                      //     tilesLength: unit.tiles.length,
                      //   }),
                      // ].join(" ")}
                      >
                        {tile.type === "fast-forward" && status === "LOCKED" ? (
                          <HoverLabel
                            text="דלג לכאן?"
                            textColor={unit.textColor}
                          />
                        ) : selectedTile !== i && status === "ACTIVE" ? (
                          <HoverLabel text="התחל!" textColor={unit.textColor} />
                        ) : null}
                        <LessonCompletionSvg
                          lessonsCompleted={lessonsCompleted}
                          status={status}
                        />
                        <Box
                          sx={{
                            position: 'relative',
                            padding: '1rem',
                            margin: ' 0.75rem',
                            borderRadius: '9999px',
                            borderBottomWidth: '8px',
                            "&:hover": {
                              "& > .tooltip": {
                                opacity: 1,
                              },
                            },
                          }}
                        // onClick={() => {
                        //   if (
                        //     tile.type === "fast-forward" &&
                        //     status === "LOCKED"
                        //   ) {
                        //     void router.push(
                        //       `/lesson?fast-forward=${unit.unitNumber}`
                        //     );
                        //     return;
                        //   }
                        //   setSelectedTile(i);
                        // }}
                        >
                          <TileIcon tileType={tile.type} status={status} />
                          <Typography
                            className="tooltip"
                            sx={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              opacity: isHovered ? 1 : 0,
                              transition: 'opacity 0.3s ease-in-out',
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                          >
                            הצג שיעור
                          </Typography>
                        </Box>
                      </Button>
                    );
                }
              })()}
              <TileTooltip
                selectedTile={selectedTile}
                index={i}
                unitNumber={unit.unitNumber}
                tilesLength={unit.tiles.length}
                description={(() => {
                  switch (tile.type) {
                    case "book":
                    case "dumbbell":
                    case "star":
                      return tile.description;
                    case "fast-forward":
                      return status === "LOCKED"
                        ? "Jump here?"
                        : tile.description;
                    case "trophy":
                      return `Unit ${unit.unitNumber} review`;
                  }
                })()}
                status={status}
                closeTooltip={closeTooltip}
              />
            </Fragment>
          );
        })}
      </Box >
    </>
  );
};

// const getTopBarColors = (
//   scrollY: number
// ): {
//   backgroundColor: `bg-${string}`;
//   borderColor: `border-${string}`;
// } => {
//   const defaultColors = {
//     backgroundColor: "bg-[#58cc02]",
//     borderColor: "border-[#46a302]",
//   } as const;

//   if (scrollY < 680) {
//     return defaultColors;
//   } else if (scrollY < 1830) {
//     return units[1] ?? defaultColors;
//   } else {
//     return units[2] ?? defaultColors;
//   }
// };

export default function Learn() {
  // const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
    updateScrollY();
    document.addEventListener("scroll", updateScrollY);
    return () => document.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  // const topBarColors = getTopBarColors(scrollY);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Box sx={{
        position: 'fixed', top: 0, left: 0, height: '100%'
      }}>
        <SideBar selectedTab={"למידה"} />
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: '6rem', backgroundColor: '#d0a34c'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', maxWidth: '48rem', }}>
          {units.map((unit) => (
            <UnitSection unit={unit} key={unit.unitNumber} />
          ))}
          <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            position: 'sticky', right: 0, left: 0, bottom: '7rem',
          }} >
            <Link
              href="/lesson?practice"
              sx={{
                display: 'flex', position: 'absolute', right: '1rem', justifyContent: 'center',
                alignItems: 'center', borderRadius: '9999px', borderWidth: '2px', borderBottomWidth: '4px',
                borderColor: '#E5E7EB', width: '4rem', height: '4rem', backgroundColor: '#ffffff',
              }}
            >
              <Typography>חזרות תירגול</Typography>
              <PracticeExerciseSvg style={{ width: '2rem', height: '2rem' }} />
            </Link>
            {scrollY > 100 && (
              <Button
                sx={{
                  display: 'flex',
                  position: 'absolute',
                  right: '1rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignDelf: 'flex-end',
                  borderRadius: '1rem',
                  borderWidth: '2px',
                  borderBottomWidth: '4px',
                  borderColor: '#E5E7EB',
                  width: '3.5rem',
                  height: '3.5rem',
                  backgroundColor: '#ffffff',
                }}
                onClick={() => scrollTo(0, 0)}
              >
                <Typography>חזרה להתחלה</Typography>
                <UpArrowSvg />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      {/* <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      /> */}
    </Box >
  );
};

const LessonCompletionSvg = ({
  lessonsCompleted,
  status,
  style = {},
}: {
  lessonsCompleted: number;
  status: TileStatus;
  style?: React.HTMLAttributes<SVGElement>["style"];
}) => {
  if (status !== "ACTIVE") {
    return null;
  }
  switch (lessonsCompleted % 4) {
    case 0:
      return <LessonCompletionSvg0 style={style} />;
    case 1:
      return <LessonCompletionSvg1 style={style} />;
    case 2:
      return <LessonCompletionSvg2 style={style} />;
    case 3:
      return <LessonCompletionSvg3 style={style} />;
    default:
      return null;
  }
};

const HoverLabel = ({
  text,
  textColor,
}: {
  text: string;
  textColor: `text-${string}`;
}) => {
  const hoverElement = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(72);

  useEffect(() => {
    setWidth(hoverElement.current?.clientWidth ?? width);
  }, [hoverElement.current?.clientWidth, width]);

  return (
    <div
      className={`absolute z-10 w-max animate-bounce rounded-lg border-2 border-gray-200 bg-white px-3 py-2 font-bold uppercase ${textColor}`}
      style={{
        top: "-25%",
        left: `calc(50% - ${width / 2}px)`,
      }}
      ref={hoverElement}
    >
      {text}
      <div
        className="absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white"
        style={{ left: "calc(50% - 8px)", bottom: "-8px" }}
      ></div>
    </div>
  );
};

const UnitHeader = ({
  unitNumber,
  description,
  backgroundColor,
  borderColor,
}: {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  borderColor: `border-${string}`;
}) => {
  // const language = useBoundStore((x) => x.language);
  return (
    <article
      className={["max-w-2xl text-white sm:rounded-xl", backgroundColor].join(
        " "
      )}
    >
      <header className="flex items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">חלק {unitNumber}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <Link
          // href={`https://duolingo.com/guidebook/${language.code}/${unitNumber}`}
          className={[
            "flex items-center gap-3 rounded-2xl border-2 border-b-4 p-3 transition hover:text-gray-100",
            borderColor,
          ].join(" ")}
        >
          <GuidebookSvg />
          <span className="sr-only font-bold uppercase lg:not-sr-only">
            Guidebook
          </span>
        </Link>
      </header>
    </article>
  );
};
