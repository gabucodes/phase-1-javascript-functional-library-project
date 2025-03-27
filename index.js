// Collection Functions (work with arrays or objects)

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i], Object.keys(collection)[i], collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        result.push(callback(collection[keys[i]], keys[i], collection));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? [...collection] : Object.values(collection);
    let startIdx = 0;
    
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
    
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        if (predicate(collection[keys[i]], keys[i], collection)) {
          return collection[keys[i]];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        if (predicate(collection[keys[i]], keys[i], collection)) {
          result.push(collection[keys[i]]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  // Array Functions
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  // Additional Object Functions

function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
    return Object.keys(object);
  }
  
  function myValues(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
    return Object.values(object);
  }