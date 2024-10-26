import React, { createContext, useState } from 'react';

// Create the Authentication Context
const AttendanceContext = createContext();

// Create the Authentication Provider
const AttendanceProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [fileUri, setFileUri] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [mimeType, setMimeType] = useState(null);
    const [fileSize, setFileSize] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };


  return (
    <AttendanceContext.Provider value={{  isModalVisible, setModalVisible, toggleModal,
     data, setData, fileUri, setFileUri, fileName, setFileName, mimeType, setMimeType, fileSize, setFileSize
     }}>
      {children}
    </AttendanceContext.Provider>
  );
};

// Export the AttendanceProvider and AttendanceContext
export { AttendanceProvider, AttendanceContext };
