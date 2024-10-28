function ValueCard({ icon, title, description }) {
    return (
        <div className="w-full">
            <img src={icon} />
            <h3 className="text-2xl pt-6 pb-3">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
}

export default ValueCard;
