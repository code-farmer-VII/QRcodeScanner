// import React, { useRef, useMemo } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function HomePage() {
//   const bottomSheetRef = useRef(null);

//   // Memoized snap points for the Bottom Sheet positions
//   const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

//   const handleOpenSheet = () => {
//     bottomSheetRef.current.expand();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={handleOpenSheet}>
//         <Text style={styles.buttonText}>Open Bottom Sheet</Text>
//       </TouchableOpacity>

//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={snapPoints}
//         enablePanDownToClose={true}
//         backgroundStyle={styles.sheetBackground}
//       >
//         <View style={styles.contentContainer}>
//           <Text style={styles.contentText}>This is the Bottom Sheet Content</Text>
//           <Text style={styles.contentText}>Drag me up or down!</Text>
//         </View>
//       </BottomSheet>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//   },
//   button: {
//     padding: 15,
//     backgroundColor: '#3498db',
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   sheetBackground: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 20,
//   },
//   contentText: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
// });

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const BottomSheet = ({ visible, onClose }) => {

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-end'>
        <View className='bg-white rounded-t-lg p-4 shadow-lg'>
        <View className="justify-center items-center p-4 rounded-lg">
            <Text className="text-2xl font-bold mb-4">File Upload Requirements</Text>
            <Text className="text-base mb-1">The file must be an Excel (.xl) file.</Text>
            <Text className="text-base mb-1">The following columns are mandatory:</Text>
            <Text className="text-base mb-1">- ID</Text>
            <Text className="text-base mb-1">- name</Text>
            <Text className="text-base mb-1">- collage</Text>
            <Text className="text-base mb-1">- department</Text>
            <Text className="text-base mb-1">- Section</Text>
            <Text className="text-base mb-1">- qr code</Text>
            <TouchableOpacity onPress={onClose} className="bg-blue-600 py-4 px-6 rounded-lg mt-8">
              <Text className="text-white">Okay</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className='mt-4 bg-blue-500 p-2 rounded'
          >
            <Text className='text-white text-center'>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className='flex-1 items-center justify-center'>
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        className='bg-blue-500 p-4 rounded'
      >
        <Text className='text-white text-lg'>Show Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet visible={isVisible} onClose={() => setIsVisible(false)} />
    </View>
  );
};

export default App;

