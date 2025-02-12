import React from "react";

const StoreLocator = () => {
  const stores = [
    {
      id: 1,
      name: "Downtown Store",
      address: "123 Main Street, Karachi",
      timings: "Mon-Sat: 9:00 AM - 9:00 PM",
      isOpen: true,
    },
    {
      id: 2,
      name: "Mall Outlet",
      address: "Mall Road, Lahore",
      timings: "Mon-Sun: 10:00 AM - 8:00 PM",
      isOpen: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Store</h1>
      <div className="space-y-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{store.name}</h2>
              <p className="text-gray-600">{store.address}</p>
              <p className="text-gray-600">{store.timings}</p>
            </div>
            <div>
              <p
                className={`text-sm font-bold ${
                  store.isOpen ? "text-green-600" : "text-red-600"
                }`}
              >
                {store.isOpen ? "Open" : "Closed"}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  store.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocator;
