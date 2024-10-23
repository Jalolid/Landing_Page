import React, { useState, useEffect } from 'react';
import '../style/Document.css'; // CSS fayl

const Documents = () => {
  // localStorage-dan hujjatlarni olish
  const [documents, setDocuments] = useState(() => {
    const savedDocuments = localStorage.getItem('documents');
    return savedDocuments ? JSON.parse(savedDocuments) : [];
  });

  // Har safar hujjatlar o'zgarganda, localStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  // Fayl tanlash funksiyasi
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Bir nechta fayl olish
    const newDocuments = selectedFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));
    setDocuments([...documents, ...newDocuments]);
  };

  // Faylni o'chirish funksiyasi
  const deleteDocument = (index) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setDocuments(newDocuments);
  };

  // Faylni ochish funksiyasi
  const openDocument = (file) => {
    const fileURL = URL.createObjectURL(file); // Faylga URL yaratish
    window.open(fileURL); // Faylni yangi oynada ochish
  };

  return (
    <div className="documents-container">
      <h1 className="title">Documents & Books</h1>
      <div className="file-input">
        <input
          type="file"
          onChange={handleFileChange}
          multiple // Bir nechta fayl tanlashga imkon beradi
        />
      </div>

      <ul className="document-list">
        {documents.length === 0 && <p>No documents or books yet. Add some!</p>}
        {documents.map((doc, index) => (
          <li key={index} className="document-item">
            <div onClick={() => openDocument(doc.file)} className="document-link">
              <span>{doc.name} ({(doc.size / 1024).toFixed(2)} KB)</span>
              <small>{doc.type}</small>
            </div>
            <button onClick={() => deleteDocument(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Documents;
