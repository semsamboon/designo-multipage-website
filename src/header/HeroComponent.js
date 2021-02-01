import Button from "../sharedComponents/ButtonComponent"
const HeroComponent = (props) => {
    return (
        <>
            <div className="hero">
                <h2 className="hero__title">{props.title}</h2>
                <p className="hero__summary">
                    {props.summary}
                </p>
                {/* <button className="hero__btn">
                    Learn more
    </button> */}
                <Button title="Learn more" label="Find out more about our services." />
            </div>
            <div className="hero__imageDisplay"></div>
        </>
    )
}
export default HeroComponent