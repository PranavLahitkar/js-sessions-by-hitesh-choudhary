const fs = require('fs');

const hello = 'input.txt';
const content = 'Hello, world! This is some content written to a text file.';


createAndWriteFile(hello, content);

readFile(hello);


function createAndWriteFile(hello, content) {
    fs.writeFile(hello, content, (err) => {
        if (err) {
            console.error('Error creating file:', err);
            return;
        }
        console.log('File created and content written successfully.');
    });
}

function readFile(hello) {
    fs.readFile(hello, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}


function toupper(inputFile, outputFile) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading input file:', err);
            return;
        }
        const upperCaseContent = data.toUpperCase();
        fs.writeFile(outputFile, upperCaseContent, (err) => {
            if (err) {
                console.error('Error writing to output file:', err);
                return;
            }
            console.log('Content copied and pasted to', outputFile, 'in uppercase format.');
        });
    });
}

const inputFile = 'input.txt';
const outputFile = 'output.txt';

toupper(inputFile,outputFile);
