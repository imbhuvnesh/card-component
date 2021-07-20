import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const cards = [
    {
      id: 1,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 2,
      title: "India Gate",
      image:
        "https://www.makemytrip.com/travel-guide/media/dg_image/delhi/India-Gate-Delhi.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 3,
      title: "Qutub Minar",
      image: "https://images.indianexpress.com/2019/11/qutub-minar.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 4,
      title: "Toor Ji ka Jhalra",
      image:
        "https://i.pinimg.com/originals/6b/70/27/6b702722b1c5aff2e293ae7329c87e5d.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 5,
      title: "Meharangarh Fort, Jodhpur",
      image:
        "https://www.travelogyindia.com/blog/wp-content/uploads/2018/09/mehrangarh-Fort-Jodhpur.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 6,
      title: "Sand Dunes",
      image:
        "https://cdn.britannica.com/48/106048-050-82819507/Sand-dunes-Sahara-Morocco.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 7,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 9,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 10,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 11,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
    {
      id: 8,
      title: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet ipsa qui, officia iure cupiditate voluptate sequi ducimus rem? Illo accusantium esse voluptas fugit nulla aspernatur, iste repellat rem?",
    },
  ];

  const [bg, setBg] = useState(
    "https://i.pinimg.com/originals/a9/f9/d9/a9f9d9b49da24f972d5ac4190e46cb4d.jpg"
  );

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    transition: "0.5s ease-in",
  };

  const setBackground = (newBg) => {
    setBg(newBg);
  };

  return (
    <>
      <div className="App bg" style={style}></div>
      <div className="invisible" >
        {cards.map((card) => {
          return (
            <Card
              title={card.title}
              image={card.image}
              desc={card.desc}
              key={card.id}
              setBackground={setBackground}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
