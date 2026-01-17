/**********************************************************************
 * BASIC NODE.JS STATIC FILE SERVER (NO EXPRESS)
 * -------------------------------------------------
 * This server:
 * 1. Listens for browser requests
 * 2. Converts URL → file path
 * 3. Reads file from disk
 * 4. Sends file back with correct MIME type
 **********************************************************************/

/**********************************************************************
 * Import Node.js core modules
 **********************************************************************/

// http → allows Node.js to act like a web server
// Handles requests (req) and responses (res)
const http = require("http");

// fs (File System) → used to read files from the computer
// Example: index.html, style.css, script.js
const fs = require("fs");

// path → safely builds file paths across all operating systems
// Prevents path errors on Windows / Mac / Linux
const path = require("path");

/**********************************************************************
 * Server configuration
 **********************************************************************/

// Port number where the server will listen
// Browser will access the server using:
// http://localhost:3000
const port = 3000;

/**********************************************************************
 * Create HTTP server
 **********************************************************************/

// createServer() creates the server
// This callback runs EVERY time the browser sends a request
//
// req → request object (URL, method, headers, etc.)
// res → response object (status code, headers, body)
const server = http.createServer((req, res) => {

  /********************************************************************
   * Step 1: Decide which file should be served
   ********************************************************************/

  // __dirname → absolute path of the current folder
  // req.url   → URL requested by browser
  //
  // Example requests:
  // "/"            → index.html
  // "/style.css"   → style.css
  // "/script.js"   → script.js
  //
  // path.join() safely joins folder + filename
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  /********************************************************************
   * Step 2: Detect file extension
   ********************************************************************/

  // Extract file extension from file path
  // Example:
  // "index.html" → ".html"
  // "style.css"  → ".css"
  const extName = path.extname(filePath).toLowerCase();

  /********************************************************************
   * Step 3: MIME Types (VERY IMPORTANT CONCEPT)
   ********************************************************************/

  /*
    MIME TYPE = Content-Type = tells the browser WHAT the data is

    Format:
      type / subtype

    Examples:
      text/html        → HTML webpage
      text/css         → CSS stylesheet
      text/javascript  → JavaScript code
      image/png        → PNG image

    Why not just "html" or "text"?

    ❌ "html"  → browser does not know category
    ❌ "text"  → browser does not know format

    ✅ "text/html" →
       - text  → readable characters
       - html  → follows HTML rules, so render it as a webpage

    Browser behavior depends ENTIRELY on MIME type
  */

  // Map file extensions to correct MIME types
  let mimeTypes = {
    ".html": "text/html",         // Render as web page
    ".css": "text/css",           // Apply styles
    ".js": "text/javascript",     // Execute JavaScript
    ".png": "image/png",          // Display image
  };

  // Choose MIME type based on file extension
  // If extension is unknown, use generic binary type
  const contentType =
    mimeTypes[extName] || "application/octet-stream";

  /*
    application/octet-stream means:
    "This is raw binary data. Do not try to interpret it."

    Used as a safe fallback for unknown files
  */

  /********************************************************************
   * Step 4: Read file from disk
   ********************************************************************/

  // fs.readFile() reads the file asynchronously
  // Node.js continues running without blocking
  fs.readFile(filePath, (err, content) => {

    /******************************************************************
     * Step 5: Handle errors
     ******************************************************************/

    if (err) {

      // ENOENT → file does not exist
      if (err.code === "ENOENT") {

        // HTTP 404 → Not Found
        res.writeHead(404, {
          "Content-Type": "text/html",
        });

        // Send response body and end the response
        res.end("404: File not found");
      }

      // Any other server error
      else {

        // HTTP 500 → Internal Server Error
        res.writeHead(500);

        // Send error code for debugging
        res.end(`Server Error: ${err.code}`);
      }
    }

    /******************************************************************
     * Step 6: Send successful response
     ******************************************************************/

    else {

      // HTTP 200 → OK (request successful)
      res.writeHead(200, {
        "Content-Type": contentType,
      });

      /*
        Why Content-Type matters here:

        - text/html        → browser renders page
        - text/css         → browser applies styling
        - text/javascript  → browser executes code
        - image/png        → browser displays image
      */

      // Send file content to browser and finish response
      res.end(content, "utf8");
    }
  });
});

/**********************************************************************
 * Start the server
 **********************************************************************/

// server.listen() starts listening for requests
// Callback runs once when server starts successfully
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
