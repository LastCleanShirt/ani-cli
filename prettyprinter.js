module.exports = (left, right) => {
    process.stdout.write(left);

    // Get the terminal width
    const terminalWidth = process.stdout.columns;
    
    // Calculate the position to print the text at the right edge
    const position = terminalWidth - right.length;
    
    // Print spaces to move the cursor to the right edge
    process.stdout.write(' '.repeat(position-left.length));
    
    // Print the text at the right edge
    process.stdout.write(right);
    
    // Move the cursor to the next line
    process.stdout.write('\n');

}