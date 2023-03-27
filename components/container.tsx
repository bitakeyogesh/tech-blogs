
export default function Container(props) {
    return (
        <div className="container mx-auto max-w-screen-lg px-8 py-5 xl:px-5 lg:py-8 ">
            {props.children}
        </div>
    );
}