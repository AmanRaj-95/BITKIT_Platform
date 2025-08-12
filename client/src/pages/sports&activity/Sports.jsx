import React, { useState } from "react";
import Slider from "react-slick";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sportsData = [
    {
        name: "Football",
        type: "Outdoor",
        image: "https://cdn-icons-png.flaticon.com/512/861/861512.png",
        description: "Football is a fast-paced, team-oriented sport requiring strategic plays.",
        achievements: [
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750447599/Taking_the_aim_with_perfection_PhotoGrid_ko1wm8.png",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750447599/Udghosh_2023_%EF%B8%8F___PhotoGrid_lzf7ot.png",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750460863/489115367_2568250430040323_4352559694199243730_n_iea3r3.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750462423/46486274_1968952349858913_8616468311544168448_n_ysvnar.jpg",
            }
        ],
    },
    {
        name: "Basketball",
        type: "Indoor",
        image: "https://static.vecteezy.com/system/resources/previews/022/584/096/original/a-slam-dunk-of-color-the-vibrant-basketball-png.png",
        description: "Basketball features five players per team trying to score through hoops.",
        achievements: [
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750448840/Udghosh_22_at_IIT_KANPUR_was_one_heck_of_a_journey_for_us_as_a_team.We_lost_some_we_won_some_but_more_importantly_developed_as_a_team_like_no_other.Stronger_we_shall_return._ir93se.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750457894/One_last_dance_K20s_.._basketball_basketball_seniors_game_baller_hoopers_instagram_instagood_instadaily_instalike_follow_sports_zkaqvn.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750442820/5_PhotoGrid_npuzvl.png",
            }
        ],
    },
    {
        name: "Cricket",
        type: "Outdoor",
        image: "https://th.bing.com/th/id/R.c16ce8f642c8ee128314f264b0b9e47f?rik=60owg3FGSs6xGA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcricket%2fcricket_PNG122.png&ehk=VuBL5kCHqrIN1ulCHxJyYWIrcYoKtFXHdCFTf24lrkY%3d&risl=&pid=ImgRaw&r=0",
        description: "A globally popular bat-and-ball game played between two teams.",
        achievements: [
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750459681/C3_jybzqu.png",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750461454/cricket_l0lwfe.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750461683/503177705_122184826970280140_6377661500386897913_n_lehwsd.jpg",
            }
        ],
    },
    {
        name: "Volleyball",
        type: "Outdoor",
        image: "https://pngimg.com/d/volleyball_PNG45.png",
        description: "A popular team sport where players hit a ball over a net to score points.",
        achievements: [
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750460052/Congratulations_H10_Volleyball_Champions_2025_Hostel_10_has_won_the_Inter-Hostel_Volleyball_Tournament_2025_with_outstanding_teamwork_and_determination_Kudos_to_the_team_for_their_hard-earned_victory_and_to_all_ymujkb.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750461256/40279767_2401948009835140_3939083647268683776_n_rwn6pc.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750461099/480462355_943786704633663_7686613240746443508_n_ynslnl.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750461045/480444866_943786684633665_232106189405305191_n_efn3vk.jpg",
            }
        ],
    },
    {
        name: "Badminton",
        type: "Outdoor/Indoor",
        image: "https://pngimg.com/d/badminton_PNG10442.png",
        description: "A fast-paced racquet sport where players hit a shuttlecock over a net to score points.",
        achievements: [
            {
                photo: "https://img.jagranjosh.com/images/2022/December/5122022/Birla-Institute-of-Technology-Mesra-Sports-1.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750465925/465259323_8704141959653494_898394227623038877_n_ffgwtg.jpg",
            },
        ],
    },
    {
        name: "Athletics",
        type: "Mixed",
        isCategory: true,
        image: "https://static.vecteezy.com/system/resources/previews/013/787/508/original/track-and-field-athlete-jumping-hurdle-png.png",
        description: "Athletics includes competitive track and field events.",
        subSports: [
            {
                name: "100m Sprint", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750458812/From_breaking_barriers_to_showcasing_precision_BIT_Mesra_athletes_exemplify_strength_and_determination._...All_the_best_weareteamindia_..._Athletics_BITMesra_weareteamindia_olympics_Sports_olympicsindia_e44wus.jpg" }
                ]
            },
            { name: "200m Sprint", description: "Sprint around half the track.", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1751887277/sprint_race_y7iubb.jpg" }] },
            { name: "800m Race", description: "Two-lap middle distance event.", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1751887533/race2_byd0zc.jpg" }] },
            { name: "Shotput", description: "Throw shotput till some mark", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750464586/484617330_1147651060487727_6241834721227651437_n_tli9pf.jpg" }] },
            { name: "Long Jump", description: "Jump for distance.", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1751887658/Birla-Institute-of-Technology-Mesra-Sports-2_subwwi.jpg" },] },
            { name: "Hurdle Race", description: "Jump over a raised bar.", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750458812/From_breaking_barriers_to_showcasing_precision_BIT_Mesra_athletes_exemplify_strength_and_determination._...All_the_best_weareteamindia_..._Athletics_BITMesra_weareteamindia_olympics_Sports_olympicsin_1_dx2xbc.jpg" }] },
            { name: "Cycle Race", description: "Cycle Racing", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750458813/From_breaking_barriers_to_showcasing_precision_BIT_Mesra_athletes_exemplify_strength_and_determination._...All_the_best_weareteamindia_..._Athletics_BITMesra_weareteamindia_olympics_Sports_olympicsin_3_rlqu5m.jpg" }] },
            { name: "Discus Throw", description: "Throw a disc the farthest.", achievements: [{photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750458812/From_breaking_barriers_to_showcasing_precision_BIT_Mesra_athletes_exemplify_strength_and_determination._...All_the_best_weareteamindia_..._Athletics_BITMesra_weareteamindia_olympics_Sports_olympicsin_2_o2qupg.jpg" }] },
            { name: "Tug of War", description: "Tug of war is a sport in which two teams compete by pulling on opposite ends of a rope.", achievements: [{ photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750458813/From_breaking_barriers_to_showcasing_precision_BIT_Mesra_athletes_exemplify_strength_and_determination._...All_the_best_weareteamindia_..._Athletics_BITMesra_weareteamindia_olympics_Sports_olympicsin_4_zgsxrd.jpg" }] },
        ],

    },
    {
        name: "GYM",
        type: "Indoor",
        image: "https://freerangestock.com/sample/143515/big-dumbell-weights-over-white-background.jpg",
        description: "A place equipped for physical exercise and strength training.",
        achievements: [
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1753367090/gym_vvth72.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750465291/WhatsApp_Image_2025-06-20_at_22.58.25_2093703c_wntow0.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1753367177/gym2_hwedhy.jpg",
            },
            {
                photo: "https://res.cloudinary.com/dj54bbpg7/image/upload/v1750465165/WhatsApp_Image_2025-06-20_at_22.58.19_7bba2300_x4vnxw.jpg",
            },
        ],
    },
];

const getSliderSettings = (count) => ({
    dots: count > 1,
    infinite: count > 1,
    speed: 500,
    slidesToShow: Math.min(1, count),
    slidesToScroll: 1,
    autoplay: count > 1,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: Math.min(3, count),
                slidesToScroll: 1,
                infinite: count > 1,
                dots: count > 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: Math.min(2, count),
                slidesToScroll: 1,
                infinite: count > 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: count > 1,
            },
        },
    ],
});


export default function SportsGrid() {
    const [selectedSport, setSelectedSport] = useState(null);
    const [accordionIndex, setAccordionIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = (sport) => {
        setSelectedSport(sport);
        setAccordionIndex(null);
    };

    const toggleAccordion = (index) => {
        setAccordionIndex(accordionIndex === index ? null : index);
    };

    const normalize = (text) => text.toLowerCase();

    const filteredSports = sportsData.filter((sport) => {
        const q = normalize(searchQuery);
        const inSport = normalize(sport.name).includes(q);
        const inSubSport =
            sport.subSports?.some((s) => normalize(s.name).includes(q)) ?? false;
        return inSport || inSubSport;
    });

    return (
        <>
            {/* <Navbar /> */}
            <div className="bg-slate-800 min-h-screen p-10 dark:text-black">
                <h1 className="text-4xl font-bold text-center text-pink-500 mb-6">
                    Sports & Activities
                </h1>

                <div className="max-w-md mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="Search for a sport or event..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {filteredSports.length > 0 ? (
                        filteredSports.map((sport, index) => (
                            <div
                                key={index}
                                onClick={() => handleClick(sport)}
                                className="cursor-pointer rounded-xl shadow-lg bg-white p-6 hover:shadow-2xl transition duration-300 hover:scale-105"
                            >
                                <img
                                    src={sport.image}
                                    alt={sport.name}
                                    className="w-20 h-20 object-cover mx-auto mb-4"
                                />
                                <div className="text-2xl font-bold text-center text-gray-700">
                                    {sport.name}
                                </div>
                                <div className="text-center mt-2 text-gray-500">{sport.type}</div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No matching sports found. Try a different keyword.
                        </p>
                    )}
                </div>

                {selectedSport && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
                        <div className="bg-white text-black rounded-lg p-10 max-w-3xl w-full shadow-2xl relative max-h-[95vh] overflow-y-auto">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                                onClick={() => setSelectedSport(null)}
                            >
                                &times;
                            </button>

                            <h2 className="text-3xl font-bold mb-2 text-center text-pink-700">
                                {selectedSport.name}
                            </h2>
                            <p className="text-center text-sm text-gray-600 mb-6 max-w-xl mx-auto">
                                {selectedSport.description}
                            </p>

                            {!selectedSport.isCategory && (
                                <>
                                    <h3 className="text-xl font-semibold text-center underline underline-offset-4 mb-4">
                                        Photos
                                    </h3>
                                    <div className="max-w-2xl mx-auto">
                                        <Slider {...getSliderSettings(selectedSport.achievements.length)}>
                                            {selectedSport.achievements.map((a, i) => (
                                                <div key={i} className="p-4 text-center">
                                                    <img
                                                        src={a.photo}
                                                        alt={a.name || "Achievement"}
                                                        className="w-[500px] h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-lg"
                                                    />
                                                    {a.name && <p className="font-semibold mt-2">{a.name}</p>}
                                                    {a.title && (
                                                        <p className="text-sm text-gray-700">{a.title}</p>
                                                    )}
                                                    {a.badge && (
                                                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-pink-300 text-pink-800 rounded-full">
                                                            {a.badge}
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </>
                            )}

                            {selectedSport.isCategory &&
                                selectedSport.subSports.map((subSport, idx) => (
                                    <div
                                        key={idx}
                                        className="mb-4 border rounded-lg overflow-hidden shadow"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(idx)}
                                            className="w-full text-left px-4 py-3 bg-pink-100 font-semibold"
                                        >
                                            {subSport.name}
                                        </button>
                                        {accordionIndex === idx && (
                                            <div className="px-4 py-3 bg-gray-50">
                                                <p className="mb-4 text-sm text-gray-700">
                                                    {subSport.description}
                                                </p>
                                                <Slider {...getSliderSettings(subSport.achievements.length)}>
                                                    {subSport.achievements.map((a, i) => (
                                                        <div key={i} className="text-center">
                                                            <img
                                                                src={a.photo}
                                                                alt={a.name}
                                                                className="w-[500px] h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-lg"
                                                            />
                                                            {a.name && <p className="font-semibold">{a.name}</p>}
                                                            {a.title && (
                                                                <p className="text-sm text-gray-700 mt-1">
                                                                    {a.title}
                                                                </p>
                                                            )}
                                                            {a.badge && (
                                                                <span className="inline-block mt-2 px-2 py-1 text-xs bg-pink-300 text-pink-800 rounded-full">
                                                                    {a.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
            {/* <Footer /> */}
        </>
    );
}
