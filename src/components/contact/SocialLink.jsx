import styles from "./SocialLink.module.css"

export default function SocialLink(props){
    let icon;
    const w = '32px';
    const h = '32px';
    const color = '#7E7F7C'

    if(props.id === "github"){
        icon = (
            <svg width={w} height={h} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/>
            </svg>
        )
    }
    else if(props.id === "upwork") {
        icon = (
            <svg
                width={w}
                height={h}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="3"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                    <defs>
                    <style
                        dangerouslySetInnerHTML={{
                        __html:
                            ".a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;}"
                        }}
                    />
                    </defs>
                    <path
                        className="a"
                        d="M20.0429,22.0392v6.91M12,18.3551v6.6513a4.0444,4.0444,0,0,0,4.0327,4.0328h0a4.0417,4.0417,0,0,0,4.03-4.0328V18.3551"
                    />
                    <path
                        className="a"
                        d="M22.6324,18.339s2.2214,10.655,8.54,10.4741c2.5088-.071,4.8658-1.7112,4.827-5.4049-.0323-3.4355-2.3182-5.0337-5.0207-4.7657-7.268.7232-6.7482,19.4954-6.7482,19.4954"
                    />
                    <rect className="a" x="5.5" y="5.5" width={37} height={37} rx={2} />
                </g>
            </svg>
    
        )
    }

    else if(props.id === "gmail") {
        icon = (
            <svg width={w} height={h} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/>
            </svg>
    
        )
    }
    
    else if(props.id === "discord") {
        icon = (
            <svg width={w} height={h} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"/>
                <ellipse cx="71" cy="101" fill="currentColor" rx="13" ry="15"/>
                <ellipse cx="121" cy="101" fill="currentColor"rx="13" ry="15"/>
            </svg>
        )
    }
    

    
    return(
        <a href={props.href} className={styles.iconContainer} >
            {icon}
        </a>
    )
    
    
        
}