import {chat, generalChat,home,invitations,myDoctors,myPatients,notifications,questions,scoreOfPrediction,statistics,updatequestions,settings} from '../assets/assets'

const leftSideBarIcons = [
    {
        title:'Home',
        icon : home
    },
    {
        title:'questions',
        icon : questions
    },
    {
        title:'Scores of prediction',
        icon :scoreOfPrediction
    },
    {
        title:'invitations',
        icon :invitations
    },
    {
        title:'My doctors',
        icon :myDoctors
    },
    {
        title:'My patients',
        icon :myPatients
    },
    {
        title:'Update questions',
        icon :updatequestions
    },
    {
        title:'My statistics',
        icon : statistics
    },
    {
        title:'community',
        icon : generalChat
    },

];
const rightSideBarIcons = [
    {
        icon : chat
    },
    {
        icon : notifications
    },
    {
        icon : settings
    }
]
export {leftSideBarIcons,rightSideBarIcons} ;