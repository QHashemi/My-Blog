import React, { useState ,useRef,useEffect} from "react";

export default function Blogs() {
    const displayBlog = useRef([]);
    useEffect(() => {
      displayBlog.current.forEach((someThing)=>{
        window.addEventListener("scroll", (e) =>{
          var blog_position = someThing.getBoundingClientRect().top;
          var window_height = window.innerHeight ;
  
          if (blog_position < window_height) {
            someThing.classList.add("blog_new");
            
          } else {
           someThing.classList.remove("blog_new");
          }
        });
        });
  
  
      
     
     
    }, []);


  const [blog] = useState([
    {
      id: 1,
      blogname: "Drawing",
      image:
        "https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et quos officiis tenetur saepe enim cumque labore esse laudantium reiciendis?",
    },
    {
      id: 2,
      blogname: "Programming",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et quos officiis tenetur saepe enim cumque labore esse laudantium reiciendis?",
    },
    {
      id: 3,
      blogname: "Play Soccer",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et quos officiis tenetur saepe enim cumque labore esse laudantium reiciendis?",
    },
    {
      id: 4,
      blogname: "Playing Guitar",
      image:
        "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et quos officiis tenetur saepe enim cumque labore esse laudantium reiciendis?",
    },{
    id: 5,
    blogname: "Walking",
    image:
      "https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et quos officiis tenetur saepe enim cumque labore esse laudantium reiciendis?",
  },
  ]);
  return (
  
    <div className="myBlogs" id="hobbies">
      {blog.map((hobby) => {
         const { id, blogname, image, desc } = hobby;
        const style ={
          background:`url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
       
        return (
          <div className="blogs" ref={(element)=>displayBlog.current.push(element)} key={id}>
            <span className="hoverCover">
              <div className="button_Link">More</div>
            </span>
            <div className="picBlogs" style={style}></div>
            <div className="textBlox">
              <h3>{blogname}</h3>
              <p>
               {desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
