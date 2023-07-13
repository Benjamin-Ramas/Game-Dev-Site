interface gameData {
    title: string;
    description: string;
    link: string;
    thumbnailPath: string; 
}

export default function GameTemplate(props: gameData) {
    return(
        <a href={props.link}>
            <div className="GameHolder">
                <img src={props.thumbnailPath}/>
                <h1>{props.title}</h1>
                <hr/>
                <p>{props.description}</p>
            </div>
        </a>
    )
}