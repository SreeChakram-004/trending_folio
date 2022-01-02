import memory from "../images/memory.PNG";
import todoapp from "../images/todoapp.PNG";
import project3 from "../images/Project3.png";
import fitness from "../images/fitness.PNG";
import shopping from "../images/shopping.PNG";
import chatapp from "../images/chatapp.PNG";
import tictactoe from "../images/tictactoe.PNG";

// import css1 from '../img/portImages/cv_css.png';
// import css2 from '../img/portImages/ms.png';
// import react1 from '../img/portImages/react_styled.png';
// import img2 from '../img/portImages/maya-4.jpg';
// import img3 from '../img/portImages/maya-3.jpg';

const portfolios = [
    {
        id: 1,
        category: 'FULL STALK',
        image: memory,
        link1: 'https://github.com/SreeChakram-004/memories-client',
        link2: 'https://shareurfeeling.netlify.app/',
        title: 'Social Media App',
        text: 'Created with HTML , CSS, ReactJs, Redux, css Flex, NodeJs, ExpressJs, MongoDB'
    },
    {
        id: 2,
        category: 'FULL STALK',
        image: todoapp,
        link1: 'https://github.com/SreeChakram-004/TodoApp_Backend',
        link2: 'https://needtodo1.netlify.app/',
        title: 'Todo App',
        text: 'Created with HTML,CSS,ReactJs,css Flex,NodeJs,ExpressJs,MongoDB'
    },
    {
        id: 3,
        category: 'FULL STALK',
        image: project3,
        link1: 'https://github.com/SreeChakram-004/online_house_service',
        link2: 'https://still-depths-30514.herokuapp.com/',
        title: 'Online Service App',
        text: 'Created with HTML, CSS, ReactJs, css Flex, NodeJs, ExpressJs, MongoDB'
    },
    {
        id: 4,
        category: 'FULL STALK',
        image: fitness,
        link1: 'https://github.com/sujatha-m/Fitness-Tracker',
        link2: 'https://healthfitnesstracker.netlify.app/',
        title: 'Fitness Tracker',
        text: 'Created with HTML,CSS,ReactJs,BootStrap, ExpressJs, MongoDB'
    },
    {
        id: 5,
        category: 'React JS',
        image: shopping,
        link1: 'https://github.com/SreeChakram-004/ShoppingCartwithRating_React',
        link2: 'https://csb-h0fbv.netlify.app/',
        title: 'Shopping Application',
        text: 'Created with HTML,CSS,ReactJs,Bootstrap'
    },
    {
        id: 6,
        category: 'React JS',
        image: chatapp,
        link1: 'https://github.com/SreeChakram-004/Chappu-chat-app/',
        link2: 'https://chappuchatapp.netlify.app/',
        title: 'Group Chat App through Login',
        text: 'Created using HTML,CSS,ReactJs, React-Chat-Engine, CSS Flex' +" "+"[username:Guest,password : Guest]"
    },
    {
        id: 7,
        category: 'React JS',
        image: tictactoe,
        link1: 'https://github.com/SreeChakram-004/TicTacToeGame',
        link2: 'https://cherrytictactoe.netlify.app/',
        title: 'Tic-Tac-Toe App',
        text: 'Created using HTML,CSS,ReactJs, React-Chat-Engine, CSS Flex'
    }
]

export default portfolios;