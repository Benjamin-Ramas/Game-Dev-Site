
export default function SectionTitle(props:{title:string}){
    return(
        <div className="sectionTitle">
            <hr/>
            <h1>{props.title}</h1>
        </div>
    )
}