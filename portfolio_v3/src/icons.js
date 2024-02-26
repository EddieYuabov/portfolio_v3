export const NavIcon = ({className, onClick}) => {
    return(
        <svg width="50" height="50" viewBox="0 0 28 28" fill="none" className={className} onClick={onClick}>
            <rect width="28" height="28" rx="5" fill="#1A212E" fillOpacity="0.1" />
            <path d="M6 8H21.5M6 14H13.75H21.5M6 20H21.5" stroke="white" />
        </svg>       
    )
}
export const CloseNavIcon = ({ onClick, className }) => {
    return (
        <svg width="30" height="30" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M0.953125 12.4062C0.838542 12.2969 0.763021 12.1667 0.726562 12.0156C0.690104 11.8646 0.690104 11.7135 0.726562 11.5625C0.768229 11.4115 0.84375 11.2839 0.953125 11.1797L5.75 6.36719L0.953125 1.5625C0.84375 1.45833 0.770833 1.33073 0.734375 1.17969C0.697917 1.02865 0.697917 0.877604 0.734375 0.726562C0.770833 0.575521 0.84375 0.445312 0.953125 0.335938C1.06771 0.221354 1.20052 0.145833 1.35156 0.109375C1.5026 0.0729167 1.65365 0.0729167 1.80469 0.109375C1.95573 0.145833 2.08594 0.21875 2.19531 0.328125L7 5.13281L11.7969 0.328125C11.9062 0.213542 12.0365 0.140625 12.1875 0.109375C12.3385 0.0729167 12.487 0.0729167 12.6328 0.109375C12.7839 0.145833 12.9193 0.221354 13.0391 0.335938C13.1484 0.445312 13.2214 0.575521 13.2578 0.726562C13.2995 0.877604 13.2995 1.02865 13.2578 1.17969C13.2214 1.32552 13.1484 1.45573 13.0391 1.57031L8.24219 6.36719L13.0391 11.1719C13.1484 11.2865 13.2214 11.4193 13.2578 11.5703C13.2943 11.7161 13.2943 11.8646 13.2578 12.0156C13.2214 12.1667 13.1484 12.2969 13.0391 12.4062C12.9245 12.5208 12.7917 12.5964 12.6406 12.6328C12.4896 12.6693 12.3385 12.6693 12.1875 12.6328C12.0365 12.5964 11.9062 12.5234 11.7969 12.4141L7 7.60938L2.19531 12.4141C2.08594 12.5234 1.95573 12.5964 1.80469 12.6328C1.65885 12.6693 1.50781 12.6693 1.35156 12.6328C1.20052 12.5964 1.06771 12.5208 0.953125 12.4062Z" fill="#FFFFFF" fillOpacity="0.35" />
    </svg>
    )
}