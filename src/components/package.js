import './package.css';

const Package = () => {
    const packages = [
        {
            name: "Deluxe Package",
            image: "./pack2.png",
            price: "$1200",
            description: "A luxurious getaway with premium accommodations.",
            features: ["5-star hotels", "All meals included", "Guided tours"]
        },
        {
            name: "Standard Package",
            image: "./pack3.png",
            price: "$800",
            description: "A comfortable stay with essential amenities.",
            features: ["3-star hotels", "Breakfast included", "City tours"]
        },
        {
            name: "Budget Package",
            image: "pack1.png",
            price: "$500",
            description: "An affordable travel option with basic facilities.",
            features: ["Hostel stay", "Public transport pass", "Self-guided tours"]
        }
    ];

    return (
        <div className="container">
            {packages.map((pkg, index) => (
                <div key={index} className="package-card">
                    <img src={pkg.image} alt={pkg.name} />
                    <h2>{pkg.name}</h2>
                    <p className="price">{pkg.price}</p>
                    <p>{pkg.description}</p>
                    <ul>
                        {pkg.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <button>Explore Package</button>
                </div>
            ))}
        </div>
    );
};

export default Package;
