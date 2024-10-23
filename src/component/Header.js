import React, { useEffect, useState } from 'react'; // useState qo'shildi
import { Link } from 'react-router-dom'; // React Router'dan Link komponenti
import '../style/Header.css'; // CSS faylingiz

const Header = () => {
  const [image, setImage] = useState(null); // Rasm holatini saqlash
  const [familiya, setFamiliya] = useState(''); // Familiya holatini saqlash
  const [ism, setIsm] = useState(''); // Ism holatini saqlash

  useEffect(() => {
    const savedData = localStorage.getItem('personalAccountData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setImage(parsedData.image || null); // Rasm ma'lumotini yuklash
      setFamiliya(parsedData.familiya || ''); // Familiya ma'lumotini yuklash
      setIsm(parsedData.ism || ''); // Ism ma'lumotini yuklash
    }
  }, []);

  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/"><span>Home</span></Link></li>
          <li><Link to="/pictures">Pictures & Videos</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/documents">Documents</Link></li>
          <li><Link to="/personal-account">Personal Account</Link></li>
        </ul>
      </nav>
      <div className="user-info">
        {/* Foydalanuvchi rasm, familiya va ismni ko'rsatish */}
       <span className="user-name">{`${familiya} ${ism}`}</span> {/* Familiya va ism */}
        {image && <img src={image} alt="User" className="header-profile-image" />}
      </div>
    </header>
  );
}

export default Header;
