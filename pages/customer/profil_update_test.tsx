import React, { useState, ChangeEvent, FormEvent } from "react";
import {User, UserProps} from "./profil"

export default function EditProfilePage({users}: UserProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhone(sanitizedValue);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedPicture = e.target.files[0];
      setProfilePicture(selectedPicture);
      setPreviewImage(URL.createObjectURL(selectedPicture));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Implement form submission logic

    // Clear form fields
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setProfilePicture(null);
    setPreviewImage(null);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            accept=".png, .jpg, .jpeg"
            onChange={handlePictureChange}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Profile Preview"
              width={150}
              height={150}
            />
          )}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
