import {chat, generalChat,home,invitations,myDoctors,myPatients,notifications,questions,scoreOfPrediction,statistics,updatequestions,settings} from '../assets/assets'

const data = JSON.parse(localStorage.getItem('user'));
console.log(data)
const leftSideBarIcons = [
    {
        title:'Home',
        icon : home,
        link:'',
        allowed : ['patient','medcin','admin']
    },
    {
        title:'questions',
        icon : questions,
        link:'Questions',
        allowed : ['patient']
    },
    {
        title:'Scores of prediction',
        icon :scoreOfPrediction,
        link:`SurveyResult${data && `/${data._id}`}`  ,
        allowed : ['patient','medcin']
    },
    {
        title:'invitations',
        icon :invitations,
        link:'Invitations',
        allowed : ['admin']
    },
    {
        title:'My doctors',
        icon :myDoctors,
        link:'doctorsList',
        allowed : ['admin']
    },
    {
        title:'My patients',
        icon :myPatients,
        link:'PatientsList',
        allowed : ['medcin','admin']
    },
    {
        title:'Update questions',
        icon :updatequestions,
        link:'UpdateSurveys',
        allowed : ['medcin']
    },
    {
        title:'My statistics',
        icon : statistics,
        link:'MyStatistics',
        allowed : ['admin']
    },
    {
        title:'community',
        icon : generalChat,
        link:'GeneralChat',
        allowed : ['patient','medcin','admin']
    },

];
const rightSideBarIcons = [
    {
        icon : chat,
        link:'ChatPage'
    },
    {
        icon : notifications,
        link:'Notifications'
    },
    {
        icon : settings,
        link:'Edit'
    }
]
export {leftSideBarIcons,rightSideBarIcons} ;