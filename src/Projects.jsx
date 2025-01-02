// import Portfolio from "./assets/Portfolio.png"
import Travel from "./assets/travel.png"
// import SpicyBites from "./assets/SpicyBites.png"
import YTNike from "./assets/Yt-Nike.png"
// import Youtube from "./assets/Youtube.png"
import YTCloth from "./assets/YT-Cloth.png"
// import Webelite from "./assets/Webelite.png"
import Rescue from "./assets/rescue.png"
// import Supercar from "./assets/Supercar.png"
import Dragon from "./assets/dragon.png"

import Cards from './components/Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'YT-Cloth',
          desc: 'YT-Cloth is a responsive React.js project styled with Tailwind CSS, featuring fashion blogs and videos for men, women, and kids. It includes dynamic routing, an interactive UI, and fast performance. Deployed on Vercel, it provides a seamless and modern user experience across all devices.',
          image: YTCloth,
          live: "https://yt-cloth.vercel.app/",
          github: "https://github.com/yeasinshaikh188/YT-Cloth"
        },
        {
          title: 'Travel',
          desc: 'Travel Explorer is a responsive single-page React.js application styled with Tailwind CSS. It features a sleek design, smooth navigation, and showcases travel destinations. Fully optimized for all devices and deployed on Vercel, it ensures fast performance and a seamless user experience, making it perfect for exploring travel inspirations effortlessly.',
          image: Travel,
          live: "https://trip-buddy-ol98.vercel.app/",
          github: "https://github.com/yeasinshaikh188/TripBuddy"
        },
        {
          title: 'Dragon',
          desc: 'Dragon News is a React app with Firebase authentication, dynamic news from data, styled using Tailwind CSS and DaisyUI.',
          image: Dragon,
          live: "https://react-dragon-news-auth-b9f84.web.app/",
          github: "https://github.com/yeasinshaikh188/react-dragon-news-auth"
        },
        {
          title: 'YT-Nike',
          desc: 'YT-Nike is a responsive React application styled with Tailwind CSS and enhanced with Framer Motion for smooth animations. It features dedicated blogs showcasing boys, women s, and kids footwear collections. The sleek and modern design ensures a user-friendly experience on all devices, making it an engaging platform for exploring trendy shoe styles and fashion insights.',
          image: YTNike,
          live: "https://yt-nike.vercel.app/",
          github: "https://github.com/yeasinshaikh188/YT-Nike"
        },
        {
          title: 'Rescue',
          desc: 'Rescue is a responsive React application styled with Tailwind CSS and deployed on Vercel. It features routing for seamless navigation and integrates a map displayed through an interactive image. Designed with a clean and modern layout, Rescue ensures a smooth user experience across all devices, making it ideal for exploring location-based services effortlessly.',
          image: Rescue,
          live: "https://rescue-react-project.vercel.app/",
          github: "https://github.com/yeasinshaikh188/rescue-react-project"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects