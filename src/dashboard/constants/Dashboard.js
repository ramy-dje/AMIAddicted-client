import {chat, generalChat,home,invitations,myDoctors,myPatients,notifications,questions,scoreOfPrediction,statistics,updatequestions,settings} from '../assets/assets'

const leftSideBarIcons = [
    {
        title:'Home',
        icon : home,
        link:''
    },
    {
        title:'questions',
        icon : questions,
        link:'Questions'
    },
    {
        title:'Scores of prediction',
        icon :scoreOfPrediction,
        link:''
    },
    {
        title:'invitations',
        icon :invitations,
        link:'Invitations'
    },
    {
        title:'My doctors',
        icon :myDoctors,
        link:'doctorsList'
    },
    {
        title:'My patients',
        icon :myPatients,
        link:'PatientsList'
    },
    {
        title:'Update questions',
        icon :updatequestions,
        link:'UpdateQuestions/:id'
    },
    {
        title:'My statistics',
        icon : statistics,
        link:''
    },
    {
        title:'community',
        icon : generalChat,
        link:'GeneralChat'
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