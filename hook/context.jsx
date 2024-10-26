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
    const [section, setSection] = useState(null);
    const [courseCode, setCourseCode] = useState(null);
    const [isInputModal, setInputModal] = useState(false);
    // Add more state variables as needed...
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      const toggleInputModal = () => {
        setInputModal(!isInputModal);
    }


  return (
    <AttendanceContext.Provider value={{  isModalVisible, setModalVisible, toggleModal,
     data, setData, fileUri, setFileUri, fileName, setFileName, mimeType, setMimeType, fileSize, setFileSize,
     isInputModal, toggleInputModal, section, setSection, courseCode, setCourseCode 

     }}>
      {children}
    </AttendanceContext.Provider>
  );
};

// Export the AttendanceProvider and AttendanceContext
export { AttendanceProvider, AttendanceContext };
