import React, { useState, useEffect } from 'react';
import '../style/User.css'; // CSS faylini import qilish

const PersonalAccount = () => {
  const [formData, setFormData] = useState({
    familiya: '',
    ism: '',
    otchestvo: '',
    jinsi: '',
    email: '',
    ish: '',
    telefon: ''
  });

  const [image, setImage] = useState(null); // Rasm holatini saqlash

  useEffect(() => {
    const savedData = localStorage.getItem('personalAccountData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      setImage(parsedData.image || null); // Rasm ma'lumotini yuklash
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Rasmni holatga yuklaymiz
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const dataToSave = { ...formData, image }; // Rasmni ham qo'shamiz
    localStorage.setItem('personalAccountData', JSON.stringify(dataToSave));
    alert("Ma'lumotlar saqlandi!"); // Saqlanganligi haqida bildirish
  };

  return (
    <div className="personal-account">
      <div className="h1">
      <h1>Personal Account</h1>
      </div>
      {/* Rasm yuklash */}
      <div className="image-upload">
        {image ? (
          <img src={image} alt="User" className="profile-image" />
        ) : (
          <div className="default-image">Rasm yo'q</div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <form>
        <div>
          <label>Surname</label>
          <input 
            type="text" 
            name="familiya" 
            value={formData.familiya} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            name="ism" 
            value={formData.ism} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Surname</label>
          <input 
            type="text" 
            name="otchestvo" 
            value={formData.otchestvo} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Gerder</label>
          <select 
            name="jinsi" 
            value={formData.jinsi} 
            onChange={handleInputChange}>
            <option value="">Tanlang</option>
            <option value="Erkak">Erkak</option>
            <option value="Ayol">Ayol</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Work</label>
          <input 
            type="text" 
            name="ish" 
            value={formData.ish} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Phone</label>
          <input 
            type="tel" 
            name="telefon" 
            value={formData.telefon} 
            onChange={handleInputChange} 
          />
        </div>
      </form>
      {/* Saxra tugmasi */}
      <button onClick={handleSave} className="save-button">Save</button>
    </div>
  );
};

export default PersonalAccount;
