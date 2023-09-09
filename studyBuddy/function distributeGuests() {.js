function distributeGuests() {
    // Get the number of guests and tables as input
    const numberOfGuests = parseInt(prompt("Enter the number of guests:"));
    const numberOfTables = parseInt(prompt("Enter the number of tables:"));
  
    // Calculate the number of guests per table
    const guestsPerTable = Math.floor(numberOfGuests / numberOfTables);
  
    // Calculate any remaining guests that couldn't be evenly distributed
    const remainingGuests = numberOfGuests % numberOfTables;
  
    // Initialize variables to count tables with different numbers of guests
    let tablesWithGuestsPerTable = 0;
    let tablesWithGuestsPerTablePlusOne = 0;
  
    // Distribute guests evenly among tables
    for (let i = 0; i < numberOfTables; i++) {
      if (i < remainingGuests) {
        tablesWithGuestsPerTablePlusOne++;
      } else {
        tablesWithGuestsPerTable++;
      }
    }
  
    // Output the result in the desired format
    console.log(`Tables of ${guestsPerTable} guests: ${tablesWithGuestsPerTable} tables`);
    if (tablesWithGuestsPerTablePlusOne > 0) {
      console.log(`Tables of ${guestsPerTable + 1} guests: ${tablesWithGuestsPerTablePlusOne} tables`);
    }
  }
  
  // Call the function to distribute guests
  distributeGuests();
  