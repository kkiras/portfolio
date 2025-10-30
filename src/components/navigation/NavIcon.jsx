export default function NavIcon({ icon, active }) {
    const iconColor = "currentColor"
    const iconW = "28px"
    const iconH = "28px"

    if(icon === "About Me") {
        return (
           <svg fill={iconColor} width={iconW} height={iconH} viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></g></svg>

        )
    }
    else if(icon === "Home") {
        return (
            <svg width={iconW} height={iconH} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <g clipPath="url(#clip0_429_11177)"> 
                        <path d="M19 10V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10M21 12L12 3L3 12" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                    </g> 
                    <defs> 
                        <clipPath id="clip0_429_11177"> 
                            <rect width="24" height="24" fill="white"></rect> 
                        </clipPath> 
                    </defs> 
                </g>
            </svg>
        )
    }
    else if (icon === "Skills") {
        return (
            <svg width={iconW} height={iconH} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M18.5 8.5C18.5 12.0899 15.5899 15 12 15C8.41015 15 5.5 12.0899 5.5 8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    <path d="M8.5 14V22L12.3182 19L15.5 22V14" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
        )
    }

    else if (icon === "Experience") {
        return (
            <svg width={iconW} height={iconH} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M4 4.5C4 3.11929 5.11929 2 6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    <path d="M4 19.5V19.5C4 18.1193 5.11928 17 6.49998 17H20" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
        )
    }

    else if (icon === "Project") {
        return (
            <svg width={iconW} height={iconH} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
        )
    }

    else if (icon === "Contact") {
        return (
            <svg width={iconW} height={iconH} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
        )
    }

    else if (icon === "Blogs") {
        return (
            <svg fill={iconColor} width={iconW} height={iconH} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke:inejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
                </g>
            </svg>
        )
    }
}
