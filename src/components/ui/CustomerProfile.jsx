import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerData }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (customerData?.id) {
      setLoading(true);
      fetch(`https://cyf-react.glitch.me/customers/${customerData.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProfileData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching customer profile:", error);
          setLoading(false);
        });
    }
  }, [customerData?.id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div className="spinner"></div>
        <p>Loading customer profile...</p>
      </div>
    );
  }

  if (!profileData && !customerData) {
    return null;
  }

  const data = profileData || customerData;

  return (
    <div className="customer-profile-container">
      <h3>Customer Profile</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem' 
      }}>
        <div>
          <strong>Customer ID:</strong> <span>{data.id}</span>
        </div>
        <div>
          <strong>Name:</strong> <span>{data.title} {data.firstName} {data.surname}</span>
        </div>
        <div>
          <strong>Email:</strong> <span>{data.email}</span>
        </div>
        {data.phoneNumber && (
          <div>
            <strong>Phone:</strong> <span>{data.phoneNumber}</span>
          </div>
        )}
        {data.vip !== undefined && (
          <div>
            <strong>VIP:</strong> <span>{data.vip ? "Yes" : "No"}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
