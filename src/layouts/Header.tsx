function HeaderLeftSide(){
    return (
        <>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="-0.757812" y="19.2422" width="28" height="4" rx="2" transform="rotate(-45 -0.757812 19.2422)" fill="#0048B3"/>
                    <rect x="7.72656" y="27.7266" width="28" height="4" rx="2" transform="rotate(-45 7.72656 27.7266)" fill="#0048B3"/>
                    <rect x="10.5352" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5352 16.3945)" fill="#0048B3"/>
                    <rect x="10.5566" y="-0.554688" width="28" height="4" rx="2" transform="rotate(45 10.5566 -0.554688)" fill="#0048B3"/>
                </svg>
                Admin
            </div>
            <div className="navigation">
                <div className="user">
                    <div className="UserPhoto">В</div>
                    <div className="info">
                        <span className="name">Владислав Шафиков</span>
                        <span className="role">Администратор</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLeftSide 