import React, { useState } from "react";

const clubs = [
  {
    name: "Association of Computer Machinery",
    abbreviation: "ACM",
    type: "Technical",
    logo: "https://th.bing.com/th/id/R.f704ea79eeb2a0884bfbdc21fb0554f9?rik=sKMZDxGqnZrgkA&riu=http%3a%2f%2fipsn.acm.org%2f2011%2findex_files%2facm.jpg&ehk=nElBpyFR2A%2b%2fIg%2fUmkxSaagaTl6a78t%2fcYjqe%2f%2f8fm4%3d&risl=&pid=ImgRaw&r=0",
    links: {
      profile: "https://www.facebook.com/groups/acmbitm/",
      website: "/err",
      instagram: "https://www.instagram.com/acmbitm/",
      linkedin: "https://www.linkedin.com/company/acmbitm/?originalSubdomain=in"
    }
  },
  {
    name: "Entrepreneurship Development Cell",
    abbreviation: "EDC",
    type: "Technical",
    logo: "https://edcbitmesra.in/edclogo3d.png",
    links: {
      profile: "https://www.facebook.com/edcbitmesra",
      website: "https://edcbitmesra.in/",
      instagram: "https://www.instagram.com/edcbitmesra/",
      linkedin: "https://www.linkedin.com/company/edcbitmesra/"
    }
  },
  {
    name: "Environment Protection and Awareness Club",
    abbreviation: "EPAC",
    type: "Technical",
    logo: "https://png.pngtree.com/png-clipart/20230623/original/pngtree-environmental-protection-natural-environment-logo-vector-png-image_9204796.png",
    links: { 
      website: "https://epacbitmesra.in/",
      instagram: "https://www.instagram.com/epac.bitmesra/", 
      linkedin: "https://www.linkedin.com/company/epac-bitmesra/?originalSubdomain=in" }
  },
  {
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    abbreviation: "IEEE",
    type: "Technical",
    logo: "https://avatars.githubusercontent.com/u/45818386?s=280&v=4",
    links: { 
      website: "https://www.ieeebitmesra.in/",
      instagram: "https://www.instagram.com/ieee.bitm/?hl=en", 
      linkedin: "https://in.linkedin.com/company/ieee-student-branch-bit-mesra" }
  },
  {
    name: "Institution of Engineering and Technology (IET)",
    abbreviation: "IET",
    type: "Technical",
    logo: "https://media-exp1.licdn.com/dms/image/C510BAQEHc4TQq7NBLg/company-logo_200_200/0/1558255615351?e=2159024400&v=beta&t=sbuV6ADMPCCzfDgKxbQe0W8tJ4KWDXtXezp7C0C3enY",
    links: { 
      profile:"https://www.facebook.com/ietbitmesra",
      website: "https://iet-bitmesra.netlify.app/",
      instagram: "https://www.instagram.com/ietbitmesra/", 
      linkedin: "https://www.linkedin.com/company/iet-on-campus-bit-mesra/" }
  },
  {
    name: "Institution of Electronics and Telecommunication Engineers (IETE)",
    abbreviation: "IETE",
    type: "Technical",
    logo: "https://ietebitmesra.github.io/Hacktoberfest-23/Clubs/IETE/assets/img/IETE.png",
    links: { 
      website: "https://ietebitmesra.github.io/",
      instagram: "https://www.instagram.com/iete_bitmesra/", 
      linkedin: "https://www.linkedin.com/company/iete-bit-mesra/posts/?feedView=all" }
  },
  {
    name: "Dance Club",
    abbreviation: "Dance",
    type: "Cultural",
    logo: "https://i.imgur.com/PCnJDzA.jpeg",
    links: { 
      profile: "https://www.facebook.com/DanceClubBitMesra/", 
      instagram: "https://www.instagram.com/danceclubbitmesra/?hl=en", 
      linkedin: "/err" ,
      youtube:"https://www.youtube.com/@BITMesraDanceClub"}
  },
  {
    name: "Music Club",
    abbreviation: "Music",
    type: "Cultural",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFwSL_2ajeeng/company-logo_200_200/company-logo_200_200/0/1656767415382/dhwani_music_club_bit_mesra_logo?e=1755734400&v=beta&t=UarXUK01a-374HZMvT8yq4u36X9c3nc2XDl8006TxCA",
    links: { 
      profile: "https://www.facebook.com/MusicClubBIT/", 
      website: "/err", 
      instagram: "https://www.instagram.com/dhwani.bitmesra/", 
      linkedin: "https://www.linkedin.com/company/dhwani-music-club-bit-mesra/posts/?feedView=all" ,
      youtube:"https://www.youtube.com/@dhwani-musicclubbitmesra4525"}
  },
  {
    name: "Team Firebolt Racing",
    abbreviation: "Firebolt Racing",
    type: "Technical",
    logo: "https://www.kindpng.com/picc/m/78-785775_firebolt-racing-logo-png-baja-sae-logo-transparent.png",
    links: {
      profile: "/err",
      website: "https://www.fireboltracing.com/",
      instagram: "https://www.instagram.com/firebolt_racing/",
      linkedin: "https://www.linkedin.com/company/fireboltracing/posts/?feedView=all",
      youtube: "https://www.youtube.com/c/FireboltRacing"
    }
  },
  {
    name: "Team Srijan",
    abbreviation: "Srijan",
    type: "Technical",
    logo: "https://media-exp1.licdn.com/dms/image/C560BAQES9Er88uIsdA/company-logo_200_200/0/1605614568466?e=2147483647&v=beta&t=iDWj1RsR0QBB6M3ErkGymxjanolhnrTjqGlm0B5Dbaw",
    links: {
      profile: "https://www.facebook.com/TeamSrijan/",
      website: "/err",
      instagram: "https://www.instagram.com/team_srijan/",
      linkedin: "https://www.linkedin.com/company/team-srijan/",
      youtube: "https://www.youtube.com/teamsrijan"
    }
  },
  {
    name: "Team Aveon",
    abbreviation: "Aveon",
    type: "Technical",
    logo: "https://cdn.razorpay.com/logos/Fyy7lCQFct3tqx_large.jpg",
    links: {
      profile: "https://www.facebook.com/TeamAveonRacing/",
      website: "https://teamaveon.org/",
      instagram: "https://www.instagram.com/teamaveon/",
      linkedin: "https://www.linkedin.com/company/team-aveon/",
      youtube: "https://www.youtube.com/channel/UC8PG5TLw3Zd5J1SrzMFyymA"
    }
  },
  {
    name: "Dramatics Society (Ehsaas)",
    abbreviation: "Ehsaas",
    type: "Cultural",
    logo: "https://th.bing.com/th/id/OIP.Zr1lkduz3zSslr5m6GOEGAHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    links: {
      profile: "https://www.facebook.com/ehsaasbitmesra",
      website: "/err",
      instagram: "https://www.instagram.com/ehsaas_bitm/",
      linkedin: "https://www.linkedin.com/company/ehsaasbitmesra/",
      youtube: "https://www.youtube.com/@EHSAASBITMESRA"
    }
  },
  {
    name: "Fine Arts Society (FAS)",
    abbreviation: "FAS",
    type: "Cultural",
    logo: "https://th.bing.com/th/id/OIP.UxNKJITM3Hlf1rC4wQrTAwAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    links: {
      profile: "https://www.facebook.com/fasbitmesra",
      website: "https://fasmesra.vercel.app/",
      instagram: "https://www.instagram.com/fasbitmesra/?hl=en",
      linkedin: "https://www.linkedin.com/company/fas-bitmesra/",
      youtube: "https://www.youtube.com/@fasbitmesra2742"
    }
  },
  {
    name: "Leo Club",
    abbreviation: "Leo Club",
    type: "Cultural",
    logo: "https://th.bing.com/th/id/OIP.XmsnnbqKzPviCc1A4ZTVdQHaHT?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    links: {
      profile: "https://leoclubbitmesra.github.io/LEOClub-Website/index.html",
      website: "https://leobitmesra.vercel.app/",
      instagram: "https://www.instagram.com/leoclub_bitmesra/",
      linkedin: "https://www.linkedin.com/company/leo-club-bit-mesra/",
      youtube: "https://www.youtube.com/@LeoClubBITMesra"
    }
  },
  {
    name: "Literary Society (LitSoc)",
    abbreviation: "LitSoc",
    type: "Cultural",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQF6Xhn-PHGung/company-logo_200_200/company-logo_200_200/0/1631411705518/literary_society_bit_mesra_logo?e=1755734400&v=beta&t=cO84cQb6b2qqDeHbISWYYbajszp7dANW6OqzoN4Fgxs",
    links: {
      profile: "https://www.facebook.com/LiterarySocietyBITMesra/",
      website: "https://litsocbitm.wordpress.com/category/editors-pick/",
      instagram: "https://www.instagram.com/litsocbitm_/?hl=en",
      linkedin: "https://www.linkedin.com/company/literary-society-bit-mesra/",
      youtube: "https://www.youtube.com/@literarysocietybitmesra6719"
    }
  },
  {
    name: "News and Publication Society (NAPS)",
    abbreviation: "NAPS",
    type: "Cultural",
    logo: "https://pbs.twimg.com/profile_images/1209367657692033029/ixy27f4X_400x400.jpg",
    links: {
      profile: "https://www.facebook.com/naps.bit/",
      website: "https://napsbit.wordpress.com/",
      instagram: "https://www.instagram.com/naps_bitmesra/",
      linkedin: "https://www.linkedin.com/company/naps-bit/",
      youtube: "https://www.youtube.com/c/NewsandPublicationSocietyBITMesra"
    }
  },
  {
    name: "Photographic Society (Psoc)",
    abbreviation: "Psoc",
    type: "Cultural",
    logo: "https://yt3.ggpht.com/ytc/AMLnZu9ZYsK5jvw8imDqKKK4X4YxJe_FFz6yi1u2kXo5dg=s900-c-k-c0x00ffffff-no-rj",
    links: {
      profile: "https://www.facebook.com/psocbitm/",
      website: "https://nextjs-with-supabase-beige-nine.vercel.app/",
      instagram: "https://www.instagram.com/psoc.bitm/",
      linkedin: "https://www.linkedin.com/company/photographic-society-bit-mesra/",
      youtube: "https://www.youtube.com/@photographicsocietybitmesr5393"
    }
  },
  {
    name: "Rotaract Club",
    abbreviation: "Rotaract",
    type: "Cultural",
    logo: "https://th.bing.com/th/id/OIP.nwAKuEdyX-vu2O6LpcSkagHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    links: {
      profile: "https://www.facebook.com/RotaractClubBIT/",
      website: "https://rotaract21.wixsite.com/rotaractbitmesra",
      instagram: "https://www.instagram.com/rotaract_bitranchi/",
      linkedin: "https://www.linkedin.com/company/rotaract-club-of-bit-mesra/?originalSubdomain=in",
      youtube: "https://www.youtube.com/@rotaractclubofbitmesra5646"
    }
  },
  {
    name: "UNESQUO",
    abbreviation: "UNESQUO",
    type: "Self Development",
    logo: "https://unesquo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d197c8e.png&w=128&q=75",
    links: {
      profile: "https://www.facebook.com/Unesquo/",
      website: "https://unesquo.in/",
      instagram: "https://www.instagram.com/unesquo/",
      linkedin: "https://www.linkedin.com/company/unesquo-bit-mesra/",
      youtube: "https://www.youtube.com/@UNESQUO"
    }
  },
  
  {
    name: "Robolution",
    abbreviation: "Robolution",
    type: "Technical",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH6_rFMPu9vyg/company-logo_200_200/company-logo_200_200/0/1630531207442?e=1755734400&v=beta&t=wOVkqCQw6KcZwJwhUSPB1TzPTM36UNlzQzFkVDJO1XY",
    links: {
      profile: "/err",
      website: "/err",
      instagram: "https://www.instagram.com/robolution.bitm/",
      linkedin: "https://www.linkedin.com/company/robolution-bit-mesra/?originalSubdomain=in",
    }
  },
  {
    name: "Aerospace Society BIT Mesra",
    abbreviation: "Aerospace Society",
    type: "Self Development",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQG9sBr2HxsXEw/company-logo_200_200/company-logo_200_200/0/1630670024008/aerospace_society_bit_mesra_logo?e=1755734400&v=beta&t=4Sa5xXvoJYtmmoKFIzJi3IOfoQBZgtjlKR6fhfm_gSA",
    links: {
      profile: "https://www.facebook.com/aerosoc.bitmesra/",
      website: "https://medium.com/@aerosoc",
      instagram: "https://www.instagram.com/aerosoc_bitmesra/",
      linkedin: "https://www.linkedin.com/company/aerospace-society-bit-mesra/",
    }
  },
  {
    name: "Student Mentorship and Adventure Club (SMAC)",
    abbreviation: "SMAC",
    type: "Mentorship",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQHcdMK_5HZHIw/company-logo_200_200/company-logo_200_200/0/1630598613560?e=1755734400&v=beta&t=p_lBLe63qn_RcF1V8gA7hYKFdRlKN52xXch2y2roJQc",
    links: {
      profile: "https://www.facebook.com/SMPBITMesra",
      website: "/err",
      instagram: "https://www.instagram.com/sac.bitm/",
      linkedin: "https://www.linkedin.com/company/sports-mentorship-and-adventure-club/",
    }
  }
  
];

const Community = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredClubs = clubs.filter((club) => {
    const query = search.toLowerCase();
    const matchesSearch =
      club.name.toLowerCase().includes(query) ||
      club.abbreviation.toLowerCase().includes(query) ||
      club.type.toLowerCase().includes(query);

    let matchesType = false;
    
    if (filterType === "All") {
      matchesType = true;
    } else if (filterType === "Other") {
      // Include Mentorship and Self Development in "Other"
      matchesType = club.type === "Mentorship" || club.type === "Self Development";
    } else {
      matchesType = club.type.toLowerCase() === filterType.toLowerCase();
    }

    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6 min-h-screen bg-slate-800 dark:text-black">
      <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">Clubs & Societies</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by name, abbreviation, or type..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="All">All</option>
          <option value="Technical">Technical</option>
          <option value="Cultural">Cultural</option>
          <option value="Other">Other</option>          
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {filteredClubs.map((club, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 shadow-md rounded-2xl p-5 w-80 text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={club.logo || "https://via.placeholder.com/100"}
              alt={`${club.abbreviation} logo`}
              className="mx-auto mb-4 h-24 w-24 object-contain rounded-full"
            />
            <h2 className="text-xl font-semibold">{club.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{club.abbreviation}</p>
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">{club.type}</span>
            <div className="flex justify-center gap-4 mt-4 text-gray-700 text-xl">
              {club.links.profile && (
                <a href={club.links.profile} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform">
                  <i className="ri-facebook-fill" />
                </a>
              )}
              {club.links.website && (
                <a href={club.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform">
                  <i className="ri-global-line" />
                </a>
              )}
              {club.links.instagram && (
                <a href={club.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform">
                  <i className="ri-instagram-line" />
                </a>
              )}
              {club.links.linkedin && (
                <a href={club.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform">
                  <i className="ri-linkedin-fill" />
                </a>
              )}
              {club.links.youtube && (
                <a href={club.links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform">
                  <i className="ri-youtube-line" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;