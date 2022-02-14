import './SassComponent.scss'

const SassComponent = () => {
    console.log("here is SassComponent");
    return (
        <div className="SassComponent">
            <div className="box red"/>
            <div className="box orange"/>
            <div className="box yellow"/>
        </div>
    );
}


export default SassComponent;