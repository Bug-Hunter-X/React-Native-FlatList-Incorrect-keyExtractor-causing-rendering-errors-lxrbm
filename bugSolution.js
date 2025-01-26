The solution is to correct the keyExtractor function within the FlatList component. The keyExtractor function should return a unique identifier for each item in the data array.  Here's the corrected code:

```javascript
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState([{
    id: 1,
    name: 'Item 1'
  }, {
    id: 2,
    name: 'Item 2'
  }]);

  useEffect(() => {
    setTimeout(() => {
      setData([...data, { id: 3, name: 'Item 3' }]);
    }, 3000);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      // Correct keyExtractor
      keyExtractor={(item) => item.id.toString()} 
    />
  );
};

export default App; 
```

By using `item.id.toString()`, we ensure each item has a unique key, solving the rendering problems.